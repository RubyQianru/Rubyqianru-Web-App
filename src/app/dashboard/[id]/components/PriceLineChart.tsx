/* eslint-disable */
"use client";
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

interface DataPoint {
  Date: Date;
  Close: number;
}

const PriceLineChart = ({ data }: { data: DataPoint[] }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !data.length) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear existing content

    // Chart dimensions and margins
    const width = 928;
    const height = 500;
    const marginTop = 20;
    const marginRight = 30;
    const marginBottom = 30;
    const marginLeft = 40;

    // Scales
    const x = d3.scaleUtc(d3.extent(data, (d) => d.Date) as [Date, Date], [
      marginLeft,
      width - marginRight,
    ]);
    const y = d3.scaleLinear(
      [0, d3.max(data, (d) => d.Close) as number],
      [height - marginBottom, marginTop]
    );

    // Line generator
    const line = d3
      .line<DataPoint>()
      .x((d) => x(d.Date))
      .y((d) => y(d.Close));

    // Set up SVG
    svg
      .attr("viewBox", [0, 0, width, height])
      .attr("width", width)
      .attr("height", height)
      .style("max-width", "100%")
      .style("height", "auto")
      .style("font", "10px sans-serif")
      .style("-webkit-tap-highlight-color", "transparent")
      .style("overflow", "visible");

    // Add x-axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(width / 80)
          .tickSizeOuter(0)
      );

    // Add y-axis
    svg
      .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).ticks(height / 40))
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll(".tick line")
          .clone()
          .attr("x2", width - marginLeft - marginRight)
          .attr("stroke-opacity", 0.1)
      )
      .call((g) =>
        g
          .append("text")
          .attr("x", -marginLeft)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text("↑ Daily Close ($)")
      );

    // Add line path
    svg
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line(data));

    // Tooltip setup
    const tooltip = svg.append("g");

    const formatValue = (value: number) =>
      value.toLocaleString("en", {
        style: "currency",
        currency: "USD",
      });

    const formatDate = (date: Date) =>
      date.toLocaleString("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      });

    const bisect = d3.bisector<DataPoint, Date>((d) => d.Date).center;

    const pointermoved = (event: PointerEvent) => {
      const i = bisect(data, x.invert(d3.pointer(event)[0]));
      tooltip.style("display", null);
      tooltip.attr(
        "transform",
        `translate(${x(data[i].Date)},${y(data[i].Close)})`
      );

      const path = tooltip
        .selectAll("path")
        .data([null])
        .join("path")
        .attr("fill", "white")
        .attr("stroke", "black");

      const text = tooltip
        .selectAll("text")
        .data([null])
        .join("text")
        .call((text) =>
          text
            .selectAll("tspan")
            .data([formatDate(data[i].Date), formatValue(data[i].Close)])
            .join("tspan")
            .attr("x", 0)
            .attr("y", (_, i) => `${i * 1.1}em`)
            .attr("font-weight", (_, i) => (i ? null : "bold"))
            .text((d) => d)
        );

      const {
        x: tx,
        y: ty,
        width: tw,
        height: th,
      } = (text.node() as SVGTextElement).getBBox();
      text.attr("transform", `translate(${-tw / 2},${15 - ty})`);
      path.attr(
        "d",
        `M${-tw / 2 - 10},5H-5l5,-5l5,5H${tw / 2 + 10}v${th + 20}h-${tw + 20}z`
      );
    };

    const pointerleft = () => {
      tooltip.style("display", "none");
    };

    svg
      .on("pointerenter pointermove", pointermoved)
      .on("pointerleave", pointerleft)
      .on("touchstart", (event: TouchEvent) => event.preventDefault());
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default PriceLineChart;

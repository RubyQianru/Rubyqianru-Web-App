/* eslint-disable */
"use client";
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import { formatToDollarPrice } from "@/app/utils/price";
import useWindowDimensions from "@/app/utils/window";

interface TreeNode {
  name: string;
  children: TreeNode[] | LeaveNode[];
}

interface LeaveNode {
  name: string;
  value: number;
}

const TreeMap = ({
  data,
  colorData,
}: {
  data: TreeNode;
  colorData: LeaveNode[];
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { width, height } = useWindowDimensions();

  const mapWidth = Math.min(width * 0.8, 1250);
  const mapHeight = Math.min(height * 0.6, 400);

  useEffect(() => {
    if (!svgRef.current || !data) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Color scale
    const colorScale = d3
      .scaleLinear<string>()
      .domain([
        d3.min(colorData, (d) => d.value)!,
        0,
        d3.max(colorData, (d) => d.value)!,
      ])
      .range(["red", "white", "green"])
      .clamp(true);

    const color = (name: string) => {
      const item = colorData.find((d) => d.name === name);
      return item ? colorScale(item.value) : "#ccc"; // Default color if name not found
    };

    // Text size scale
    const sizeData = data.children as LeaveNode[];

    const fontSizeScale = d3
      .scaleLinear()
      .domain([
        d3.min(sizeData, (d) => Math.abs(d.value))!,
        d3.max(sizeData, (d) => Math.abs(d.value))!,
      ])
      .range([10, 24]);

    const fontSize = (name: string) => {
      const item = sizeData.find((d) => d.name === name);
      return item ? `${fontSizeScale(Math.abs(item.value))}px` : "12px"; // Default font size if name not found
    };

    const root = d3
      .hierarchy(data)
      .sum((d) => (d as any).value)
      .sort((a, b) => (b.value || 0) - (a.value || 0));

    const treemapLayout = d3
      .treemap<any>()
      .size([mapWidth, mapHeight])
      .padding(1);
    treemapLayout(root);

    const nodes = svg
      .selectAll("g")
      .data(root.leaves())
      .enter()
      .append("g")
      .attr("transform", (d: any) => `translate(${d.x0},${d.y0})`);

    const format = d3.format(",d");
    nodes.append("title").text(
      (d: any) =>
        `${d
          .ancestors()
          .reverse()
          .map((d: any) => d.data.name)
          .join(".")}\n${format(d.value)}`
    );

    nodes
      .append("rect")
      .attr("fill", (d) => color(d.data.name))
      .attr("width", (d: any) => d.x1 - d.x0)
      .attr("height", (d: any) => d.y1 - d.y0);

    // Append multiline text. The last line shows the value and has a specific formatting.
    nodes
      .append("text")
      .attr("font-size", (d) => fontSize(d.data.name))
      .selectAll("tspan")
      .data((d: any) =>
        d.data.name
          .split(/(?=[A-Z][a-z])|\s+/g)
          .concat(formatToDollarPrice(d.value))
      )
      .join("tspan")
      .attr("x", 3)
      .attr("y", (d, i, nodes) => `${0.3 + 1.1 + i * 0.9}em`)
      .attr("fill-opacity", (d, i, nodes) =>
        i === nodes.length - 1 ? 0.7 : null
      )
      .text((d: any) => d);
  }, [data, mapWidth, mapHeight]);

  return <svg ref={svgRef} width={mapWidth} height={mapHeight}></svg>;
};

export default TreeMap;

import getReport from "@/apis/report";

export async function getReportData(symbol: string, day: string) {
  try {
    const res = await getReport(symbol, day);
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
}

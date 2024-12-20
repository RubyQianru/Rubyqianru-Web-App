import { reportdb, username, password } from "@/config/config";

export default async function getReports(symbol: string, day: string) {
  try {
    const data = await fetch(`${reportdb}?symbol=${symbol}&days=${day}`, {
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password),
      },
      cache: "no-store",
    });
    const res = await data.json();
    return res;
  } catch (error) {
    console.error(error);
  }
}

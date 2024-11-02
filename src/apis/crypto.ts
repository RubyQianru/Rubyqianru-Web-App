import { cryptodb, username, password } from "@/config/config";

export async function getAllPrices(symbol: string) {
  try {
    const data = await fetch(`${cryptodb}?symbol=${symbol}`, {
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

export async function getPricesByDay(day: string, symbol: string) {
  try {
    const data = await fetch(`${cryptodb}days?symbol=${symbol}&days=${day}`, {
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

import { getAllPrices, getPricesByDay } from "@/apis/crypto";

export async function getCryptoData(symbol: string) {
  try {
    const res = await getAllPrices(symbol);
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getCryptoDataByDay(day: string, symbol: string) {
  try {
    const res = await getPricesByDay(day, symbol);
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
}

import { getPricesByDay } from "@/apis/crypto";

export async function getCryptoDataByDay(symbol: string, day: string) {
  try {
    const res = await getPricesByDay(day, symbol);
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
}

import { getCoinList } from "@/apis/crypto";

export async function getCryptoList() {
  try {
    const res = await getCoinList();
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
}

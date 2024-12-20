import getTwitter from "@/apis/twitter";

export async function getTwitterData(symbol: string, day: string) {
  try {
    const res = await getTwitter(symbol, day);
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
}

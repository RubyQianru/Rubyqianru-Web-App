import getCrypto from "@/apis/crypto";

export async function getCryptoData() {
  try {
    const res = await getCrypto();
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
}

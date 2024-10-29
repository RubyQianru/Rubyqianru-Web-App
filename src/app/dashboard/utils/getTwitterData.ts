import getTwitter from "@/apis/twitter";

export async function getTwitterData() {
  try {
    const res = await getTwitter();
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
}

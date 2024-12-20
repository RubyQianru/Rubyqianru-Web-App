import { twitterdb, username, password } from "@/config/config";

export default async function getTwitters(symbol: string, day: string) {
  try {
    const data = await fetch(`${twitterdb}?symbol=${symbol}&days=${day}`, {
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password),
      },
    });
    const res = await data.json();
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
}

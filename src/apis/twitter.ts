import { twitterdb, username, password } from "@/config/config";

export default async function getTwitters() {
  try {
    const data = await fetch(twitterdb, {
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password),
      },
      cache: "no-store",
    });
    const res = await data.json();
    // console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
}

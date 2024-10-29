import { cryptodb, username, password } from "@/config/config";

export default async function getCrypto() {
  try {
    const data = await fetch(cryptodb, {
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password),
      },
    });
    const res = await data.json();
    return res;
  } catch (error) {
    console.error(error);
  }
}

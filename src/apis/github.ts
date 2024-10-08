import { githubdb, username, password } from "@/config/config";

export default async function getGithub() {
  try {
    const data = await fetch(githubdb, {
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password),
      },
    });
    const res = await data.json();
    console.log("data fetched:", res);
    return res;
  } catch (error) {
    console.error(error);
  }
}

import { jobdb, username, password } from "@/config/config";

export default async function getJobs() {
  try {
    const data = await fetch(jobdb, {
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

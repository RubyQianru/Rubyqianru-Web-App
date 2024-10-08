import getGithub from "@/apis/github";

export async function getGithubData() {
  try {
    const res = await getGithub();
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
}

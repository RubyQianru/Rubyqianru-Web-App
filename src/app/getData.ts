import getJobs from "@/apis/jobs";

export async function getData() {
  try {
    const res = await getJobs();
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
}

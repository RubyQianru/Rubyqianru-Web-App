import getJobs from "@/apis/jobs";

export async function getJobData() {
  try {
    const res = await getJobs();
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
}

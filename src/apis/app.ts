export async function getData() {
  const res = await fetch("http://192.81.208.56/api/v1/jobs/");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

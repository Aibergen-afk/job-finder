const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchRemoteJobs = () =>
  fetch(`${BASE_URL}/posts?_limit=5`).then((res) => res.json());

export const createJob = (job) =>
  fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job),
  }).then((res) => res.json());

export const updateJob = (id, job) =>
  fetch(`${BASE_URL}/posts/1`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job),
  }).then((res) => res.json());

export const deleteJob = (id) =>
  fetch(`${BASE_URL}/posts/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );

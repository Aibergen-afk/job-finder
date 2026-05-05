import { useJobs } from "../context/JobsContext";

function Footer() {
  const { jobs } = useJobs();
  const totalJobs = jobs.length;
  const itJobsCount = jobs.filter((j) => j.category === "IT").length;

  return (
    <footer>
      <p>Total jobs: {totalJobs}</p>
      <p>IT jobs: {itJobsCount}</p>
    </footer>
  );
}

export default Footer;

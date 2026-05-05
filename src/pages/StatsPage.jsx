import { useMemo } from "react";
import { useJobs } from "../context/JobsContext";

function StatsPage() {
  const { jobs } = useJobs();

  const stats = useMemo(
    () => ({
      total: jobs.length,
      it: jobs.filter((j) => j.category === "IT").length,
      design: jobs.filter((j) => j.category === "Design").length,
      marketing: jobs.filter((j) => j.category === "Marketing").length,
    }),
    [jobs]
  );

  return (
    <div className="stats-page">
      <h2>Statistics</h2>
      <ul>
        <li>Total jobs: {stats.total}</li>
        <li>IT jobs: {stats.it}</li>
        <li>Design jobs: {stats.design}</li>
        <li>Marketing jobs: {stats.marketing}</li>
      </ul>
    </div>
  );
}

export default StatsPage;

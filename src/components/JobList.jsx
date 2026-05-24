import { memo } from "react";
import JobCard from "./JobCard";
import { useJobs } from "../context/JobsContext";

const JobList = memo(function JobList({ jobs, deleteJob }) {
  const { loading } = useJobs();

  return (
    <div className="job-list">
      <h2>Jobs</h2>
      {loading && <div className="spinner" />}
      {!loading && jobs.length === 0 && <p>No jobs found</p>}
      {!loading &&
        jobs.map((job) => (
          <JobCard key={job.id} job={job} deleteJob={deleteJob} />
        ))}
    </div>
  );
});

export default JobList;

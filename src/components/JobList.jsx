import JobCard from "./JobCard";

function JobList({ jobs, deleteJob }) {
  return (
    <div className="job-list">
      <h2>Jobs</h2>

      {jobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        jobs.map((job) => (
          <JobCard key={job.id} job={job} deleteJob={deleteJob} />
        ))
      )}
    </div>
  );
}

export default JobList;
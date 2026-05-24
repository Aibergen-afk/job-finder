import { memo } from "react";
import { Link } from "react-router-dom";

const JobCard = memo(function JobCard({ job, deleteJob }) {
  const { id, title, company, category, salary } = job;

  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>{company}</p>
      <span className="badge">{category}</span>
      <p className="salary">{salary}</p>
      <div className="job-card-actions">
        <Link to={`/jobs/${id}`}>View Details</Link>
        <button onClick={() => deleteJob(id)}>Delete</button>
      </div>
    </div>
  );
});

export default JobCard;

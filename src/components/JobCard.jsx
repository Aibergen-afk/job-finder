function JobCard({ job, deleteJob }) {
  const { id, title, company, category, salary } = job;

  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>{company}</p>

      <span className="badge">{category}</span>

      <p className="salary">{salary}</p>

      <button onClick={() => deleteJob(id)}>Delete</button>
    </div>
  );
}

export default JobCard;
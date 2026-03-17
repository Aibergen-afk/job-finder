function JobCard({ job, deleteJob }) {
  const { id, title, company, category, salary } = job;

  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Salary:</strong> {salary}</p>

      <button onClick={() => deleteJob(id)}>Delete</button>
    </div>
  );
}

export default JobCard;
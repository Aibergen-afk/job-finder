import { useParams, Link, useNavigate } from "react-router-dom";
import { useJobs } from "../context/JobsContext";

function JobDetailPage() {
  const { id } = useParams();
  const { jobs, deleteJob } = useJobs();
  const navigate = useNavigate();
  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="job-detail">
        <p>Job not found.</p>
        <Link to="/jobs">Back to jobs</Link>
      </div>
    );
  }

  const handleDelete = () => {
    deleteJob(job.id);
    navigate("/jobs");
  };

  return (
    <div className="job-detail">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Category:</strong> {job.category}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <div className="job-detail-actions">
        <Link to={`/jobs/${job.id}/edit`} className="btn-edit">Edit</Link>
        <button onClick={handleDelete} className="btn-delete">Delete</button>
        <Link to="/jobs">Back to Jobs</Link>
      </div>
    </div>
  );
}

export default JobDetailPage;

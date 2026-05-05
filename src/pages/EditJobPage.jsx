import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useJobs } from "../context/JobsContext";
import { formatSalary } from "../utils/helpers";

function EditJobPage() {
  const { id } = useParams();
  const { jobs, updateJob } = useJobs();
  const navigate = useNavigate();

  const job = jobs.find((j) => j.id === Number(id));

  const [title, setTitle] = useState(job?.title || "");
  const [company, setCompany] = useState(job?.company || "");
  const [category, setCategory] = useState(job?.category || "IT");
  const [salary, setSalary] = useState(job?.salary || "");
  const [errors, setErrors] = useState({});

  if (!job) {
    return (
      <div className="job-detail">
        <p>Job not found.</p>
        <button onClick={() => navigate("/jobs")}>Back to Jobs</button>
      </div>
    );
  }

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!company.trim()) newErrors.company = "Company is required";
    if (!salary.trim()) newErrors.salary = "Salary is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    await updateJob(Number(id), { title, company, category, salary: formatSalary(salary) });
    navigate(`/jobs/${id}`);
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <h2>Edit Job</h2>

      <input
        type="text"
        placeholder="Job title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {errors.title && <p className="error-msg">{errors.title}</p>}

      <input
        type="text"
        placeholder="Company name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      {errors.company && <p className="error-msg">{errors.company}</p>}

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="IT">IT</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
      </select>

      <input
        type="text"
        placeholder="Salary (e.g. 2000)"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      {errors.salary && <p className="error-msg">{errors.salary}</p>}

      <div className="form-actions">
        <button type="submit">Save Changes</button>
        <button type="button" className="btn-cancel" onClick={() => navigate(`/jobs/${id}`)}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditJobPage;

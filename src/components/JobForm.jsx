import { useState } from "react";
import { formatSalary } from "../utils/helpers";

function JobForm({ addJob }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("IT");
  const [salary, setSalary] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

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
    setErrors({});
    await addJob({ title, company, category, salary: formatSalary(salary) });
    setTitle("");
    setCompany("");
    setCategory("IT");
    setSalary("");
    setSuccess(true);
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <h2>Add New Job</h2>
      {success && (
        <p className="success-msg">
          Job added! <a href="/jobs">View all jobs →</a>
        </p>
      )}

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

      <button type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;

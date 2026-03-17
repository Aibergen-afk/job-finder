import { useState } from "react";

function JobForm({ addJob }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("IT");
  const [salary, setSalary] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !company.trim() || !salary.trim()) {
      alert("Please fill all fields");
      return;
    }

    const newJob = {
      id: Date.now(),
      title,
      company,
      category,
      salary,
    };

    addJob(newJob);

    setTitle("");
    setCompany("");
    setCategory("IT");
    setSalary("");
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <h2>Add New Job</h2>

      <input
        type="text"
        placeholder="Job title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="text"
        placeholder="Company name"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="IT">IT</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
      </select>

      <input
        type="text"
        placeholder="Salary"
        value={salary}
        onChange={(event) => setSalary(event.target.value)}
      />

      <button type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;
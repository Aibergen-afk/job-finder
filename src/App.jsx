import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterPanel from "./components/FilterPanel";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import Footer from "./components/Footer";

function App() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || job.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const totalJobs = jobs.length;

  const itJobsCount = jobs.reduce((count, job) => {
    return job.category === "IT" ? count + 1 : count;
  }, 0);

  return (
  <div className="app">
    <Header />

    <div className="container">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <FilterPanel
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <JobForm addJob={addJob} />

      <JobList jobs={filteredJobs} deleteJob={deleteJob} />

      <Footer totalJobs={totalJobs} itJobsCount={itJobsCount} />
    </div>
  </div>
);
}

export default App;
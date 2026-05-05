import { useState, useMemo, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { useJobs } from "../context/JobsContext";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import JobList from "../components/JobList";

function JobsPage() {
  const { jobs, deleteJob } = useJobs();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredJobs = useMemo(
    () =>
      jobs.filter((job) => {
        const matchesSearch = job.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesCategory =
          selectedCategory === "All" || job.category === selectedCategory;
        return matchesSearch && matchesCategory;
      }),
    [jobs, searchTerm, selectedCategory]
  );

  const handleDelete = useCallback((id) => deleteJob(id), [deleteJob]);

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterPanel
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <JobList jobs={filteredJobs} deleteJob={handleDelete} />
      <Outlet />
    </div>
  );
}

export default JobsPage;

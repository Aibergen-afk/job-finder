import { useNavigate } from "react-router-dom";
import { useJobs } from "../context/JobsContext";
import JobForm from "../components/JobForm";

function AddJobPage() {
  const { addJob } = useJobs();
  const navigate = useNavigate();

  const handleAddJob = async (job) => {
    await addJob(job);
    setTimeout(() => navigate("/jobs"), 1500);
  };

  return (
    <div>
      <JobForm addJob={handleAddJob} />
    </div>
  );
}

export default AddJobPage;

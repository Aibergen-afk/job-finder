import { createContext, useContext, useReducer, useEffect, useCallback } from "react";
import { createJob, updateJob as updateJobService, deleteJob } from "../services/jobsService";
import { generateId } from "../utils/helpers";

const JobsContext = createContext();

function jobsReducer(state, action) {
  switch (action.type) {
    case "ADD_JOB":
      return { ...state, jobs: [...state.jobs, action.payload], loading: false };
    case "UPDATE_JOB":
      return {
        ...state,
        jobs: state.jobs.map((j) => (j.id === action.payload.id ? action.payload : j)),
        loading: false,
      };
    case "DELETE_JOB":
      return { ...state, jobs: state.jobs.filter((j) => j.id !== action.payload), loading: false };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export function JobsProvider({ children }) {
  const [state, dispatch] = useReducer(jobsReducer, {
    jobs: JSON.parse(localStorage.getItem("jobs") || "[]"),
    loading: false,
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(state.jobs));
  }, [state.jobs]);

  const addJob = useCallback(async (jobData) => {
    dispatch({ type: "SET_LOADING", payload: true });
    await createJob(jobData);
    const job = { ...jobData, id: generateId() };
    dispatch({ type: "ADD_JOB", payload: job });
  }, []);

  const editJob = useCallback(async (id, jobData) => {
    dispatch({ type: "SET_LOADING", payload: true });
    await updateJobService(id, jobData);
    dispatch({ type: "UPDATE_JOB", payload: { ...jobData, id } });
  }, []);

  const removeJob = useCallback(async (id) => {
    dispatch({ type: "SET_LOADING", payload: true });
    await deleteJob(id);
    dispatch({ type: "DELETE_JOB", payload: id });
  }, []);

  return (
    <JobsContext.Provider
      value={{
        jobs: state.jobs,
        loading: state.loading,
        addJob,
        updateJob: editJob,
        deleteJob: removeJob,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
}

export function useJobs() {
  return useContext(JobsContext);
}

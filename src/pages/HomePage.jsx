import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function HomePage() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  return (
    <div className="home-page">
      <h2>Welcome to Job Finder</h2>
      <p>Find and manage your job listings easily.</p>
      <div className="home-links">
        <Link to="/jobs" className="btn">Browse Jobs</Link>
        <Link to="/add" className="btn">Post a Job</Link>
        <Link to="/stats" className="btn">View Stats</Link>
      </div>

      <div className="featured-jobs">
        <h3>Featured Remote Positions</h3>
        {loading && <p>Loading...</p>}
        {error && <p className="error-msg">Failed to load: {error}</p>}
        {data && (
          <ul>
            {data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default HomePage;

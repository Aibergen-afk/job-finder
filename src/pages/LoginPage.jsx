import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const [mode, setMode] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError("Please fill all fields");
      return;
    }
    const err = mode === "login" ? login(username, password) : register(username, password);
    if (err) setError(err);
    else navigate("/jobs");
  };

  const switchMode = () => {
    setMode((m) => (m === "login" ? "register" : "login"));
    setError("");
  };

  return (
    <div className="login-page">
      <h2>{mode === "login" ? "Login" : "Register"}</h2>
      <form className="job-form" onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-msg">{error}</p>}
        <button type="submit">{mode === "login" ? "Login" : "Register"}</button>
      </form>
      <p className="login-hint">
        {mode === "login" ? "No account?" : "Already have an account?"}{" "}
        <span className="switch-mode" onClick={switchMode}>
          {mode === "login" ? "Register" : "Login"}
        </span>
      </p>
    </div>
  );
}

export default LoginPage;

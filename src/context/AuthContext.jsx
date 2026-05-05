import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext();

const getUsers = () => JSON.parse(localStorage.getItem("users") || "[]");

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);

  const register = (username, password) => {
    const users = getUsers();
    if (users.find((u) => u.username === username)) {
      return "User already exists";
    }
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    setUser(username);
    return null;
  };

  const login = (username, password) => {
    const users = getUsers();
    const found = users.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      setUser(username);
      return null;
    }
    return "Invalid username or password";
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

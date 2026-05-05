import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JobsProvider } from "./context/JobsContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobDetailPage from "./pages/JobDetailPage";
import EditJobPage from "./pages/EditJobPage";
import AddJobPage from "./pages/AddJobPage";
import AboutPage from "./pages/AboutPage";
import StatsPage from "./pages/StatsPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <JobsProvider>
          <BrowserRouter>
            <div className="app">
              <Header />
              <div className="container">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/jobs" element={<JobsPage />}>
                    <Route path=":id" element={<JobDetailPage />} />
                    <Route
                      path=":id/edit"
                      element={
                        <ProtectedRoute>
                          <EditJobPage />
                        </ProtectedRoute>
                      }
                    />
                  </Route>
                  <Route
                    path="/add"
                    element={
                      <ProtectedRoute>
                        <AddJobPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/stats"
                    element={
                      <ProtectedRoute>
                        <StatsPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </JobsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

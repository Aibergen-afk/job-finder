import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { JobsProvider } from "./context/JobsContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const HomePage = lazy(() => import("./pages/HomePage"));
const JobsPage = lazy(() => import("./pages/JobsPage"));
const JobDetailPage = lazy(() => import("./pages/JobDetailPage"));
const EditJobPage = lazy(() => import("./pages/EditJobPage"));
const AddJobPage = lazy(() => import("./pages/AddJobPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const StatsPage = lazy(() => import("./pages/StatsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <JobsProvider>
          <BrowserRouter>
            <div className="app">
              <Header />
              <div className="container">
                <Suspense fallback={<div className="spinner" style={{ margin: "60px auto" }} />}>
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
                </Suspense>
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

import { LoginPage } from "./pages/login.page";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { HomePage } from "./pages/home.page";
import { ProcessorsPage } from "./pages/processors.page";
import { DashboardPage } from "./pages/dashboard/dashboard.page";
import { BrowsePage } from "./pages/browse.page";
import { ProblemsPage } from "./pages/problems.page";
import { useState } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  function handleAuthenticate() {
    setAuthenticated(true);
  }
  function handleSignOut() {
    setAuthenticated(false);
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage onAuthentication={handleAuthenticate} />}
        ></Route>
        <Route
          path="/"
          element={authenticated ? <HomePage onSignOut={handleSignOut} /> : <Navigate to="/login" />}
        >
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="browse" element={<BrowsePage />} />
          <Route path="processors" element={<ProcessorsPage />} />
          <Route path="problems" element={<ProblemsPage />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import { LoginPage } from "./pages/login.page";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { HomePage } from "./pages/home.page";
import { ProcessorsPage } from "./pages/processors/processors.page";
import { DashboardPage } from "./pages/dashboard/dashboard.page";
import { BrowsePage } from "./pages/browse/browse.page";
import { ProblemsPage } from "./pages/problems.page";
import { useState } from "react";
import { StudentDetails } from "./pages/browse/student-details";
import { BrowseList } from "./pages/browse/browse-list";

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
        {/* LOGIN */}
        <Route
          path="/login"
          element={<LoginPage onAuthentication={handleAuthenticate} />}
        ></Route>
        {/* END LOGIN */}

        {/* MAIN APP */}
        <Route
          path="/"
          element={
            authenticated ? (
              <HomePage onSignOut={handleSignOut} />
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="browse" element={<BrowsePage />}>
            <Route index element={<BrowseList />} />
            <Route path="student" element={<StudentDetails />} />
          </Route>
          <Route path="processors" element={<ProcessorsPage />} />
          <Route path="problems" element={<ProblemsPage />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Route>
        {/* END MAIN APP */}
      </Routes>
    </Router>
  );
}

export default App;

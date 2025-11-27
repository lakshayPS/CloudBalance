import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";
import Login from "./pages/Login/Login";
import { useState } from "react";
import ProtectedRoute from "./routes/ProtectedRoute";
import AWSServices from "./components/dashboards/AWSServicesDashboard/AWSServices";
import Onboarding from "./components/dashboards/OnboardingDashboard/Onboarding";
import CostExplorer from "./components/dashboards/CostExplorerDashboard/CostExplorer";
import ServicesProvider from "./components/dashboards/AWSServicesDashboard/context/ServicesProvider";
import SideBar from "./components/layout/SideBar";
import Dashboard from "./components/dashboards/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") == "true";
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.clear();
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Login onLogin={handleLogin} isAuthenticated={isAuthenticated} />
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <MainContent onLogout={handleLogout} />
              </ProtectedRoute>
            }
          >
            {/* <Header />
            <SideBar /> */}
            <Route path="user-management" element={<Dashboard />} />
            <Route path="onboarding" element={<Onboarding />} />
            <Route path="cost-explorer" element={<CostExplorer />} />
            <Route
              path="aws-services"
              element={
                <ServicesProvider>
                  <AWSServices />
                </ServicesProvider>
              }
            />
          </Route>

          {/* </Route> */}
          {/* <Layout /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

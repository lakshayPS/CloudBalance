import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import MainContent from "./components/layout/MainContent";
import Dashboard from "./components/dashboards/Dashboard";
import Onboarding from "./components/dashboards/OnboardingDashboard/Onboarding";
import CostExplorer from "./components/dashboards/CostExplorerDashboard/CostExplorer";
import AWSServices from "./components/dashboards/AWSServicesDashboard/AWSServices";
import ServicesProvider from "./components/dashboards/AWSServicesDashboard/context/ServicesProvider";
import { ToastContainer } from "react-toastify";
import Unauthorized from "./pages/UnauthorizedPage/Unauthorized";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                allowedRoles={["ROLE_ADMIN", "ROLE_READONLY", "ROLE_CUSTOMER"]}
              >
                <MainContent />
              </ProtectedRoute>
            }
          >
            <Route
              path="user-management"
              element={
                <ProtectedRoute allowedRoles={["ROLE_ADMIN", "ROLE_READONLY"]}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="onboarding"
              element={
                <ProtectedRoute allowedRoles={["ROLE_ADMIN", "ROLE_READONLY"]}>
                  <Onboarding />
                </ProtectedRoute>
              }
            />

            <Route
              path="cost-explorer"
              element={
                <ProtectedRoute
                  allowedRoles={[
                    "ROLE_ADMIN",
                    "ROLE_CUSTOMER",
                    "ROLE_READONLY",
                  ]}
                >
                  <CostExplorer />
                </ProtectedRoute>
              }
            />

            <Route
              path="aws-services"
              element={
                <ProtectedRoute
                  allowedRoles={[
                    "ROLE_ADMIN",
                    "ROLE_CUSTOMER",
                    "ROLE_READONLY",
                  ]}
                >
                  <ServicesProvider>
                    <AWSServices />
                  </ServicesProvider>
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
}

export default App;

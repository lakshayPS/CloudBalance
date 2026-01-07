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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <MainContent />
              </ProtectedRoute>
            }
          >
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
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
}

export default App;

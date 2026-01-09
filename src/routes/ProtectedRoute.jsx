import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { token, role } = useSelector((state) => state?.auth || {});
  const rehydrated = useSelector((state) => state?._persist?.rehydrated);

  if (!rehydrated) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};
export default ProtectedRoute;

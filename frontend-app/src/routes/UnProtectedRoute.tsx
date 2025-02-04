import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface UnProtectedRouteProps {
  children: React.ReactNode;
}

export const UnProtectedRoute = ({ children }: UnProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const authOnlyRoutes = ["/login", "/register"];
  if (isAuthenticated && authOnlyRoutes.includes(location.pathname)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

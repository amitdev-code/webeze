import { Navigate, useLocation } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

interface UnProtectedRouteProps {
  children: React.ReactNode;
}

export const UnProtectedRoute = ({ children }: UnProtectedRouteProps) => {
  const isAuthenticated = true;
  const user = {
    onboard: true,
    role : "ADMIN"
  }

  const location = useLocation();

  const authOnlyRoutes = ["/login", "/register"];
  if (isAuthenticated && authOnlyRoutes.includes(location.pathname)) {
    if (user?.onboard) {
      return <Navigate to="/dashboard" replace />;
    } else {
      return <Navigate to="/onboarding" replace />;
    }
  }

  return (<Fragment>{children}</Fragment>);
};

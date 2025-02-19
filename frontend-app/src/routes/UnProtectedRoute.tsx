import { Navigate, useLocation } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { RootState } from "../redux";

interface UnProtectedRouteProps {
  children: React.ReactNode;
}

export const UnProtectedRoute = ({ children }: UnProtectedRouteProps) => {
  const isAuthenticated = useSelector((state: RootState) => state.app.isAuthenticated)
  const user = useSelector((state: RootState) => state.user.userDetail)

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

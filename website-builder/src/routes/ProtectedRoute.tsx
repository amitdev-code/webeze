import { Navigate, useLocation } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
  checkRoleOnChildren?: boolean;
}

export const ProtectedRoute = ({
  children,
  allowedRoles,
  checkRoleOnChildren = true,
}: ProtectedRouteProps) => {
  const isAuthenticated = true;
  const user = {
    onboard: true,
    role: "ADMIN"
  }
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if(isAuthenticated && !user?.onboard && location.pathname !== "/onboarding") {
    return <Navigate to="/onboarding" state={{ from: location }} replace />;
  }

  if(isAuthenticated && user?.onboard && location.pathname == "/onboarding"){
    return <Navigate to={"/dashboard"} state={{from: location}} replace />
  }

  if (checkRoleOnChildren && allowedRoles.length > 0 && user?.role && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return (<Fragment>{children}</Fragment>);
};
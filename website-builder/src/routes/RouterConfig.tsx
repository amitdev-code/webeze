import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { protectedRoutes } from "./protected.routes";
import { ProtectedRoute } from "./ProtectedRoute";
import { RouteConfig } from "./types";
import { AppLayout } from "../builderLayout/AppLayout";
import { UnProtectedRoute } from "./UnProtectedRoute";

const renderRoutes = (routes: RouteConfig[]) => {
  return routes.map((route) => {
    const Component = route.component;
    const Layout = route.layout || AppLayout;

    if (route.haveChildren && route.children && route.children.length) {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.allowedRoles.length > 0 ? (
              <ProtectedRoute 
                allowedRoles={route.allowedRoles}
                checkRoleOnChildren={false}
              >
                <Layout>
                  <Component />
                </Layout>
              </ProtectedRoute>
            ) : (
              <UnProtectedRoute>
                <Layout>
                  <Component />
                </Layout>
              </UnProtectedRoute>
            )
          }
        >
          {route.children.map((child) => {            
            const ChildComponent = child.component;
            const ChildLayout = child.layout || AppLayout;

            return (
              <Route
                key={child.path}
                path={child.path}
                element={
                  child.allowedRoles.length > 0 ? (
                    <ProtectedRoute 
                      allowedRoles={child.allowedRoles}
                      checkRoleOnChildren={true}
                    >
                      <ChildLayout>
                        <ChildComponent />
                      </ChildLayout>
                    </ProtectedRoute>
                  ) : (
                    <UnProtectedRoute>
                      <ChildLayout>
                        <ChildComponent />
                      </ChildLayout>
                    </UnProtectedRoute>
                  )
                }
              />
            );
          })}
        </Route>
      );
    }

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.allowedRoles.length > 0 ? (
            <ProtectedRoute allowedRoles={route.allowedRoles}>
              <Layout>
                <Component />
              </Layout>
            </ProtectedRoute>
          ) : (
            <UnProtectedRoute>
              <Layout>
                <Component />
              </Layout>
            </UnProtectedRoute>
          )
        }
      />
    );
  });
};

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected Routes */}
        {renderRoutes(protectedRoutes)}

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/" replace />} />

        {/* 404 Route */}
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
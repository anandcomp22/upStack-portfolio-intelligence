import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = false;

export default function PublicRoute() {
  return isAuthenticated
    ? <Navigate to="/" replace />
    : <Outlet />;
}
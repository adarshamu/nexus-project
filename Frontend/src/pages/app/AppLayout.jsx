import { Outlet, Navigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import "./AppLayout.css";

function getRole() {
  try { return localStorage.getItem("nx-role") || "employee"; }
  catch { return "employee"; }
}

export default function AppLayout() {
  const location = useLocation();

  // Guard Super Admin-only routes
  if (location.pathname.startsWith("/app/admin") && getRole() !== "admin") {
    return <Navigate to="/app/overview" replace />;
  }

  return (
    <div className="nx-app">
      <Sidebar />
      <main className="nx-app__main">
        <Outlet />
      </main>
    </div>
  );
}
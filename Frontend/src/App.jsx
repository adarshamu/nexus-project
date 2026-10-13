import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import ServerError from "./pages/ServerError.jsx";
import Loading from "./pages/Loading.jsx";

import AppLayout from "./pages/app/AppLayout.jsx";
import Overview from "./pages/app/Overview.jsx";
import SkillQuest from "./pages/app/SkillQuest.jsx";
import HumanAPI from "./pages/app/HumanAPI.jsx";
import Settings from "./pages/app/Settings.jsx";
import Admin from "./pages/app/Admin.jsx";

export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />

      {/* Preview routes — for demoing the new pages */}
      <Route path="/loading" element={<Loading />} />
      <Route path="/500" element={<ServerError />} />

      {/* Authenticated app */}
      <Route path="/app" element={<AppLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview"   element={<Overview />} />
        <Route path="skillquest" element={<SkillQuest />} />
        <Route path="human-api"  element={<HumanAPI />} />
        <Route path="settings"   element={<Settings />} />
        <Route path="admin"      element={<Admin />} />
      </Route>

      {/* Catch-all — 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
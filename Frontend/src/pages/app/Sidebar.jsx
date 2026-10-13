import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Logo from "../../components/Logo.jsx";
import ThemeToggle from "../../components/ThemeToggle.jsx";
import { user, notifications } from "../../data/mock.js";
import "./Sidebar.css";

const NAV = [
  { to: "/app/overview",   label: "Overview",   icon: GridIcon,   adminOnly: false },
  { to: "/app/skillquest", label: "SkillQuest", icon: SparkIcon,  adminOnly: false },
  { to: "/app/human-api",  label: "Human API",  icon: UsersIcon,  adminOnly: false },
  { to: "/app/admin",      label: "Admin",      icon: ShieldIcon, adminOnly: true  },
  { to: "/app/settings",   label: "Settings",   icon: GearIcon,   adminOnly: false }
];

function getRole() {
  try { return localStorage.getItem("nx-role") || "employee"; }
  catch { return "employee"; }
}

export default function Sidebar() {
  const navigate = useNavigate();
  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef(null);
  const bellRef = useRef(null);
  const unread = notifications.filter((n) => n.unread).length;
  const role = getRole();
  const items = NAV.filter((item) => !item.adminOnly || role === "admin");

  /* --- Close notification when clicking anywhere outside it --- */
  useEffect(() => {
    if (!notifOpen) return;
    const handle = (e) => {
      if (
        notifRef.current && notifRef.current.contains(e.target)
      ) return;
      if (
        bellRef.current && bellRef.current.contains(e.target)
      ) return;
      setNotifOpen(false);
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [notifOpen]);

  /* --- Close on Escape --- */
  useEffect(() => {
    if (!notifOpen) return;
    const handle = (e) => { if (e.key === "Escape") setNotifOpen(false); };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [notifOpen]);

  /* --- Close when any modal asks us to --- */
  useEffect(() => {
    const close = () => setNotifOpen(false);
    window.addEventListener("nexus:close-overlays", close);
    return () => window.removeEventListener("nexus:close-overlays", close);
  }, []);

  return (
    <aside className="nx-side">
      <div className="nx-side__top">
        <div className="nx-side__brand"><Logo size={26} /></div>

        <div className="nx-side__top-actions">
          <ThemeToggle className="nx-theme-toggle--dark" />

          <button
            ref={bellRef}
            type="button"
            className="nx-side__bell"
            aria-label={"Notifications (" + unread + " unread)"}
            aria-expanded={notifOpen}
            onClick={() => setNotifOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
            </svg>
            {unread > 0 && <span className="nx-side__bell-dot" />}
          </button>
        </div>

        {notifOpen && (
          <div className="nx-side__notif" role="menu" ref={notifRef}>
            <div className="nx-side__notif-head">
              <span>Notifications</span>
              <button
                type="button"
                onClick={() => setNotifOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <ul>
              {notifications.map((n) => (
                <li key={n.id} className={n.unread ? "is-unread" : ""}>
                  <strong>{n.title}</strong>
                  <p>{n.body}</p>
                  <span className="nx-side__notif-time">{n.time}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="nx-side__workspace">
        <span className="nx-side__ws-label">
          {role === "admin" ? "Super Admin workspace" : "Employee workspace"}
        </span>
        <strong className="nx-side__ws-name">{user.name}</strong>
        <span className="nx-side__ws-mail">{user.email}</span>
      </div>

      <nav className="nx-side__nav" aria-label="App">
        {items.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => "nx-side__link " + (isActive ? "is-active" : "")}
          >
            <Icon /><span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="nx-side__foot">
        <button
          type="button"
          className="nx-side__signout"
          onClick={() => {
            try { localStorage.removeItem("nx-role"); } catch { /* storage blocked */ }
            navigate("/login");
          }}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <path d="m16 17 5-5-5-5"/>
            <path d="M21 12H9"/>
          </svg>
          Sign out
        </button>
      </div>
    </aside>
  );
}

/* --- Inline icons --- */
function GridIcon() {
  return (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/>
    <rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>
  </svg>);
}
function SparkIcon() {
  return (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>);
}
function UsersIcon() {
  return (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>);
}
function ShieldIcon() {
  return (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>
  </svg>);
}
function GearIcon() {
  return (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>
  </svg>);
}
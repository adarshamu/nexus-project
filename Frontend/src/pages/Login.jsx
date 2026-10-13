import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo.jsx";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const username = form.username.trim();
    const password = form.password;

    // Super Admin — fixed credentials
    if (username === "Admin" && password === "root") {
      try { localStorage.setItem("nx-role", "admin"); } catch { /* storage blocked */ }
      navigate("/app/overview");
      return;
    }

    // Employee — any other non-empty credentials
    if (username.length > 0 && password.length > 0) {
      try { localStorage.setItem("nx-role", "employee"); } catch { /* storage blocked */ }
      navigate("/app/overview");
      return;
    }

    setError("Please enter your username and password.");
  };

  return (
    <div className="nx-login">
      <aside className="nx-login__aside">
        <Link to="/" className="nx-login__brand">
          <Logo size={36} />
        </Link>

        <div className="nx-login__art" aria-hidden="true">
          <div className="nx-login__phone">
            <span className="nx-login__lock">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="11" width="16" height="10" rx="2"/>
                <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
              </svg>
            </span>
            <span className="nx-login__avatar">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 21a8 8 0 0 1 16 0"/>
              </svg>
            </span>
            <span className="nx-login__bar" />
            <span className="nx-login__bar nx-login__bar--short" />
            <button className="nx-login__cta" type="button" tabIndex={-1}>Login</button>
          </div>
          <div className="nx-login__blob nx-login__blob--a" />
          <div className="nx-login__blob nx-login__blob--b" />
          <div className="nx-login__blob nx-login__blob--c" />
        </div>

        <div className="nx-login__aside-foot">
          <h2>See. Solve. Learn. Grow. Remember.</h2>
          <p>Personal intelligence designed for developers.</p>
        </div>
      </aside>

      <main className="nx-login__main">
        <div className="nx-login__card">
          <header className="nx-login__head">
            <span className="nx-eyebrow">Welcome back</span>
            <h1 className="nx-login__title">Sign in to Nexus</h1>
            <p className="nx-login__sub">
              Continue your journey — your progress, courses, and experts are waiting.
            </p>
          </header>

          {/* autoComplete="off" on the form disables the browser's autofill suggestion layer */}
          <form className="nx-login__form" onSubmit={handleSubmit} noValidate autoComplete="off">
            {/* ---------- Username ---------- */}
            <div className="nx-field">
              <label className="nx-field__label" htmlFor="nx-username">
                Username
              </label>
              <div className="nx-field__control">
                <span className="nx-field__icon nx-field__icon--left" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
                       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M4 21a8 8 0 0 1 16 0"/>
                  </svg>
                </span>
                <input
                  id="nx-username"
                  name="nx-username"
                  type="text"
                  /* Empty placeholder — no hint text at all */
                  placeholder=""
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  /* autoComplete="off" on the input itself, plus a randomized name,
                     forces Chrome/Safari/Firefox to skip restoring a saved value */
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  required
                />
              </div>
            </div>

            {/* ---------- Password ---------- */}
            <div className="nx-field">
              <label className="nx-field__label" htmlFor="nx-password">
                Password
              </label>
              <div className="nx-field__control">
                <span className="nx-field__icon nx-field__icon--left" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
                       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="11" width="16" height="10" rx="2"/>
                    <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
                  </svg>
                </span>
                <input
                  id="nx-password"
                  name="nx-password"
                  type={showPassword ? "text" : "password"}
                  placeholder=""
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  /* "new-password" is the only hint Chrome fully respects for
                     stopping the password manager from restoring the saved value.
                     It also stops the "Save password?" prompt after submit. */
                  autoComplete="new-password"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  required
                />
                <button
                  type="button"
                  className="nx-field__icon nx-field__icon--right nx-field__eye"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {error && <p className="nx-login__error">{error}</p>}

            <label className="nx-check nx-check--solo">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button type="submit" className="nx-btn nx-btn--accent nx-login__submit">
              Login
            </button>
          </form>

          <p className="nx-login__hint">
            Forgot your password? Contact your Super Admin to reset it.
          </p>
        </div>
      </main>
    </div>
  );
}
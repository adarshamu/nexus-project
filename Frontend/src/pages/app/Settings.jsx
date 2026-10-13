import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { user } from "../../data/mock.js";
import ThemeToggle from "../../components/ThemeToggle.jsx";
import LandscapeAvatar, {
  AVATAR_VARIANTS,
  AVATAR_LABELS
} from "../../components/LandscapeAvatar.jsx";
import { useTheme } from "../../hooks/useTheme.js";
import "./Settings.css";

const AVATAR_KEY = "nx-avatar";

const SQUARE_VARIANTS = new Set([
  "pinkGreen",
  "pastelLandscape",
  "greenClouds",
  "blueLandscape"
]);

export default function Settings() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const [avatar, setAvatar] = useState(() => {
    try {
      const saved = localStorage.getItem(AVATAR_KEY);
      if (saved) return saved;
    } catch { /* storage blocked */ }
    return "forestCabin";
  });

  const [pickerOpen, setPickerOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: user.name,
    handle: user.handle,
    email: user.email
  });
  const [pwd, setPwd] = useState({ current: "", next: "", confirm: "" });
  const [pwdMsg, setPwdMsg] = useState("");

  useEffect(() => {
    try { localStorage.setItem(AVATAR_KEY, avatar); } catch { /* storage blocked */ }
  }, [avatar]);

  /* Close any open notification dropdown when the picker opens */
  useEffect(() => {
    if (pickerOpen) {
      window.dispatchEvent(new Event("nexus:close-overlays"));
    }
  }, [pickerOpen]);

  /* Escape closes the modal */
  useEffect(() => {
    if (!pickerOpen) return;
    const handle = (e) => { if (e.key === "Escape") setPickerOpen(false); };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [pickerOpen]);

  /* Lock body scroll while the modal is open */
  useEffect(() => {
    if (!pickerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [pickerOpen]);

  const isCustomImage = avatar.startsWith("data:") || avatar.startsWith("http");
  const profileShape = SQUARE_VARIANTS.has(avatar) ? "square" : "circle";

  const handleUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setAvatar(ev.target.result);
      setPickerOpen(false);
    };
    reader.readAsDataURL(file);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setPwdMsg("");
    if (!pwd.current || !pwd.next || !pwd.confirm) {
      setPwdMsg("Please fill all password fields.");
      return;
    }
    if (pwd.next.length < 6) {
      setPwdMsg("New password must be at least 6 characters.");
      return;
    }
    if (pwd.next !== pwd.confirm) {
      setPwdMsg("New password and confirmation do not match.");
      return;
    }
    setPwd({ current: "", next: "", confirm: "" });
    setPwdMsg("Password updated successfully.");
  };

  return (
    <div className="nx-set">
      <header className="nx-set__head">
        <div>
          <span className="nx-eyebrow">Settings</span>
          <h1 className="nx-set__title">Profile</h1>
          <p className="nx-set__sub">
            Change your name, avatar, password, and personalise your workspace.
          </p>
        </div>
      </header>

      {/* ---------- Profile ---------- */}
      <section className="nx-panel">
        <header className="nx-panel__head">
          <h2 className="nx-panel__title">Your profile</h2>
        </header>

        <div className="nx-set__profile">
          <div className="nx-set__avatar-wrap">
            <button
              type="button"
              className="nx-set__avatar-btn"
              onClick={() => setPickerOpen(true)}
              aria-label="Choose your avatar"
            >
              {isCustomImage ? (
                <span className="nx-set__avatar nx-set__avatar--custom">
                  <img src={avatar} alt="" />
                </span>
              ) : (
                <LandscapeAvatar variant={avatar} size={120} rounded={profileShape} />
              )}
              <span className="nx-set__avatar-overlay" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              </span>
            </button>
            <p className="nx-set__avatar-hint">Click to change your avatar</p>
          </div>

          <div className="nx-set__fields">
            <label className="nx-field">
              <span className="nx-field__label">Full name</span>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              />
            </label>
            <label className="nx-field">
              <span className="nx-field__label">Handle</span>
              <input
                type="text"
                value={profile.handle}
                onChange={(e) => setProfile({ ...profile, handle: e.target.value })}
              />
            </label>
            <label className="nx-field">
              <span className="nx-field__label">Email</span>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />
            </label>
          </div>
        </div>

        <div className="nx-set__actions">
          <button className="nx-btn nx-btn--primary">Save changes</button>
          <button className="nx-btn nx-btn--ghost">Cancel</button>
        </div>
      </section>

      {/* ---------- Password ---------- */}
      <section className="nx-panel">
        <header className="nx-panel__head">
          <div>
            <h2 className="nx-panel__title">Change password</h2>
            <p className="nx-panel__sub">
              You can also ask the Super Admin to reset it for you.
            </p>
          </div>
        </header>

        <form className="nx-set__pwd" onSubmit={handleChangePassword}>
          <label className="nx-field">
            <span className="nx-field__label">Current password</span>
            <input
              type="password"
              value={pwd.current}
              onChange={(e) => setPwd({ ...pwd, current: e.target.value })}
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </label>
          <label className="nx-field">
            <span className="nx-field__label">New password</span>
            <input
              type="password"
              value={pwd.next}
              onChange={(e) => setPwd({ ...pwd, next: e.target.value })}
              placeholder="At least 6 characters"
              autoComplete="new-password"
            />
          </label>
          <label className="nx-field">
            <span className="nx-field__label">Confirm new password</span>
            <input
              type="password"
              value={pwd.confirm}
              onChange={(e) => setPwd({ ...pwd, confirm: e.target.value })}
              placeholder="Repeat new password"
              autoComplete="new-password"
            />
          </label>

          {pwdMsg && <p className="nx-set__msg">{pwdMsg}</p>}

          <div className="nx-set__actions">
            <button type="submit" className="nx-btn nx-btn--primary">Update password</button>
          </div>
        </form>
      </section>

      {/* ---------- Appearance ---------- */}
      <section className="nx-panel">
        <header className="nx-panel__head">
          <div>
            <h2 className="nx-panel__title">Appearance</h2>
            <p className="nx-panel__sub">Pick a theme for the whole app.</p>
          </div>
        </header>

        <div className="nx-set__row">
          <div>
            <strong>Theme</strong>
            <p className="nx-set__row-sub">
              Currently using <b>{theme}</b> mode.
            </p>
          </div>
          <ThemeToggle />
        </div>
      </section>

      {/* ---------- Log out ---------- */}
      <section className="nx-panel nx-set__danger">
        <div>
          <h2 className="nx-panel__title">Log out</h2>
          <p className="nx-panel__sub">End your session and return to the login page.</p>
        </div>
        <button
          className="nx-btn nx-btn--danger"
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
          Log out
        </button>
      </section>

      {/* ---------- Avatar picker modal — via portal ---------- */}
      {pickerOpen && createPortal(
        <div
          className="nx-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="nx-avatar-picker-title"
          onClick={() => setPickerOpen(false)}
        >
          <div className="nx-modal__panel" onClick={(e) => e.stopPropagation()}>
            <header className="nx-modal__head">
              <div>
                <h2 id="nx-avatar-picker-title" className="nx-modal__title">
                  Choose your avatar
                </h2>
                <p className="nx-modal__sub">
                  {AVATAR_VARIANTS.length} scenes — or upload your own.
                </p>
              </div>
              <button
                className="nx-modal__close"
                onClick={() => setPickerOpen(false)}
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              </button>
            </header>

            <div className="nx-modal__body">
              <div className="nx-av-grid">
                {AVATAR_VARIANTS.map((v) => {
                  const isSelected = avatar === v;
                  const shape = SQUARE_VARIANTS.has(v) ? "square" : "circle";
                  return (
                    <button
                      key={v}
                      type="button"
                      className={"nx-av-option" + (isSelected ? " is-selected" : "")}
                      onClick={() => {
                        setAvatar(v);
                        setPickerOpen(false);
                      }}
                      title={AVATAR_LABELS[v]}
                      aria-label={AVATAR_LABELS[v]}
                    >
                      <LandscapeAvatar variant={v} size={56} rounded={shape} />
                      <span className="nx-av-option__label">{AVATAR_LABELS[v]}</span>
                      {isSelected && (
                        <span className="nx-av-option__check" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width="11" height="11" fill="none"
                               stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="nx-modal__upload">
                <span className="nx-modal__upload-label">Or upload your own image</span>
                <label className="nx-btn nx-btn--ghost nx-modal__upload-btn">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none"
                       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 15V3"/>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <path d="m7 10 5 5 5-5"/>
                  </svg>
                  Upload image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                    style={{ display: "none" }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
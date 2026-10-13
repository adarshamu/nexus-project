import { useState } from "react";
import { adminUsers } from "../../data/mock.js";
import "./Admin.css";

export default function Admin() {
  const [users, setUsers] = useState(adminUsers);
  const [maintenance, setMaintenance] = useState(false);
  const [defaultPassword, setDefaultPassword] = useState("nexus@123");
  const [broadcast, setBroadcast] = useState("");

  const removeUser = (id) => setUsers((u) => u.filter((x) => x.id !== id));
  const resetPassword = (name) => alert("Temporary password sent to " + name + " (prototype).");
  const handleUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    alert("Selected: " + file.name + "\nWill be imported with default password: " + defaultPassword);
  };

  const avg = Math.round(users.reduce((a, b) => a + b.progress, 0) / Math.max(users.length, 1));
  const active = users.filter((u) => u.status === "active").length;

  return (
    <div className="nx-adm">
      <header className="nx-adm__head">
        <div>
          <span className="nx-eyebrow">Super Admin</span>
          <h1 className="nx-adm__title">Platform administration</h1>
          <p className="nx-adm__sub">
            Manage employees, upload rosters, reset passwords, and control the platform.
          </p>
        </div>
      </header>

      {/* KPIs */}
      <section className="nx-adm__kpis">
        <div className="nx-kpi">
          <span className="nx-kpi__label">Total employees</span>
          <span className="nx-kpi__value">{users.length}</span>
          <span className="nx-kpi__meta">across all batches</span>
        </div>
        <div className="nx-kpi">
          <span className="nx-kpi__label">Active</span>
          <span className="nx-kpi__value">{active}</span>
          <span className="nx-kpi__meta">currently enrolled</span>
        </div>
        <div className="nx-kpi">
          <span className="nx-kpi__label">Average progress</span>
          <span className="nx-kpi__value">{avg}%</span>
          <span className="nx-kpi__meta">platform-wide</span>
        </div>
        <div className="nx-kpi">
          <span className="nx-kpi__label">Courses assigned</span>
          <span className="nx-kpi__value">24</span>
          <span className="nx-kpi__meta">last 7 days</span>
        </div>
      </section>

      {/* Bulk upload */}
      <section className="nx-panel">
        <header className="nx-panel__head">
          <div>
            <h2 className="nx-panel__title">Bulk upload employees</h2>
            <p className="nx-panel__sub">Add many employees at once with a temporary default password.</p>
          </div>
        </header>

        <div className="nx-adm__defaultpwd">
          <label className="nx-field">
            <span className="nx-field__label">Temporary default password</span>
            <input
              type="text"
              value={defaultPassword}
              onChange={(e) => setDefaultPassword(e.target.value)}
              placeholder="nexus@123"
            />
          </label>
          <p className="nx-adm__defaultpwd-hint">
            Every imported employee will be prompted to change this on first login.
          </p>
        </div>

        <label className="nx-adm__drop">
          <input type="file" accept=".csv,.xlsx,.xls" onChange={handleUpload} />
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none"
               stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 15V3"/>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <path d="m7 10 5 5 5-5"/>
          </svg>
          <span>Drop a CSV or Excel file, or click to select</span>
          <small>Accepts .csv, .xlsx, .xls — up to 5 MB</small>
        </label>
      </section>

      {/* Users table */}
      <section className="nx-panel">
        <header className="nx-panel__head">
          <div>
            <h2 className="nx-panel__title">Employees</h2>
            <p className="nx-panel__sub">{users.length} registered accounts</p>
          </div>
        </header>

        <div className="nx-adm__table-wrap">
          <table className="nx-adm__table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Progress</th>
                <th>Status</th>
                <th aria-label="Actions"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>
                    <div className="nx-adm__user">
                      <span className="nx-adm__avatar">
                        {u.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
                      </span>
                      <div>
                        <div className="nx-adm__name">{u.name}</div>
                        <div className="nx-adm__email">{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="nx-adm__progress">
                      <div className="nx-bar"><span style={{ width: u.progress + "%" }} /></div>
                      <span>{u.progress}%</span>
                    </div>
                  </td>
                  <td>
                    <span className={"nx-status nx-status--" + (u.status === "active" ? "good" : "muted")}>
                      <span className="nx-status__dot" />{u.status}
                    </span>
                  </td>
                  <td>
                    <div className="nx-adm__actions">
                      <button onClick={() => resetPassword(u.name)} className="nx-adm__btn">Reset pwd</button>
                      <button onClick={() => removeUser(u.id)} className="nx-adm__btn nx-adm__btn--danger">Remove</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Platform settings */}
      <section className="nx-panel">
        <header className="nx-panel__head">
          <div>
            <h2 className="nx-panel__title">Platform settings</h2>
            <p className="nx-panel__sub">Control availability and broadcast messages</p>
          </div>
        </header>

        <div className="nx-adm__setting">
          <div>
            <strong>Maintenance mode</strong>
            <p>When enabled, all non-admin users see a maintenance banner.</p>
          </div>
          <label className="nx-switch">
            <input
              type="checkbox"
              checked={maintenance}
              onChange={(e) => setMaintenance(e.target.checked)}
            />
            <span className="nx-switch__slider" />
          </label>
        </div>

        <div className="nx-adm__setting nx-adm__setting--stack">
          <div>
            <strong>Broadcast message</strong>
            <p>Send a notice to every active employee's dashboard.</p>
          </div>
          <textarea
            rows={3}
            value={broadcast}
            onChange={(e) => setBroadcast(e.target.value)}
            placeholder="Type a message for all employees..."
            className="nx-adm__textarea"
          />
          <button className="nx-btn nx-btn--primary">Send broadcast</button>
        </div>
      </section>
    </div>
  );
}
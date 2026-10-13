import { useNavigate } from "react-router-dom";
import {
  user, dashboardCards, stack, skillRows,
  strengthsFocus, difficultyCategories
} from "../../data/mock.js";
import "./Overview.css";

export default function Overview() {
  const navigate = useNavigate();

  return (
    <div className="nx-overview">
      <header className="nx-overview__head">
        <div>
          <span className="nx-eyebrow">Employee · Overview</span>
          <h1 className="nx-overview__title">Good morning, {user.name.split(" ")[0]}</h1>
          <p className="nx-overview__sub">Here is your illustrative learning snapshot for {user.batch}.</p>
        </div>
        <div className="nx-overview__actions">
          <button className="nx-btn nx-btn--ghost">Continue learning</button>
          <button className="nx-btn nx-btn--primary" onClick={() => navigate("/app/human-api")}>
            Use Human API
          </button>
        </div>
      </header>

      <section className="nx-overview__kpis">
        {dashboardCards.map((c) => (
          <article key={c.label} className={"nx-kpi nx-kpi--" + c.tone}>
            <header className="nx-kpi__head">
              <span className="nx-kpi__label">{c.label}</span>
              <span className="nx-kpi__dot" />
            </header>
            <span className="nx-kpi__value">{c.value}</span>
            <p className="nx-kpi__meta">{c.meta}</p>
          </article>
        ))}
      </section>

      <div className="nx-overview__grid">
        <section className="nx-panel">
          <header className="nx-panel__head">
            <div>
              <h2 className="nx-panel__title">Technology stack</h2>
              <p className="nx-panel__sub">Sample interests from profile settings</p>
            </div>
          </header>
          <div className="nx-chips">
            {stack.map((s) => <span key={s} className="nx-chip">{s}</span>)}
          </div>
          <div className="nx-skillgrid">
            {skillRows.map((s) => (
              <div key={s.name} className="nx-skill">
                <div className="nx-skill__head">
                  <span className="nx-skill__name">{s.name}</span>
                  <span className={"nx-pill nx-pill--" + s.tone}>{s.status}</span>
                </div>
                <div className="nx-bar"><span style={{ width: s.value + "%" }} /></div>
                <span className="nx-skill__meta">Illustrative proficiency · {s.value}%</span>
              </div>
            ))}
          </div>
        </section>

        <section className="nx-panel">
          <header className="nx-panel__head">
            <div>
              <h2 className="nx-panel__title">Strengths and focus areas</h2>
              <p className="nx-panel__sub">Evidence summaries are illustrative and explainable</p>
            </div>
          </header>
          <div className="nx-callout-list">
            {strengthsFocus.map((f) => (
              <article key={f.title} className={"nx-callout nx-callout--" + f.kind}>
                <h3 className="nx-callout__title">{f.title}</h3>
                <p className="nx-callout__body">{f.body}</p>
              </article>
            ))}
          </div>
          <div className="nx-difficulties">
            <span className="nx-difficulties__label">Recurring difficulty categories</span>
            <div className="nx-chips">
              {difficultyCategories.map((d) => <span key={d} className="nx-chip nx-chip--soft">{d}</span>)}
            </div>
          </div>
        </section>
      </div>

      <div className="nx-overview__grid nx-overview__grid--bottom">
        <section className="nx-panel">
          <header className="nx-panel__head">
            <div>
              <h2 className="nx-panel__title">Recommended courses</h2>
              <p className="nx-panel__sub">Reasons shown for transparency</p>
            </div>
            <button className="nx-panel__link" onClick={() => navigate("/app/skillquest")}>
              Open SkillQuest
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
          </header>
          <ul className="nx-recos">
            <li className="nx-reco">
              <div className="nx-reco__title">Testing React Applications</div>
              <div className="nx-reco__reason">Because Testing is flagged as a focus area.</div>
            </li>
            <li className="nx-reco">
              <div className="nx-reco__title">State Management Deep Dive</div>
              <div className="nx-reco__reason">Because Async state recurs in difficulty categories.</div>
            </li>
            <li className="nx-reco">
              <div className="nx-reco__title">TypeScript for React Devs</div>
              <div className="nx-reco__reason">Because generics constraints came up in sample evidence.</div>
            </li>
          </ul>
        </section>

        <section className="nx-panel">
          <header className="nx-panel__head">
            <div>
              <h2 className="nx-panel__title">Your progress this week</h2>
              <p className="nx-panel__sub">Illustrative daily activity</p>
            </div>
          </header>
          <div className="nx-weekbars" aria-hidden="true">
            {[38, 62, 48, 80, 55, 90, 42].map((v, i) => (
              <div key={i} className="nx-weekbars__col">
                <div className="nx-weekbars__bar"><span style={{ height: v + "%" }} /></div>
                <span className="nx-weekbars__label">{["M","T","W","T","F","S","S"][i]}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
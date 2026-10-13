import { useState } from "react";
import { courses, skillRows } from "../../data/mock.js";
import "./SkillQuest.css";

const TABS = ["Courses", "Progress", "Insights"];

export default function SkillQuest() {
  const [tab, setTab] = useState("Courses");

  return (
    <div className="nx-sq">
      <header className="nx-sq__head">
        <div>
          <span className="nx-eyebrow">SkillQuest</span>
          <h1 className="nx-sq__title">Personal intelligence designed for growth</h1>
          <p className="nx-sq__sub">Skills, progress, and recommendations.</p>
        </div>
        <div className="nx-sq__tabs" role="tablist">
          {TABS.map((t) => (
            <button key={t} role="tab" aria-selected={tab === t}
              className={"nx-sq__tab " + (tab === t ? "is-active" : "")}
              onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>
      </header>

      {tab === "Courses" && (
        <section className="nx-sq__courses" aria-label="Courses">
          {courses.map((c) => (
            <article key={c.id} className="nx-course">
              <div className="nx-course__thumb" aria-hidden="true"><span>{c.tag}</span></div>
              <div className="nx-course__body">
                <header className="nx-course__head">
                  <h3 className="nx-course__title">{c.title}</h3>
                  <span className="nx-course__level">{c.level}</span>
                </header>
                <div className="nx-course__meta">
                  <span>{c.lessons} lessons</span><span>·</span><span>{c.duration}</span>
                </div>
                <div className="nx-course__progress">
                  <div className="nx-bar"><span style={{ width: c.progress + "%" }} /></div>
                  <span className="nx-course__pct">{c.progress}%</span>
                </div>
                <button className="nx-btn nx-btn--primary nx-course__cta">
                  {c.progress > 0 ? "Continue" : "Start course"}
                </button>
              </div>
            </article>
          ))}
        </section>
      )}

      {tab === "Progress" && (
        <section className="nx-sq__progress" aria-label="Learning progress">
          <div className="nx-panel">
            <header className="nx-panel__head"><h2 className="nx-panel__title">Skill proficiency</h2></header>
            <div className="nx-skillgrid">
              {skillRows.map((s) => (
                <div key={s.name} className="nx-skill">
                  <div className="nx-skill__head">
                    <span className="nx-skill__name">{s.name}</span>
                    <span className={"nx-pill nx-pill--" + s.tone}>{s.status}</span>
                  </div>
                  <div className="nx-bar"><span style={{ width: s.value + "%" }} /></div>
                  <span className="nx-skill__meta">{s.value}% proficiency</span>
                </div>
              ))}
            </div>
          </div>

          <div className="nx-panel">
            <header className="nx-panel__head">
              <h2 className="nx-panel__title">Weekly learning minutes</h2>
              <p className="nx-panel__sub">Illustrative distribution</p>
            </header>
            <div className="nx-weekbars" aria-hidden="true">
              {[38, 62, 48, 80, 55, 90, 42].map((v, i) => (
                <div key={i} className="nx-weekbars__col">
                  <div className="nx-weekbars__bar"><span style={{ height: v + "%" }} /></div>
                  <span className="nx-weekbars__label">{["M","T","W","T","F","S","S"][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {tab === "Insights" && (
        <section className="nx-sq__insights">
          <article className="nx-panel nx-insight">
            <span className="nx-insight__tag nx-insight__tag--good">Strength</span>
            <h3 className="nx-insight__title">React component composition</h3>
            <p className="nx-insight__body">You consistently extract reusable patterns. Your state ownership decisions trend toward predictable, testable code.</p>
          </article>
          <article className="nx-panel nx-insight">
            <span className="nx-insight__tag nx-insight__tag--warn">Focus</span>
            <h3 className="nx-insight__title">Test intent and integration setup</h3>
            <p className="nx-insight__body">Fixture design and generic constraints appear repeatedly as friction points.</p>
          </article>
          <article className="nx-panel nx-insight">
            <span className="nx-insight__tag">Where you are strong</span>
            <h3 className="nx-insight__title">Frontend composition and accessibility</h3>
            <p className="nx-insight__body">Strong in JSX structure, keyboard focus handling, and semantic HTML.</p>
          </article>
          <article className="nx-panel nx-insight">
            <span className="nx-insight__tag nx-insight__tag--warn">Where to improve</span>
            <h3 className="nx-insight__title">Async state and error handling</h3>
            <p className="nx-insight__body">Focus next on async state boundaries, race conditions, and error-resilient UI.</p>
          </article>
        </section>
      )}
    </div>
  );
}
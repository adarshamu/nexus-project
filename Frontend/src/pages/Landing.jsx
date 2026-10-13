import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Logo from "../components/Logo.jsx";
import "./Landing.css";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const nodes = el.querySelectorAll(".nx-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

export default function Landing() {
  const navigate = useNavigate();
  const rootRef = useReveal();

  return (
    <div ref={rootRef} className="nx-landing">
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="nx-hero">
        <div className="nx-hero__logo-bg" aria-hidden="true">
          <Logo size={640} showText={false} />
        </div>

        <div className="nx-container nx-hero__inner">
          <p className="nx-hero__eyebrow">See · Solve · Learn · Grow · Remember</p>

          <h1 className="nx-hero__title">
            Your coding journey.
            <br />
            Your next <em>breakthrough.</em>
          </h1>

          <p className="nx-hero__sub">
            Turn real development experience into personalized learning
            insights — and find the right people when you need technical help.
          </p>

          <div className="nx-hero__cta">
            <button
              className="nx-btn nx-btn--accent nx-hero__get-started"
              onClick={() => navigate("/login")}
            >
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
            <button
              className="nx-btn nx-btn--ghost"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Features
            </button>
          </div>

          <p className="nx-hero__trust">
            Open source · Runs on your stack · Built for developers
          </p>
        </div>
      </section>

      {/* ============ PROBLEM → SOLUTION ============ */}
      <section id="features" className="nx-section nx-problem">
        <div className="nx-container">
          <div className="nx-problem__head nx-reveal">
            <span className="nx-eyebrow">Problem → Solution</span>
            <h2 className="nx-problem__title">Less guesswork. More useful next steps.</h2>
            <p className="nx-problem__sub">
              Nexus addresses skill uncertainty, recurring technical issues, and
              the challenge of finding relevant human expertise — without
              turning the experience into surveillance.
            </p>
          </div>

          <div className="nx-problem__grid">
            <article className="nx-problem__card nx-reveal">
              <span className="nx-problem__num">01</span>
              <h3 className="nx-problem__card-title">Skill uncertainty</h3>
              <p className="nx-problem__card-text">
                See a concise, explainable view of strengths, developing skills,
                and evidence-backed focus areas.
              </p>
            </article>
            <article className="nx-problem__card nx-reveal">
              <span className="nx-problem__num">02</span>
              <h3 className="nx-problem__card-title">Recurring issues</h3>
              <p className="nx-problem__card-text">
                Spot repeated technical difficulty categories and connect them
                to relevant learning resources.
              </p>
            </article>
            <article className="nx-problem__card nx-reveal">
              <span className="nx-problem__num">03</span>
              <h3 className="nx-problem__card-title">Expert help</h3>
              <p className="nx-problem__card-text">
                Use Human API to describe a problem and see experts ranked by
                relevance to that problem.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ SKILLQUEST ============ */}
      <section id="skillquest" className="nx-section nx-sq">
        <div className="nx-container nx-sq__inner">
          <div className="nx-sq__copy nx-reveal">
            <span className="nx-eyebrow">SkillQuest</span>
            <h2 className="nx-sq__title">Personal intelligence designed for growth.</h2>
            <p className="nx-sq__text">
              The primary Nexus experience — skills, progress, and recommendations.
            </p>
            <ul className="nx-sq__list">
              <li>Explainable proficiency across your tech stack</li>
              <li>Recommendations with reasons and limitations, never vague claims</li>
              <li>Insights into where you are strong and where to focus</li>
            </ul>
          </div>

          <div className="nx-sq__panel nx-reveal" aria-hidden="true">
            <div className="nx-sq__panel-head">
              <span className="nx-sq__panel-title">Illustrative proficiency</span>
              <span className="nx-sq__panel-badge">Sample</span>
            </div>
            {[
              { name: "React",      status: "Improving", value: 82, tone: "improving" },
              { name: "TypeScript", status: "Focus",     value: 64, tone: "focus" },
              { name: "Testing",    status: "Focus",     value: 58, tone: "focus" }
            ].map((s) => (
              <div className="nx-sq__row" key={s.name}>
                <div className="nx-sq__row-head">
                  <span className="nx-sq__row-name">{s.name}</span>
                  <span className={"nx-sq__pill nx-sq__pill--" + s.tone}>{s.status}</span>
                </div>
                <div className="nx-sq__bar"><span style={{ width: s.value + "%" }} /></div>
                <span className="nx-sq__row-value">{s.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HUMAN API ============ */}
      <section id="human-api" className="nx-section nx-ha">
        <div className="nx-container">
          <div className="nx-ha__head nx-reveal">
            <span className="nx-eyebrow">Human API</span>
            <h2 className="nx-ha__title">Find problem-specific expertise.</h2>
            <p className="nx-ha__sub">
              Describe a technical issue and see expert matches with reasons and live availability.
            </p>
          </div>

          <div className="nx-ha__stage nx-reveal">
            <div className="nx-ha__problem">
              <span className="nx-ha__label">Sample problem</span>
              <p className="nx-ha__problem-text">
                React state updates from a child modal are lost when the parent
                list re-renders.
              </p>
              <div className="nx-ha__tags">
                <span>React</span>
                <span>State management</span>
              </div>
            </div>

            <div className="nx-ha__arrow" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </div>

            <div className="nx-ha__match">
              <div className="nx-ha__match-head">
                <span className="nx-ha__avatar">AO</span>
                <div>
                  <div className="nx-ha__name">Amara Osei</div>
                  <div className="nx-ha__role">Senior Frontend Engineer</div>
                </div>
                <span className="nx-ha__status">
                  <span className="nx-ha__dot" />
                  Available
                </span>
              </div>
              <p className="nx-ha__reason">
                Highest match because the problem involves React state ownership,
                reducer updates, and modal lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how-it-works" className="nx-section nx-hiw">
        <div className="nx-container">
          <div className="nx-hiw__head nx-reveal">
            <span className="nx-eyebrow">How it works</span>
            <h2 className="nx-hiw__title">A clear path from evidence to growth.</h2>
          </div>
          <ol className="nx-hiw__steps">
            {[
              ["01", "Understand", "Review explainable strengths, developing skills, and focus areas."],
              ["02", "Discover",   "Use permitted sample evidence to understand recurring difficulty categories."],
              ["03", "Improve",    "Follow course recommendations tied to skills and learning goals."],
              ["04", "Grow",       "Learn from cohort patterns and preserve verified problem-solving knowledge."]
            ].map(([n, t, d]) => (
              <li key={n} className="nx-hiw__step nx-reveal">
                <span className="nx-hiw__num">{n}</span>
                <h3 className="nx-hiw__step-title">{t}</h3>
                <p className="nx-hiw__step-text">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ TRUST ============ */}
      <section className="nx-section nx-trust">
        <div className="nx-container">
          <div className="nx-trust__grid">
            <div className="nx-trust__copy nx-reveal">
              <span className="nx-eyebrow">Trust model</span>
              <h2 className="nx-trust__title">Designed around permission and clarity.</h2>
            </div>
            <ul className="nx-trust__list">
              <li className="nx-reveal"><strong>User-triggered.</strong> Assistance starts when the person asks for it.</li>
              <li className="nx-reveal"><strong>Permission-aware.</strong> Explains an evidence-permission concept without claiming enforcement.</li>
              <li className="nx-reveal"><strong>Human expertise.</strong> Human API highlights relevant experts instead of popularity rankings.</li>
              <li className="nx-reveal"><strong>Explainable insights.</strong> Recommendations include reasons and limitations, never unsupported claims.</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
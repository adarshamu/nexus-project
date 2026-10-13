import { useState } from "react";
import { experts, conversationSeeds, demoMessages } from "../../data/mock.js";
import LandscapeAvatar from "../../components/LandscapeAvatar.jsx";
import "./HumanAPI.css";

export default function HumanAPI() {
  const [activeExpert, setActiveExpert] = useState(null);

  if (activeExpert) {
    return <ChatView expert={activeExpert} onBack={() => setActiveExpert(null)} />;
  }
  return <ExpertsList onOpenChat={setActiveExpert} />;
}

/* ============================================================
   EXPERTS LIST
   ============================================================ */
function ExpertsList({ onOpenChat }) {
  return (
    <div className="nx-ha">
      <header className="nx-ha__head">
        <div>
          <span className="nx-eyebrow">Human API</span>
          <h1 className="nx-ha__title">Find problem-specific expertise</h1>
          <p className="nx-ha__sub">
            Pick an expert to open a chat. If they are offline, their Bot steps
            in so you can still move forward.
          </p>
        </div>
      </header>

      <section className="nx-ha__experts">
        {experts.map((e) => {
          const available = e.status === "active";
          return (
            <article key={e.id} className="nx-ecard">
              <LandscapeAvatar variant={e.avatar} size={64} />

              <div className="nx-ecard__body">
                <div className="nx-ecard__line">
                  <span className="nx-ecard__name">{e.name}</span>
                  <span className="nx-ecard__score">{e.proficiency}%</span>
                  <span className="nx-ecard__skill">{e.skill}</span>
                  {available && (
                    <span className="nx-ecard__status">
                      <span className="nx-ecard__dot" />
                      active
                    </span>
                  )}
                  {!available && (
                    <span className="nx-ecard__status nx-ecard__status--off">
                      not available
                    </span>
                  )}
                </div>
                <p className="nx-ecard__reason">{e.reason}</p>

                <div className="nx-ecard__footer">
                  {available ? (
                    <button
                      className="nx-btn nx-btn--accent nx-ecard__cta"
                      onClick={() => onOpenChat(e)}
                    >
                      Chat with {e.name}
                    </button>
                  ) : (
                    <button
                      className="nx-btn nx-btn--primary nx-ecard__cta"
                      onClick={() => onOpenChat(e)}
                    >
                      Chat with {e.name}'s Bot
                    </button>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

/* ============================================================
   CHAT VIEW
   ============================================================ */
function ChatView({ expert, onBack }) {
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState(demoMessages);
  const isBot = expert.status !== "active";

  const send = (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setMessages((m) => [
      ...m,
      { id: m.length + 1, from: "me", text, time: nowTime() }
    ]);
    setDraft("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: m.length + 1,
          from: "expert",
          text: isBot
            ? `(${expert.name}'s Bot) Noted. Cross-referencing the shared knowledge base — one moment.`
            : "Got it. Let me look at that now.",
          time: nowTime()
        }
      ]);
    }, 700);
  };

  return (
    <div className="nx-chat">
      {/* Left: conversations */}
      <aside className="nx-chat__side">
        <div className="nx-chat__search">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
          <input type="text" placeholder="Search conversations" />
        </div>

        <ul className="nx-chat__convs">
          {conversationSeeds.map((c) => {
            const isActive = c.name === expert.name;
            return (
              <li key={c.id} className={"nx-conv " + (isActive ? "is-active" : "")}>
                <LandscapeAvatar variant={c.avatar} size={40} />
                <div className="nx-conv__body">
                  <div className="nx-conv__row">
                    <span className="nx-conv__name">{c.name}</span>
                    <span className="nx-conv__time">{c.time}</span>
                  </div>
                  <div className="nx-conv__row">
                    <span className="nx-conv__preview">{c.preview}</span>
                    {c.unread > 0 && <span className="nx-conv__badge">{c.unread}</span>}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Right: chat panel */}
      <section className="nx-chat__panel">
        <header className="nx-chat__head">
          <button className="nx-chat__back" onClick={onBack} aria-label="Back to experts">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>

          <LandscapeAvatar variant={expert.avatar} size={44} />

          <div className="nx-chat__who">
            <div className="nx-chat__name">
              {expert.name}
              {isBot && <span className="nx-chat__botlabel"> · Bot</span>}
            </div>
            <div className="nx-chat__tags">
              <span>{expert.proficiency}%</span>
              <span>{expert.skill}</span>
            </div>
          </div>

          <span className={"nx-chat__status nx-chat__status--" + statusTone(expert.status)}>
            <span className="nx-chat__dot" />
            {statusLabel(expert.status)}
          </span>
        </header>

        <details className="nx-chat__context">
          <summary>Problem context</summary>
          <p>
            React state updates from a child modal are lost when the parent
            list re-renders.
          </p>
        </details>

        <div className="nx-chat__stream">
          <div className="nx-chat__daymark">Today · local history</div>

          {messages.map((m) => (
            <div key={m.id} className={"nx-msg nx-msg--" + (m.from === "me" ? "me" : "expert")}>
              <div className="nx-msg__bubble">{m.text}</div>
              <div className="nx-msg__meta">{m.time} · Read</div>
            </div>
          ))}
        </div>

        <form className="nx-chat__composer" onSubmit={send}>
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={"Message " + expert.name + (isBot ? "'s Bot…" : "…")}
          />
          <button type="submit" aria-label="Send" className="nx-chat__send">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2 11 13"/>
              <path d="M22 2 15 22l-4-9-9-4Z"/>
            </svg>
          </button>
        </form>
      </section>
    </div>
  );
}

function statusTone(s) {
  if (s === "active") return "good";
  if (s === "busy") return "warn";
  return "muted";
}
function statusLabel(s) {
  if (s === "active") return "Available";
  if (s === "busy") return "Busy";
  return "Offline";
}
function nowTime() {
  const d = new Date();
  return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
}
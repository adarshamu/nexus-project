import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="nx-nav">
      <div className="nx-container nx-nav__inner">
        <Link to="/" className="nx-nav__brand" aria-label="Nexus home">
          <Logo size={36} />
        </Link>

        <nav className="nx-nav__links" aria-label="Main">
          <button onClick={() => scrollTo("features")} className="nx-nav__link">Features</button>
          <button onClick={() => scrollTo("skillquest")} className="nx-nav__link">SkillQuest</button>
          <button onClick={() => scrollTo("human-api")} className="nx-nav__link">Human API</button>
          <button onClick={() => scrollTo("how-it-works")} className="nx-nav__link">How It Works</button>
        </nav>

        <div className="nx-nav__actions">
          <ThemeToggle />
          <button className="nx-nav__login" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
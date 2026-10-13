import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="nx-foot">
      <div className="nx-container nx-foot__inner">
        <div className="nx-foot__brand">
          <Logo size={48} />
          <p className="nx-foot__tagline">See. Solve. Learn. Grow. Remember.</p>
        </div>

        <nav className="nx-foot__col" aria-label="Product">
          <h4 className="nx-foot__head">Product</h4>
          <ul>
            <li><Link to="/login">SkillQuest</Link></li>
            <li><Link to="/login">Human API</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        <div className="nx-foot__meta">
          <p>© {new Date().getFullYear()} Nexus. All rights reserved.</p>
          <p>Built for developers who want to grow deliberately.</p>
        </div>
      </div>
    </footer>
  );
}
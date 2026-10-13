import { Link } from "react-router-dom";
import Logo from "../components/Logo.jsx";
import "./ServerError.css";

export default function ServerError() {
  return (
    <div className="nx-500">
      <div className="nx-500__card">
        <Link to="/" className="nx-500__brand" aria-label="Nexus home">
          <Logo size={40} />
        </Link>

        {/* Illustration — cat + wires + big 500 behind */}
        <div className="nx-500__art" aria-hidden="true">
          <span className="nx-500__bg-number">500</span>

          <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="nx-cat-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%"   stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
              <linearGradient id="nx-cat-tail" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>

            {/* Squiggly wires behind the cat */}
            <path
              d="M20 200 L120 200 Q130 200 130 190 L130 178 Q130 168 140 168 L180 168"
              stroke="#FACC15"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M180 168 L210 168 Q220 168 220 178 L220 190 Q220 200 230 200 L300 200"
              stroke="#7C3AED"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Cat — tail */}
            <path
              d="M230 130 Q270 130 275 160 Q278 185 255 195 Q235 202 220 190"
              stroke="url(#nx-cat-tail)"
              strokeWidth="16"
              strokeLinecap="round"
              fill="none"
            />

            {/* Cat — body */}
            <path
              d="M110 130 Q100 170 108 200 L232 200 Q240 170 228 130 Z"
              fill="url(#nx-cat-grad)"
            />

            {/* Cat — head */}
            <path
              d="M130 78 Q125 55 118 48 L140 62 Q152 52 170 52 Q188 52 200 62 L222 48 Q215 55 210 78 Q215 95 205 112 Q190 126 170 126 Q150 126 135 112 Q125 95 130 78 Z"
              fill="url(#nx-cat-grad)"
            />

            {/* Inner ears */}
            <path d="M128 62 L135 58 L138 68 Z" fill="#A78BFA" opacity=".5" />
            <path d="M212 62 L205 58 L202 68 Z" fill="#A78BFA" opacity=".5" />

            {/* Eyes */}
            <ellipse cx="155" cy="82" rx="7" ry="8" fill="#FDE68A" />
            <ellipse cx="185" cy="82" rx="7" ry="8" fill="#FDE68A" />
            <ellipse cx="155" cy="83" rx="2" ry="4" fill="#111827" />
            <ellipse cx="185" cy="83" rx="2" ry="4" fill="#111827" />

            {/* Nose */}
            <path d="M168 96 L165 100 L171 100 Z" fill="#EC4899" />

            {/* Whiskers */}
            <g stroke="#111827" strokeWidth="1.4" strokeLinecap="round" opacity=".65">
              <line x1="130" y1="94" x2="112" y2="92" />
              <line x1="130" y1="99" x2="112" y2="100" />
              <line x1="210" y1="94" x2="228" y2="92" />
              <line x1="210" y1="99" x2="228" y2="100" />
            </g>
          </svg>
        </div>

        <h1 className="nx-500__title">Sorry, unexpected error</h1>
        <p className="nx-500__sub">
          We are working on fixing the problem. Please try again in a moment.
        </p>

        <div className="nx-500__actions">
          <Link to="/" className="nx-btn nx-btn--primary nx-500__btn">
            Go back home
          </Link>
          <button
            type="button"
            className="nx-btn nx-btn--ghost nx-500__btn"
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
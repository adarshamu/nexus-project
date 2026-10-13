import "./LandscapeAvatar.css";

/* Flat-design scene avatars.
   Each variant declares its own preferred shape (circle or square).
   Pass `rounded` to override. */
export default function LandscapeAvatar({
  variant = "forestCabin",
  size = 44,
  rounded,               // "circle" | "square" — optional override
  className = ""
}) {
  const scene = SCENES[variant] || SCENES.forestCabin;
  const shape = rounded || scene.shape || "circle";
  const clipId = `nx-av-${variant}-${size}-${shape}`;
  const r = shape === "circle" ? 32 : 12;
  const cls = `nx-av nx-av--${shape} ${className}`;

  return (
    <span className={cls} style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" width="100%" height="100%" aria-hidden="true">
        <defs>
          <clipPath id={clipId}>
            <rect x="0" y="0" width="64" height="64" rx={r} />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          {scene.render()}
        </g>
      </svg>
    </span>
  );
}

/* Every scene in display order. */
export const AVATAR_VARIANTS = [
  /* --- circular scenes --- */
  "forestCabin",
  "redVillage",
  "nightVillage",
  "hillsSun",
  "waterfall",
  "greenValley",
  "abstractPurple",
  "city",
  "iceberg",
  "greenFlat",
  "desertSun",
  "abstractV",
  "underwater",
  "paleHills",
  "tealMountains",
  "blueOceanTree",
  "whitePeaks",
  "blueRiver",
  "earthTree",
  "forestTrees",
  "rainbow",
  "desertTree",
  "eye",
  "planet",
  /* --- rounded-square scenes --- */
  "pinkGreen",
  "pastelLandscape",
  "greenClouds",
  "blueLandscape"
];

export const AVATAR_LABELS = {
  forestCabin:    "Forest cabin",
  redVillage:     "Red village",
  nightVillage:   "Night village",
  hillsSun:       "Sunny hills",
  waterfall:      "Waterfall",
  greenValley:    "Green valley",
  abstractPurple: "Purple hills",
  city:           "City skyline",
  iceberg:        "Iceberg",
  greenFlat:      "Green flat",
  desertSun:      "Desert sun",
  abstractV:      "Geometric",
  underwater:     "Underwater",
  paleHills:      "Pale hills",
  tealMountains:  "Teal mountains",
  blueOceanTree:  "Blue ocean",
  whitePeaks:     "Snow peaks",
  blueRiver:      "Blue river",
  earthTree:      "Earth tree",
  forestTrees:    "Forest",
  rainbow:        "Rainbow",
  desertTree:     "Yellow desert",
  eye:            "Blue eye",
  planet:         "Planet",
  pinkGreen:      "Pink & green",
  pastelLandscape:"Pastel land",
  greenClouds:    "Green sky",
  blueLandscape:  "Blue river"
};

/* ============================================================
   SCENES
   ============================================================ */

const SCENES = {

  /* ---------------- CIRCULAR ---------------- */

  forestCabin: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#A7F3D0" />
        <circle cx="46" cy="14" r="5" fill="#FCD34D" />
        <path d="M0 40 L12 26 L22 36 L34 22 L46 34 L56 26 L64 34 L64 64 L0 64 Z" fill="#4B5563" />
        <path d="M0 40 L8 32 L14 40 Z M4 40 L14 40 L14 52 L4 52 Z" fill="#1E40AF" />
        <path d="M14 40 L24 32 L34 40 Z M18 40 L30 40 L30 52 L18 52 Z" fill="#DC2626" />
        <path d="M0 44 Q16 38 32 44 T64 42 L64 64 L0 64 Z" fill="#166534" />
        <path d="M0 54 L10 48 L20 54 L30 48 L42 54 L54 48 L64 54 L64 64 L0 64 Z" fill="#15803D" />
        <rect y="58" width="64" height="6" fill="#FBBF24" />
      </>
    )
  },

  redVillage: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#FEF3C7" />
        <rect y="30" width="64" height="14" fill="#FDE68A" opacity=".7" />
        <rect y="44" width="64" height="6" fill="#CA8A04" />
        <rect y="50" width="64" height="14" fill="#A16207" />
        {/* House 1 */}
        <rect x="3" y="34" width="18" height="16" fill="#FED7AA" />
        <path d="M0 34 L12 24 L24 34 Z" fill="#DC2626" />
        <rect x="6" y="38" width="4" height="4" fill="#0284C7" />
        <rect x="13" y="38" width="4" height="4" fill="#0284C7" />
        <rect x="6" y="44" width="4" height="4" fill="#0284C7" />
        {/* House 2 (bigger) */}
        <rect x="24" y="28" width="24" height="22" fill="#FEF9C3" />
        <path d="M22 28 L36 16 L50 28 Z" fill="#DC2626" />
        <rect x="28" y="34" width="4" height="4" fill="#0284C7" />
        <rect x="36" y="34" width="4" height="4" fill="#0284C7" />
        <rect x="28" y="42" width="4" height="4" fill="#0284C7" />
        <rect x="36" y="42" width="4" height="4" fill="#0284C7" />
        {/* House 3 */}
        <rect x="50" y="34" width="14" height="16" fill="#FED7AA" />
        <path d="M48 34 L57 26 L66 34 Z" fill="#DC2626" />
        {/* Trees */}
        <ellipse cx="16" cy="46" rx="3.5" ry="6" fill="#22C55E" />
        <ellipse cx="21" cy="48" rx="2.5" ry="5" fill="#16A34A" />
        <rect x="15" y="50" width="2" height="4" fill="#78350F" />
        <rect x="20" y="52" width="2" height="3" fill="#78350F" />
      </>
    )
  },

  nightVillage: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#6366F1" />
        <circle cx="16" cy="14" r="1.6" fill="#F1F5F9" />
        <circle cx="44" cy="10" r="1.4" fill="#F1F5F9" />
        <circle cx="12" cy="26" r="1.2" fill="#F1F5F9" />
        <circle cx="56" cy="20" r="1" fill="#F1F5F9" />
        <circle cx="32" cy="6" r="1.4" fill="#F1F5F9" />
        <circle cx="50" cy="28" r="1.2" fill="#F1F5F9" />
        <path d="M0 32 L10 22 L20 30 L32 18 L46 30 L56 22 L64 30 L64 64 L0 64 Z" fill="#4338CA" />
        <path d="M0 42 L16 36 L32 42 L48 36 L64 42 L64 64 L0 64 Z" fill="#312E81" />
        {/* Houses */}
        <path d="M6 52 L6 44 L14 44 L14 52 Z" fill="#1E1B4B" />
        <rect x="8" y="46" width="2" height="2" fill="#FDE68A" />
        <rect x="11" y="46" width="2" height="2" fill="#FDE68A" />
        <path d="M22 54 L22 44 L34 44 L34 54 Z" fill="#1E1B4B" />
        <rect x="24" y="46" width="2" height="3" fill="#FDE68A" />
        <rect x="28" y="46" width="2" height="3" fill="#FDE68A" />
        <rect x="24" y="51" width="2" height="2" fill="#FDE68A" />
        <path d="M44 52 L44 44 L54 44 L54 52 Z" fill="#1E1B4B" />
        <rect x="46" y="46" width="2" height="2" fill="#FDE68A" />
        <rect x="50" y="46" width="2" height="2" fill="#FDE68A" />
      </>
    )
  },

  hillsSun: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#A5F3FC" />
        <ellipse cx="30" cy="30" rx="14" ry="14" fill="#F0FDF4" opacity=".7" />
        <circle cx="34" cy="36" r="10" fill="#F0FDF4" />
        {/* clouds */}
        <ellipse cx="14" cy="14" rx="8" ry="3.5" fill="#FFFFFF" />
        <ellipse cx="48" cy="18" rx="10" ry="3.5" fill="#FFFFFF" />
        <ellipse cx="30" cy="10" rx="6" ry="3" fill="#FFFFFF" />
        {/* hills */}
        <path d="M0 36 Q16 26 32 34 T64 32 L64 64 L0 64 Z" fill="#22C55E" />
        <path d="M0 44 Q14 38 28 44 T64 42 L64 64 L0 64 Z" fill="#16A34A" />
        <path d="M0 54 Q16 46 34 52 T64 50 L64 64 L0 64 Z" fill="#15803D" />
        {/* trees */}
        <ellipse cx="10" cy="30" rx="3" ry="6" fill="#22C55E" />
        <ellipse cx="14" cy="32" rx="2" ry="4" fill="#4ADE80" />
        <ellipse cx="52" cy="30" rx="4" ry="8" fill="#22C55E" />
        <ellipse cx="57" cy="32" rx="2.5" ry="5" fill="#4ADE80" />
        <rect x="9" y="34" width="1.5" height="4" fill="#166534" />
        <rect x="51" y="36" width="2" height="4" fill="#166534" />
        <rect x="56" y="36" width="1.5" height="3" fill="#166534" />
      </>
    )
  },

  waterfall: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#BAE6FD" />
        <circle cx="14" cy="10" r="2.5" fill="#FFFFFF" />
        <circle cx="46" cy="12" r="3" fill="#FFFFFF" />
        <circle cx="56" cy="18" r="2" fill="#FFFFFF" />
        <circle cx="28" cy="8" r="2" fill="#FFFFFF" />
        <path d="M0 30 L14 22 L28 30 L42 20 L58 30 L64 26 L64 64 L0 64 Z" fill="#7C3D3D" />
        <path d="M0 42 L20 34 L40 42 L60 34 L64 40 L64 64 L0 64 Z" fill="#57534E" />
        {/* Waterfall */}
        <rect x="14" y="26" width="36" height="20" fill="#F0F9FF" />
        <path d="M14 30 L20 40 L24 30 L30 42 L36 30 L42 40 L46 30 L50 38" stroke="#93C5FD" strokeWidth="1.4" fill="none" />
        {/* Foreground water */}
        <rect y="46" width="64" height="18" fill="#67E8F9" />
        <ellipse cx="12" cy="52" rx="8" ry="3.5" fill="#22C55E" />
        <ellipse cx="46" cy="54" rx="10" ry="4" fill="#22C55E" />
        <ellipse cx="30" cy="58" rx="6" ry="2.5" fill="#16A34A" />
        <ellipse cx="52" cy="50" rx="4" ry="2" fill="#78350F" />
      </>
    )
  },

  greenValley: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#CFFAFE" />
        <circle cx="46" cy="12" r="4" fill="#FDE68A" />
        <ellipse cx="20" cy="14" rx="7" ry="2.8" fill="#FFFFFF" />
        <ellipse cx="52" cy="20" rx="6" ry="2.4" fill="#FFFFFF" />
        <path d="M0 32 L14 24 L26 32 L40 22 L54 32 L64 26 L64 64 L0 64 Z" fill="#94A3B8" />
        <path d="M14 24 L20 30 L8 30 Z" fill="#F1F5F9" />
        <path d="M40 22 L46 28 L34 28 Z" fill="#F1F5F9" />
        <path d="M0 42 L14 36 L24 42 L36 36 L48 42 L60 36 L64 42 L64 64 L0 64 Z" fill="#22C55E" />
        <path d="M0 50 L14 46 L28 50 L42 46 L56 50 L64 46 L64 64 L0 64 Z" fill="#15803D" />
        {/* stream */}
        <path d="M18 42 Q26 44 24 50 Q22 54 30 56 L38 56 Q32 52 34 48 Q36 42 30 40 Q24 38 18 42 Z" fill="#38BDF8" />
      </>
    )
  },

  abstractPurple: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#5B21B6" />
        <path d="M0 40 L10 26 L20 36 L28 20 L40 32 L50 22 L64 34 L64 64 L0 64 Z" fill="#4C1D95" />
        <path d="M0 46 L12 34 L24 44 L34 30 L48 42 L60 32 L64 40 L64 64 L0 64 Z" fill="#7C3AED" />
        <path d="M22 52 Q26 46 32 48 Q36 46 40 50 L40 58 L22 58 Z" fill="#FDE68A" />
        <path d="M30 50 Q34 46 38 50 L38 56 L30 56 Z" fill="#FCD34D" />
        <circle cx="46" cy="52" r="5" fill="#FCD34D" opacity=".7" />
      </>
    )
  },

  city: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#DBEAFE" />
        <path d="M0 28 L14 22 L28 28 L44 20 L58 26 L64 24 L64 40 L0 40 Z" fill="#A7F3D0" />
        <path d="M0 32 L16 26 L30 32 L46 24 L60 30 L64 28 L64 42 L0 42 Z" fill="#94A3B8" opacity=".6" />
        <rect y="40" width="64" height="24" fill="#84CC16" />
        <rect x="4"  y="30" width="8"  height="18" fill="#FED7AA" />
        <rect x="14" y="22" width="10" height="26" fill="#FEF3C7" />
        <rect x="26" y="14" width="12" height="34" fill="#38BDF8" />
        <rect x="40" y="26" width="9"  height="22" fill="#FDE68A" />
        <rect x="51" y="20" width="9"  height="28" fill="#94A3B8" />
        <rect x="32" y="8" width="2" height="8" fill="#475569" />
        <circle cx="33" cy="8" r="2" fill="#F87171" />
        <ellipse cx="14" cy="52" rx="10" ry="4" fill="#16A34A" />
        <ellipse cx="40" cy="54" rx="14" ry="5" fill="#15803D" />
        <ellipse cx="58" cy="52" rx="8" ry="4" fill="#16A34A" />
        <path d="M16 56 Q22 52 28 54 Q22 58 16 56 Z" fill="#65A30D" />
      </>
    )
  },

  iceberg: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#BAE6FD" />
        <ellipse cx="20" cy="10" rx="6" ry="2.4" fill="#FFFFFF" />
        <ellipse cx="44" cy="8" rx="7" ry="2.6" fill="#FFFFFF" />
        <ellipse cx="56" cy="16" rx="5" ry="2" fill="#FFFFFF" />
        <path d="M0 32 L12 16 L24 32 L34 14 L46 32 L56 18 L64 32 L64 44 L0 44 Z" fill="#78350F" />
        <path d="M0 40 L18 32 L36 40 L54 34 L64 40 L64 48 L0 48 Z" fill="#57534E" />
        <rect y="42" width="64" height="22" fill="#06B6D4" />
        <path d="M10 42 L14 34 L18 42 L22 32 L28 42 L32 34 L38 42 L44 32 L50 42 L56 34 L60 42 L64 38 L64 46 L0 46 L0 42 Z" fill="#F0F9FF" />
        <ellipse cx="14" cy="48" rx="6" ry="2" fill="#F8FAFC" />
        <ellipse cx="48" cy="50" rx="7" ry="2.5" fill="#F8FAFC" />
      </>
    )
  },

  greenFlat: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#22C55E" />
        <path d="M0 30 L10 26 L20 30 L28 22 L36 30 L44 26 L54 30 L64 24 L64 44 L0 44 Z" fill="#1E293B" />
        <path d="M0 34 L10 30 L20 34 L28 26 L36 34 L44 30 L54 34 L64 28 L64 44 L0 44 Z" fill="#0F172A" />
        {/* cabin 1 */}
        <path d="M6 44 L18 34 L30 44 L30 62 L6 62 Z" fill="#1E293B" />
        <path d="M12 58 L12 50 Q14 48 16 50 L16 58 Z" fill="#22C55E" />
        {/* cabin 2 */}
        <path d="M38 42 L48 34 L58 42 L58 58 L38 58 Z" fill="#1E293B" />
        <path d="M44 54 L44 46 Q46 44 48 46 L48 54 Z" fill="#22C55E" />
        {/* birds */}
        <path d="M20 12 L24 14 L28 12" stroke="#1E293B" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M26 18 L30 20 L34 18" stroke="#1E293B" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      </>
    )
  },

  desertSun: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#FDE68A" />
        <path d="M0 42 L10 34 L22 42 L36 30 L52 42 L64 34 L64 64 L0 64 Z" fill="#FBBF24" />
        <path d="M0 48 L12 42 L24 48 L40 40 L56 48 L64 44 L64 64 L0 64 Z" fill="#F59E0B" />
        <path d="M0 54 L14 50 L30 54 L46 48 L62 54 L64 54 L64 64 L0 64 Z" fill="#B45309" />
        <path d="M0 40 L10 32 L22 40 L36 28 L52 40 L64 32 L64 40 Z" fill="#DC2626" />
      </>
    )
  },

  abstractV: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#7DD3FC" />
        {/* orange */}
        <path d="M0 18 L32 18 Q38 18 38 24 L38 64 L0 64 Z" fill="#F59E0B" />
        {/* dark red V */}
        <path d="M0 26 L32 26 Q36 26 36 30 L48 64 L20 64 Z" fill="#9A3412" />
        <path d="M64 26 L32 26 Q28 26 28 30 L16 64 L44 64 Z" fill="#9A3412" />
        {/* orange corners */}
        <rect y="14" width="10" height="8" fill="#F59E0B" />
        <rect x="54" y="14" width="10" height="8" fill="#F59E0B" />
        {/* red blocks */}
        <path d="M0 34 L22 34 L26 44 L0 44 Z" fill="#7C2D12" />
        <path d="M64 34 L42 34 L38 44 L64 44 Z" fill="#7C2D12" />
        <path d="M0 48 L24 48 L30 60 L0 60 Z" fill="#F87171" />
        <path d="M64 48 L40 48 L34 60 L64 60 Z" fill="#B91C1C" />
      </>
    )
  },

  underwater: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#0D9488" />
        <rect y="8" width="64" height="24" fill="#0891B2" />
        <path d="M0 20 L10 14 L20 18 L30 10 L40 18 L50 12 L64 18 L64 32 L0 32 Z" fill="#155E75" />
        <path d="M16 32 L16 44 Q22 46 26 44 L26 32" stroke="#0D9488" strokeWidth="1.2" fill="none" />
        <rect x="26" y="24" width="10" height="20" fill="#67E8F9" />
        <path d="M26 26 L28 40 L30 28 L32 42 L34 28" stroke="#0EA5E9" strokeWidth="1" fill="none" />
        <rect y="42" width="64" height="22" fill="#14B8A6" />
        <path d="M0 44 Q8 42 16 44 Q24 46 32 44 Q40 42 48 44 Q56 46 64 44 L64 46 Q56 48 48 46 Q40 44 32 46 Q24 48 16 46 Q8 44 0 46 Z" fill="#0D9488" />
        <path d="M10 50 Q14 48 18 50" stroke="#0D9488" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M24 54 Q28 52 32 54" stroke="#0D9488" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M40 50 Q44 48 48 50" stroke="#0D9488" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M20 58 Q24 56 28 58" stroke="#0D9488" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M44 58 Q48 56 52 58" stroke="#0D9488" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </>
    )
  },

  paleHills: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#F8FAFC" />
        <ellipse cx="30" cy="24" rx="20" ry="14" fill="#E2E8F0" />
        <ellipse cx="40" cy="22" rx="14" ry="10" fill="#F1F5F9" />
        <path d="M8 34 Q18 24 28 34 L28 64 L8 64 Z" fill="#E2E8F0" />
        <path d="M28 32 Q38 22 48 32 L48 64 L28 64 Z" fill="#F1F5F9" />
        <path d="M0 42 Q14 34 30 42 Q44 48 64 44 L64 64 L0 64 Z" fill="#BAE6FD" />
        <ellipse cx="26" cy="52" rx="30" ry="6" fill="#DBEAFE" />
        <circle cx="42" cy="46" r="1.6" fill="#7DD3FC" />
        <circle cx="14" cy="42" r="1.4" fill="#7DD3FC" />
        <circle cx="54" cy="40" r="1.6" fill="#7DD3FC" />
        <circle cx="22" cy="26" r="1.8" fill="#7DD3FC" />
        <circle cx="48" cy="16" r="1.4" fill="#7DD3FC" />
      </>
    )
  },

  tealMountains: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#A5F3FC" />
        <circle cx="38" cy="26" r="6" fill="#FDE68A" />
        <path d="M0 52 L20 14 L32 34 L44 12 L64 44 L64 64 L0 64 Z" fill="#0F766E" />
        <path d="M20 14 L26 24 L14 24 Z" fill="#F1F5F9" />
        <path d="M44 12 L50 22 L38 22 Z" fill="#F1F5F9" />
        <path d="M0 58 L20 50 L40 56 L56 50 L64 54 L64 64 L0 64 Z" fill="#115E59" />
      </>
    )
  },

  blueOceanTree: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#7DD3FC" />
        <path d="M0 42 Q10 32 22 42 Q32 48 44 40 Q54 32 64 40 L64 64 L0 64 Z" fill="#60A5FA" />
        <path d="M0 46 Q14 38 28 46 Q42 52 56 44 L64 48 L64 64 L0 64 Z" fill="#0EA5E9" />
        <path d="M42 38 L58 38 L58 48 Q50 46 42 48 Z" fill="#1E293B" />
        <path d="M46 38 L48 28 L54 28 L56 38 Z" fill="#0F172A" />
        <path d="M50 38 L50 30 L52 30 L52 38 Z" fill="#22C55E" opacity=".5" />
        <path d="M44 42 L48 40 L52 42 L48 44 Z" fill="#0F172A" />
      </>
    )
  },

  whitePeaks: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#7DD3FC" />
        <circle cx="38" cy="24" r="6" fill="#FDE68A" />
        <path d="M0 52 L22 16 L34 36 L44 24 L64 48 L64 64 L0 64 Z" fill="#0EA5E9" />
        <path d="M22 16 L30 26 L14 26 Z" fill="#F8FAFC" />
        <path d="M22 20 L26 26 L18 26 Z" fill="#E2E8F0" />
        <path d="M44 24 L50 30 L38 30 Z" fill="#F8FAFC" />
        <path d="M0 58 L20 52 L40 58 L56 52 L64 56 L64 64 L0 64 Z" fill="#0284C7" />
      </>
    )
  },

  blueRiver: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#0EA5E9" />
        <rect y="34" width="64" height="30" fill="#78350F" />
        <path d="M0 26 Q16 22 32 26 Q48 30 64 26 L64 34 L0 34 Z" fill="#92400E" />
        <path d="M16 24 L16 34 L16 48 L22 48 L22 26 Z" fill="#1E293B" />
        <path d="M30 24 L30 34 L30 50 L36 50 L36 26 Z" fill="#1E293B" />
        <path d="M40 26 L40 34 L40 46 L46 46 L46 28 Z" fill="#1E293B" />
        <path d="M54 24 L54 34 L54 50 L60 50 L60 26 Z" fill="#1E293B" />
        <circle cx="44" cy="26" r="2" fill="#1E293B" />
        <path d="M42 28 Q44 30 46 28 Z" fill="#1E293B" />
      </>
    )
  },

  earthTree: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#7DD3FC" />
        <rect y="38" width="64" height="26" fill="#78350F" />
        <path d="M0 36 Q16 32 32 36 Q48 40 64 36 L64 38 L0 38 Z" fill="#92400E" />
        <path d="M6 36 Q12 30 18 36 L18 42 L6 42 Z" fill="#78350F" />
        <path d="M12 40 L12 30 L14 30 L14 40 Z" fill="#166534" />
        <circle cx="13" cy="24" r="6" fill="#15803D" />
        <circle cx="9" cy="22" r="3" fill="#16A34A" />
        <circle cx="17" cy="22" r="3" fill="#16A34A" />
        <circle cx="13" cy="18" r="3" fill="#16A34A" />
        <circle cx="13" cy="26" r="2" fill="#22C55E" />
        <rect x="42" y="32" width="2" height="6" fill="#166534" />
        <path d="M40 32 L46 28 L48 32 L50 30 L46 34 L44 32 Z" fill="#15803D" />
        <path d="M42 32 L44 30 L46 32 L44 34 Z" fill="#16A34A" />
        <rect x="30" y="42" width="3" height="3" fill="#0F172A" />
        <path d="M28 46 L34 46 L32 42 Z" fill="#0F172A" />
      </>
    )
  },

  forestTrees: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#22C55E" />
        {/* distant green hills */}
        <path d="M0 26 Q10 22 20 26 Q32 30 42 26 Q54 22 64 26 L64 36 L0 36 Z" fill="#16A34A" />
        {/* back trees */}
        <ellipse cx="6" cy="30" rx="5" ry="7" fill="#15803D" />
        <ellipse cx="18" cy="28" rx="6" ry="8" fill="#15803D" />
        <ellipse cx="48" cy="28" rx="6" ry="8" fill="#15803D" />
        <ellipse cx="60" cy="30" rx="5" ry="7" fill="#15803D" />
        {/* mid trees */}
        <ellipse cx="12" cy="34" rx="7" ry="9" fill="#16A34A" />
        <ellipse cx="26" cy="32" rx="8" ry="10" fill="#15803D" />
        <ellipse cx="44" cy="34" rx="8" ry="10" fill="#16A34A" />
        <ellipse cx="56" cy="32" rx="7" ry="9" fill="#15803D" />
        {/* center big tree */}
        <ellipse cx="32" cy="26" rx="12" ry="14" fill="#22C55E" />
        <ellipse cx="32" cy="24" rx="10" ry="11" fill="#4ADE80" />
        {/* trunks */}
        <rect x="30" y="38" width="4" height="14" fill="#78350F" />
        <rect x="12" y="40" width="2" height="14" fill="#78350F" />
        <rect x="25" y="40" width="2" height="14" fill="#78350F" />
        <rect x="37" y="40" width="2" height="14" fill="#78350F" />
        <rect x="43" y="40" width="2" height="14" fill="#78350F" />
        <rect x="55" y="38" width="2" height="14" fill="#78350F" />
        <rect x="5"  y="36" width="2" height="14" fill="#78350F" />
        {/* ground */}
        <path d="M0 50 Q20 46 34 50 Q50 54 64 50 L64 64 L0 64 Z" fill="#15803D" />
      </>
    )
  },

  rainbow: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#7DD3FC" />
        <path d="M0 20 Q8 16 16 20 Q20 22 22 18 L22 24 L0 24 Z" fill="#F8FAFC" />
        <path d="M42 26 Q50 22 58 26 Q62 30 64 26 L64 32 L42 32 Z" fill="#F8FAFC" />
        <circle cx="48" cy="20" r="12" fill="#FEF3C7" />
        <path d="M48 8 A12 12 0 0 0 36 20 L48 20 Z" fill="#F8FAFC" opacity=".7" />
        <rect y="42" width="64" height="22" fill="#0EA5E9" opacity=".15" />
        <path d="M0 44 Q32 40 64 44 L64 64 L0 64 Z" fill="#F8FAFC" />
        <path d="M0 48 A32 32 0 0 1 64 48 L64 56 L0 56 Z" fill="#7C3AED" />
        <path d="M0 50 A32 32 0 0 1 64 50 L64 56 L0 56 Z" fill="#3B82F6" />
        <path d="M0 52 A32 32 0 0 1 64 52 L64 56 L0 56 Z" fill="#FBBF24" />
        <path d="M0 54 A32 32 0 0 1 64 54 L64 56 L0 56 Z" fill="#EF4444" />
      </>
    )
  },

  desertTree: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#FEF9C3" />
        <path d="M0 24 Q16 20 32 24 Q48 28 64 24 L64 34 L0 34 Z" fill="#FDE68A" />
        <ellipse cx="18" cy="14" rx="8" ry="3" fill="#FEF3C7" />
        <ellipse cx="48" cy="18" rx="7" ry="2.8" fill="#FEF3C7" />
        <ellipse cx="32" cy="10" rx="6" ry="2.5" fill="#FEF3C7" />
        <path d="M0 34 Q16 30 32 34 Q48 38 64 34 L64 44 L0 44 Z" fill="#A3E635" />
        <path d="M0 44 Q16 40 32 44 Q48 48 64 44 L64 54 L0 54 Z" fill="#84CC16" />
        <path d="M0 54 Q16 50 32 54 Q48 58 64 54 L64 64 L0 64 Z" fill="#65A30D" />
        {/* Trees */}
        <ellipse cx="14" cy="28" rx="4" ry="8" fill="#22C55E" />
        <ellipse cx="14" cy="24" rx="3" ry="5" fill="#4ADE80" />
        <rect x="13" y="32" width="2" height="6" fill="#78350F" />
        <ellipse cx="22" cy="30" rx="3" ry="6" fill="#16A34A" />
        <rect x="21" y="34" width="2" height="5" fill="#78350F" />
        <ellipse cx="48" cy="28" rx="4" ry="8" fill="#22C55E" />
        <ellipse cx="48" cy="24" rx="3" ry="5" fill="#4ADE80" />
        <rect x="47" y="32" width="2" height="6" fill="#78350F" />
        {/* Dots */}
        <circle cx="20" cy="48" r="1.2" fill="#BEF264" />
        <circle cx="34" cy="52" r="1.4" fill="#BEF264" />
        <circle cx="44" cy="50" r="1.2" fill="#BEF264" />
        <circle cx="8"  cy="56" r="1.2" fill="#BEF264" />
        <circle cx="52" cy="58" r="1.4" fill="#BEF264" />
      </>
    )
  },

  eye: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#F1F5F9" />
        <circle cx="32" cy="32" r="30" fill="#E2E8F0" />
        <circle cx="32" cy="32" r="30" fill="none" stroke="#94A3B8" strokeWidth="2" />
        <circle cx="32" cy="32" r="21" fill="#0EA5E9" />
        <circle cx="32" cy="32" r="21" fill="none" stroke="#0369A1" strokeWidth="1.5" />
        <circle cx="32" cy="32" r="13" fill="#1E293B" />
        <circle cx="39" cy="25" r="7" fill="#FFFFFF" />
      </>
    )
  },

  planet: {
    shape: "circle",
    render: () => (
      <>
        <rect width="64" height="64" fill="#1E293B" />
        <circle cx="10" cy="14" r="1.2" fill="#94A3B8" />
        <circle cx="52" cy="10" r="1.4" fill="#94A3B8" />
        <circle cx="46" cy="54" r="1.2" fill="#94A3B8" />
        <circle cx="14" cy="50" r="1.4" fill="#94A3B8" />
        <circle cx="56" cy="34" r="1" fill="#94A3B8" />
        <circle cx="22" cy="26" r="1" fill="#94A3B8" />
        <circle cx="52" cy="16" r="5" fill="#FACC15" />
        <path d="M47 10 L51 8 L55 12 L51 14 Z" fill="#FEF3C7" />
        <circle cx="32" cy="36" r="16" fill="#38BDF8" />
        <path d="M18 32 Q26 24 40 26 Q46 30 40 34 Q26 32 22 36 Z" fill="#F1F5F9" />
        <path d="M24 44 Q32 40 42 44 Q46 48 40 50 Q30 48 24 50 Z" fill="#F1F5F9" />
        <path d="M22 32 Q30 28 40 30" stroke="#0EA5E9" strokeWidth="1" fill="none" />
      </>
    )
  },

  /* ---------------- ROUNDED SQUARE ---------------- */

  pinkGreen: {
    shape: "square",
    render: () => (
      <>
        <rect width="64" height="64" fill="#FED7AA" />
        <path d="M0 0 L22 0 L22 10 L10 12 L0 20 Z" fill="#FECACA" />
        <path d="M64 0 L40 0 L40 12 L52 16 L64 24 Z" fill="#FCA5A5" />
        <path d="M0 64 L0 44 L12 40 L18 52 L22 64 Z" fill="#FECACA" />
        <path d="M64 64 L64 42 L50 40 L46 52 L42 64 Z" fill="#FCA5A5" />
        <path d="M8 22 L16 22 L16 32 L12 32 L12 50 L8 50 L8 40 L6 40 L6 30 L8 30 Z" fill="#FBCFE8" />
        <path d="M52 22 L56 22 L56 32 L58 32 L58 46 L54 46 L54 34 L52 34 Z" fill="#FBCFE8" />
        <path d="M0 34 L18 34 L18 42 L12 42 L12 46 L22 46 L22 64 L0 64 Z" fill="#FCA5A5" opacity=".6" />
        <path d="M64 34 L46 34 L46 42 L52 42 L52 46 L42 46 L42 64 L64 64 Z" fill="#FCA5A5" opacity=".6" />
        <path d="M16 42 L48 42 L48 64 L16 64 Z" fill="#4ADE80" />
        <path d="M16 44 L48 44 L48 60 L16 60 Z" fill="#22C55E" />
        <path d="M20 46 Q32 42 44 46 L44 54 L20 54 Z" fill="#34D399" />
      </>
    )
  },

  pastelLandscape: {
    shape: "square",
    render: () => (
      <>
        <rect width="64" height="64" fill="#F8FAFC" />
        <rect x="8" y="14" width="18" height="6" rx="2" fill="#BAE6FD" />
        <rect x="34" y="18" width="22" height="7" rx="3" fill="#BAE6FD" />
        <path d="M0 22 Q10 14 22 22 Q34 32 46 22 L64 22 L64 44 L0 44 Z" fill="#FECACA" />
        <path d="M0 30 Q12 24 24 30 Q36 38 48 30 L64 28 L64 42 L0 42 Z" fill="#FED7AA" opacity=".8" />
        <rect y="42" width="64" height="22" fill="#A7F3D0" />
        <path d="M14 42 Q18 34 26 42 L26 64 L14 64 Z" fill="#6EE7B7" />
        <path d="M8 42 L12 42 L12 64 L8 64 Z" fill="#38BDF8" />
        <path d="M4 42 L14 42 L14 64 L4 64 Z" fill="#38BDF8" />
        <path d="M4 46 Q8 42 14 44" stroke="#0EA5E9" strokeWidth="1" fill="none" />
        <path d="M6 52 Q10 48 14 50" stroke="#0EA5E9" strokeWidth="1" fill="none" />
        <path d="M6 58 Q10 54 14 56" stroke="#0EA5E9" strokeWidth="1" fill="none" />
        <circle cx="46" cy="52" r="3" fill="#4ADE80" />
        <circle cx="52" cy="56" r="2" fill="#4ADE80" />
        <circle cx="38" cy="54" r="2" fill="#4ADE80" />
      </>
    )
  },

  greenClouds: {
    shape: "square",
    render: () => (
      <>
        <rect width="64" height="64" fill="#A7F3D0" />
        <rect x="4" y="6" width="20" height="8" rx="3" fill="#BAE6FD" />
        <rect x="30" y="4" width="14" height="6" rx="2" fill="#BAE6FD" />
        <rect x="42" y="12" width="20" height="8" rx="3" fill="#BAE6FD" />
        <path d="M0 24 L14 14 L28 24 L40 16 L54 24 L64 18 L64 64 L0 64 Z" fill="#34D399" />
        <path d="M0 34 L20 24 L34 34 L50 26 L64 34 L64 64 L0 64 Z" fill="#22C55E" />
        <rect y="46" width="64" height="18" fill="#15803D" />
        <path d="M0 48 L20 44 L36 48 L52 44 L64 46 L64 64 L0 64 Z" fill="#4ADE80" />
        <path d="M6 54 Q9 50 12 54 Q15 50 18 54 L18 58 L6 58 Z" fill="#16A34A" />
        <path d="M26 54 Q30 50 34 54 Q38 50 42 54 L42 58 L26 58 Z" fill="#16A34A" />
        <path d="M44 52 Q47 48 50 52 Q53 48 56 52 L56 56 L44 56 Z" fill="#16A34A" />
        <path d="M52 58 Q56 54 60 58 L60 62 L52 62 Z" fill="#0EA5E9" opacity=".6" />
      </>
    )
  },

  blueLandscape: {
    shape: "square",
    render: () => (
      <>
        <rect width="64" height="64" fill="#7DD3FC" />
        <ellipse cx="20" cy="12" rx="10" ry="4" fill="#F8FAFC" />
        <ellipse cx="46" cy="16" rx="7" ry="3" fill="#F8FAFC" />
        <path d="M0 24 L14 14 L22 22 L30 10 L44 24 L52 16 L64 26 L64 44 L0 44 Z" fill="#94A3B8" />
        <path d="M14 14 L20 22 L8 22 Z" fill="#F1F5F9" />
        <path d="M30 10 L36 20 L24 20 Z" fill="#F1F5F9" />
        <path d="M44 24 L50 30 L38 30 Z" fill="#F1F5F9" />
        <path d="M0 34 L16 28 L32 34 L48 28 L64 34 L64 64 L0 64 Z" fill="#22C55E" />
        <path d="M0 42 L16 38 L32 42 L48 38 L64 42 L64 64 L0 64 Z" fill="#16A34A" />
        <path d="M6 40 L8 30 L12 30 L14 40 Z" fill="#15803D" />
        <path d="M22 36 L24 26 L28 26 L30 36 Z" fill="#15803D" />
        <path d="M40 40 L42 28 L46 28 L48 40 Z" fill="#15803D" />
        <path d="M56 38 L58 30 L62 30 L64 38 Z" fill="#15803D" />
        {/* blue river winding */}
        <path d="M0 46 Q16 44 24 50 Q30 56 42 54 L64 54 L64 64 L0 64 Z" fill="#0EA5E9" />
        <path d="M8 46 Q20 44 26 50" stroke="#38BDF8" strokeWidth="2" fill="none" />
      </>
    )
  }
};
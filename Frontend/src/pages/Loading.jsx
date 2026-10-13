import "./Loading.css";

export default function Loading({ label = "Loading", inline = false }) {
  return (
    <div className={"nx-loader" + (inline ? " nx-loader--inline" : "")}>
      <div className="nx-loader__stage">
        <div className="nx-loader__overlay" aria-hidden="true" />

        <div className="nx-loader__cogs" aria-hidden="true">
          {/* Top cog */}
          <div className="nx-loader__cog nx-loader__cog--top">
            <div className="nx-loader__part" />
            <div className="nx-loader__part" />
            <div className="nx-loader__part" />
            <div className="nx-loader__hole" />
          </div>

          {/* Left cog */}
          <div className="nx-loader__cog nx-loader__cog--left">
            <div className="nx-loader__part" />
            <div className="nx-loader__part" />
            <div className="nx-loader__part" />
            <div className="nx-loader__hole" />
          </div>

          {/* Bottom cog */}
          <div className="nx-loader__cog nx-loader__cog--bottom">
            <div className="nx-loader__part" />
            <div className="nx-loader__part" />
            <div className="nx-loader__part" />
            <div className="nx-loader__hole" />
          </div>
        </div>
      </div>

      <p className="nx-loader__label">
        {label}
        <span className="nx-loader__dots">
          <span>.</span><span>.</span><span>.</span>
        </span>
      </p>
    </div>
  );
}
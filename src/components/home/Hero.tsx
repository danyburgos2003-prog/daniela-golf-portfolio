export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow">Current Objective</p>

        <h1>Daniela Burgos</h1>

        <h2>
          Earn my place on the LPGA pathway while proudly representing Mexico.
        </h2>

        <p className="hero-credentials">
          Former NCAA Division I Athlete • XUNTAS Member
        </p>

        <div className="hero-actions">
          <a href="/partnerships" className="button button-primary">
            Become a Partner
          </a>

          <a href="#journey" className="button button-secondary">
            Explore My Journey
          </a>
        </div>
      </div>
    </section>
  );
}
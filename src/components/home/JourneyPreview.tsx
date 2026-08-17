import Link from "next/link";

export default function JourneyPreview() {
  return (
    <section className="journey-preview">
      <div className="journey-preview-inner">
        <div className="journey-preview-heading">
          <p className="journey-preview-label">The Journey</p>

          <h2>
            A career shaped by competition, resilience, growth, and a constant
            pursuit of what comes next.
          </h2>
        </div>

        <div className="journey-preview-links">
          <Link href="/journey/story" className="journey-preview-item">
            <span>01</span>
            <p>My Story</p>
          </Link>

          <Link href="/journey/career" className="journey-preview-item">
            <span>02</span>
            <p>Career</p>
          </Link>

          <Link href="/journey/beyond" className="journey-preview-item">
            <span>03</span>
            <p>Beyond the Game</p>
          </Link>

          <Link href="/journey/mission" className="journey-preview-item">
            <span>04</span>
            <p>My Mission</p>
          </Link>

          <Link href="/journey/media" className="journey-preview-item">
            <span>05</span>
            <p>Media</p>
          </Link>
        </div>

        <Link href="/journey/story" className="journey-preview-cta">
          Explore The Journey
        </Link>
      </div>
    </section>
  );
}
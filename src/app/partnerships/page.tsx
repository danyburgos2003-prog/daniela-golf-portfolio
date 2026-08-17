export default function PartnershipsPage() {
  return (
    <main className="partnerships-page">
      {/* INTRO */}

      <section className="partnerships-intro">
        <p className="partnerships-eyebrow">Partnerships</p>

        <h1>Be part of what comes next.</h1>

        <p className="partnerships-intro-copy">
          I&apos;m building the support structure that will allow me to pursue
          LPGA Q-Series, a competitive tournament schedule, and the next stage
          of my golf career.
        </p>
      </section>

      {/* WHY PARTNER */}

      <section className="partnerships-why">
        <div className="partnerships-section-heading">
          <p className="partnerships-section-number">01</p>
          <p className="partnerships-section-label">Why Partner With Me</p>
        </div>

        <div className="partnerships-why-grid">
          <h2>More than a logo on a golf bag.</h2>

          <div className="partnerships-body-copy">
            <p>
              I want to build partnerships around shared value. As an athlete,
              creator, and someone with experience across technology, design,
              content, strategy, and brand development, I want every
              partnership to become something we build together.
            </p>

            <p>
              Whether through brand representation, digital content, corporate
              events, golf experiences, product collaboration, creative work,
              or storytelling around my competitive journey, I&apos;m open to
              shaping each partnership around what creates the most value for
              both sides.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT SUPPORT MAKES POSSIBLE */}

      <section className="partnerships-support">
        <div className="partnerships-section-heading partnerships-section-heading-light">
          <p className="partnerships-section-number">02</p>
          <p className="partnerships-section-label">
            What Your Support Makes Possible
          </p>
        </div>

        <div className="partnerships-support-grid">
          <article>
            <span>01</span>
            <h3>Q-Series</h3>
            <p>Qualifying entry fees and tournament expenses.</p>
          </article>

          <article>
            <span>02</span>
            <h3>Tournament Schedule</h3>
            <p>Entry fees throughout the competitive season.</p>
          </article>

          <article>
            <span>03</span>
            <h3>Travel</h3>
            <p>Flights, rental cars, and ground transportation.</p>
          </article>

          <article>
            <span>04</span>
            <h3>Accommodation</h3>
            <p>Housing and lodging during tournament weeks.</p>
          </article>

          <article>
            <span>05</span>
            <h3>Training</h3>
            <p>Coaching, facilities, practice, and preparation.</p>
          </article>

          <article>
            <span>06</span>
            <h3>Performance</h3>
            <p>
              Strength, recovery, nutrition, mental training, and performance
              analysis.
            </p>
          </article>
        </div>
      </section>

      {/* WAYS TO WORK TOGETHER */}

      <section className="partnerships-work">
        <div className="partnerships-section-heading">
          <p className="partnerships-section-number">03</p>
          <p className="partnerships-section-label">Ways We Can Work Together</p>
        </div>

        <div className="partnerships-work-heading">
          <h2>Every partnership can look different.</h2>
        </div>

        <div className="partnerships-work-list">
          <div className="partnerships-work-item">
            <span>01</span>

            <div>
              <h3>Brand Partnership</h3>
              <p>
                Athlete representation, product integration, apparel,
                equipment, digital presence, and tournament exposure.
              </p>
            </div>
          </div>

          <div className="partnerships-work-item">
            <span>02</span>

            <div>
              <h3>Content & Storytelling</h3>
              <p>
                Social media content, campaigns, behind-the-scenes storytelling,
                photography, video, and creative collaboration.
              </p>
            </div>
          </div>

          <div className="partnerships-work-item">
            <span>03</span>

            <div>
              <h3>Golf Experiences</h3>
              <p>
                Corporate golf days, clinics, events, appearances, and other
                golf-centered experiences.
              </p>
            </div>
          </div>

          <div className="partnerships-work-item">
            <span>04</span>

            <div>
              <h3>Creative Collaboration</h3>
              <p>
                Brand strategy, UX, websites, product development, content
                planning, and creative projects.
              </p>
            </div>
          </div>

          <div className="partnerships-work-item">
            <span>05</span>

            <div>
              <h3>Custom Partnership</h3>
              <p>
                Have something else in mind? I&apos;m always open to exploring
                how we can build something valuable together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="partnerships-contact">
        <p className="partnerships-contact-label">Let&apos;s Talk</p>

        <h2>Interested in building something together?</h2>

        <p className="partnerships-contact-copy">
          I&apos;d love to hear from you.
        </p>

        <a
          href="mailto:dany.burgos2003@gmail.com"
          className="partnerships-contact-button"
        >
          Email Daniela
          <span>→</span>
        </a>
      </section>

      {/* DIRECT SUPPORT */}

      <section className="partnerships-donate">
        <div className="partnerships-section-heading">
          <p className="partnerships-section-number">04</p>
          <p className="partnerships-section-label">Support My Journey</p>
        </div>

        <div className="partnerships-donate-grid">
          <div>
            <h2>Help make the next step possible.</h2>
          </div>

          <div className="partnerships-donate-copy">
            <p>
              Not every contribution needs to be a formal partnership. If
              you&apos;d simply like to support my competitive journey, you can
              contribute directly to my LPGA Q-Series campaign.
            </p>

            <p>
              Contributions help cover qualifying fees, travel,
              accommodations, transportation, meals, practice expenses, and the
              other costs required to compete.
            </p>

            <a
              href="https://gofund.me/40992ddc4"
              target="_blank"
              rel="noopener noreferrer"
              className="partnerships-gofundme-button"
            >
              Support My Q-Series Journey
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* CLOSING */}

      <section className="partnerships-closing">
        <p>Thank you for being part of the journey.</p>

        <h2>
          Every opportunity, introduction, partnership, contribution, and
          conversation can help move this journey forward.
        </h2>
      </section>
    </main>
  );
}
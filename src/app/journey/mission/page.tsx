import Link from "next/link";
import JourneyNavigation from "@/components/journey/JourneyNavigation";

export default function MissionPage() {
  return (
    <main className="mission-page">
      {/* INTRO */}

      <section className="mission-intro">
        <p className="mission-eyebrow">The Journey</p>

        <h1>My Mission</h1>

        <p className="mission-intro-copy">
          To discover how far I can grow through the pursuit of great golf—and
          use what I learn to create something meaningful beyond my own game.
        </p>
      </section>

      {/* THE GOAL */}

      <section className="mission-goal">
        <div className="mission-section-heading">
          <p className="mission-section-number">01</p>
          <p className="mission-section-label">The Goal</p>
        </div>

        <div className="mission-goal-content">
          <h2>
            I believe I have the potential to be great. I&apos;ve seen glimpses
            of what my game can become when everything comes together.
          </h2>

          <div className="mission-body-copy">
            <p>
              Golf is my passion, and pursuing it at the professional level
              gives me the opportunity to continue doing what I love most while
              discovering how far I can grow.
            </p>

            <p>
              My goal is not only to become a better player. I want to
              understand myself deeply enough to identify the routines, habits,
              behaviors, and systems that consistently bring out my best—on and
              off the golf course.
            </p>

            <p>
              I&apos;ve experienced moments when my game has come together.
              Now, I want to learn how to make those moments repeatable.
            </p>
          </div>
        </div>
      </section>

      {/* THE COMMITMENT */}

      <section className="mission-commitment">
        <div className="mission-section-heading mission-section-heading-light">
          <p className="mission-section-number">02</p>
          <p className="mission-section-label">The Commitment</p>
        </div>

        <div className="mission-commitment-intro">
          <h2>Great golf is built far beyond the swing.</h2>

          <p>
            I&apos;m committing myself to developing the routine that allows me
            to perform at my highest level.
          </p>
        </div>

        <div className="mission-pillars">
          <div className="mission-pillar">
            <span>01</span>
            <p>Strength & Conditioning</p>
          </div>

          <div className="mission-pillar">
            <span>02</span>
            <p>Technical Training</p>
          </div>

          <div className="mission-pillar">
            <span>03</span>
            <p>Mental Performance</p>
          </div>

          <div className="mission-pillar">
            <span>04</span>
            <p>Nutrition & Hydration</p>
          </div>

          <div className="mission-pillar">
            <span>05</span>
            <p>Sleep & Recovery</p>
          </div>

          <div className="mission-pillar">
            <span>06</span>
            <p>Statistical Analysis</p>
          </div>

          <div className="mission-pillar">
            <span>07</span>
            <p>Communication</p>
          </div>

          <div className="mission-pillar">
            <span>08</span>
            <p>Continuous Reflection</p>
          </div>
        </div>

        <div className="mission-commitment-closing">
          <p>
            The goal isn&apos;t to create a perfect routine.
          </p>

          <h3>It&apos;s to keep refining one.</h3>

          <p>
            Every practice, tournament, success, and failure becomes another
            opportunity to understand what helps me improve.
          </p>
        </div>
      </section>

      {/* REPRESENTING MEXICO */}

      <section className="mission-mexico">
        <div className="mission-section-heading">
          <p className="mission-section-number">03</p>
          <p className="mission-section-label">Representing Mexico</p>
        </div>

        <div className="mission-mexico-grid">
          <h2>
            I want the Mexican flag beside my name at the highest levels of the
            game.
          </h2>

          <div className="mission-body-copy">
            <p>
              I grew up inspired by what Lorena Ochoa showed Mexican golfers
              was possible, and I continue to be inspired by players like Gaby
              López who represent Mexico at the highest level.
            </p>

            <p>I would love to become part of that history.</p>

            <p>
              To represent Mexico means carrying with me the values I see in
              its people: courage, dedication, warmth, empathy, and joy.
            </p>

            <p>
              And if my journey can eventually help another young girl in
              Mexico believe this path is possible for her too, that would mean
              even more.
            </p>
          </div>
        </div>
      </section>

      {/* SUCCESS */}

      <section className="mission-success">
        <div className="mission-section-heading">
          <p className="mission-section-number">04</p>
          <p className="mission-section-label">One Year From Now</p>
        </div>

        <div className="mission-success-heading">
          <h2>What success looks like.</h2>
        </div>

        <div className="mission-success-grid">
          <article>
            <span>01</span>
            <h3>A Routine</h3>
            <p>
              A structured training system that I understand, trust, and
              continue refining.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>A Schedule</h3>
            <p>
              A consistent competitive calendar that challenges me and creates
              a clear pathway forward.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Experience</h3>
            <p>
              Testing myself through Q-School and the highest-level events
              available to me.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Sustainability</h3>
            <p>
              The financial security to continue competing through my game,
              partnerships, and the projects I build along the way.
            </p>
          </article>
        </div>

        <p className="mission-success-statement">
          Success isn&apos;t one result. It&apos;s creating a sustainable
          system that gives me the opportunity to keep discovering how good I
          can become.
        </p>
      </section>

      {/* THE OPPORTUNITY */}

      <section className="mission-opportunity">
        <div className="mission-section-heading mission-section-heading-light">
          <p className="mission-section-number">05</p>
          <p className="mission-section-label">The Opportunity</p>
        </div>

        <div className="mission-opportunity-grid">
          <div>
            <h2>
              Join me at the beginning of what could become a much larger
              journey.
            </h2>
          </div>

          <div className="mission-opportunity-copy">
            <p>
              The greatest barrier between where I am today and the opportunity
              to fully pursue this path is financial.
            </p>

            <p>
              Tournament entry fees, travel, accommodations, coaching,
              training, equipment, Q-School, and developmental tours require a
              significant investment.
            </p>

            <p>
              That&apos;s why I&apos;m looking for partners who see more than a
              tournament schedule.
            </p>

            <p>
              A partnership with me isn&apos;t simply about helping fund golf.
              It&apos;s an opportunity to build something together through
              storytelling, content, brand representation, appearances,
              clinics, corporate golf experiences, creative projects, and
              whatever value I can genuinely create for the people who support
              this journey.
            </p>

            <Link href="/partnerships" className="mission-partner-button">
              Become a Partner
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* BEYOND MY CAREER */}

      <section className="mission-impact">
        <div className="mission-section-heading">
          <p className="mission-section-number">06</p>
          <p className="mission-section-label">Beyond My Own Career</p>
        </div>

        <h2>
          I want the path behind me to become better for the next generation.
        </h2>

        <div className="mission-impact-list">
          <p>More opportunities.</p>
          <p>More knowledge.</p>
          <p>Better systems.</p>
          <p>More financial support.</p>
          <p>More visibility for women&apos;s golf.</p>
          <p>A clearer pathway forward.</p>
        </div>

        <p className="mission-impact-closing">
          My own career is only one part of that mission.
        </p>
      </section>

      {/* FINAL STATEMENT */}

      <section className="mission-closing">
        <p className="mission-closing-label">What I Want to Discover</p>

        <h2>
          If I have the opportunity to give this pursuit everything I have, I
          want to discover which routines, habits, behaviors, and forms of
          training allow me to become better every day—both as a golfer and as
          a person.
        </h2>
      </section>

      <JourneyNavigation
        previous={{
          label: "Beyond the Game",
          href: "/journey/beyond",
        }}
        next={{
          label: "Media",
          href: "/journey/media",
        }}
      />
    </main>
  );
}
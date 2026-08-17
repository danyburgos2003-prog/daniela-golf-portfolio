import Image from "next/image";
import JourneyNavigation from "@/components/journey/JourneyNavigation";

export default function BeyondPage() {
  return (
    <main className="beyond-page">
      {/* INTRO */}

      <section className="beyond-intro">
        <p className="beyond-eyebrow">The Journey</p>

        <h1>Beyond the Game</h1>

        <p className="beyond-intro-copy">
          Golf has shaped much of who I am, but it has never been the only
          thing that makes me curious.
        </p>
      </section>

      {/* OPENING STATEMENT */}

      <section className="beyond-statement">
        <p>
          I&apos;m drawn to the intersection of{" "}
          <strong>creativity, technology, and storytelling.</strong> Whether
          I&apos;m designing a brand identity, building a website, thinking
          through a user experience, creating content, or picking up a camera,
          I love taking an idea and figuring out how to bring it to life.
        </p>
      </section>

      {/* CREATIVITY + STRATEGY */}

      <section className="beyond-editorial">
        <div className="beyond-editorial-image beyond-image-wrap">
          <Image
            src="/images/beyond/creative-work.jpg"
            alt="Creative workspace with laptop, journal, headphones, and coffee"
            fill
            className="beyond-image beyond-image-creative"
            sizes="(max-width: 900px) 100vw, 52vw"
          />
        </div>

        <div className="beyond-editorial-copy">
          <p className="beyond-section-number">01</p>
          <p className="beyond-section-label">How I Think</p>

          <h2>Creativity Meets Strategy</h2>

          <p>
            I studied Information Science because I was fascinated by how many
            different worlds it could open—from data analytics and technology
            to UX, coding, and strategy.
          </p>

          <p>
            What interested me most was not technology for its own sake, but
            what you can do with it.
          </p>

          <p>
            As an athlete, I naturally began seeing connections to sports: how
            data can reveal patterns in performance, how technology can improve
            the athlete experience, how strategy shapes organizations, and how
            thoughtful design can change the way people interact with a brand.
          </p>

          <p>
            That combination of analytical thinking and creativity continues
            to shape the kind of work I want to pursue beyond competition.
          </p>
        </div>
      </section>

      {/* TEMPO */}

      <section className="beyond-feature">
        <div className="beyond-feature-heading">
          <div>
            <p className="beyond-section-number">02</p>
            <p className="beyond-section-label">Entrepreneurship</p>
          </div>

          <h2>Building Something of My Own</h2>
        </div>

        <div className="beyond-feature-grid">
          <div className="beyond-feature-copy">
            <p>
              One of the projects closest to me is <strong>Tempo</strong>, a
              golf performance and journaling brand I began building from the
              ground up.
            </p>

            <p>
              Tempo grew from something I experienced personally as an athlete:
              great performance is rarely the result of one extraordinary day.
              It comes from routines, reflection, preparation, and the small
              things repeated consistently.
            </p>

            <p>
              Building Tempo has allowed me to explore another side of myself.
              From developing the product and user experience to creating its
              visual identity, brand strategy, website, and media, I&apos;ve
              been able to combine many of the things I love into one project
              rooted in the sport that has shaped my life.
            </p>

            <p className="beyond-feature-quote">
              And perhaps my favorite part is starting with nothing more than
              an idea and slowly turning it into something real.
            </p>
          </div>

          <div className="beyond-tempo-visual">
            <div className="beyond-tempo-image beyond-image-wrap">
              <Image
                src="/images/beyond/tempo.jpg"
                alt="Tempo Daily Practice golf journal"
                fill
                className="beyond-image beyond-image-tempo"
                sizes="(max-width: 900px) 100vw, 55vw"
              />
            </div>

            <p className="beyond-image-caption">
              Rhythm · Intention · Performance
            </p>
          </div>
        </div>
      </section>

      {/* ATHLETE */}

      <section className="beyond-athlete">
        <div className="beyond-athlete-heading">
          <p className="beyond-section-number">03</p>
          <p className="beyond-section-label">Sport</p>

          <h2>Always an Athlete</h2>
        </div>

        <div className="beyond-athlete-layout">
          <div className="beyond-athlete-image beyond-image-wrap">
            <Image
              src="/images/beyond/training.jpg"
              alt="Daniela Burgos competing for the University of Maryland"
              fill
              className="beyond-image beyond-image-training"
              sizes="(max-width: 900px) 100vw, 55vw"
            />
          </div>

          <div className="beyond-athlete-copy">
            <p>
              Long before I chose to focus entirely on golf, sports were simply
              part of how I grew up.
            </p>

            <p>
              I played tennis and soccer, swam, practiced karate, and
              eventually used many of those disciplines to support my
              development as a golfer. Today, I still enjoy functional training
              and CrossFit, but I&apos;m just as happy watching sports as I am
              participating in them.
            </p>

            <p>
              The Olympics, World Cups, major championships, and the stories
              surrounding athletes fascinate me—not only because I understand
              competition, but because I love everything that happens around
              it: the preparation, storytelling, strategy, brands, media, and
              communities that make sport so powerful.
            </p>

            <p>
              It&apos;s also why I can see my future in sports from more than
              one perspective. Alongside pursuing my own competitive career,
              I&apos;m interested in product design, strategy, marketing,
              management, and data analytics within the sports industry.
            </p>

            <p className="beyond-career-dream">
              One day, I&apos;d love to lead the creative vision of a sports
              organization.
            </p>
          </div>
        </div>
      </section>

      {/* PERSON */}

      <section className="beyond-person">
        <div className="beyond-person-heading">
          <p className="beyond-section-number">04</p>
          <p className="beyond-section-label">Away From Competition</p>

          <h2>The Person Behind the Player</h2>
        </div>

        <div className="beyond-person-grid">
          <div className="beyond-person-copy">
            <p>
              Outside competition and work, I&apos;m someone who cares deeply
              about the people around me.
            </p>

            <p>
              My parents shaped many of my values and passions. My sisters have
              taught me responsibility. My teammates have taught me dedication
              and focus. And my friends constantly remind me of the importance
              of being caring, empathetic, and having fun along the way.
            </p>

            <p>
              They&apos;re all part of the person I bring onto the golf course.
            </p>

            <p>
              And when golf, work, and competition are put aside, I&apos;m
              happiest experiencing things: movies, music, traveling,
              discovering food, spending time with the people I love, being
              around my cats, exploring fashion, and taking photos.
            </p>
          </div>

          <div className="beyond-person-collage">
            <div className="beyond-collage-large beyond-image-wrap">
              <Image
                src="/images/beyond/lifestyle.jpg"
                alt="Daniela Burgos traveling in Rome"
                fill
                className="beyond-image beyond-image-lifestyle"
                sizes="(max-width: 900px) 100vw, 55vw"
              />
            </div>

            <div className="beyond-collage-small beyond-image-wrap">
              <Image
                src="/images/beyond/sisters.jpg"
                alt="Daniela Burgos with her sisters"
                fill
                className="beyond-image beyond-image-sisters"
                sizes="(max-width: 900px) 100vw, 28vw"
              />
            </div>

            <div className="beyond-collage-small beyond-image-wrap">
              <Image
                src="/images/beyond/friends.jpg"
                alt="Daniela Burgos celebrating graduation with friends"
                fill
                className="beyond-image beyond-image-friends"
                sizes="(max-width: 900px) 100vw, 28vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}

      <section className="beyond-closing">
        <p>Still on the wish list</p>

        <h2>
          A really good camera—
          <br />
          and enough time to take it around the world.
        </h2>
      </section>

      <JourneyNavigation
        previous={{
            label: "Career",
            href: "/journey/career",
        }}
        next={{
            label: "My Mission",
            href: "/journey/mission",
        }}
        />
    </main>
  );
}
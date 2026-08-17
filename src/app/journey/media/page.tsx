import JourneyNavigation from "@/components/journey/JourneyNavigation";

export default function MediaPage() {
  return (
    <main className="media-page">
      <section className="media-coming-soon">
        <div className="media-coming-soon-inner">
          <p className="media-eyebrow">The Journey</p>

          <h1>Media</h1>

          <div className="media-message">
            <h2>
              A closer look at the player,
              <br />
              the process, and everything
              <br />
              around the game.
            </h2>

            <div className="media-status">
              <span className="media-status-line" />

              <div>
                <p className="media-status-label">Currently in the making</p>

                <p className="media-status-copy">
                  I&apos;m building a collection of competition, practice, and
                  behind-the-scenes media that reflects this next chapter of my
                  game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JourneyNavigation
        previous={{
          label: "My Mission",
          href: "/journey/mission",
        }}
        next={{
          label: "Partnerships",
          href: "/partnerships",
        }}
      />
    </main>
  );
}
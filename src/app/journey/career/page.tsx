import CareerHighlight from "@/components/journey/CareerHighlight";
import JourneyNavigation from "@/components/journey/JourneyNavigation";

export default function CareerPage() {
  return (
    <main className="career-page">

      {/* INTRO */}

      <section className="career-intro">
        <p className="career-eyebrow">The Journey</p>

        <h1>Career</h1>

        <p className="career-intro-copy">
          Four years of NCAA Division I golf, national competition in Mexico,
          and international amateur experience.
        </p>
      </section>

      {/* CAREER HIGHLIGHTS */}

      <section className="career-highlights-section">
        <div className="career-section-heading">
          <p>Career Highlights</p>
          <h2>Defining moments along the journey.</h2>
        </div>

        <div className="career-highlights-grid">
          <CareerHighlight
            value="#4"
            title="Mexico National Junior Ranking"
            detail="2020–2021"
          />

          <CareerHighlight
            value="T3"
            title="Valspar Augusta Invitational"
            detail="2023 · −5"
          />

          <CareerHighlight
            value="2×"
            title="Southland Conference Champion"
            detail="Augusta University · 2023 & 2024"
          />

          <CareerHighlight
            value="NCAA"
            title="National Championship"
            detail="First Augusta team in program history to advance · 2023"
          />

          <CareerHighlight
            value="T14"
            title="Women's Amateur Latin America"
            detail="2023 · +7"
          />

          <CareerHighlight
            value="T8"
            title="SCGA Women's Amateur Championship"
            detail="2025 · Torrey Pines · +4"
          />
        </div>
      </section>

      {/* JUNIOR GOLF */}

      <section className="career-era">
        <div className="career-era-heading">
          <p className="career-era-number">01</p>

          <div>
            <p className="career-era-label">Mexico</p>
            <h2>Junior Golf</h2>
            <p className="career-era-years">2020–2022</p>
          </div>
        </div>

        <div className="career-results">
          <div className="career-season">
            <p className="career-season-year">2020–2021</p>

            <ul>
              <li>
                <strong>#4</strong> National Junior Ranking
              </li>
              <li>
                <strong>#1</strong> AGVM Ranking
              </li>
              <li>
                <strong>2nd Individual</strong> — LX Campeonato Nacional
                Interzonas · +11
              </li>
              <li>
                <strong>1st Team</strong> — Interzonas with AGVM
              </li>
              <li>
                <strong>4th</strong> — I Copa Norte · +5
              </li>
              <li>
                <strong>T5</strong> — X Copa Zona Centro · +11
              </li>
              <li>
                <strong>Winning Green Team</strong> — V Copa Mexgolf
              </li>
            </ul>
          </div>

          <div className="career-season">
            <p className="career-season-year">2021–2022</p>

            <ul>
              <li>
                <strong>#11</strong> National Junior Ranking
              </li>
              <li>
                <strong>#3</strong> AGVM Ranking
              </li>
              <li>
                <strong>2nd</strong> — III Copa Valle de México · +10
              </li>
              <li>
                <strong>9th Individual</strong> — LXI Campeonato Nacional
                Interzonas · +13
              </li>
              <li>
                <strong>2nd Team</strong> — Interzonas
              </li>
              <li>
                <strong>9th</strong> — XI Copa Zona Centro · +5
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* AUGUSTA */}

      <section className="career-era career-era-dark">
        <div className="career-era-heading">
          <p className="career-era-number">02</p>

          <div>
            <p className="career-era-label">NCAA Division I</p>
            <h2>Augusta University</h2>
            <p className="career-era-years">2022–2024</p>
          </div>
        </div>

        <div className="career-results">
          <div className="career-season">
            <p className="career-season-year">2022–2023</p>

            <ul>
              <li>
                <strong>T3</strong> — Valspar Augusta Invitational · −5
              </li>
              <li>
                <strong>12th</strong> — Florida State Match Up · +6
              </li>
              <li>
                <strong>Southland Conference Team Champions</strong>
              </li>
              <li>
                <strong>5th Team</strong> — NCAA Athens Regional
              </li>
              <li>
                <strong>NCAA National Championship</strong> — first appearance
                in program history
              </li>
              <li>All-American Scholar</li>
              <li>Coaches Award</li>
            </ul>
          </div>

          <div className="career-season">
            <p className="career-season-year">2023–2024</p>

            <ul>
              <li>
                <strong>T18</strong> — Liz Murphey Collegiate Classic · +4
              </li>
              <li>
                <strong>6th Individual</strong> — Southland Conference
                Championship · +6
              </li>
              <li>
                <strong>Southland Conference Team Champions</strong>
              </li>
              <li>
                NCAA Division I East Lansing Regional ·{" "}
                <strong>9th Team</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* MARYLAND */}

      <section className="career-era">
        <div className="career-era-heading">
          <p className="career-era-number">03</p>

          <div>
            <p className="career-era-label">NCAA Division I</p>
            <h2>University of Maryland</h2>
            <p className="career-era-years">2024–2026</p>
          </div>
        </div>

        <div className="career-results">
          <div className="career-season">
            <p className="career-season-year">Selected Results</p>

            <ul>
              <li>
                <strong>T25</strong> — 2025 Terrapin Invitational · +8
              </li>
              <li>
                <strong>T15</strong> — 2025 Evie Odom Invitational · +5
              </li>
              <li>
                <strong>T18</strong> — 2026 Terps Invitational · +6
              </li>
              <li>
                <strong>Academic All-Big Ten</strong> · 2025–2026
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* AMATEUR */}

      <section className="career-era career-era-dark">
        <div className="career-era-heading">
          <p className="career-era-number">04</p>

          <div>
            <p className="career-era-label">Competition</p>
            <h2>Amateur Championships</h2>
            <p className="career-era-years">2023–2026</p>
          </div>
        </div>

        <div className="career-results">
          <div className="career-season">
            <p className="career-season-year">Selected Results</p>

            <ul>
              <li>
                <strong>2nd</strong> — 2026 Torneo Abierto del Jockey Club de Rosario · +9
                <br />
                Jockey Club de Rosario · Argentina
              </li>
              
              <li>
                <strong>T10</strong> — 2023 San Diego City Amateur
                Championship · Torrey Pines · +8
              </li>

              <li>
                <strong>T25 Stroke Play</strong> — 2023 California
                Women&apos;s Amateur · +2
                <br />
                Advanced to Round of 16 Match Play
              </li>

              <li>
                <strong>T14</strong> — 2023 Women&apos;s Amateur Latin America
                · +7
              </li>

              <li>
                <strong>T27</strong> — 2024 California Women&apos;s Amateur ·
                +3
              </li>

              <li>
                <strong>T8</strong> — 2025 SCGA Women&apos;s Amateur
                Championship · Torrey Pines · +4
              </li>
            </ul>
          </div>
        </div>
      </section>

      <JourneyNavigation
        previous={{
            label: "My Story",
            href: "/journey/story",
        }}
        next={{
            label: "Beyond the Game",
            href: "/journey/beyond",
        }}
        />

    </main>
  );
}
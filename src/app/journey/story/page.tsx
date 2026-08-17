import StoryChapter from "@/components/journey/StoryChapter";
import JourneyNavigation from "@/components/journey/JourneyNavigation";

export default function StoryPage() {
  return (
    <main className="story-page">

      <section className="story-intro">
        <p className="story-intro-label">The Journey</p>
        <h1>My Story</h1>
        <p className="story-intro-subtitle">
          From Mexico City to what comes next.
        </p>
      </section>

      <StoryChapter
        number="01"
        title="Where It Started"
        image="/images/story/childhood.jpg"
        imageAlt="Daniela Burgos playing golf as a child in Mexico City"
      >
        <p>
          Golf has been part of my life for as long as I can remember.
        </p>

        <p>
          I started playing at five years old at Club Campestre de la Ciudad
          de México. My parents introduced me to the game, and from the very
          beginning, they were there for all of it—the practices, tournaments,
          trips, victories, disappointments, and everything in between.
        </p>

        <p>
          Growing up, I played almost every sport I could. Golf was just one
          of them at first, but somehow, it was always the one I loved most.
          Eventually, I made the decision to focus entirely on golf. I began
          practicing every day, working alongside my coach, Julián Valenciana,
          while using sports like karate and swimming to become stronger and
          more prepared for the game.
        </p>

        <p>I haven&apos;t stopped since.</p>
      </StoryChapter>

      <StoryChapter
        number="02"
        title="The Dream"
        image="/images/story/dream.jpg"
        imageAlt="Daniela Burgos with Lorena Ochoa as a young golfer"
        reverse
      >
        <p>When I was seven years old, I met Lorena Ochoa.</p>

        <p>
          Seeing a Mexican woman become the number one golfer in the world
          changed the way I saw what was possible. She became my role model,
          and from that point forward, golf wasn&apos;t simply something I
          loved doing. I had a dream.
        </p>

        <p>I wanted to see how far I could go.</p>

        <p>
          Even at that age, I began imagining the path ahead of me: junior
          golf, amateur golf, college golf, and, one day, professional golf.
        </p>

        <p>
          At eight, I began competing on the AGVM junior tour and in national
          championships organized by the Federación Mexicana de Golf. Soon,
          golf began taking me beyond Mexico. I competed internationally
          through U.S. Kids Golf, representing my country at events in
          Pinehurst and Scotland, and later earned opportunities to compete in
          some of Mexico&apos;s most selective junior events, including
          Interzonas and Mexgolf.
        </p>

        <p>
          The dream I had imagined as a little girl was slowly becoming a
          journey of its own.
        </p>
      </StoryChapter>

      <StoryChapter
        number="03"
        title="Earning My Way to College Golf"
        image="/images/story/junior-golf.jpg"
        imageAlt="Daniela Burgos competing during her junior golf career"
      >
        <p>The 2020–2021 season became an important turning point.</p>

        <p>
          I finished fourth in Mexico&apos;s national junior ranking, placed
          second individually at the 2021 Interzonas in Cancún, and was part
          of the winning Green Team at the final edition of Mexgolf.
        </p>

        <p>
          At the same time, another part of the plan I had imagined years
          earlier was beginning to take shape: playing college golf in the
          United States.
        </p>

        <p>
          That summer, I competed in the FCG Callaway World Championship in
          Temecula, California, finishing 11th at five over par. After the
          tournament, I met Caroline Hegg, the head women&apos;s golf coach at
          Augusta University.
        </p>

        <p>That conversation changed the direction of my life.</p>

        <p>
          I was offered the opportunity to join Augusta&apos;s NCAA Division I
          golf program on a full scholarship—and suddenly, the next chapter
          had a home.
        </p>
      </StoryChapter>

      <StoryChapter
        number="04"
        title="Four Years of NCAA Golf"
        image="/images/story/ncaa-golf.jpg"
        imageAlt="Daniela Burgos competing for Augusta University"
        reverse
      >
        <p>
          My first two years at Augusta gave me experiences I could never have
          imagined.
        </p>

        <p>
          We were a small team, which gave me the opportunity to compete in
          the lineup early in my college career. My teammates became some of
          my closest friends and greatest teachers. I had the opportunity to
          play Augusta National Golf Club twice and experience Masters week
          from a perspective very few people ever get to see.
        </p>

        <p>
          During my freshman season, our team accomplished something that had
          never been done before in program history: we advanced to the NCAA
          National Championship.
        </p>

        <p>
          After two years at Augusta, I decided I needed another challenge.
        </p>

        <p>
          I transferred to the University of Maryland for my final two seasons
          of college golf. I went from a small team in a small city to a
          larger, more competitive program just outside Washington, D.C.
          Earning a place in the lineup became harder. The environment
          changed. The expectations changed.
        </p>

        <p>And I had to grow with them.</p>

        <p>
          Maryland challenged me in new ways, both as an athlete and as a
          student. I ultimately graduated with a Bachelor of Science in
          Information Science.
        </p>

        <p>
          Four years of college golf taught me how to adapt, how to compete
          for opportunities, how to respond when things don&apos;t go as
          planned, and how much growth can happen when you are willing to make
          yourself uncomfortable.
        </p>
      </StoryChapter>

      <StoryChapter
        number="05"
        title="What Comes Next"
        image="/images/story/whats-next.jpg"
        imageAlt="Daniela Burgos looking across the golf course"
      >
        <p>
          For most college athletes, graduation marks the end of competitive
          sports.
        </p>

        <p>I&apos;m not ready for mine to end.</p>

        <p>
          The reason goes beyond simply loving golf. I love everything that
          pursuing great golf asks of me.
        </p>

        <p>
          To become a better player, I have to take care of my health. I have
          to strengthen my body, fuel it properly, sleep well, train my mind,
          practice with intention, and continually evaluate where I can
          improve. The pursuit of becoming a better golfer ultimately pushes
          me to become a better person.
        </p>

        <p>
          Now, I want to give myself the opportunity to discover how far that
          pursuit can take me.
        </p>

        <p>And I want to do it representing Mexico.</p>

        <p>
          Representing my country means carrying with me the values I see in
          its people: courage, dedication, warmth, empathy, and joy. Having
          the opportunity to bring those values with me into competition—and
          one day see the Mexican flag near the top of a professional
          leaderboard—is one of my greatest motivations for what comes next.
        </p>
      </StoryChapter>

      <section className="story-closing">
        <p>I know golf will never give me perfection.</p>

        <h2>
          I don&apos;t pursue perfection. I pursue progress—the commitment to
          becoming a better golfer and a better person than I was the day
          before.
        </h2>
      </section>

      <JourneyNavigation
        next={{
            label: "Career",
            href: "/journey/career",
        }}
        />

    </main>
  );
}
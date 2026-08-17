import Image from "next/image";

type StoryChapterProps = {
  number: string;
  title: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  children: React.ReactNode;
};

export default function StoryChapter({
  number,
  title,
  image,
  imageAlt,
  reverse = false,
  children,
}: StoryChapterProps) {
  return (
    <section className={`story-chapter ${reverse ? "story-chapter-reverse" : ""}`}>
      <div className="story-chapter-text">
        <p className="story-number">{number}</p>
        <h2>{title}</h2>

        <div className="story-copy">{children}</div>
      </div>

      <div className="story-chapter-image">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
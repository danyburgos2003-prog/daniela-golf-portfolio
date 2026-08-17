import Link from "next/link";

type JourneyNavigationProps = {
  previous?: {
    label: string;
    href: string;
  };
  next?: {
    label: string;
    href: string;
  };
};

export default function JourneyNavigation({
  previous,
  next,
}: JourneyNavigationProps) {
  return (
    <nav className="journey-navigation">
      <div className="journey-navigation-inner">
        {previous ? (
          <Link href={previous.href} className="journey-navigation-link">
            <span className="journey-navigation-direction">Previous</span>
            <span className="journey-navigation-title">
              ← {previous.label}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={next.href}
            className="journey-navigation-link journey-navigation-next"
          >
            <span className="journey-navigation-direction">Next</span>
            <span className="journey-navigation-title">
              {next.label} →
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
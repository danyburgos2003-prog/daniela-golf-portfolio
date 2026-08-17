type CareerHighlightProps = {
  value: string;
  title: string;
  detail: string;
};

export default function CareerHighlight({
  value,
  title,
  detail,
}: CareerHighlightProps) {
  return (
    <article className="career-highlight">
      <p className="career-highlight-value">{value}</p>
      <h3>{title}</h3>
      <p className="career-highlight-detail">{detail}</p>
    </article>
  );
}
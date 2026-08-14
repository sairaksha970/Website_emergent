export default function PageHero({ eyebrow, title, intro, image, testId }) {
  return (
    <section className="page-hero" data-testid={testId}>
      <img src={image} alt="" aria-hidden="true" />
      <div className="section-pad page-hero-inner">
        <p className="eyebrow"><span className="eyebrow-line" /> {eyebrow}</p>
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </div>
    </section>
  );
}

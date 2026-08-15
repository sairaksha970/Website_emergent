export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "Sairaksha Dairy banner",
  badges = [],
  testId,
}) {
  return (
    <section className="unified-page-hero" data-testid={testId}>
      <div className="unified-hero-inner section-pad">
        <div className="unified-hero-copy">
          {eyebrow && (
            <p className="eyebrow">
              <span className="eyebrow-line" /> {eyebrow}
            </p>
          )}
          <h1 className="unified-hero-title">{title}</h1>
          {intro && <p className="unified-hero-intro">{intro}</p>}

          {badges.length > 0 && (
            <div className="unified-hero-badges" data-testid={`${testId || "hero"}-badges`}>
              {badges.map((badge, idx) => (
                <span key={idx} className="unified-hero-badge">
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>

        {image && (
          <div className="unified-hero-banner-frame">
            <img
              src={image}
              alt={imageAlt}
              className="unified-hero-banner-img"
              loading="eager"
            />
          </div>
        )}
      </div>
    </section>
  );
}


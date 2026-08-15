export default function AboutHero() {
  return (
    <section className="about-banner-hero" data-testid="about-hero">
      <div className="about-banner-wrap">
        <img 
          src="/images/about_us.webp" 
          alt="About Sairaksha Dairy Products - Built slowly, grown with purpose" 
          className="about-hero-img"
          loading="eager"
        />
      </div>
    </section>
  );
}

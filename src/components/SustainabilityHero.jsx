import heroBannerImg from "@/assets/images/sustainability_hero_1786695547616.jpg";

export default function SustainabilityHero() {
  return (
    <section className="sustainability-banner-hero" data-testid="sustainability-hero">
      <div className="sustainability-banner-wrap">
        <img 
          src={heroBannerImg || "/images/sustainability.webp"} 
          alt="Sustainability & Operations - Responsible Dairy, from Source to Plant" 
          className="sustainability-hero-img"
          loading="eager"
          referrerPolicy="no-referrer"
          onError={(e) => {
            if (e.currentTarget.src !== "/images/sustainability.webp") {
              e.currentTarget.src = "/images/sustainability.webp";
            }
          }}
        />
      </div>
    </section>
  );
}


import { assets } from "@/data";

export default function SustainabilityHero() {
  return (
    <section className="sustainability-banner-hero" data-testid="sustainability-hero">
      <div className="sustainability-banner-wrap">
        <img 
          src={assets.sustainabilityHero || "/images/sustainability.webp"} 
          alt="Sustainability & Operations - Responsible Dairy, from Source to Plant" 
          className="sustainability-hero-img"
          loading="eager"
          onError={(e) => {
            if (!e.currentTarget.src.includes('sustainability.webp')) {
              e.currentTarget.src = "/images/sustainability.webp";
            }
          }}
        />
      </div>
    </section>
  );
}


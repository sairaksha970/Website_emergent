export default function ProductsHero() {
  return (
    <section className="products-banner-hero" data-testid="products-hero">
      <div className="products-banner-wrap">
        <img 
          src="/images/Product_hero.webp" 
          alt="Sairaksha Dairy Products - Gomukhi, Sri Lakshmi, and Amogh" 
          className="products-hero-img"
          loading="eager"
        />
      </div>
    </section>
  );
}

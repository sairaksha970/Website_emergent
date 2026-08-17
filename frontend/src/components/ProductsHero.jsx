import { motion, useReducedMotion } from "framer-motion";

export default function ProductsHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="products-banner-hero" data-testid="products-hero">
      <div className="products-banner-wrap">
        <motion.img 
          src="/images/Product_hero.webp" 
          alt="Sairaksha Dairy Products - Gomukhi, Sri Lakshmi, and Amogh" 
          className="products-hero-img"
          loading="eager"
          initial={shouldReduceMotion ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 1.03, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.85, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </section>
  );
}

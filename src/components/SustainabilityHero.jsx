import { motion, useReducedMotion } from "motion/react";

export default function SustainabilityHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="sustainability-banner-hero" data-testid="sustainability-hero">
      <div className="sustainability-banner-wrap">
        <motion.img 
          src="/images/sustainability.webp?v=1" 
          alt="Sustainability & Operations - Responsible Dairy, from Source to Plant" 
          className="sustainability-hero-img"
          loading="eager"
          initial={shouldReduceMotion ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 1.03, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.85, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </section>
  );
}


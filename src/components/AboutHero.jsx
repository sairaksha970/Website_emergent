import { motion, useReducedMotion } from "motion/react";

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="about-banner-hero" data-testid="about-hero">
      <div className="about-banner-wrap">
        <motion.img 
          src="/images/about_us.webp" 
          alt="About Sairaksha Dairy Products - Built slowly, grown with purpose" 
          className="about-hero-img"
          loading="eager"
          initial={shouldReduceMotion ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 1.03, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.85, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </section>
  );
}

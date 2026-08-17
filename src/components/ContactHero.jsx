import { motion, useReducedMotion } from "motion/react";

export default function ContactHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="contact-banner-hero" data-testid="contact-hero">
      <div className="contact-banner-wrap">
        <motion.img 
          src="/images/contactus_hero.webp" 
          alt="Contact Sairaksha Dairy Products - Get in touch with our team" 
          className="contact-hero-img"
          loading="eager"
          initial={shouldReduceMotion ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 1.03, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.85, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </section>
  );
}

import { motion, useReducedMotion } from "motion/react";

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="about-banner-hero" data-testid="about-hero">
      <div className="about-banner-wrap">
        <motion.img 
          src="/images/about.webp" 
          alt="About Sairaksha Dairy Products - Built slowly, grown with purpose" 
          className="about-hero-img"
          loading="eager"
          initial={shouldReduceMotion ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 1.03, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.85, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="about-hero-overlay"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-hero-heading">
            <h1 className="hero-title-main">Built slowly.</h1>
            <h2 className="hero-title-sub">Grown with purpose.</h2>
          </div>
          <div className="about-hero-text-body">
            <p>
              SAIRAKSHA DAIRY PRODUCTS PRIVATE LIMITED is a closely held company incorporated on 7 June 2012, with a clear focus on building a dependable dairy business founded on quality, discipline and long-term relationships.
            </p>
            <p>
              Starting with just 5,000 litres of liquid milk per day, the company has grown into an established dairy operation processing and selling approximately 70,000 litres of milk and curd and 2,000 kg of paneer daily.
            </p>
            <p>
              Its main processing facility at Kuppam, Andhra Pradesh, has a processing capacity of approximately 100,000 litres per day and storage capacity of 100,000 litres. Operations are supported by three strategically located chilling centres within an 80-kilometre radius and an owned fleet of 40 insulated vehicles, enabling efficient collection, processing and distribution.
            </p>
            <p>
              Today, Sairaksha Dairy serves customers across Andhra Pradesh, Karnataka, Tamil Nadu and Telangana, with a growing reputation for consistency, quality and reliability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


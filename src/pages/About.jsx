import { useState, useEffect, useRef } from "react";
import { Award, Droplets, Factory, Flag, Handshake, MapPin, Milk, Package, Snowflake, Sprout, TrendingUp, Truck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import AboutHero from "@/components/AboutHero";
import { assets, fssaiNumber, timeline } from "@/data";

const railStats = [
  { icon: Milk, numericValue: 70000, suffix: " litres", staticValue: "70,000 litres", label: "Milk & curd sold every day" },
  { icon: Package, numericValue: 2000, suffix: " kg", staticValue: "2,000 kg", label: "Paneer produced every day" },
  { icon: Snowflake, numericValue: 3, suffix: "", staticValue: "3", label: "Chilling centres within 80 km radius" },
  { icon: Truck, numericValue: 23, suffix: "", staticValue: "23", label: "Owned insulated vehicles" },
];

const journeyIcons = { Flag, Snowflake, MapPin, TrendingUp, Award, Factory };

function AnimatedStatValue({ target, suffix, staticValue, shouldReduceMotion }) {
  const [count, setCount] = useState(shouldReduceMotion ? target : 0);
  const [hasStarted, setHasStarted] = useState(shouldReduceMotion);
  const ref = useRef(null);

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }
    if (!hasStarted) return;

    let startTime = null;
    const duration = 1600;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, target, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <b>{staticValue}</b>;
  }

  return (
    <motion.span
      ref={ref}
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true, amount: 0.2 }}
    >
      <b>
        {hasStarted ? count.toLocaleString() : 0}
        {suffix}
      </b>
    </motion.span>
  );
}

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <AboutHero />

      <section className="about section-pad" data-testid="about-profile-section">
        <div className="about-metrics-container">
          <div className="about-metrics-header">
            <div className="section-kicker"><span>01</span><span className="kicker-rule" /><span>OUR DAILY SCALE</span></div>
            <h2>Operational scale,<br /><em>every single day.</em></h2>
          </div>
          <div className="about-metrics-grid" data-testid="about-rail">
            {railStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  className="about-metric-card"
                  key={stat.label}
                  data-testid={`rail-${stat.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 22 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : {
                          duration: 0.5,
                          delay: index * 0.09,
                          ease: [0.16, 1, 0.3, 1],
                        }
                  }
                >
                  <motion.span
                    className="rail-icon"
                    initial={
                      shouldReduceMotion
                        ? { scale: 1, rotate: 0, opacity: 1 }
                        : { scale: 0.6, rotate: -15, opacity: 0 }
                    }
                    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : {
                            type: "spring",
                            stiffness: 360,
                            damping: 20,
                            delay: 0.15 + index * 0.09,
                          }
                    }
                  >
                    <Icon size={22} />
                  </motion.span>
                  <div className="metric-info">
                    <AnimatedStatValue
                      target={stat.numericValue}
                      suffix={stat.suffix}
                      staticValue={stat.staticValue}
                      shouldReduceMotion={shouldReduceMotion}
                    />
                    <small>{stat.label}</small>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="directors section-pad" data-testid="directors-section">
        <div className="directors-layout">
          <div className="directors-head">
            <div className="section-kicker"><span>02</span><span className="kicker-rule" /><span>OUR LEADERSHIP</span></div>
            <h2>The people<br /><em>behind the promise.</em></h2>
            <p className="directors-sub">Guiding Sairaksha Dairy with industry experience, financial discipline and long-term vision.</p>
          </div>
          <div className="director-grid">
            <motion.article
              className="director-card"
              data-testid="director-card-anuradha"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, delay: 0, ease: [0.16, 1, 0.3, 1] }}
            >
              <small>Director</small>
              <h3>Mrs. V. Anuradha Vinod</h3>
              <p>An accomplished professional with 14 years of banking experience, Mrs. V. Anuradha Vinod brings strong financial discipline, organisational expertise and a structured approach to the dairy business.</p>
              <p>An MBA in Human Resources, she has played an important role in shaping the company's administration, financial management and organisational growth, while helping build Sairaksha Dairy with a long-term vision.</p>
            </motion.article>
            <motion.article
              className="director-card"
              data-testid="director-card-krishna"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <small>Director</small>
              <h3>Mr. N. Lovely Krishna</h3>
              <p>With 16 years of experience in the dairy industry, Mr. N. Lovely Krishna brings extensive practical knowledge of dairy operations, milk procurement, processing and industry dynamics.</p>
              <p>A Bachelor's degree in Mathematics, his experience and operational understanding have contributed significantly to the company's growth and its ability to build strong relationships across the dairy value chain.</p>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="values section-pad" data-testid="values-section">
        <div className="section-kicker"><span>03</span><span className="kicker-rule" /><span>THE VALUES BEHIND SAIRAKSHA</span></div>
        <h2 className="values-tagline">Inspired by faith.<br /><em>Built by family. Driven by purity.</em></h2>
        <div className="flourish" aria-hidden="true"><span /></div>
        <div className="values-grid">
          <motion.figure
            className="values-photo"
            data-testid="values-baba-photo"
            initial={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.7, delay: 0, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={assets.valuesBaba} alt="Sai Baba shrine at the Sairaksha plant" />
            <div className="flourish small" aria-hidden="true"><span /></div>
            <figcaption>Guided by Blessings</figcaption>
            <p>In the divine blessings of Shri Sai Baba, our journey is protected, our hearts are strengthened, and our purpose remains pure.</p>
          </motion.figure>
          <motion.figure
            className="values-photo"
            data-testid="values-founders-photo"
            initial={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={assets.valuesFounders} alt="The founders of Sairaksha Dairy" />
            <div className="flourish small" aria-hidden="true"><span /></div>
            <figcaption>The Vision of Our Founders</figcaption>
            <p>With the values they instilled and the dreams they nurtured, our founders laid the foundation of trust, quality and integrity that continues to guide every step we take.</p>
          </motion.figure>
        </div>
        <motion.p
          className="values-quote"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
        >
          “Their blessings are our strength. Their values are our foundation. Their dreams are our direction.”
        </motion.p>
        <div className="flourish" aria-hidden="true"><span /></div>
        <p className="values-story">Our journey began with a simple belief — that purity, honesty and service should be at the heart of everything we do. Guided by the blessings of Sai Baba and the vision of our founders, Sairaksha Dairy has grown from a local dairy into a trusted name serving families across South India.</p>
      </section>

      <section className="story-timeline section-pad" data-testid="timeline-section">
        <div className="section-kicker"><span>04</span><span className="kicker-rule" /><span>OUR JOURNEY</span></div>
        <h2 className="timeline-heading">Every year,<br /><em>a step further.</em></h2>
        <div className="journey" data-testid="timeline-list">
          <div className="journey-track-line" aria-hidden="true" />
          <motion.div
            className="journey-animated-line"
            aria-hidden="true"
            initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            style={{ transformOrigin: "left" }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          />
          {timeline.map((item, index) => {
            const Icon = journeyIcons[item.icon];
            return (
              <motion.div
                className="journey-item"
                key={item.year}
                data-testid={`timeline-item-${item.year}`}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.45, delay: index * 0.18, ease: "easeOut" }
                }
              >
                <motion.span
                  className="journey-icon"
                  initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 420, damping: 18, delay: index * 0.18 }
                  }
                >
                  <Icon size={17} />
                </motion.span>
                <span className="journey-year">{item.year}</span>
                <h3>{item.title}</h3>
                <span className="journey-tag">{item.tag}</span>
                <p>{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="licences section-pad" data-testid="quality-standards-section">
        <div className="qs-grid">
          <div>
            <div className="section-kicker"><span>05</span><span className="kicker-rule" /><span>QUALITY & FOOD SAFETY</span></div>
            <h2 className="values-tagline">Quality is not an option.<br /><em>It is our standard.</em></h2>
            <div className="fssai-chip" data-testid="fssai-chip"><small>FSSAI License No.</small><b>{fssaiNumber}</b></div>
          </div>
          <div className="quality-standards-copy">
            <p>At Sairaksha Dairy, quality begins at the point of milk procurement and continues through chilling, processing, packing, storage and distribution.</p>
            <p>We follow established food safety, hygiene and quality-control practices across our operations and maintain the licences, registrations and approvals required for our business activities.</p>
            <p className="quality-objective">Our objective is simple: <b>Safe products. Consistent quality. Responsible operations.</b></p>
            <p>We continuously work towards strengthening our systems, infrastructure and compliance standards as the business grows.</p>
          </div>
        </div>
      </section>

      <section className="promise section-pad" data-testid="promise-section">
        <div className="promise-card reveal-on-scroll">
          <div className="promise-copy">
            <h2>From farmers<br /><em>to families.</em></h2>
            <p>Dairy is more than a business. It is a relationship that connects farmers, employees, partners and consumers.</p>
            <p>Our journey from 5,000 litres a day to a multi-state dairy operation has been built step by step — with the trust of our milk suppliers, the commitment of our people and the confidence of our customers.</p>
            <p>As we move into our next phase of growth, our focus remains unchanged:</p>
            <div className="promise-values" data-testid="promise-focus">
              <div><Droplets size={18} /><span><b>Quality</b><small>in every drop.</small></span></div>
              <div><Handshake size={18} /><span><b>Integrity</b><small>in every relationship.</small></span></div>
              <div><Sprout size={18} /><span><b>Purpose</b><small>in every step forward.</small></span></div>
            </div>
          </div>
          <div className="promise-visual">
            <img src={assets.farmer} alt="Sairaksha farmer partners with their cattle" />
            <div className="promise-stamp">
              <small>Sairaksha Dairy</small>
              <strong>2012</strong>
              <small>Built slowly · Grown with purpose<br />Driven by quality · Ready for tomorrow</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Check, ChevronLeft, ChevronRight, FlaskConical, Milk, PackageCheck, ShieldCheck, Thermometer, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import ProductShowcaseCard from "@/components/ProductShowcaseCard";
import ScrollingGallery from "@/components/ScrollingGallery";
import { assets, factoryGallery, plantVideos, products, purityChecks } from "@/data";

const purityIcons = { ShieldCheck, Thermometer, FlaskConical, PackageCheck };

const heroShowcase = [
  { image: assets.curd, alt: "Gomukhi curd served fresh" },
  { image: assets.milk, alt: "Gomukhi full cream milk" },
  { image: assets.amoghPaneer, alt: "Amogh paneer" },
  { image: assets.khova, alt: "Amogh unsweetened khova" },
];

const pick = (name, brand) => products.find((p) => p.name === name && p.brand === brand);

const showcase = [
  { product: pick("Fresh Curd", "Gomukhi"), blurb: "Thick, creamy and fresh. Made with pure cow milk for every meal." },
  { product: pick("Butter Milk", "Sri Lakshmi"), blurb: "Refreshing and light. A perfect blend of taste and tradition." },
  { product: pick("Paneer", "Amogh"), blurb: "Soft, wholesome and protein rich. Perfect for everyday cooking." },
  { product: pick("Full Cream Milk", "Gomukhi"), blurb: "Made from pure cow milk. Rich aroma and natural goodness." },
].filter((item) => item.product);

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [heroIndex, setHeroIndex] = useState(0);
  const [hoveredProductIndex, setHoveredProductIndex] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  const filmsRef = useRef(null);
  const heroRef = useRef(null);
  const heroParallaxRef = useRef(null);
  const statsRef = useRef(null);
  const qualityRef = useRef(null);
  const [stats, setStats] = useState({ litres: 70, vehicles: 23, people: 200 });
  const [qualityLitres, setQualityLitres] = useState(200000);

  // Hero carousel auto-advance
  useEffect(() => {
    const timer = window.setInterval(() => setHeroIndex((index) => (index + 1) % heroShowcase.length), 3000);
    return () => window.clearInterval(timer);
  }, []);

  // Video preloading and IntersectionObserver for smooth autoplay
  useEffect(() => {
    const videos = filmsRef.current ? Array.from(filmsRef.current.querySelectorAll("video")) : [];
    
    // Prompt the browser to buffer video data immediately on mount
    videos.forEach((video) => {
      video.preload = "auto";
      video.load();
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.25 });
    videos.forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, []);

  // Stats count-up animation on entrance (Hero)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setStats({ litres: 70, vehicles: 23, people: 200 });
      return;
    }

    // Initialize to 0 for count-up
    setStats({ litres: 0, vehicles: 0, people: 0 });

    let hasStarted = false;
    let animFrameId = null;

    const startCountUp = () => {
      if (hasStarted) return;
      hasStarted = true;

      const duration = 1600;
      const startTime = performance.now();
      const targets = { litres: 70, vehicles: 23, people: 200 };
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);

        setStats({
          litres: Math.round(eased * targets.litres),
          vehicles: Math.round(eased * targets.vehicles),
          people: Math.round(eased * targets.people),
        });

        if (progress < 1) {
          animFrameId = requestAnimationFrame(step);
        }
      };

      animFrameId = requestAnimationFrame(step);
    };

    // Stagger start slightly (400ms) after mount so it matches the stats entrance animation
    const timer = setTimeout(() => {
      startCountUp();
    }, 400);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          startCountUp();
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      clearTimeout(timer);
      if (animFrameId) cancelAnimationFrame(animFrameId);
      observer.disconnect();
    };
  }, []);

  // Quality section 2,00,000 litres processed daily count-up hook (Pattern C)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setQualityLitres(200000);
      return;
    }

    setQualityLitres(0);
    let animFrameId = null;
    let hasAnimated = false;
    const targetLitres = 200000;
    const duration = 1600;

    const startCountUp = () => {
      if (hasAnimated) return;
      hasAnimated = true;
      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setQualityLitres(Math.round(eased * targetLitres));

        if (progress < 1) {
          animFrameId = requestAnimationFrame(step);
        }
      };

      animFrameId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          startCountUp();
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (qualityRef.current) {
      observer.observe(qualityRef.current);
    }

    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      observer.disconnect();
    };
  }, []);

  // Mouse parallax & Scroll-based parallax with rAF & IntersectionObserver gating
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (prefersReducedMotion || !isDesktop) return;

    let isHeroVisible = true;
    let mouseX = 0;
    let mouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let scrollY = window.scrollY;
    let rAFId = null;

    // Gate loop with IntersectionObserver
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        isHeroVisible = entry.isIntersecting;
        if (isHeroVisible && !rAFId) {
          rAFId = requestAnimationFrame(updateParallax);
        }
      },
      { threshold: 0.05 }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    const onMouseMove = (e) => {
      // Calculate normalized mouse coordinates (-1 to 1) relative to center of screen
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    const updateParallax = () => {
      if (!isHeroVisible) {
        rAFId = null;
        return;
      }

      // Smooth lerp mouse movement
      currentMouseX += (mouseX - currentMouseX) * 0.08;
      currentMouseY += (mouseY - currentMouseY) * 0.08;

      // Mouse shift: max 12px horizontal, 10px vertical
      const mouseOffsetX = currentMouseX * 12;
      const mouseOffsetY = currentMouseY * 10;

      // Subtle scroll parallax: max ~25px upward as user scrolls through hero
      const scrollOffset = scrollY * 0.06;

      if (heroParallaxRef.current) {
        heroParallaxRef.current.style.transform = `translate3d(${mouseOffsetX.toFixed(2)}px, ${(mouseOffsetY - scrollOffset).toFixed(2)}px, 0)`;
      }

      rAFId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    rAFId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      if (rAFId) cancelAnimationFrame(rAFId);
      heroObserver.disconnect();
    };
  }, []);

  return (
    <>
      <section className="hero section-pad" id="home" data-testid="hero-section" ref={heroRef}>
        <div className="hero-copy">
          <p className="eyebrow hero-anim-eyebrow"><span className="eyebrow-line" /> Rooted in trust · Made in Kuppam</p>
          <h1 className="hero-anim-heading">Goodness that<br /><em>comes full circle.</em></h1>
          <p className="hero-intro hero-anim-intro">From the first collection at the village to the last pour at home, we protect what makes milk good.</p>
          <div className="hero-actions hero-anim-actions">
            <Link className="button button-dark" to="/products" data-testid="hero-explore-products-button">Explore our products <ArrowDown size={16} /></Link>
            <Link className="text-button" to="/about" data-testid="hero-our-story-button">Discover our story <ArrowUpRight size={16} /></Link>
          </div>
          <div className="hero-proof hero-anim-proof" data-testid="hero-proof-stats" ref={statsRef}>
            <div><strong>{stats.litres}k<span>+</span></strong><small>litres sold daily</small></div>
            <div><strong>{stats.vehicles}</strong><small>insulated vehicles</small></div>
            <div><strong>{stats.people}</strong><small>people at work</small></div>
          </div>
        </div>
        <div className="hero-visual hero-visual-entrance">
          <div className="hero-parallax-wrapper" ref={heroParallaxRef}>
            <div className="hero-image-frame float-slow" data-testid="hero-showcase">
              {heroShowcase.map((item, index) => (
                <img key={item.image} src={item.image} alt={item.alt} className={index === heroIndex ? "is-active" : ""} data-testid={index === heroIndex ? "hero-product-image" : undefined} />
              ))}
            </div>
            <div className="hero-stamp hero-stamp-entrance" data-testid="hero-stamp" aria-label="100% Pure by Nature">
              <svg viewBox="0 0 120 120" className="hero-stamp-svg">
                <defs>
                  <path
                    id="heroCirclePath"
                    d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                  />
                </defs>
                <g className="hero-stamp-rotating-ring">
                  <text className="hero-stamp-curved-text">
                    <textPath href="#heroCirclePath" startOffset="0%" textLength="276" lengthAdjust="spacing">
                      {"PURE BY NATURE • PURE BY NATURE • "}
                    </textPath>
                  </text>
                </g>
                <text x="60" y="60" dominantBaseline="central" textAnchor="middle" className="hero-stamp-center-text">
                  100%
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Hero to Promise Separator */}
      <div className="hero-promise-divider" aria-hidden="true">
        <div className="hero-divider-track">
          <span className="hero-divider-leaf">✦</span>
          <span className="hero-divider-label">PURE BY NATURE · KUPPAM</span>
          <span className="hero-divider-leaf">✦</span>
        </div>
      </div>

      <section className="quality section-pad" id="quality" data-testid="quality-section" ref={qualityRef}>
        <div className="quality-photo reveal-scale" data-testid="quality-photo-container"><img src={assets.exterior} alt="Sairaksha dairy Kuppam processing plant exterior" data-testid="quality-feature-image" /><span className="photo-caption">Kuppam · Andhra Pradesh</span></div>
        <div className="quality-copy">
          <div className="section-kicker reveal-on-scroll"><span>THE SAIRAKSHA PROMISE</span></div>
          <h2 className="reveal-on-scroll">Closer to the source.<br /><em>Stricter about quality.</em></h2>
          <p className="reveal-on-scroll">Our milk is collected from farmers, chilled at the source and carefully directed to our main plant. Every batch is processed with food safety and freshness in mind.</p>
          <ul>
            {[
              "Pasteurised & homogenised processing",
              "A connected cold chain from village to home",
              "Licensed and equipped to food safety standards"
            ].map((item, idx) => (
              <li key={item} className="reveal-on-scroll" style={{ transitionDelay: `${idx * 100}ms` }}>
                <span><Check size={13} /></span>{item}
              </li>
            ))}
          </ul>
          <div className="facility-callout reveal-on-scroll" style={{ transitionDelay: "300ms" }}>
            <strong data-testid="quality-stat-number">{qualityLitres.toLocaleString("en-IN")}</strong>
            <span>litres processed daily<br />at our main plant</span>
          </div>
        </div>
      </section>

      <section className="edit-products section-pad" data-testid="products-section">
        <motion.div
          className="sp-head"
          data-testid="transition-section"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">Our Products</p>
          <h2>Made for <em>everyday goodness.</em></h2>
          <p>Pure ingredients. Honest processes. Trusted by families.</p>
        </motion.div>
        
        <div
          className="sp-grid"
          data-testid="product-grid"
          onMouseLeave={() => setHoveredProductIndex(null)}
        >
          {showcase.map(({ product, blurb }, index) => (
            <ProductShowcaseCard
              key={`${product.brand}-${product.name}`}
              product={product}
              blurb={blurb}
              index={index}
              isHovered={hoveredProductIndex === index}
              isDimmed={hoveredProductIndex !== null && hoveredProductIndex !== index}
              onHoverStart={() => setHoveredProductIndex(index)}
              onHoverEnd={() => setHoveredProductIndex(null)}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
        
        <motion.div
          className="sp-strip"
          data-testid="products-strip"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="sp-strip-icon"><Milk size={30} /></span>
          <p>From our farms to your home,<br /><em>quality you can trust, every day.</em></p>
          <Link className="button button-dark" to="/products" data-testid="view-all-products-button">
            Explore all products <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </section>

      <section className="plant-films section-pad" data-testid="plant-films-section" ref={filmsRef}>
        <h2 className="reveal-on-scroll">A glimpse inside<br /><em>our plant.</em></h2>
        <div className="video-grid" data-testid="video-grid">
          {plantVideos.map((film, index) => (
            <button className="video-card reveal-scale" style={{ transitionDelay: `${index * 60}ms` }} key={film.title} onClick={() => setSelectedImage(film)} data-testid={`video-card-${index + 1}`} aria-label={`Play ${film.title} video with sound`}>
              <video poster={film.poster} muted loop playsInline preload="auto">
                <source src={film.video} type="video/mp4" />
                {film.webm && <source src={film.webm} type="video/webm" />}
              </video>
            </button>
          ))}
        </div>
      </section>

      <section className="purity section-pad" data-testid="purity-section">
        <h2 className="reveal-on-scroll">Every drop,<br /><em>checked with care.</em></h2>
        <div className="purity-grid" data-testid="purity-grid">
          {purityChecks.map((check, index) => {
            const Icon = purityIcons[check.icon];
            return (
              <article className="purity-card reveal-on-scroll" style={{ transitionDelay: `${index * 80}ms` }} key={check.title} data-testid={`purity-card-${check.title.toLowerCase().replaceAll(" ", "-")}`}>
                <span className="purity-icon"><Icon size={19} /></span>
                <h3>{check.title}</h3>
                <p>{check.text}</p>
                <span className="purity-verified"><Check size={12} /> Verified <b>{check.stat}</b> {check.statLabel}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="factory-gallery section-pad" data-testid="factory-gallery-section">
        <div className="factory-gallery-head">
          <div>
            <h2 className="reveal-on-scroll">
              Where the work<br /><em>comes together.</em>
            </h2>
          </div>
        </div>

        <ScrollingGallery
          onSelectImage={(item) => setSelectedImage(item)}
          shouldReduceMotion={shouldReduceMotion}
        />
      </section>

      <section className="future-banner reveal-on-scroll" data-testid="future-project-section">
        <img className="future-bg" src={assets.aerial} alt="Aerial view of the Sairaksha Dairy plant" />
        <div className="section-pad future-inner">
          <div>
            <h2>A bigger future,<br /><em>still close to home.</em></h2>
            <p>Our planned SMP manufacturing unit in Kuppam will create around <b>300 local opportunities</b> and serve a region rich in milk production.</p>
            <Link className="button button-gold" to="/contact" data-testid="future-project-enquiry-button">Discover our future <ArrowUpRight size={16} /></Link>
          </div>
          <div className="future-year"><span>Target</span><strong>2027</strong><small>SMP & beyond for all.</small></div>
        </div>
      </section>

      {selectedImage && (() => {
        const galleryIndex = !selectedImage.video
          ? factoryGallery.findIndex((item) => item.title === selectedImage.title)
          : -1;

        const handlePrevImg = (e) => {
          e?.stopPropagation();
          if (galleryIndex === -1) return;
          const prevIdx = (galleryIndex - 1 + factoryGallery.length) % factoryGallery.length;
          setSelectedImage(factoryGallery[prevIdx]);
        };

        const handleNextImg = (e) => {
          e?.stopPropagation();
          if (galleryIndex === -1) return;
          const nextIdx = (galleryIndex + 1) % factoryGallery.length;
          setSelectedImage(factoryGallery[nextIdx]);
        };

        return (
          <div 
            className="lightbox" 
            role="dialog" 
            aria-modal="true" 
            aria-label={selectedImage.title} 
            data-testid="factory-lightbox"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedImage(null);
            }}
          >
            <button 
              className="lightbox-close" 
              onClick={() => setSelectedImage(null)} 
              data-testid="factory-lightbox-close" 
              aria-label="Close viewer"
            >
              <X size={21} />
            </button>

            {galleryIndex !== -1 && (
              <>
                <button
                  type="button"
                  className="lightbox-nav-btn prev"
                  onClick={handlePrevImg}
                  aria-label="Previous image in gallery"
                  data-testid="lightbox-prev-btn"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  className="lightbox-nav-btn next"
                  onClick={handleNextImg}
                  aria-label="Next image in gallery"
                  data-testid="lightbox-next-btn"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              {selectedImage.video ? (
                <video 
                  poster={selectedImage.poster} 
                  autoPlay 
                  controls 
                  playsInline 
                  preload="auto" 
                  data-testid="lightbox-video" 
                  ref={(node) => { if (node) node.play().catch(() => {}); }}
                >
                  <source src={selectedImage.video} type="video/mp4" />
                  {selectedImage.webm && <source src={selectedImage.webm} type="video/webm" />}
                </video>
              ) : (
                <img src={selectedImage.image} alt={selectedImage.caption} data-testid="factory-lightbox-image" />
              )}
              <p>
                <span className="lightbox-meta-top">
                  <b>{selectedImage.title}</b>
                  {galleryIndex !== -1 && (
                    <span className="lightbox-counter-badge">
                      {galleryIndex + 1} of {factoryGallery.length}
                    </span>
                  )}
                </span>
                <span>{selectedImage.caption}</span>
              </p>
            </div>
          </div>
        );
      })()}
    </>
  );
}

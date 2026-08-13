import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, FlaskConical, Milk, PackageCheck, ShieldCheck, Thermometer, Truck, Users, X } from "lucide-react";
import { assets, factoryGallery, plantVideos, products, purityChecks } from "@/data";

const purityIcons = { ShieldCheck, Thermometer, FlaskConical, PackageCheck };

const heroStats = [
  { icon: Milk, value: "70k", suffix: "+", label: "litres sold daily" },
  { icon: Truck, value: "23", suffix: "", label: "insulated vehicles" },
  { icon: Users, value: "200", suffix: "", label: "people at work" },
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
  const filmsRef = useRef(null);

  useEffect(() => {
    const videos = filmsRef.current ? Array.from(filmsRef.current.querySelectorAll("video")) : [];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      });
    }, { threshold: 0.35 });
    videos.forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero3" id="home" data-testid="hero-section">
        <img className="hero3-bg" src={assets.curd} alt="Gomukhi curd pouches with a fresh bowl of curd" data-testid="hero-product-image" />
        <div className="section-pad hero3-inner">
          <div className="hero-copy">
            <p className="eyebrow reveal-up"><span className="eyebrow-line" /> Rooted in trust · Made in Kuppam</p>
            <h1 className="reveal-up delay-1">Goodness that<br /><em>comes full circle.</em></h1>
            <p className="hero-intro reveal-up delay-2">From the first collection at the village<br />to the last pour at home,<br />we protect what makes milk good.</p>
            <div className="hero-actions reveal-up delay-3">
              <Link className="button button-dark" to="/products" data-testid="hero-explore-products-button">Explore our products <ArrowUpRight size={16} /></Link>
              <Link className="text-button" to="/about" data-testid="hero-our-story-button">Discover our story <ArrowUpRight size={16} /></Link>
            </div>
            <div className="hero3-proof reveal-up delay-4" data-testid="hero-proof-stats">
              {heroStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div className="hero3-stat" key={stat.label}>
                    <span className="hero3-stat-icon"><Icon size={17} /></span>
                    <div><strong>{stat.value}<span>{stat.suffix}</span></strong><small>{stat.label}</small></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="edit-products section-pad" data-testid="products-section">
        <div className="sp-head" data-testid="transition-section">
          <p className="eyebrow reveal-on-scroll">Our Products</p>
          <h2 className="reveal-on-scroll">Made for <em>everyday goodness.</em></h2>
          <p className="reveal-on-scroll">Pure ingredients. Honest processes. Trusted by families.</p>
        </div>
        <div className="sp-grid" data-testid="product-grid">
          {showcase.map(({ product, blurb }, index) => (
            <Link to={`/products?brand=${encodeURIComponent(product.brand)}`} className="sp-card reveal-on-scroll" style={{ transitionDelay: `${index * 90}ms` }} key={`${product.brand}-${product.name}`} data-testid={`product-card-${product.brand.toLowerCase().replace(" ", "-")}-${product.name.toLowerCase().replaceAll(" ", "-")}`}>
              <div className="sp-img"><img src={product.image} alt={`${product.brand} ${product.name}`} /></div>
              <div className="sp-meta">
                <h3>{product.brand} {product.name === "Fresh Curd" ? "Curd" : product.name}</h3>
                <p>{blurb}</p>
                <span className="sp-more">Learn more <ArrowUpRight size={13} /></span>
              </div>
            </Link>
          ))}
        </div>
        <div className="sp-strip reveal-on-scroll" data-testid="products-strip">
          <span className="sp-strip-icon"><Milk size={30} /></span>
          <p>From our farms to your home,<br /><em>quality you can trust, every day.</em></p>
          <Link className="button button-dark" to="/products" data-testid="view-all-products-button">Explore all products <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section className="plant-films section-pad" data-testid="plant-films-section" ref={filmsRef}>
        <div className="section-kicker reveal-on-scroll"><span>02</span><span className="kicker-rule" /><span>PURITY, IN MOTION</span></div>
        <h2 className="reveal-on-scroll">A glimpse inside<br /><em>our plant.</em></h2>
        <div className="video-grid" data-testid="video-grid">
          {plantVideos.map((film, index) => (
            <button className="video-card reveal-on-scroll" style={{ transitionDelay: `${index * 90}ms` }} key={film.title} onClick={() => setSelectedImage(film)} data-testid={`video-card-${index + 1}`} aria-label={`Play ${film.title} video with sound`}>
              <video poster={film.poster} muted loop playsInline preload="metadata">
                <source src={film.video} type="video/mp4" />
                <source src={film.webm} type="video/webm" />
              </video>
              <span className="video-tag">{film.title}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="quality section-pad" data-testid="quality-section">
        <div className="quality-photo reveal-on-scroll"><img src={assets.exterior} alt="Sairaksha dairy Kuppam processing plant exterior" data-testid="quality-feature-image" /><span className="photo-caption">Kuppam · Andhra Pradesh</span></div>
        <div className="quality-copy reveal-on-scroll delay-1">
          <div className="section-kicker"><span>03</span><span className="kicker-rule" /><span>THE SAIRAKSHA PROMISE</span></div>
          <h2>Closer to the source.<br /><em>Stricter about quality.</em></h2>
          <p>Our milk is collected from farmers, chilled at the source and carefully directed to our main plant. Every batch is processed with food safety and freshness in mind.</p>
          <ul>{["Pasteurised & homogenised processing", "A connected cold chain from village to home", "Licensed and equipped to food safety standards"].map((item) => <li key={item}><span><Check size={13} /></span>{item}</li>)}</ul>
          <div className="facility-callout"><strong>2,00,000</strong><span>litres processed daily<br />at our main plant</span></div>
        </div>
      </section>

      <section className="purity section-pad" data-testid="purity-section">
        <div className="section-kicker reveal-on-scroll"><span>04</span><span className="kicker-rule" /><span>4-POINT PURITY CHECKPOINT</span></div>
        <h2 className="reveal-on-scroll">Every drop,<br /><em>checked with care.</em></h2>
        <div className="purity-grid" data-testid="purity-grid">
          {purityChecks.map((check, index) => {
            const Icon = purityIcons[check.icon];
            return (
              <article className="purity-card reveal-on-scroll" style={{ transitionDelay: `${index * 90}ms` }} key={check.title} data-testid={`purity-card-${check.title.toLowerCase().replaceAll(" ", "-")}`}>
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
        <div className="section-kicker reveal-on-scroll"><span>05</span><span className="kicker-rule" /><span>INSIDE KUPPAM</span></div>
        <h2 className="reveal-on-scroll">Where the work<br /><em>comes together.</em></h2>
        <div className="masonry" data-testid="factory-gallery-grid">
          {factoryGallery.map((item, index) => (
            <button className="masonry-item" key={item.title} onClick={() => setSelectedImage(item)} data-testid={`factory-gallery-image-${index + 1}`} aria-label={`Open photo ${index + 1}`}>
              <img src={item.image} alt={item.caption} loading="lazy" />
            </button>
          ))}
        </div>
      </section>

      <section className="future-banner" data-testid="future-project-section">
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

      <section className="cta-band section-pad" data-testid="home-contact-cta">
        <h2>Let’s bring good<br /><em>things to the table.</em></h2>
        <p>Looking for a dairy partner, bulk supply or distribution conversation? We would love to hear from you.</p>
        <Link className="button button-dark" to="/contact" data-testid="home-contact-cta-button">Start a conversation <ArrowUpRight size={16} /></Link>
      </section>

      {selectedImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedImage.title} data-testid="factory-lightbox">
          <button className="lightbox-close" onClick={() => setSelectedImage(null)} data-testid="factory-lightbox-close" aria-label="Close viewer"><X size={21} /></button>
          <div className="lightbox-content">
            {selectedImage.video ? (
              <video poster={selectedImage.poster} controls playsInline data-testid="lightbox-video" ref={(node) => { if (node) node.play().catch(() => {}); }}>
                <source src={selectedImage.video} type="video/mp4" />
                <source src={selectedImage.webm} type="video/webm" />
              </video>
            ) : (
              <img src={selectedImage.image} alt={selectedImage.caption} data-testid="factory-lightbox-image" />
            )}
            <p><b>{selectedImage.title}</b><span>{selectedImage.caption}</span></p>
          </div>
        </div>
      )}
    </>
  );
}

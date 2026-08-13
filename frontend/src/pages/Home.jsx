import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRight, Check, FlaskConical, PackageCheck, ShieldCheck, Thermometer, X } from "lucide-react";
import { assets, brands, factoryGallery, plantVideos, products, purityChecks } from "@/data";

const purityIcons = { ShieldCheck, Thermometer, FlaskConical, PackageCheck };
const heroShowcase = [
  { image: assets.curd, alt: "Gomukhi curd served fresh" },
  { image: assets.milk, alt: "Gomukhi full cream milk" },
  { image: assets.amoghPaneer, alt: "Amogh paneer" },
  { image: assets.khova, alt: "Amogh unsweetened khova" },
];

export default function Home() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [heroIndex, setHeroIndex] = useState(0);
  const filmsRef = useRef(null);

  const previewKeys = ["Full Cream Milk|Gomukhi", "Fresh Curd|Gomukhi", "Paneer|Amogh", "Unsweetened Khova|Amogh", "Full Cream Milk|Sri Lakshmi"];
  const previewProducts = previewKeys.map((key) => {
    const [name, brand] = key.split("|");
    return products.find((p) => p.name === name && p.brand === brand);
  }).filter(Boolean);

  useEffect(() => {
    const timer = window.setInterval(() => setHeroIndex((index) => (index + 1) % heroShowcase.length), 3000);
    return () => window.clearInterval(timer);
  }, []);

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
      <section className="hero section-pad" id="home" data-testid="hero-section">
        <div className="hero-copy reveal-up">
          <p className="eyebrow"><span className="eyebrow-line" /> Rooted in trust · Made in Kuppam</p>
          <h1>Goodness that<br /><em>comes full circle.</em></h1>
          <p className="hero-intro">From the first collection at the village to the last pour at home, we protect what makes milk good.</p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/products" data-testid="hero-explore-products-button">Explore our products <ArrowUpRight size={16} /></Link>
            <Link className="text-button" to="/about" data-testid="hero-our-story-button">Discover our story <ArrowUpRight size={16} /></Link>
          </div>
          <div className="hero-proof" data-testid="hero-proof-stats">
            <div><strong>50k<span>+</span></strong><small>litres sold daily</small></div>
            <div><strong>23</strong><small>insulated vehicles</small></div>
            <div><strong>200</strong><small>people at work</small></div>
          </div>
        </div>
        <div className="hero-visual reveal-up delay-1">
          <div className="hero-image-frame float-slow" data-testid="hero-showcase">
            {heroShowcase.map((item, index) => (
              <img key={item.image} src={item.image} alt={item.alt} className={index === heroIndex ? "is-active" : ""} data-testid={index === heroIndex ? "hero-product-image" : undefined} />
            ))}
          </div>
          <div className="hero-stamp">PURE<br /><span>by nature</span></div>
        </div>
      </section>

      <section className="quality section-pad" data-testid="quality-section">
        <div className="quality-photo reveal-on-scroll"><img src={assets.exterior} alt="Sairaksha dairy Kuppam processing plant exterior" data-testid="quality-feature-image" /><span className="photo-caption">Kuppam · Andhra Pradesh</span></div>
        <div className="quality-copy reveal-on-scroll delay-1">
          <div className="section-kicker"><span>01</span><span className="kicker-rule" /><span>THE SAIRAKSHA PROMISE</span></div>
          <h2>Closer to the source.<br /><em>Stricter about quality.</em></h2>
          <p>Our milk is collected from farmers, chilled at the source and carefully directed to our main plant. Every batch is processed with food safety and freshness in mind.</p>
          <ul>{["Pasteurised & homogenised processing", "A connected cold chain from village to home", "Licensed and equipped to food safety standards"].map((item) => <li key={item}><span><Check size={13} /></span>{item}</li>)}</ul>
          <div className="facility-callout"><strong>70,000 L</strong><span>daily processing<br />capacity at our main plant</span></div>
        </div>
      </section>

      <section className="products section-pad" data-testid="products-section">
        <div className="section-kicker reveal-on-scroll"><span>02</span><span className="kicker-rule" /><span>OUR PRODUCTS</span></div>
        <h2 className="reveal-on-scroll">Made for every home,<br /><em>every single day.</em></h2>
        <div className="product-grid product-grid-home" data-testid="product-grid">
          {previewProducts.map((product, index) => (
            <Link to={`/products?brand=${encodeURIComponent(product.brand)}`} className="product-card clean reveal-on-scroll" style={{ transitionDelay: `${index * 90}ms` }} key={`${product.brand}-${product.name}`} data-testid={`product-card-${product.brand.toLowerCase().replace(" ", "-")}-${product.name.toLowerCase().replaceAll(" ", "-")}`}>
              <div className="product-image"><img src={product.image} alt={`${product.brand} ${product.name}`} /></div>
              <div className="product-meta"><div><small>{product.brand}</small><h3>{product.name}</h3></div><ArrowUpRight size={16} /></div>
            </Link>
          ))}
        </div>
        <div className="section-more reveal-on-scroll"><Link className="text-button" to="/products" data-testid="view-all-products-button">View the full range <ArrowUpRight size={16} /></Link></div>
      </section>

      <section className="plant-films section-pad" data-testid="plant-films-section" ref={filmsRef}>
        <div className="section-kicker reveal-on-scroll"><span>03</span><span className="kicker-rule" /><span>PURITY, IN MOTION</span></div>
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

      <section className="brand-strip" data-testid="brands-section">
        <div className="section-pad brand-strip-inner">
          <p className="eyebrow">Three names, one promise</p>
          <div className="brand-list">
            {brands.map((brand, index) => (
              <button className={`brand-chip ${brand.color}`} key={brand.name} onClick={() => navigate(`/products?brand=${encodeURIComponent(brand.name)}`)} data-testid={`brand-${brand.name.toLowerCase().replace(" ", "-")}-button`}>
                <span>0{index + 1}</span><b>{brand.name}</b><small>{brand.sub}</small><ArrowUpRight size={16} />
              </button>
            ))}
          </div>
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

      <section className="future section-pad" data-testid="future-project-section">
        <div className="future-label">LOOKING AHEAD <span>✦</span></div>
        <div>
          <h2>A bigger future,<br /><em>still close to home.</em></h2>
          <p>Our planned SMP manufacturing unit in Kuppam will create around 300 local opportunities and serve a region rich in milk production.</p>
          <Link className="button button-light" to="/contact" data-testid="future-project-enquiry-button">Talk about the future <ArrowUpRight size={16} /></Link>
        </div>
        <div className="future-year"><span>Target</span><strong>2027</strong><small>25 MT / day powder plant</small></div>
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

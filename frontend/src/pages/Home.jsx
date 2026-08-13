import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, FlaskConical, PackageCheck, ShieldCheck, Thermometer, X } from "lucide-react";
import { assets, factoryGallery, plantVideos, products, purityChecks } from "@/data";

const purityIcons = { ShieldCheck, Thermometer, FlaskConical, PackageCheck };

const heroLayers = [
  { key: "back", image: assets.paneer, alt: "Amogh paneer pack", depth: 8 },
  { key: "mid", image: assets.curd, alt: "Gomukhi curd with a fresh bowl", depth: 15 },
  { key: "front", image: assets.milk, alt: "Gomukhi full cream milk pouches", depth: 24 },
];

const pick = (name, brand) => products.find((p) => p.name === name && p.brand === brand);

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const heroRef = useRef(null);
  const filmsRef = useRef(null);

  const featured = pick("Full Cream Milk", "Gomukhi");
  const stacked = [pick("Fresh Curd", "Gomukhi"), pick("Paneer", "Amogh")].filter(Boolean);
  const rowItems = [pick("Unsweetened Khova", "Amogh"), pick("Full Cream Milk", "Sri Lakshmi"), pick("Butter Milk", "Sri Lakshmi")].filter(Boolean);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const layers = hero.querySelectorAll(".stage-layer");
    const onMove = (event) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || 10);
        layer.style.setProperty("--px", `${(-x * depth).toFixed(1)}px`);
        layer.style.setProperty("--py", `${(-y * depth).toFixed(1)}px`);
      });
    };
    const onLeave = () => layers.forEach((layer) => { layer.style.setProperty("--px", "0px"); layer.style.setProperty("--py", "0px"); });
    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => { hero.removeEventListener("mousemove", onMove); hero.removeEventListener("mouseleave", onLeave); };
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
      <section className="hero2 section-pad" id="home" data-testid="hero-section" ref={heroRef}>
        <div className="hero-copy">
          <p className="eyebrow reveal-up"><span className="eyebrow-line" /> Rooted in trust · Made in Kuppam</p>
          <h1 className="reveal-up delay-1">From where it begins.<br /><em>To where it belongs.</em></h1>
          <p className="hero-intro reveal-up delay-2">From farmers we know to families we serve — quality dairy, made with care in Kuppam.</p>
          <div className="hero-actions reveal-up delay-3">
            <Link className="button button-dark" to="/products" data-testid="hero-explore-products-button">Explore our products <ArrowUpRight size={16} /></Link>
            <Link className="text-button" to="/about" data-testid="hero-our-story-button">Our story <ArrowUpRight size={16} /></Link>
          </div>
          <div className="hero-proof reveal-up delay-4" data-testid="hero-proof-stats">
            <div><strong>70K<span>+</span></strong><small>litres sold daily</small></div>
            <div><strong>23</strong><small>insulated vehicles</small></div>
            <div><strong>200<span>+</span></strong><small>people at work</small></div>
          </div>
        </div>
        <div className="hero-stage" data-testid="hero-showcase">
          {heroLayers.map((layer, index) => (
            <div className={`stage-layer layer-${layer.key}`} data-depth={layer.depth} key={layer.key} style={{ animationDelay: `${0.35 + index * 0.18}s` }}>
              <img src={layer.image} alt={layer.alt} className="stage-float" style={{ animationDuration: `${6 + index * 1.4}s` }} data-testid={layer.key === "front" ? "hero-product-image" : undefined} />
            </div>
          ))}
          <span className="stage-shadow" aria-hidden="true" />
        </div>
      </section>

      <section className="table-intro" data-testid="transition-section">
        <p className="eyebrow reveal-on-scroll"><span className="eyebrow-line" /> From our dairy to your table</p>
        <h2 className="reveal-on-scroll">Made for <em>everyday goodness.</em></h2>
        <p className="reveal-on-scroll">Fresh dairy essentials, made with care and delivered with consistency.</p>
      </section>

      <section className="edit-products section-pad" data-testid="products-section">
        <div className="edit-heading">
          <div><div className="section-kicker reveal-on-scroll"><span>01</span><span className="kicker-rule" /><span>OUR PRODUCTS</span></div>
          <h2 className="reveal-on-scroll">Everyday dairy.<br /><em>Done beautifully.</em></h2></div>
          <p className="reveal-on-scroll">From fresh curd to everyday essentials, discover the products families trust.</p>
        </div>
        <div className="edit-grid" data-testid="product-grid">
          {featured && (
            <Link to="/products?brand=Gomukhi" className="edit-card featured reveal-on-scroll" data-testid="product-card-featured">
              <div className="edit-img"><img src={featured.image} alt={`${featured.brand} ${featured.name}`} /></div>
              <div className="edit-meta"><small>{featured.category}</small><div><h3>{featured.brand} {featured.name}</h3><p>{featured.note}</p></div><span className="edit-arrow">View product <ArrowUpRight size={15} /></span></div>
            </Link>
          )}
          <div className="edit-stack">
            {stacked.map((product, index) => (
              <Link to={`/products?brand=${encodeURIComponent(product.brand)}`} className="edit-card reveal-on-scroll" style={{ transitionDelay: `${(index + 1) * 100}ms` }} key={`${product.brand}-${product.name}`} data-testid={`product-card-${product.brand.toLowerCase().replace(" ", "-")}-${product.name.toLowerCase().replaceAll(" ", "-")}`}>
                <div className="edit-img"><img src={product.image} alt={`${product.brand} ${product.name}`} /></div>
                <div className="edit-meta"><small>{product.category}</small><div><h3>{product.brand} {product.name}</h3><p>{product.note}</p></div><span className="edit-arrow">View product <ArrowUpRight size={15} /></span></div>
              </Link>
            ))}
          </div>
        </div>
        <div className="edit-row" data-testid="product-row">
          {rowItems.map((product, index) => (
            <Link to={`/products?brand=${encodeURIComponent(product.brand)}`} className="edit-card small reveal-on-scroll" style={{ transitionDelay: `${index * 90}ms` }} key={`${product.brand}-${product.name}`} data-testid={`product-card-${product.brand.toLowerCase().replace(" ", "-")}-${product.name.toLowerCase().replaceAll(" ", "-")}`}>
              <div className="edit-img"><img src={product.image} alt={`${product.brand} ${product.name}`} /></div>
              <div className="edit-meta"><small>{product.category}</small><div><h3>{product.brand} {product.name}</h3><p>{product.note}</p></div><span className="edit-arrow">View product <ArrowUpRight size={15} /></span></div>
            </Link>
          ))}
          <Link to="/products" className="edit-card small all-card reveal-on-scroll" data-testid="view-all-products-button">
            <div className="all-card-inner"><b>View the<br /><em>full range</em></b><span className="edit-arrow">All products <ArrowUpRight size={15} /></span></div>
          </Link>
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

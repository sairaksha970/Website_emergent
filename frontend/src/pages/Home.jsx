import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Check, FlaskConical, PackageCheck, ShieldCheck, Thermometer, X } from "lucide-react";
import { assets, brands, factoryGallery, products, purityChecks } from "@/data";

const purityIcons = { ShieldCheck, Thermometer, FlaskConical, PackageCheck };

export default function Home() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const previewProducts = products.filter((p) => ["Full Cream Milk", "Fresh Curd", "Lite Paneer", "Unsweetened Khova"].includes(p.name) || (p.brand === "Sri Lakshmi"));

  return (
    <>
      <section className="hero section-pad" id="home" data-testid="hero-section">
        <div className="hero-copy reveal-up">
          <p className="eyebrow"><span className="eyebrow-line" /> Rooted in trust · Made in Kuppam</p>
          <h1>Goodness that<br /><em>comes full circle.</em></h1>
          <p className="hero-intro">From the first collection at the village to the last pour at home, we protect what makes milk good.</p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/products" data-testid="hero-explore-products-button">Explore our products <ArrowDown size={16} /></Link>
            <Link className="text-button" to="/about" data-testid="hero-our-story-button">Discover our story <ArrowUpRight size={16} /></Link>
          </div>
          <div className="hero-proof" data-testid="hero-proof-stats">
            <div><strong>50k<span>+</span></strong><small>litres sold daily</small></div>
            <div><strong>23</strong><small>insulated vehicles</small></div>
            <div><strong>200</strong><small>people at work</small></div>
          </div>
        </div>
        <div className="hero-visual reveal-up delay-1">
          <div className="hero-image-frame"><img src={assets.curd} alt="Gomukhi curd served fresh" data-testid="hero-product-image" /></div>
          <div className="hero-note"><span className="note-dot" /><span><b>Fresh from Kuppam</b><small>Made for everyday nourishment</small></span></div>
          <div className="hero-stamp">PURE<br /><span>by nature</span></div>
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

      <section className="about section-pad" data-testid="about-section">
        <div className="section-kicker"><span>01</span><span className="kicker-rule" /><span>OUR STORY</span></div>
        <div className="about-grid">
          <h2>Built slowly.<br /><em>Grown with purpose.</em></h2>
          <div className="about-copy">
            <p>SAIRAKSHA DAIRY PRODUCTS PRIVATE LIMITED began in 2012 with one clear belief: quality is a promise you make at every step.</p>
            <p>Today, our milk travels from village farmers through chilling centres to our Kuppam plant — where care, cold chain and craft become food families can trust.</p>
            <Link className="text-button" to="/about" data-testid="about-promise-button">Read our full story <ArrowUpRight size={16} /></Link>
          </div>
        </div>
        <div className="metric-row" data-testid="company-metrics">
          <div><strong>₹100<span>cr</span></strong><small>turnover as on 31.03.2024</small></div>
          <div><strong>2L<span> L</span></strong><small>storage capacity at Kuppam</small></div>
          <div><strong>30<span>cr</span></strong><small>land, building & machinery</small></div>
          <div><strong>3</strong><small>chilling centres</small></div>
        </div>
      </section>

      <section className="products section-pad" data-testid="products-section">
        <div className="section-heading">
          <div><div className="section-kicker"><span>02</span><span className="kicker-rule" /><span>THE COLLECTION</span></div><h2>Everyday goodness,<br /><em>in every form.</em></h2></div>
          <p>Milk, curd, paneer and more — made for the way families eat, celebrate and care for one another.</p>
        </div>
        <div className="product-grid" data-testid="product-grid">
          {previewProducts.map((product) => (
            <article className="product-card" key={`${product.brand}-${product.name}`} data-testid={`product-card-${product.brand.toLowerCase().replace(" ", "-")}-${product.name.toLowerCase().replaceAll(" ", "-")}`}>
              <div className="product-image"><img src={product.image} alt={`${product.brand} ${product.name}`} /><span>{product.category}</span></div>
              <div className="product-meta"><div><small>{product.brand}</small><h3>{product.name}</h3><p>{product.note}</p></div></div>
            </article>
          ))}
        </div>
        <div className="section-more"><Link className="text-button" to="/products" data-testid="view-all-products-button">View the full collection <ArrowUpRight size={16} /></Link></div>
      </section>

      <section className="purity section-pad" data-testid="purity-section">
        <div className="section-heading">
          <div><div className="section-kicker"><span>03</span><span className="kicker-rule" /><span>4-POINT PURITY CHECKPOINT</span></div><h2>Every drop,<br /><em>checked with care.</em></h2></div>
          <p>Every drop of our milk passes through a rigorous quality assurance pipeline before reaching your family.</p>
        </div>
        <div className="purity-grid" data-testid="purity-grid">
          {purityChecks.map((check) => {
            const Icon = purityIcons[check.icon];
            return (
              <article className="purity-card" key={check.title} data-testid={`purity-card-${check.title.toLowerCase().replaceAll(" ", "-")}`}>
                <span className="purity-icon"><Icon size={19} /></span>
                <h3>{check.title}</h3>
                <p>{check.text}</p>
                <span className="purity-verified"><Check size={12} /> Verified <b>{check.stat}</b> {check.statLabel}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="quality section-pad" data-testid="quality-section">
        <div className="quality-photo"><img src={assets.exterior} alt="Sairaksha dairy Kuppam processing plant exterior" data-testid="quality-feature-image" /><span className="photo-caption">Kuppam · Andhra Pradesh</span></div>
        <div className="quality-copy">
          <div className="section-kicker"><span>04</span><span className="kicker-rule" /><span>THE SAIRAKSHA PROMISE</span></div>
          <h2>Closer to the source.<br /><em>Stricter about quality.</em></h2>
          <p>Our milk is collected from farmers, chilled at the source and carefully directed to our main plant. Every batch is processed with food safety and freshness in mind.</p>
          <ul>{["Pasteurised & homogenised processing", "A connected cold chain from village to home", "Licensed and equipped to food safety standards"].map((item) => <li key={item}><span><Check size={13} /></span>{item}</li>)}</ul>
          <div className="facility-callout"><strong>70,000 L</strong><span>daily processing<br />capacity at our main plant</span></div>
        </div>
      </section>

      <section className="factory-gallery section-pad" data-testid="factory-gallery-section">
        <div className="gallery-heading">
          <div><div className="section-kicker"><span>05</span><span className="kicker-rule" /><span>INSIDE KUPPAM</span></div><h2>Where the work<br /><em>comes together.</em></h2></div>
          <p>From the first chilled collection to the finished pack, every part of our dairy journey is close, visible and built to care for quality.</p>
        </div>
        <div className="gallery-grid" data-testid="factory-gallery-grid">
          {factoryGallery.map((item, index) => (
            <button className={`gallery-tile gallery-tile-${index + 1}`} key={item.title} onClick={() => setSelectedImage(item)} data-testid={`factory-gallery-image-${index + 1}`} aria-label={`Open ${item.title} image`}>
              <img src={item.image} alt={item.caption} /><span className="gallery-overlay"><b>{item.title}</b><small>{item.caption}</small><ArrowUpRight size={17} /></span>
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
          <button className="lightbox-close" onClick={() => setSelectedImage(null)} data-testid="factory-lightbox-close" aria-label="Close image viewer"><X size={21} /></button>
          <div className="lightbox-content"><img src={selectedImage.image} alt={selectedImage.caption} data-testid="factory-lightbox-image" /><p><b>{selectedImage.title}</b><span>{selectedImage.caption}</span></p></div>
        </div>
      )}
    </>
  );
}

import { useState } from "react";
import "@/App.css";
import { ArrowDown, ArrowUpRight, Check, ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";

const assets = {
  curd: "https://customer-assets-m6fa6gv7.emergentagent.net/job_1b2f1128-8127-4a39-abe5-0ef61eb21f82/artifacts/yeh0ek22_Gomukhi_curd.webp",
  milk: "https://customer-assets-m6fa6gv7.emergentagent.net/job_1b2f1128-8127-4a39-abe5-0ef61eb21f82/artifacts/xl9nl0j9_gomukhi_full_cream_milk.webp",
  paneer: "https://customer-assets-m6fa6gv7.emergentagent.net/job_1b2f1128-8127-4a39-abe5-0ef61eb21f82/artifacts/khwh59w3_amogh_lite_paneer.webp",
  khova: "https://customer-assets-m6fa6gv7.emergentagent.net/job_1b2f1128-8127-4a39-abe5-0ef61eb21f82/artifacts/7zxxvcxs_Amogh_khova.webp",
  toned: "https://customer-assets-m6fa6gv7.emergentagent.net/job_1b2f1128-8127-4a39-abe5-0ef61eb21f82/artifacts/fxaqznj4_srilakshmi_double_toned_milk.webp",
  fleet: "https://customer-assets-39nsmqrw.emergentagent.net/job_gomukhi-amogh/artifacts/kald9oxj_Fleet_2.webp",
  exterior: "https://customer-assets-39nsmqrw.emergentagent.net/job_gomukhi-amogh/artifacts/6rmwj6xn_Factory_0.webp",
  processing: "https://customer-assets-39nsmqrw.emergentagent.net/job_gomukhi-amogh/artifacts/wzmc1yfl_Factory_4.webp",
  production: "https://customer-assets-39nsmqrw.emergentagent.net/job_gomukhi-amogh/artifacts/xxiq5w81_Factory_5.webp",
};

const factoryGallery = [
  { title: "The Kuppam plant", caption: "Our main processing unit in Kuppam, Andhra Pradesh", image: assets.exterior },
  { title: "A connected cold chain", caption: "23 insulated vehicles carrying freshness forward", image: assets.fleet },
  { title: "Built for precision", caption: "Stainless steel processing and storage systems", image: assets.processing },
  { title: "People behind every pack", caption: "Careful packing and quality checks on the floor", image: assets.production },
];

const products = [
  { name: "Full Cream Milk", brand: "Gomukhi", category: "Milk", image: assets.milk, note: "Pasteurised & homogenised" },
  { name: "Fresh Curd", brand: "Gomukhi", category: "Cultured", image: assets.curd, note: "Made with cow milk" },
  { name: "Lite Paneer", brand: "Amogh", category: "Dairy foods", image: assets.paneer, note: "Power packed protein" },
  { name: "Unsweetened Khova", brand: "Amogh", category: "Dairy foods", image: assets.khova, note: "For healthy sweets" },
  { name: "Double Toned Milk", brand: "Sri Lakshmi", category: "Milk", image: assets.toned, note: "Pasteurised & homogenised" },
];

const brands = [
  { name: "Gomukhi", sub: "Quality · Purity", color: "terracotta", text: "Everyday milk and cultured favourites, made with care." },
  { name: "Amogh", sub: "Farm fresh", color: "sun", text: "Paneer and khova made for nourishing family moments." },
  { name: "Sri Lakshmi", sub: "Care for your health", color: "lemon", text: "A trusted choice for simple, wholesome milk." },
];

function App() {
  const [activeBrand, setActiveBrand] = useState("All");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const visibleProducts = activeBrand === "All" ? products : products.filter((product) => product.brand === activeBrand);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const showPlaceholder = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 4500);
  };

  return (
    <main className="site-shell">
      <div className="topline" data-testid="topline-notice">From our farmers to families across South India <span>✦</span> Since 2012</div>
      <header className="nav-wrap">
        <nav className="nav-bar" data-testid="main-navigation">
          <button className="wordmark" onClick={() => scrollTo("home")} data-testid="brand-home-button" aria-label="Go to home">
            <span className="wordmark-mark">S</span><span><b>SAIRAKSHA</b><small>DAIRY PRODUCTS PVT LTD</small></span>
          </button>
          <div className={`nav-links ${mobileOpen ? "is-open" : ""}`} data-testid="navigation-links">
            <button onClick={() => scrollTo("about")} data-testid="nav-about-link">Our story</button>
            <button onClick={() => scrollTo("products")} data-testid="nav-products-link">Products</button>
            <button onClick={() => scrollTo("quality")} data-testid="nav-quality-link">Our promise</button>
            <button onClick={() => scrollTo("factory-gallery")} data-testid="nav-gallery-link">Inside Kuppam</button>
            <button onClick={() => scrollTo("contact")} data-testid="nav-contact-link">Contact</button>
          </div>
          <button className="nav-cta" onClick={() => scrollTo("contact")} data-testid="nav-enquiry-button">Enquire with us <ArrowUpRight size={15} /></button>
          <button className="mobile-menu" onClick={() => setMobileOpen((open) => !open)} data-testid="mobile-menu-button" aria-label="Toggle menu">{mobileOpen ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <section className="hero section-pad" id="home" data-testid="hero-section">
        <div className="hero-copy reveal-up">
          <p className="eyebrow"><span className="eyebrow-line" /> Rooted in trust · Made in Kuppam</p>
          <h1>Goodness that<br /><em>comes full circle.</em></h1>
          <p className="hero-intro">From the first collection at the village to the last pour at home, we protect what makes milk good.</p>
          <div className="hero-actions">
            <button className="button button-dark" onClick={() => scrollTo("products")} data-testid="hero-explore-products-button">Explore our products <ArrowDown size={16} /></button>
            <button className="text-button" onClick={() => scrollTo("about")} data-testid="hero-our-story-button">Discover our story <ArrowUpRight size={16} /></button>
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
            {brands.map((brand, index) => <button className={`brand-chip ${brand.color}`} key={brand.name} onClick={() => { setActiveBrand(brand.name); scrollTo("products"); }} data-testid={`brand-${brand.name.toLowerCase().replace(" ", "-")}-button`}><span>0{index + 1}</span><b>{brand.name}</b><small>{brand.sub}</small><ArrowUpRight size={16} /></button>)}
          </div>
        </div>
      </section>

      <section className="about section-pad" id="about" data-testid="about-section">
        <div className="section-kicker"><span>01</span><span className="kicker-rule" /><span>OUR STORY</span></div>
        <div className="about-grid">
          <h2>Built slowly.<br /><em>Grown with purpose.</em></h2>
          <div className="about-copy"><p>SAIRAKSHA DAIRY PRODUCTS PRIVATE LIMITED began in 2012 with one clear belief: quality is a promise you make at every step.</p><p>Today, our milk travels from village farmers through chilling centres to our Kuppam plant — where care, cold chain and craft become food families can trust.</p><button className="text-button" onClick={() => scrollTo("quality")} data-testid="about-promise-button">See what we stand for <ArrowUpRight size={16} /></button></div>
        </div>
        <div className="metric-row" data-testid="company-metrics">
          <div><strong>₹100<span>cr</span></strong><small>turnover as on 31.03.2024</small></div>
          <div><strong>2L<span> L</span></strong><small>storage capacity at Kuppam</small></div>
          <div><strong>30<span>cr</span></strong><small>land, building & machinery</small></div>
          <div><strong>3</strong><small>chilling centres</small></div>
        </div>
      </section>

      <section className="products section-pad" id="products" data-testid="products-section">
        <div className="section-heading"><div><div className="section-kicker"><span>02</span><span className="kicker-rule" /><span>THE COLLECTION</span></div><h2>Everyday goodness,<br /><em>in every form.</em></h2></div><p>Milk, curd, paneer and more — made for the way families eat, celebrate and care for one another.</p></div>
        <div className="filter-row" data-testid="product-filters"><span>Browse by brand</span><button className={activeBrand === "All" ? "active" : ""} onClick={() => setActiveBrand("All")} data-testid="filter-all-button">All products</button>{brands.map((brand) => <button className={activeBrand === brand.name ? "active" : ""} key={brand.name} onClick={() => setActiveBrand(brand.name)} data-testid={`filter-${brand.name.toLowerCase().replace(" ", "-")}-button`}>{brand.name}</button>)}</div>
        <div className="product-grid" data-testid="product-grid">{visibleProducts.map((product) => <article className="product-card" key={product.name} data-testid={`product-card-${product.name.toLowerCase().replaceAll(" ", "-")}`}><div className="product-image"><img src={product.image} alt={`${product.brand} ${product.name}`} /><span>{product.category}</span></div><div className="product-meta"><div><small>{product.brand}</small><h3>{product.name}</h3><p>{product.note}</p></div><button onClick={() => showPlaceholder("Product enquiry links will be connected when official contact details are provided.")} data-testid={`enquire-${product.name.toLowerCase().replaceAll(" ", "-")}-button`} aria-label={`Enquire about ${product.name}`}><ArrowUpRight size={18} /></button></div></article>)}</div>
      </section>

      <section className="quality section-pad" id="quality" data-testid="quality-section">
        <div className="quality-photo"><img src={assets.exterior} alt="Sairaksha dairy Kuppam processing plant exterior" data-testid="quality-feature-image" /><span className="photo-caption">Kuppam · Andhra Pradesh</span></div>
        <div className="quality-copy"><div className="section-kicker"><span>03</span><span className="kicker-rule" /><span>THE SAIRAKSHA PROMISE</span></div><h2>Closer to the source.<br /><em>Stricter about quality.</em></h2><p>Our milk is collected from farmers, chilled at the source and carefully directed to our main plant. Every batch is processed with food safety and freshness in mind.</p><ul>{["Pasteurised & homogenised processing", "A connected cold chain from village to home", "Licensed and equipped to food safety standards"].map((item) => <li key={item}><span><Check size={13} /></span>{item}</li>)}</ul><div className="facility-callout"><strong>70,000 L</strong><span>daily processing<br />capacity at our main plant</span></div></div>
      </section>

      <section className="factory-gallery section-pad" id="factory-gallery" data-testid="factory-gallery-section">
        <div className="gallery-heading"><div><div className="section-kicker"><span>04</span><span className="kicker-rule" /><span>INSIDE KUPPAM</span></div><h2>Where the work<br /><em>comes together.</em></h2></div><p>From the first chilled collection to the finished pack, every part of our dairy journey is close, visible and built to care for quality.</p></div>
        <div className="gallery-grid" data-testid="factory-gallery-grid">{factoryGallery.map((item, index) => <button className={`gallery-tile gallery-tile-${index + 1}`} key={item.title} onClick={() => setSelectedImage(item)} data-testid={`factory-gallery-image-${index + 1}`} aria-label={`Open ${item.title} image`}><img src={item.image} alt={item.caption} /><span className="gallery-overlay"><b>{item.title}</b><small>{item.caption}</small><ArrowUpRight size={17} /></span></button>)}</div>
      </section>

      <section className="future section-pad" data-testid="future-project-section"><div className="future-label">LOOKING AHEAD <span>✦</span></div><div><h2>A bigger future,<br /><em>still close to home.</em></h2><p>Our planned SMP manufacturing unit in Kuppam will create around 300 local opportunities and serve a region rich in milk production.</p><button className="button button-light" onClick={() => showPlaceholder("Project enquiries will be connected when official contact details are provided.")} data-testid="future-project-enquiry-button">Talk about the future <ArrowUpRight size={16} /></button></div><div className="future-year"><span>Target</span><strong>2027</strong><small>25 MT / day powder plant</small></div></section>

      <section className="contact section-pad" id="contact" data-testid="contact-section"><div className="contact-top"><div className="section-kicker"><span>04</span><span className="kicker-rule" /><span>START A CONVERSATION</span></div><h2>Let’s bring good<br /><em>things to the table.</em></h2><p>Looking for a dairy partner, bulk supply or distribution conversation? We would love to hear from you.</p></div><div className="contact-actions"><button onClick={() => showPlaceholder("Official WhatsApp number placeholder — add your number to activate this chat.")} className="contact-card whatsapp" data-testid="whatsapp-contact-button"><MessageCircle size={24} /><span><small>WhatsApp us</small><b>Official number coming soon</b></span><ArrowUpRight size={18} /></button><button onClick={() => showPlaceholder("Official phone number placeholder — add your number to activate calling.")} className="contact-card" data-testid="phone-contact-button"><Phone size={24} /><span><small>Call the dairy</small><b>Phone number coming soon</b></span><ArrowUpRight size={18} /></button><div className="contact-card contact-placeholder" data-testid="email-contact-details"><span><small>Email enquiries</small><b>hello@sairaksha.example</b></span><small>Placeholder</small></div></div></section>

      <footer className="footer section-pad" data-testid="site-footer"><div className="footer-brand"><span className="wordmark-mark">S</span><div><b>SAIRAKSHA</b><small>DAIRY PRODUCTS PVT LTD</small></div></div><p>Goodness, made responsibly.<br />Kuppam · Andhra Pradesh</p><div className="footer-links"><button onClick={() => scrollTo("about")} data-testid="footer-about-link">Our story</button><button onClick={() => scrollTo("products")} data-testid="footer-products-link">Products</button><button onClick={() => scrollTo("contact")} data-testid="footer-contact-link">Contact</button></div><span className="copyright">© 2024 Sairaksha Dairy</span></footer>
      {notice && <div className="toast-note" role="status" data-testid="placeholder-notice"><Check size={15} />{notice}</div>}
      {selectedImage && <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedImage.title} data-testid="factory-lightbox"><button className="lightbox-close" onClick={() => setSelectedImage(null)} data-testid="factory-lightbox-close" aria-label="Close image viewer"><X size={21} /></button><div className="lightbox-content"><img src={selectedImage.image} alt={selectedImage.caption} data-testid="factory-lightbox-image" /><p><b>{selectedImage.title}</b><span>{selectedImage.caption}</span></p></div></div>}
    </main>
  );
}

export default App;

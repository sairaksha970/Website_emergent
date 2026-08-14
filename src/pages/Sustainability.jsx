import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Cpu,
  Droplet,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  GraduationCap,
  IndianRupee,
  Leaf,
  Recycle,
  RefreshCw,
  RotateCw,
  Shield,
  ShieldCheck,
  Sparkles,
  Sprout,
  Stethoscope,
  Sun,
  TrendingUp,
  Users,
  Waves
} from "lucide-react";
import PageHero from "@/components/PageHero";
import FacilityCarousel from "@/components/FacilityCarousel";
import { assets, empowerment, locations } from "@/data";

const empowerIcons = { IndianRupee, GraduationCap, Stethoscope, TrendingUp, Users, ShieldCheck };

// Curated image sets with descriptive captions ready for easy replacement
const cipGalleryImages = [
  { src: assets.plantInterior, caption: "CIP Stainless Steel Processing Lines & Silos" },
  { src: assets.processing, caption: "Automated Fluid Circuits & Pasteurisation Tanks" },
  { src: assets.image1, caption: "Plant Floor & Continuous Quality Monitoring" },
  { src: assets.image5, caption: "Central Milk Processing Hall · Kuppam Facility" },
  { src: assets.packing, caption: "Hygienic Packaging & Controlled Sanitation Environment" },
];

const etpGalleryImages = [
  { src: assets.lawns, caption: "Campus Green Cover & Irrigation Lawns" },
  { src: assets.farm, caption: "Agricultural Banana & Vegetable Farmlands" },
  { src: assets.aerial, caption: "Zero-Discharge Processing Campus at Kuppam" },
  { src: assets.exterior, caption: "Eco-Friendly Operations & Treated Water Channels" },
];

const cipCycles = [
  { step: "01", name: "Pre-Rinsing", desc: "Flushes residual milk from lines & processing circuits" },
  { step: "02", name: "Caustic Wash", desc: "Alkaline solution removes fats, proteins and organic residues" },
  { step: "03", name: "Intermediate Rinse", desc: "Neutral water flush clears all chemical detergents" },
  { step: "04", name: "Acid Cleaning", desc: "Acidic wash dissolves scale, milk stones & mineral deposits" },
  { step: "05", name: "Final Sanitization", desc: "Pure water rinse leaves circuits 100% spotless and ready" },
];

export default function Sustainability() {
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  return (
    <>
      <PageHero
        testId="sustainability-hero"
        eyebrow="Sustainability & Operations"
        title={<>Responsible Dairy,<br /><em>from Source to Plant.</em></>}
        intro="From automated plant sanitation and zero-waste water recycling to direct village farmer procurement across South India — sustainability is built into every litre we produce."
        image={assets.farmer}
      />

      {/* SECTION: OPERATIONAL EXCELLENCE (CIP & ETP SHOWCASE) */}
      <section className="sustainability-showcase section-pad" id="operations" data-testid="sustainability-showcase-section">
        
        {/* TWO PRIMARY FACILITY CARDS */}
        <div className="sustainability-duo-cards">
          
          {/* CARD 1: AUTOMATED CIP */}
          <article className="sustainability-feature-card" data-testid="cip-section">
            <FacilityCarousel
              images={cipGalleryImages}
              badgeText="CIP SYSTEM"
              badgeIcon={Droplet}
              testId="cip-carousel"
            />
            
            <div className="feature-card-body">
              <div className="feature-card-header">
                <div className="feature-avatar-icon cip-avatar">
                  <Droplets size={22} />
                </div>
                <div className="feature-heading-group">
                  <h3>Automated CIP</h3>
                  <p className="feature-italic-sub">Clean-in-place, without compromise.</p>
                </div>
              </div>

              <p className="feature-body-text">
                Our automated Clean-in-Place system enables hygienic cleaning of processing equipment, pipelines and storage tanks without dismantling — supporting consistent food safety and operational efficiency.
              </p>

              <div className="feature-pills-row">
                <div className="feature-pill-item">
                  <Shield size={17} className="pill-ico" />
                  <span>Hygiene<br />by design</span>
                </div>
                <div className="feature-pill-item">
                  <Sun size={17} className="pill-ico" />
                  <span>Consistency<br />in every cycle</span>
                </div>
                <div className="feature-pill-item">
                  <Gauge size={17} className="pill-ico" />
                  <span>Efficiency<br />and control</span>
                </div>
              </div>
            </div>
          </article>

          {/* CARD 2: EFFLUENT TREATMENT PLANT */}
          <article className="sustainability-feature-card" data-testid="etp-section">
            <FacilityCarousel
              images={etpGalleryImages}
              badgeText="ETP / WATER REUSE"
              badgeIcon={Sprout}
              testId="etp-carousel"
            />

            <div className="feature-card-body">
              <div className="feature-card-header">
                <div className="feature-avatar-icon etp-avatar">
                  <Sprout size={22} />
                </div>
                <div className="feature-heading-group">
                  <h3>Effluent Treatment Plant</h3>
                  <p className="feature-italic-sub">Water that works twice.</p>
                </div>
              </div>

              <p className="feature-body-text">
                Our Effluent Treatment Plant treats and recycles wastewater to support agriculture and plantation irrigation — reducing freshwater dependency and closing the loop responsibly.
              </p>

              <div className="feature-pills-row">
                <div className="feature-pill-item">
                  <Droplets size={17} className="pill-ico" />
                  <span>Treat<br />responsibly</span>
                </div>
                <div className="feature-pill-item">
                  <Recycle size={17} className="pill-ico" />
                  <span>Reuse for<br />agriculture</span>
                </div>
                <div className="feature-pill-item">
                  <Leaf size={17} className="pill-ico" />
                  <span>Restore for<br />tomorrow</span>
                </div>
              </div>
            </div>
          </article>

        </div>

        {/* 3-COLUMN HORIZONTAL SUMMARY STRIP */}
        <div className="sustainability-summary-strip" data-testid="operations-summary-strip">
          
          <div className="summary-col">
            <span className="summary-step-badge">01</span>
            <div className="summary-content">
              <div className="summary-head">
                <Factory size={22} className="summary-icon" />
                <h4>Hygiene by design</h4>
              </div>
              <p>Automated systems and strict protocols ensure consistently clean, safe and reliable operations.</p>
            </div>
          </div>

          <div className="summary-col-divider" />

          <div className="summary-col">
            <span className="summary-step-badge">02</span>
            <div className="summary-content">
              <div className="summary-head">
                <Droplets size={22} className="summary-icon" />
                <h4>Water, responsibly managed</h4>
              </div>
              <p>Treated water is reused for agriculture and plantation irrigation, supporting a more circular future.</p>
            </div>
          </div>

          <div className="summary-col-divider" />

          <div className="summary-col">
            <span className="summary-step-badge">03</span>
            <div className="summary-content">
              <div className="summary-head">
                <ShieldCheck size={22} className="summary-icon" />
                <h4>Built for control</h4>
              </div>
              <p>Advanced infrastructure gives us greater control over quality, safety and every step of our process.</p>
            </div>
          </div>

        </div>

        {/* BOTTOM PHILOSOPHY TAGLINE & CTA */}
        <div className="sustainability-tagline-bar" data-testid="operations-cta-bar">
          <div className="tagline-motif">
            <Sprout size={16} />
          </div>
          
          <div className="tagline-wrap">
            <div className="tagline-text">
              <h3>Good for nature. Good for communities.</h3>
              <p><em>Good for generations to come.</em></p>
            </div>
            
            <Link to="/contact" className="operations-cta-btn" data-testid="know-more-operations-btn">
              <span>Know more about our operations</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        {/* OPTIONAL EXPANDABLE TECHNICAL ARCHITECTURE ACCORDION */}
        <div className="technical-breakdown-toggle-wrap">
          <button 
            type="button" 
            className="technical-toggle-btn"
            onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
            aria-expanded={showTechnicalDetails}
            data-testid="toggle-technical-specs"
          >
            <span>{showTechnicalDetails ? "Hide Technical Specifications" : "View 5-Stage CIP Cleaning Cycle & ETP Specifications"}</span>
            <ChevronDown size={16} style={{ transform: showTechnicalDetails ? "rotate(180deg)" : "none", transition: "transform .25s ease" }} />
          </button>
        </div>

        {showTechnicalDetails && (
          <div className="technical-specs-expanded" data-testid="technical-specs-expanded">
            <div className="specs-card">
              <h4><FlaskConical size={16} /> 5-Stage Controlled CIP Sequence</h4>
              <div className="cip-detailed-steps">
                {cipCycles.map((c) => (
                  <div key={c.step} className="detailed-step">
                    <span className="detailed-step-num">{c.step}</span>
                    <div>
                      <b>{c.name}</b>
                      <p>{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="specs-card">
              <h4><Leaf size={16} /> ETP Environmental Quote & Utilization</h4>
              <blockquote className="expanded-quote">
                “Every drop treated is a drop responsibly reused — nurturing both agriculture and the environment.”
              </blockquote>
              <ul className="expanded-etp-list">
                <li><CheckCircle2 size={15} /> <strong>Horticulture & Crops:</strong> Banana plantations and vegetable cultivation on surrounding farmlands.</li>
                <li><CheckCircle2 size={15} /> <strong>Groundwater Conservation:</strong> 100% replacement of fresh water for non-processing irrigation.</li>
                <li><CheckCircle2 size={15} /> <strong>Zero Waste Principle:</strong> Converting wastewater into a circular agricultural asset.</li>
              </ul>
            </div>
          </div>
        )}

      </section>

      {/* SECTION: DIRECT FARMER PROCUREMENT */}
      <section className="quality section-pad" id="farmers" data-testid="procurement-section">
        <div className="quality-copy">
          <div className="section-kicker">
            <span>02</span>
            <span className="kicker-rule" />
            <span>DIRECT FARMER PROCUREMENT</span>
          </div>
          <h2>Mutual growth,<br /><em>from the ground up.</em></h2>
          <p>
            Our procurement model is built on the principle of mutual growth. We work with small and marginal dairy farmers across four states, eliminating middlemen and ensuring fair prices.
          </p>
          <p>
            Through our village-level collection centres, we pick up fresh milk twice daily, so farmers never face wastage. Our transparent pricing, based on fat and SNF content, guarantees every farmer fair value for their produce.
          </p>
          <div className="metric-row farmers-stats" data-testid="farmer-stats">
            <div><strong>4</strong><small>states of collection</small></div>
            <div><strong>3</strong><small>chilling centres</small></div>
            <div><strong>2x</strong><small>milk collected daily</small></div>
            <div><strong>100<span>%</span></strong><small>fair trade</small></div>
          </div>
        </div>
        <div className="quality-photo">
          <img src={assets.farmerProcurement} alt="Farmer handing over a milk can at a Sairaksha collection centre" data-testid="farmers-feature-image" />
          <span className="photo-caption">Village collection · Twice daily</span>
        </div>
      </section>

      {/* SECTION: HOW WE EMPOWER FARMERS */}
      <section className="purity section-pad" data-testid="empowerment-section">
        <div className="section-heading">
          <div>
            <div className="section-kicker"><span>03</span><span className="kicker-rule" /><span>HOW WE EMPOWER FARMERS</span></div>
            <h2>Partners, not just<br /><em>suppliers.</em></h2>
          </div>
        </div>
        <div className="purity-grid empower-grid" data-testid="empowerment-grid">
          {empowerment.map((item) => {
            const Icon = empowerIcons[item.icon];
            return (
              <article className="purity-card" key={item.title} data-testid={`empowerment-card-${item.title.toLowerCase().replaceAll(" ", "-")}`}>
                <span className="purity-icon"><Icon size={19} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* SECTION: THE REGIONAL COLLECTION NETWORK */}
      <section className="licences section-pad" data-testid="collection-network-section">
        <div className="section-heading">
          <div>
            <div className="section-kicker"><span>04</span><span className="kicker-rule" /><span>THE COLLECTION NETWORK</span></div>
            <h2>Chilled at the source,<br /><em>close to the farm.</em></h2>
          </div>
        </div>
        <div className="licence-grid location-grid" data-testid="location-grid">
          {locations.map((location) => (
            <div className="licence-card location-card" key={location.name} data-testid={`location-${location.name.toLowerCase().replaceAll(" ", "-")}`}>
              <small>{location.role}</small>
              <b>{location.name}</b>
              <span>{location.capacity}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: CTA BAND */}
      <section className="cta-band section-pad" data-testid="farmers-cta">
        <h2>Looking to partner<br /><em>with our dairy network?</em></h2>
        <p>Whether you are a dairy farming family, bulk partner, or distributor — connect with our procurement and plant operations team.</p>
        <Link className="button button-dark" to="/contact" data-testid="farmers-cta-button">
          Reach our team <ArrowUpRight size={16} />
        </Link>
      </section>
    </>
  );
}

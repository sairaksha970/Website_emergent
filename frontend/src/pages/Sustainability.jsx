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
  MapPin,
  Recycle,
  RefreshCw,
  RotateCw,
  Shield,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Sprout,
  Stethoscope,
  Sun,
  TrendingUp,
  Users,
  Waves
} from "lucide-react";
import SustainabilityHero from "@/components/SustainabilityHero";
import FacilityCarousel from "@/components/FacilityCarousel";
import { assets, empowerment, locations } from "@/data";

const empowerIcons = { IndianRupee, GraduationCap, Stethoscope, TrendingUp, Users, ShieldCheck };

// Curated image sets with 2 relevant photos each
const cipGalleryImages = [
  { src: assets.plantInterior, caption: "CIP Stainless Steel Processing Lines & Silos" },
  { src: assets.processing, caption: "Automated Fluid Circuits & Pasteurisation Tanks" },
];

const etpGalleryImages = [
  { src: assets.lawns, caption: "Campus Green Cover & Irrigation Lawns" },
  { src: assets.farm, caption: "Agricultural Farmlands & Water Reuse" },
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
      <SustainabilityHero />

      {/* SECTION: OPERATIONAL EXCELLENCE (CIP & ETP SHOWCASE) */}
      <section className="sustainability-showcase" id="operations" data-testid="sustainability-showcase-section">
        
        {/* SECTION HEADER */}
        <div className="section-heading operations-header">
          <div>
            <div className="section-kicker">
              <span>01</span>
              <span className="kicker-rule" />
              <span>PLANT &amp; PROCESSING EXCELLENCE</span>
            </div>
            <h2>Modern dairy circuits,<br /><em>closed-loop hygiene.</em></h2>
          </div>
        </div>

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

      {/* SECTION: DIRECT FARMER PROCUREMENT (MUTUAL GROWTH) */}
      <section className="procurement-section section-pad" id="farmers" data-testid="procurement-section">
        
        {/* STORY & VISUAL DUAL LAYOUT */}
        <div className="procurement-layout">
          <div className="procurement-copy">
            <div className="section-kicker">
              <span>02</span>
              <span className="kicker-rule" />
              <span>DIRECT FARMER PROCUREMENT</span>
            </div>
            <h2>Mutual growth,<br /><em>from the ground up.</em></h2>
            <p>
              Our procurement model is built on the principle of mutual growth. We work directly with small and marginal dairy farming families across four states, eliminating middlemen and ensuring reliable, dignified livelihoods.
            </p>
            <p>
              Through our village-level collection network, fresh milk is collected twice daily and transferred to immediate source chilling. Transparent automated testing based on fat and SNF guarantees every farmer fair value for every drop.
            </p>
          </div>

          <div className="procurement-visual">
            <div className="procurement-photo-frame">
              <img 
                src={assets.farmerProcurement} 
                alt="Farmer handing over a milk can at a Sairaksha collection centre" 
                data-testid="farmers-feature-image" 
              />
              <div className="procurement-photo-badge">
                <span className="badge-dot" />
                <span>Village Collection · Twice Daily</span>
              </div>
            </div>
          </div>
        </div>

        {/* REDESIGNED 4-CARD PROCUREMENT DATA METRICS */}
        <div className="procurement-stats-grid" data-testid="farmer-stats">
          <div className="procurement-stat-card">
            <div className="stat-card-top">
              <span className="stat-num">4</span>
              <div className="stat-icon-wrap"><MapPin size={19} /></div>
            </div>
            <div className="stat-card-body">
              <h4>States of Collection</h4>
              <p>Active dairy farmer networks across AP, Karnataka, Tamil Nadu &amp; Telangana.</p>
            </div>
          </div>

          <div className="procurement-stat-card">
            <div className="stat-card-top">
              <span className="stat-num">3</span>
              <div className="stat-icon-wrap"><Snowflake size={19} /></div>
            </div>
            <div className="stat-card-body">
              <h4>Chilling Centres</h4>
              <p>Source-level chilling units preserving farm-fresh quality within hours of milking.</p>
            </div>
          </div>

          <div className="procurement-stat-card">
            <div className="stat-card-top">
              <span className="stat-num">2x</span>
              <div className="stat-icon-wrap"><RotateCw size={19} /></div>
            </div>
            <div className="stat-card-body">
              <h4>Milk Collected Daily</h4>
              <p>Morning and evening scheduled pickups preventing spoilage and storage loss.</p>
            </div>
          </div>

          <div className="procurement-stat-card">
            <div className="stat-card-top">
              <span className="stat-num">100<span>%</span></span>
              <div className="stat-icon-wrap"><ShieldCheck size={19} /></div>
            </div>
            <div className="stat-card-body">
              <h4>Direct Fair Trade</h4>
              <p>Transparent fat &amp; SNF testing ensuring fair compensation and prompt farmer payouts.</p>
            </div>
          </div>
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
        <div className="location-grid" data-testid="location-grid">
          {locations.map((location) => (
            <div 
              className={`location-card ${location.isMain ? "main-hub" : ""}`} 
              key={location.name} 
              data-testid={`location-${location.name.toLowerCase().replaceAll(" ", "-")}`}
            >
              <div className="location-card-top">
                <span className="location-icon-badge">
                  {location.isMain ? <Factory size={20} /> : <Snowflake size={20} />}
                </span>
                <span className="location-role-tag">{location.role}</span>
              </div>
              <h3 className="location-title">{location.name}</h3>
              <p className="location-region">{location.region}</p>
              <div className="location-capacity-pill">
                <small>DAILY CAPACITY</small>
                <b>{location.capacity}</b>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: CTA BAND */}
      <section className="cta-band section-pad" data-testid="farmers-cta">
        <div className="cta-copy">
          <h2>Looking to partner<br /><em>with our dairy network?</em></h2>
          <p>Whether you are a dairy farming family, bulk partner, or distributor — connect with our procurement and plant operations team.</p>
        </div>
        <Link className="button button-dark" to="/contact" data-testid="farmers-cta-button">
          Reach our team <ArrowUpRight size={16} />
        </Link>
      </section>
    </>
  );
}

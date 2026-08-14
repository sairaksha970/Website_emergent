import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Droplets,
  GraduationCap,
  IndianRupee,
  Leaf,
  Recycle,
  ShieldCheck,
  Sprout,
  Stethoscope,
  TrendingUp,
  Users,
  Waves,
  Zap,
  Clock,
  FlaskConical,
  Sparkles,
  ArrowRight
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { assets, empowerment, locations } from "@/data";

const empowerIcons = { IndianRupee, GraduationCap, Stethoscope, TrendingUp, Users, ShieldCheck };

const cipCycles = [
  { step: "01", name: "Pre-Rinsing", time: "Water flush", desc: "Flushes residual milk from lines & processing circuits" },
  { step: "02", name: "Caustic Wash", time: "Alkaline cycle", desc: "Removes fats, proteins and organic milk residues" },
  { step: "03", name: "Intermediate", time: "Neutral rinse", desc: "Clears chemical detergents before the acid wash" },
  { step: "04", name: "Acid Cleaning", time: "Scale removal", desc: "Dissolves milk stones and mineral scale deposits" },
  { step: "05", name: "Final Sanitization", time: "Pure water", desc: "Leaves pipelines spotless for the next production run" },
];

const etpHighlights = [
  { icon: Sprout, title: "Banana & Vegetable Crops", desc: "Directly irrigates farm crops on surrounding agricultural land." },
  { icon: Recycle, title: "Circular Resource Re-use", desc: "Converts dairy wastewater into a productive farming resource." },
  { icon: Droplets, title: "Freshwater Conservation", desc: "Eliminates groundwater extraction for irrigation needs." },
  { icon: Leaf, title: "Zero Environmental Waste", desc: "Zero untreated discharge with green ecological practices." },
];

export default function Sustainability() {
  return (
    <>
      <PageHero
        testId="sustainability-hero"
        eyebrow="Sustainability & Operations"
        title={<>Responsible Dairy,<br /><em>from Source to Plant.</em></>}
        intro="From automated plant sanitation and zero-waste water recycling to direct village farmer procurement across South India — sustainability is built into every litre we produce."
        image={assets.farmer}
      />

      {/* SECTION: OPERATIONAL EXCELLENCE (CIP & ETP SIDE-BY-SIDE CARDS) */}
      <section className="sustainability-facilities section-pad" id="facilities" data-testid="facilities-overview-section">
        <div className="section-heading" style={{ marginBottom: "40px" }}>
          <div>
            <div className="section-kicker">
              <span>01</span>
              <span className="kicker-rule" />
              <span>PLANT EXCELLENCE & SUSTAINABILITY</span>
            </div>
            <h2>Equipped for hygiene,<br /><em>engineered for the planet.</em></h2>
          </div>
          <p>
            Our Kuppam facility combines world-class Clean-in-Place automation for uncompromised product hygiene with circular water recycling to enrich local agriculture.
          </p>
        </div>

        {/* COMPACT TWO-COLUMN FACILITY SHOWCASE */}
        <div className="facility-duo-grid">
          
          {/* CARD 1: CIP AUTOMATION */}
          <article className="facility-compact-card" id="cip" data-testid="cip-section">
            <div className="facility-card-header">
              <div className="facility-badge-row">
                <span className="facility-pill cip-pill"><Cpu size={13} /> Automated Hygiene</span>
                <span className="facility-sub-badge">Clean-In-Place</span>
              </div>
              <h3>Automated CIP System</h3>
              <span className="facility-tagline">Ensuring food safety & pristine equipment hygiene without dismantling</span>
            </div>

            <p className="facility-lead-text">
              Sairaksha Dairy is equipped with an automated <strong>CIP (Clean-in-Place) system</strong> for closed-circuit cleaning of processing equipment, pipelines, storage tanks, and silos.
            </p>

            <div className="facility-photo-slot" data-testid="cip-visual-container">
              <div className="compact-placeholder">
                <div className="placeholder-content">
                  <div className="mini-icon-circle"><Cpu size={22} /></div>
                  <div>
                    <strong>CIP System Photo Placeholder</strong>
                    <span>Closed-circuit piping & automated CIP wash stations</span>
                  </div>
                </div>
                <span className="photo-corner-tag">Kuppam Plant</span>
              </div>
            </div>

            {/* HIGH-IMPACT 5-STAGE PROCESS PIPELINE */}
            <div className="cip-pipeline-box" data-testid="cip-cycles">
              <div className="pipeline-header">
                <span className="pipeline-title"><FlaskConical size={14} /> 5-Stage Controlled Cleaning Sequence</span>
                <span className="pipeline-meta">Automated Cycles</span>
              </div>
              <div className="pipeline-track">
                {cipCycles.map((item, idx) => (
                  <div key={item.step} className="pipeline-node">
                    <div className="node-marker">
                      <span className="node-num">{item.step}</span>
                      {idx < cipCycles.length - 1 && <span className="node-connector" />}
                    </div>
                    <div className="node-info">
                      <b>{item.name}</b>
                      <span className="node-time">{item.time}</span>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="facility-meta-chips">
              <span><CheckCircle2 size={14} /> Zero equipment dismantling</span>
              <span><CheckCircle2 size={14} /> Efficient chemical & water use</span>
              <span><CheckCircle2 size={14} /> Minimal manual contact</span>
            </div>
          </article>

          {/* CARD 2: ETP WATER RECYCLING */}
          <article className="facility-compact-card etp-theme" id="etp" data-testid="etp-section">
            <div className="facility-card-header">
              <div className="facility-badge-row">
                <span className="facility-pill etp-pill"><Waves size={13} /> Circular Ecology</span>
                <span className="facility-sub-badge">Effluent Treatment Plant</span>
              </div>
              <h3>Sustainable ETP Water Reuse</h3>
              <span className="facility-tagline">100% treated wastewater recycled for agriculture & plantation irrigation</span>
            </div>

            <p className="facility-lead-text">
              Committed to responsible water management, treated water from our <strong>Effluent Treatment Plant (ETP)</strong> is repurposed for cultivating vegetables and banana plantations.
            </p>

            <div className="facility-photo-slot" data-testid="etp-visual-container">
              <div className="compact-placeholder etp-placeholder">
                <div className="placeholder-content">
                  <div className="mini-icon-circle etp-circle"><Waves size={22} /></div>
                  <div>
                    <strong>ETP Facility Photo Placeholder</strong>
                    <span>Treated water storage, irrigation channels & green campus</span>
                  </div>
                </div>
                <span className="photo-corner-tag">Water Reuse</span>
              </div>
            </div>

            {/* FEATURED QUOTE CALLOUT */}
            <div className="etp-featured-quote" data-testid="etp-quote-card">
              <Leaf size={22} className="quote-leaf" />
              <blockquote>
                “Every drop treated is a drop responsibly reused — nurturing both agriculture and the environment.”
              </blockquote>
            </div>

            {/* 4 RECYCLE HIGHLIGHT CARDS */}
            <div className="etp-grid-compact">
              {etpHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="etp-mini-card">
                    <div className="mini-card-head">
                      <Icon size={16} />
                      <b>{item.title}</b>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="facility-meta-chips etp-chips">
              <span><CheckCircle2 size={14} /> Banana & Vegetable irrigation</span>
              <span><CheckCircle2 size={14} /> Circular zero-waste utility</span>
              <span><CheckCircle2 size={14} /> Active ground conservation</span>
            </div>
          </article>

        </div>
      </section>

      {/* SECTION 02: DIRECT FARMER PROCUREMENT */}
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

      {/* SECTION 03: HOW WE EMPOWER FARMERS */}
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

      {/* SECTION 04: THE REGIONAL COLLECTION NETWORK */}
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

      {/* SECTION 05: CTA BAND */}
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

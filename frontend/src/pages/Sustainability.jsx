import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Cpu,
  Droplets,
  GraduationCap,
  IndianRupee,
  Leaf,
  Recycle,
  ShieldCheck,
  Sparkles,
  Sprout,
  Stethoscope,
  TrendingUp,
  Users,
  Waves,
  Camera
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { assets, empowerment, locations } from "@/data";

const empowerIcons = { IndianRupee, GraduationCap, Stethoscope, TrendingUp, Users, ShieldCheck };

const cipCycles = [
  { step: "01", name: "Pre-Rinsing", desc: "Flushes residual milk from lines and circuits" },
  { step: "02", name: "Caustic Cleaning", desc: "Removes fats, proteins and organic residues" },
  { step: "03", name: "Intermediate Rinse", desc: "Clears detergents before acid wash" },
  { step: "04", name: "Acid Cleaning", desc: "Dissolves scale and inorganic mineral deposits" },
  { step: "05", name: "Final Pure Rinse", desc: "Complete sanitized finish for next processing run" },
];

const etpHighlights = [
  { icon: Sprout, title: "Banana & Vegetable Cultivation", text: "Treated ETP water irrigates local vegetable crops and banana plantations on nearby agricultural land." },
  { icon: Recycle, title: "Circular Resource Management", text: "Converts treated wastewater into a productive agricultural resource rather than discharging as waste." },
  { icon: Droplets, title: "Freshwater Conservation", text: "Significantly reduces reliance on groundwater and freshwater sources for non-processing needs." },
  { icon: Leaf, title: "Greener Environment", text: "Promotes zero-waste principles and active ecological stewardship in the Kuppam farming belt." },
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

      {/* SECTION 01: CIP AUTOMATION */}
      <section className="quality section-pad facility-section" id="cip" data-testid="cip-section">
        <div className="quality-copy">
          <div className="section-kicker">
            <span>01</span>
            <span className="kicker-rule" />
            <span>FACILITY EXCELLENCE · HYGIENE AUTOMATION</span>
          </div>
          <h2>Automated CIP System –<br /><em>Ensuring Hygiene & Quality.</em></h2>
          <p>
            Sairaksha Dairy Products Pvt. Ltd. is equipped with an automated <strong>CIP (Clean-in-Place) system</strong>, which enables efficient and hygienic cleaning of milk processing equipment, pipelines, tanks, silos and other processing circuits without dismantling the equipment.
          </p>
          <p>
            The CIP system ensures systematic cleaning through controlled cycles of pre-rinsing, caustic cleaning, intermediate rinsing, acid cleaning and final rinsing, as required for different processing lines. This helps maintain high standards of food safety, hygiene and product quality, while minimising manual intervention.
          </p>
          <p>
            The system also supports efficient utilisation of water, cleaning chemicals, time and energy, contributing to consistent sanitation and responsible resource management.
          </p>

          <div className="cip-cycle-strip" data-testid="cip-cycles">
            <span className="cip-strip-title">5-Stage Controlled Cleaning Cycle</span>
            <div className="cip-steps">
              {cipCycles.map((cycle) => (
                <div key={cycle.step} className="cip-step-item">
                  <span className="cip-num">{cycle.step}</span>
                  <b>{cycle.name}</b>
                  <small>{cycle.desc}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="facility-benefits">
            <div className="benefit-item">
              <CheckCircle2 size={16} className="benefit-icon" />
              <span>Zero equipment dismantling</span>
            </div>
            <div className="benefit-item">
              <CheckCircle2 size={16} className="benefit-icon" />
              <span>Reduced chemical & energy load</span>
            </div>
            <div className="benefit-item">
              <CheckCircle2 size={16} className="benefit-icon" />
              <span>Consistent food-safety sanitation</span>
            </div>
          </div>
        </div>

        {/* Visual / Photo Placeholder for CIP */}
        <div className="facility-visual-wrap" data-testid="cip-visual-container">
          <div className="photo-placeholder-box">
            <div className="placeholder-inner">
              <div className="placeholder-icon-wrap">
                <Cpu size={32} />
              </div>
              <span className="placeholder-badge">Facility Photo</span>
              <h3>Automated CIP System</h3>
              <p>Clean-in-Place closed-circuit piping, wash stations, and automated sanitation controls at our Kuppam plant.</p>
              <div className="placeholder-specs">
                <span><span>✦</span> 5-Phase Automation</span>
                <span><span>✦</span> Silos & Processing Lines</span>
              </div>
            </div>
            <span className="photo-caption">Kuppam Processing Plant · CIP System</span>
          </div>
        </div>
      </section>

      {/* SECTION 02: ETP WATER RECYCLING */}
      <section className="quality section-pad facility-section etp-section" id="etp" data-testid="etp-section">
        {/* Visual / Photo Placeholder for ETP */}
        <div className="facility-visual-wrap etp-visual" data-testid="etp-visual-container">
          <div className="photo-placeholder-box etp-box">
            <div className="placeholder-inner">
              <div className="placeholder-icon-wrap etp-icon">
                <Waves size={32} />
              </div>
              <span className="placeholder-badge">Environmental Facility</span>
              <h3>Effluent Treatment Plant (ETP)</h3>
              <p>Treated water reuse for banana plantations, horticulture, and campus green cover irrigation.</p>
              <div className="placeholder-specs">
                <span><span>✦</span> 100% Water Reused</span>
                <span><span>✦</span> Zero Effluent Discharge</span>
              </div>
            </div>
            <span className="photo-caption">Treated ETP Water · Agricultural Reuse</span>
          </div>
        </div>

        <div className="quality-copy">
          <div className="section-kicker">
            <span>02</span>
            <span className="kicker-rule" />
            <span>WATER CONSERVATION & CIRCULAR REUSE</span>
          </div>
          <h2>Sustainable Utilisation of<br /><em>Treated ETP Water.</em></h2>
          <p>
            At Sairaksha Dairy Products Pvt. Ltd., we are committed to responsible water management and sustainable dairy operations. The treated water generated through our <strong>Effluent Treatment Plant (ETP)</strong> is being effectively reused for irrigation and agricultural purposes instead of being discharged as waste.
          </p>
          <p>
            After undergoing the required treatment process in the ETP, the treated water is utilised for the cultivation of vegetables and banana plantations on agricultural land. This initiative helps conserve fresh water resources, supports agricultural activities, and promotes the principles of water recycling and circular resource utilisation.
          </p>
          <p>
            Through this practice, Sairaksha Dairy is not only reducing its dependence on fresh water for irrigation but also converting treated wastewater into a useful resource, thereby contributing towards a greener, cleaner and more sustainable environment.
          </p>

          {/* Featured Quote */}
          <div className="etp-quote-card" data-testid="etp-quote-card">
            <div className="quote-accent-leaf">
              <Leaf size={20} />
            </div>
            <blockquote>
              “Every drop treated is a drop responsibly reused — nurturing both agriculture and the environment.”
            </blockquote>
          </div>

          <div className="etp-points-grid">
            {etpHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="etp-point-card">
                  <div className="etp-point-header">
                    <Icon size={16} />
                    <b>{item.title}</b>
                  </div>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 03: DIRECT FARMER PROCUREMENT */}
      <section className="quality section-pad" id="farmers" data-testid="procurement-section">
        <div className="quality-copy">
          <div className="section-kicker">
            <span>03</span>
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

      {/* SECTION 04: HOW WE EMPOWER FARMERS */}
      <section className="purity section-pad" data-testid="empowerment-section">
        <div className="section-heading">
          <div>
            <div className="section-kicker"><span>04</span><span className="kicker-rule" /><span>HOW WE EMPOWER FARMERS</span></div>
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

      {/* SECTION 05: THE REGIONAL COLLECTION NETWORK */}
      <section className="licences section-pad" data-testid="collection-network-section">
        <div className="section-heading">
          <div>
            <div className="section-kicker"><span>05</span><span className="kicker-rule" /><span>THE COLLECTION NETWORK</span></div>
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

      {/* SECTION 06: CTA BAND */}
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

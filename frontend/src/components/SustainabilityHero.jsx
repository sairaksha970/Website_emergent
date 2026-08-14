import { assets } from "@/data";
import { Sprout, Droplets, ShieldCheck, Sparkles, Recycle } from "lucide-react";

export default function SustainabilityHero() {
  return (
    <section className="sustainability-custom-hero" data-testid="sustainability-hero">
      <div className="sustainability-hero-container">
        
        {/* Left Column: Typography & Badges */}
        <div className="sustainability-hero-copy">
          <div className="section-kicker">
            <span className="kicker-rule" />
            <span>SUSTAINABILITY &amp; OPERATIONS</span>
          </div>

          <h1 className="sustainability-hero-title">
            Responsible Dairy,<br />
            <em>from Source to Plant.</em>
          </h1>

          <div className="sustainability-hero-leaf-motif">
            <Sprout size={18} />
          </div>

          <p className="sustainability-hero-intro">
            From automated plant sanitation and zero-waste water recycling to direct village farmer procurement across South India — sustainability is built into every litre we produce.
          </p>

          {/* 3 Pillars / Feature Triad */}
          <div className="sustainability-hero-pillars">
            <div className="hero-pillar-item">
              <div className="pillar-icon-box">
                <Sprout size={20} />
              </div>
              <div className="pillar-text">
                <strong>Sourced Responsibly</strong>
                <span>Direct procurement from village farmers across South India.</span>
              </div>
            </div>

            <div className="hero-pillar-item">
              <div className="pillar-icon-box">
                <Droplets size={20} />
              </div>
              <div className="pillar-text">
                <strong>Water Recycled</strong>
                <span>Zero-waste water recycling through our advanced ETP.</span>
              </div>
            </div>

            <div className="hero-pillar-item">
              <div className="pillar-icon-box">
                <ShieldCheck size={20} />
              </div>
              <div className="pillar-text">
                <strong>Operations You Can Trust</strong>
                <span>Automated sanitation, clean processes and stringent quality at every step.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Composite Grid */}
        <div className="sustainability-hero-visual">
          
          {/* Top Main Image: Farmers, Greenery & Herd */}
          <div className="hero-visual-card top-pasture-card">
            <img 
              src={assets.farmer} 
              alt="Farmer leading cattle on rural lush path at sunrise" 
              className="visual-img"
              loading="eager"
            />
            <div className="visual-card-gradient" />
          </div>

          {/* Bottom Split: CIP Facility & ETP Plant with Floating Badges */}
          <div className="hero-visual-split-row">
            
            {/* Left Box: CIP System */}
            <div className="hero-visual-card facility-thumb-card">
              <img 
                src={assets.plantInterior} 
                alt="Automated CIP stainless steel processing equipment" 
                className="visual-img"
              />
              <div className="visual-card-gradient" />
              <div className="hero-floating-badge cip-badge">
                <div className="badge-icon-circle">
                  <Sparkles size={14} />
                </div>
                <div className="badge-copy">
                  <span className="badge-tag">AUTOMATED CIP SYSTEM</span>
                  <span className="badge-sub">Hygiene built into every process.</span>
                </div>
              </div>
            </div>

            {/* Right Box: ETP Aeration Basin */}
            <div className="hero-visual-card facility-thumb-card">
              <img 
                src={assets.lawns} 
                alt="Zero-waste water recycling and green campus" 
                className="visual-img"
              />
              <div className="visual-card-gradient" />
              <div className="hero-floating-badge etp-badge">
                <div className="badge-icon-circle">
                  <Recycle size={14} />
                </div>
                <div className="badge-copy">
                  <span className="badge-tag">ZERO-WASTE WATER RECYCLING</span>
                  <span className="badge-sub">Treat. Reuse. Restore. For a greener tomorrow.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

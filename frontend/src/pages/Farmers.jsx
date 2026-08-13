import { Link } from "react-router-dom";
import { ArrowUpRight, GraduationCap, IndianRupee, ShieldCheck, Stethoscope, TrendingUp, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import { assets, empowerment, locations } from "@/data";

const empowerIcons = { IndianRupee, GraduationCap, Stethoscope, TrendingUp, Users, ShieldCheck };

export default function Farmers() {
  return (
    <>
      <PageHero
        testId="farmers-hero"
        eyebrow="Our Farmer Partners"
        title={<>Empowering farming<br /><em>families, every day.</em></>}
        intro="Our milk begins in the villages around Kuppam — collected fresh, twice daily, from farming families across Andhra Pradesh, Karnataka, Tamil Nadu and Telangana."
        image={assets.farmer}
      />

      <section className="quality section-pad" data-testid="procurement-section">
        <div className="quality-copy">
          <div className="section-kicker"><span>01</span><span className="kicker-rule" /><span>DIRECT FARMER PROCUREMENT</span></div>
          <h2>Mutual growth,<br /><em>from the ground up.</em></h2>
          <p>Our procurement model is built on the principle of mutual growth. We work with small and marginal dairy farmers across four states, eliminating middlemen and ensuring fair prices.</p>
          <p>Through our village-level collection centres, we pick up fresh milk twice daily, so farmers never face wastage. Our transparent pricing, based on fat and SNF content, guarantees every farmer fair value for their produce.</p>
          <div className="metric-row farmers-stats" data-testid="farmer-stats">
            <div><strong>4</strong><small>states of collection</small></div>
            <div><strong>3</strong><small>chilling centres</small></div>
            <div><strong>2x</strong><small>milk collected daily</small></div>
            <div><strong>100<span>%</span></strong><small>fair trade</small></div>
          </div>
        </div>
        <div className="quality-photo"><img src={assets.farmerProcurement} alt="Farmer handing over a milk can at a Sairaksha collection centre" data-testid="farmers-feature-image" /><span className="photo-caption">Village collection · Twice daily</span></div>
      </section>

      <section className="purity section-pad" data-testid="empowerment-section">
        <div className="section-heading">
          <div><div className="section-kicker"><span>02</span><span className="kicker-rule" /><span>HOW WE EMPOWER FARMERS</span></div><h2>Partners, not just<br /><em>suppliers.</em></h2></div>
          <p>From fair pricing to veterinary care, our farmer programs are designed so that when Sairaksha grows, our villages grow with us.</p>
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

      <section className="licences section-pad" data-testid="collection-network-section">
        <div className="section-heading">
          <div><div className="section-kicker"><span>03</span><span className="kicker-rule" /><span>THE COLLECTION NETWORK</span></div><h2>Chilled at the source,<br /><em>close to the farm.</em></h2></div>
          <p>Milk is chilled within hours of collection at our village-linked centres, then directed to the main plant at Kuppam for processing.</p>
        </div>
        <div className="licence-grid location-grid" data-testid="location-grid">
          {locations.map((location) => (
            <div className="licence-card location-card" key={location.name} data-testid={`location-${location.name.toLowerCase().replaceAll(" ", "-")}`}>
              <small>{location.role}</small><b>{location.name}</b><span>{location.capacity}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band section-pad" data-testid="farmers-cta">
        <h2>A farmer looking<br /><em>to partner with us?</em></h2>
        <p>Join the Sairaksha collection network and get fair, transparent pricing for every litre — picked up from your village, twice a day.</p>
        <Link className="button button-dark" to="/contact" data-testid="farmers-cta-button">Reach our procurement team <ArrowUpRight size={16} /></Link>
      </section>
    </>
  );
}

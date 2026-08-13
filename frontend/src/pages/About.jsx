import { Award, Droplets, Factory, Flag, Handshake, MapPin, Milk, Package, Snowflake, Sprout, TrendingUp, Truck } from "lucide-react";
import PageHero from "@/components/PageHero";
import { assets, fssaiNumber, timeline } from "@/data";

const railStats = [
  { icon: Milk, value: "70,000 litres", label: "Milk & curd sold every day" },
  { icon: Package, value: "2,000 kg", label: "Paneer produced every day" },
  { icon: Snowflake, value: "3", label: "Chilling centres within 80 km radius" },
  { icon: Truck, value: "23", label: "Owned insulated vehicles" },
];

const journeyIcons = { Flag, Snowflake, MapPin, TrendingUp, Award, Factory };

export default function About() {
  return (
    <>
      <PageHero
        testId="about-hero"
        eyebrow="About Us"
        title={<>Built slowly.<br /><em>Grown with purpose.</em></>}
        intro="A dependable dairy business rooted in quality, discipline and long-term relationships."
        image={assets.exterior}
      />

      <section className="about section-pad" data-testid="about-profile-section">
        <div className="section-kicker"><span>01</span><span className="kicker-rule" /><span>WHO WE ARE</span></div>
        <div className="about-grid-3">
          <h2>Built slowly.<br /><em>Grown with purpose.</em></h2>
          <div className="about-copy">
            <p>SAIRAKSHA DAIRY PRODUCTS PRIVATE LIMITED is a closely held company incorporated on 7 June 2012, with a clear purpose: to build a dependable dairy business rooted in quality, discipline and long-term relationships.</p>
            <p>What began with just 5,000 litres of liquid milk per day has grown into a well-established dairy operation selling approximately 70,000 litres of milk and curd and 2,000 kg of paneer every day.</p>
            <p>Our main processing facility at Kuppam, Andhra Pradesh, has a processing capacity of approximately 2,00,000 litres per day and storage capacity of 2,00,000 litres. Our operations are supported by three strategically located chilling centres within an 80-kilometre radius and an owned fleet of 23 insulated vehicles, enabling efficient collection, processing and distribution.</p>
            <p>Today, Sairaksha Dairy serves customers across Andhra Pradesh, Karnataka, Tamil Nadu and Telangana, with a growing reputation for consistency, quality and reliability.</p>
          </div>
          <aside className="about-rail" data-testid="about-rail">
            {railStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div className="rail-stat" key={stat.label} data-testid={`rail-${stat.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  <span className="rail-icon"><Icon size={17} /></span>
                  <div><b>{stat.value}</b><small>{stat.label}</small></div>
                </div>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="directors section-pad" data-testid="directors-section">
        <div className="section-heading">
          <div><div className="section-kicker"><span>02</span><span className="kicker-rule" /><span>OUR LEADERSHIP</span></div><h2>The people<br /><em>behind the promise.</em></h2></div>
        </div>
        <div className="director-grid">
          <article className="director-card" data-testid="director-card-anuradha">
            <small>Director</small>
            <h3>Mrs. V. Anuradha Vinod</h3>
            <p>An accomplished professional with 14 years of banking experience, Mrs. V. Anuradha Vinod brings strong financial discipline, organisational expertise and a structured approach to the dairy business.</p>
            <p>An MBA in Human Resources, she has played an important role in shaping the company's administration, financial management and organisational growth, while helping build Sairaksha Dairy with a long-term vision.</p>
          </article>
          <article className="director-card" data-testid="director-card-krishna">
            <small>Director</small>
            <h3>Mr. N. Lovely Krishna</h3>
            <p>With 16 years of experience in the dairy industry, Mr. N. Lovely Krishna brings extensive practical knowledge of dairy operations, milk procurement, processing and industry dynamics.</p>
            <p>A Bachelor's degree in Mathematics, his experience and operational understanding have contributed significantly to the company's growth and its ability to build strong relationships across the dairy value chain.</p>
          </article>
        </div>
      </section>

      <section className="values section-pad" data-testid="values-section">
        <div className="section-kicker"><span>03</span><span className="kicker-rule" /><span>THE VALUES BEHIND SAIRAKSHA</span></div>
        <h2 className="values-tagline">Inspired by faith.<br /><em>Built by family. Driven by purity.</em></h2>
        <div className="flourish" aria-hidden="true"><span /></div>
        <div className="values-grid">
          <figure className="values-photo reveal-on-scroll" data-testid="values-baba-photo">
            <img src={assets.valuesBaba} alt="Sai Baba shrine at the Sairaksha plant" />
            <div className="flourish small" aria-hidden="true"><span /></div>
            <figcaption>Guided by Blessings</figcaption>
            <p>In the divine blessings of Shri Sai Baba, our journey is protected, our hearts are strengthened, and our purpose remains pure.</p>
          </figure>
          <figure className="values-photo reveal-on-scroll" style={{ transitionDelay: "120ms" }} data-testid="values-founders-photo">
            <img src={assets.valuesFounders} alt="The founders of Sairaksha Dairy" />
            <div className="flourish small" aria-hidden="true"><span /></div>
            <figcaption>The Vision of Our Founders</figcaption>
            <p>With the values they instilled and the dreams they nurtured, our founders laid the foundation of trust, quality and integrity that continues to guide every step we take.</p>
          </figure>
        </div>
        <p className="values-quote">“Their blessings are our strength. Their values are our foundation. Their dreams are our direction.”</p>
        <div className="flourish" aria-hidden="true"><span /></div>
        <p className="values-story">Our journey began with a simple belief — that purity, honesty and service should be at the heart of everything we do. Guided by the blessings of Sai Baba and the vision of our founders, Sairaksha Dairy has grown from a local dairy into a trusted name serving families across South India.</p>
      </section>

      <section className="story-timeline section-pad" data-testid="timeline-section">
        <div className="section-kicker"><span>04</span><span className="kicker-rule" /><span>OUR JOURNEY</span></div>
        <h2 className="timeline-heading">Every year,<br /><em>a step further.</em></h2>
        <div className="journey" data-testid="timeline-list">
          {timeline.map((item) => {
            const Icon = journeyIcons[item.icon];
            return (
              <div className="journey-item" key={item.year} data-testid={`timeline-item-${item.year}`}>
                <span className="journey-icon"><Icon size={17} /></span>
                <span className="journey-year">{item.year}</span>
                <h3>{item.title}</h3>
                <span className="journey-tag">{item.tag}</span>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="licences section-pad" data-testid="quality-standards-section">
        <div className="section-kicker"><span>05</span><span className="kicker-rule" /><span>QUALITY & FOOD SAFETY</span></div>
        <h2 className="values-tagline">Quality is not an option.<br /><em>It is our standard.</em></h2>
        <div className="quality-standards-copy">
          <p>At Sairaksha Dairy, quality begins at the point of milk procurement and continues through chilling, processing, packing, storage and distribution.</p>
          <p>We follow established food safety, hygiene and quality-control practices across our operations and maintain the licences, registrations and approvals required for our business activities.</p>
          <p className="quality-objective">Our objective is simple: <b>Safe products. Consistent quality. Responsible operations.</b></p>
          <p>We continuously work towards strengthening our systems, infrastructure and compliance standards as the business grows.</p>
          <div className="fssai-chip" data-testid="fssai-chip"><small>FSSAI License No.</small><b>{fssaiNumber}</b></div>
        </div>
      </section>

      <section className="promise section-pad" data-testid="promise-section">
        <div className="promise-card reveal-on-scroll">
          <div className="promise-copy">
            <h2>From farmers<br /><em>to families.</em></h2>
            <p>Dairy is more than a business. It is a relationship that connects farmers, employees, partners and consumers.</p>
            <p>Our journey from 5,000 litres a day to a multi-state dairy operation has been built step by step — with the trust of our milk suppliers, the commitment of our people and the confidence of our customers.</p>
            <p>As we move into our next phase of growth, our focus remains unchanged:</p>
            <div className="promise-values" data-testid="promise-focus">
              <div><Droplets size={18} /><span><b>Quality</b><small>in every drop.</small></span></div>
              <div><Handshake size={18} /><span><b>Integrity</b><small>in every relationship.</small></span></div>
              <div><Sprout size={18} /><span><b>Purpose</b><small>in every step forward.</small></span></div>
            </div>
          </div>
          <div className="promise-visual">
            <img src={assets.aerial} alt="Aerial view of the Sairaksha Dairy plant at Kuppam" />
            <div className="promise-stamp">
              <small>Sairaksha Dairy</small>
              <strong>2012</strong>
              <small>Built slowly · Grown with purpose<br />Driven by quality · Ready for tomorrow</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

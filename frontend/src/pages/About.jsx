import PageHero from "@/components/PageHero";
import { assets, fssaiNumber, timeline } from "@/data";

const scaleMetrics = [
  { value: "₹100 Crore", label: "Turnover as on 31 March 2024" },
  { value: "70,000 litres / day", label: "Milk & curd sales" },
  { value: "2,000 kg / day", label: "Paneer sales" },
  { value: "2,00,000 litres / day", label: "Kuppam plant processing capacity" },
  { value: "2,00,000 litres", label: "Storage capacity" },
  { value: "200+", label: "People at work" },
  { value: "23", label: "Insulated vehicles" },
  { value: "₹3.5 Crore", label: "Approx. stocks maintained at any time" },
];

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
        <div className="about-grid">
          <h2>Built slowly.<br /><em>Grown with purpose.</em></h2>
          <div className="about-copy">
            <p>SAIRAKSHA DAIRY PRODUCTS PRIVATE LIMITED is a closely held company incorporated on 7 June 2012, with a clear purpose: to build a dependable dairy business rooted in quality, discipline and long-term relationships.</p>
            <p>What began with just 5,000 litres of liquid milk per day has grown into a well-established dairy operation selling approximately 70,000 litres of milk and curd and 2,000 kg of paneer every day.</p>
            <p>Our main processing facility at Kuppam, Andhra Pradesh, has a processing capacity of approximately 2,00,000 litres per day and storage capacity of 2,00,000 litres. Our operations are supported by three strategically located chilling centres within an 80-kilometre radius and an owned fleet of 23 insulated vehicles, enabling efficient collection, processing and distribution.</p>
            <p>Today, Sairaksha Dairy serves customers across Andhra Pradesh, Karnataka, Tamil Nadu and Telangana, with a growing reputation for consistency, quality and reliability.</p>
          </div>
        </div>
      </section>

      <section className="scale section-pad" data-testid="scale-section">
        <div className="section-kicker"><span>02</span><span className="kicker-rule" /><span>OUR SCALE</span></div>
        <h2 className="values-tagline">The numbers behind<br /><em>the nourishment.</em></h2>
        <div className="scale-grid" data-testid="scale-grid">
          {scaleMetrics.map((metric) => (
            <div className="scale-card" key={metric.label} data-testid={`scale-${metric.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
              <b>{metric.value}</b><small>{metric.label}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="directors section-pad" data-testid="directors-section">
        <div className="section-heading">
          <div><div className="section-kicker"><span>03</span><span className="kicker-rule" /><span>OUR LEADERSHIP</span></div><h2>The people<br /><em>behind the promise.</em></h2></div>
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
        <div className="section-kicker"><span>04</span><span className="kicker-rule" /><span>THE VALUES BEHIND SAIRAKSHA</span></div>
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
        <div className="section-kicker"><span>05</span><span className="kicker-rule" /><span>FROM LOCAL DAIRY TO TRUSTED BRAND</span></div>
        <h2 className="timeline-heading">Every year,<br /><em>a step further.</em></h2>
        <div className="timeline" data-testid="timeline-list">
          {timeline.map((item) => (
            <div className="timeline-item" key={item.year} data-testid={`timeline-item-${item.year}`}>
              <span className="timeline-year">{item.year}</span>
              <div><h3>{item.title}</h3><span className="timeline-tag">{item.tag}</span><p>{item.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="licences section-pad" data-testid="quality-standards-section">
        <div className="section-kicker"><span>06</span><span className="kicker-rule" /><span>QUALITY & FOOD SAFETY</span></div>
        <h2 className="values-tagline">Quality is not an option.<br /><em>It is our standard.</em></h2>
        <div className="quality-standards-copy">
          <p>At Sairaksha Dairy, quality begins at the point of milk procurement and continues through chilling, processing, packing, storage and distribution.</p>
          <p>We follow established food safety, hygiene and quality-control practices across our operations and maintain the licences, registrations and approvals required for our business activities.</p>
          <p className="quality-objective">Our objective is simple: <b>Safe products. Consistent quality. Responsible operations.</b></p>
          <p>We continuously work towards strengthening our systems, infrastructure and compliance standards as the business grows.</p>
          <div className="fssai-chip" data-testid="fssai-chip"><small>FSSAI License No.</small><b>{fssaiNumber}</b></div>
        </div>
      </section>

      <section className="future section-pad" data-testid="promise-section">
        <div>
          <h2>From farmers<br /><em>to families.</em></h2>
          <p>Dairy is more than a business. It is a relationship that connects farmers, employees, partners and consumers.</p>
          <p>Our journey from 5,000 litres a day to a multi-state dairy operation has been built step by step — with the trust of our milk suppliers, the commitment of our people and the confidence of our customers.</p>
          <p>As we move into our next phase of growth, our focus remains unchanged:</p>
          <p className="promise-focus" data-testid="promise-focus">Quality in every drop.<br />Integrity in every relationship.<br />Purpose in every step forward.</p>
        </div>
        <div className="future-year"><span>Sairaksha Dairy</span><strong>2012</strong><small>Built slowly · Grown with purpose<br />Driven by quality · Ready for tomorrow</small></div>
      </section>
    </>
  );
}

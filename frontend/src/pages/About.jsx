import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { assets, licences, timeline } from "@/data";

export default function About() {
  return (
    <>
      <PageHero
        testId="about-hero"
        eyebrow="About Us"
        title={<>A legacy of purity,<br /><em>built on trust.</em></>}
        intro="From a small milk collection network to one of the region's most trusted dairy enterprises — the Sairaksha journey is one of unwavering commitment to quality."
        image={assets.exterior}
      />

      <section className="about section-pad" data-testid="about-profile-section">
        <div className="section-kicker"><span>01</span><span className="kicker-rule" /><span>WHO WE ARE</span></div>
        <div className="about-grid">
          <h2>Built slowly.<br /><em>Grown with purpose.</em></h2>
          <div className="about-copy">
            <p>SAIRAKSHA DAIRY PRODUCTS PRIVATE LIMITED is a closely held company incorporated on 07/06/2012. We began operations with 5,000 litres of liquid milk a day — today we sell about 50,000 litres of milk and curd, and about 2,000 kgs of paneer, every single day.</p>
            <p>Our main plant at Kuppam, Andhra Pradesh handles 70,000 litres daily with a storage capacity of 2,00,000 litres, supported by three chilling centres within an 80 km radius and our own fleet of 23 insulated vehicles.</p>
          </div>
        </div>
        <div className="metric-row" data-testid="about-metrics">
          <div><strong>₹100<span>cr</span></strong><small>turnover as on 31.03.2024</small></div>
          <div><strong>200</strong><small>people at work</small></div>
          <div><strong>23</strong><small>insulated vehicles</small></div>
          <div><strong>₹3.5<span>cr</span></strong><small>stocks on hand at any time</small></div>
        </div>
      </section>

      <section className="directors section-pad" data-testid="directors-section">
        <div className="section-heading">
          <div><div className="section-kicker"><span>02</span><span className="kicker-rule" /><span>LEADERSHIP</span></div><h2>The people<br /><em>behind the promise.</em></h2></div>
        </div>
        <div className="director-grid">
          <article className="director-card" data-testid="director-card-anuradha">
            <small>Director</small>
            <h3>Mrs. V Anuradha Vinod</h3>
            <p>An ex-banker with 14 years of banking experience who brought her discipline to the dairy industry. She holds an MBA in Human Resources.</p>
          </article>
          <article className="director-card" data-testid="director-card-krishna">
            <small>Director</small>
            <h3>Mr. N Lovely Krishna</h3>
            <p>Brings 16 years of rich experience in the dairy industry, with a Bachelor's degree in Mathematics.</p>
          </article>
        </div>
      </section>

      <section className="story-timeline section-pad" data-testid="timeline-section">
        <div className="section-kicker"><span>03</span><span className="kicker-rule" /><span>FROM LOCAL DAIRY TO TRUSTED BRAND</span></div>
        <h2 className="timeline-heading">Every year,<br /><em>a step further.</em></h2>
        <div className="timeline" data-testid="timeline-list">
          {timeline.map((item) => (
            <div className="timeline-item" key={item.year} data-testid={`timeline-item-${item.year}`}>
              <span className="timeline-year">{item.year}</span>
              <div><h3>{item.title}</h3><p>{item.text}</p><span className="timeline-tag">{item.tag}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="licences section-pad" data-testid="licences-section">
        <div className="section-heading">
          <div><div className="section-kicker"><span>04</span><span className="kicker-rule" /><span>LICENSED & CERTIFIED</span></div><h2>Compliant,<br /><em>at every step.</em></h2></div>
          <p>We are well equipped with all food safety standard norms and hold every licence our work demands.</p>
        </div>
        <div className="licence-grid" data-testid="licence-grid">
          {licences.map((licence) => (
            <div className="licence-card" key={licence.name} data-testid={`licence-${licence.name.toLowerCase().replaceAll(" ", "-")}`}>
              <small>{licence.name}</small><b>{licence.value}</b>
            </div>
          ))}
        </div>
      </section>

      <section className="future section-pad" data-testid="vision-section">
        <div className="future-label">OUR VISION <span>✦</span></div>
        <div>
          <h2>India's most trusted<br /><em>dairy brand.</em></h2>
          <p>To set the gold standard for purity, farmer welfare and sustainable dairy farming — one glass of milk at a time. Our next chapter is the SMP powder plant at Kuppam.</p>
          <Link className="button button-light" to="/products" data-testid="vision-products-button">See what we make <ArrowUpRight size={16} /></Link>
        </div>
        <div className="future-year"><span>Since</span><strong>2012</strong><small>and still growing</small></div>
      </section>
    </>
  );
}

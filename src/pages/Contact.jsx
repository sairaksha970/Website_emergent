import { Check, Factory, Mail, MapPin, MessageCircle, Phone, Snowflake } from "lucide-react";
import ContactHero from "@/components/ContactHero";
import { locations } from "@/data";

export default function Contact() {
  return (
    <>
      <ContactHero />

      <section className="contact section-pad" data-testid="contact-section">
        <div className="contact-top">
          <div className="section-kicker"><span>01</span><span className="kicker-rule" /><span>GET IN TOUCH</span></div>
          <h2>Start a<br /><em>conversation.</em></h2>
          <p>Call or message us directly — we respond fastest on WhatsApp during working hours.</p>
          <ul className="contact-points" data-testid="contact-points-list">
            {["Distribution and retail partnerships", "Bulk supply for hotels, caterers and institutions", "Farmer partnerships for milk collection"].map((point) => (
              <li key={point}><span><Check size={13} /></span>{point}</li>
            ))}
          </ul>
        </div>
        <div className="contact-actions">
          <a className="contact-card whatsapp" href="https://wa.me/919902581903" target="_blank" rel="noopener noreferrer" data-testid="whatsapp-contact-card"><MessageCircle size={24} /><span><small>WhatsApp us</small><b>99025 81903</b></span></a>
          <a className="contact-card" href="tel:+919849100805" data-testid="phone-contact-card"><Phone size={24} /><span><small>Call the dairy</small><b>98491 00805</b></span></a>
          <div className="contact-card" data-testid="address-contact-card"><MapPin size={24} /><span><small>Registered office</small><b>Plot No. 323, 1st Floor, Jigani–Bommasandra Link Road, Near Honda Showroom, APC Circle, Jigani, Anekal Tq, Bangalore - 560 105</b></span></div>
          <div className="contact-card" data-testid="plant-contact-card"><MapPin size={24} /><span><small>Main plant</small><b>Plot No. 18/3A, Kanamala Doddi Village, Morasana Palli Panchayath, Santhipuram Mandal, Chittoor Dist, Andhra Pradesh - 517423</b></span></div>
          <a className="contact-card" href="mailto:sairakshadairy@yahoo.com" data-testid="email-contact-card"><Mail size={24} /><span><small>Email enquiries</small><b>sairakshadairy@yahoo.com</b></span></a>
        </div>
      </section>

      <section className="contact-locations-section section-pad" data-testid="contact-locations-section">
        <div className="section-heading">
          <div>
            <div className="section-kicker"><span>02</span><span className="kicker-rule" /><span>FIND US</span></div>
            <h2>One plant,<br /><em>three chilling centres.</em></h2>
          </div>
          <p>All within an 80 km radius of our main packing station at Kuppam.</p>
        </div>
        <div className="location-grid" data-testid="contact-location-grid">
          {locations.map((location) => (
            <div 
              className={`location-card ${location.isMain ? "main-hub" : ""}`} 
              key={location.name} 
              data-testid={`contact-location-${location.name.toLowerCase().replaceAll(" ", "-")}`}
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
    </>
  );
}

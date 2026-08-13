import { Check, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import { assets, locations } from "@/data";

export default function Contact() {
  return (
    <>
      <PageHero
        testId="contact-hero"
        eyebrow="Contact Us"
        title={<>Let’s bring good<br /><em>things to the table.</em></>}
        intro="Distribution, bulk supply, farmer partnerships or a simple question — reach us on phone or WhatsApp and our team will get back to you."
        image={assets.fleet}
      />

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
          <div className="contact-card whatsapp" data-testid="whatsapp-contact-card"><MessageCircle size={24} /><span><small>WhatsApp us</small><b>Official number coming soon</b></span></div>
          <div className="contact-card" data-testid="phone-contact-card"><Phone size={24} /><span><small>Call the dairy</small><b>Phone number coming soon</b></span></div>
          <div className="contact-card" data-testid="address-contact-card"><MapPin size={24} /><span><small>Main plant</small><b>Santhipuram 7th Mile, Kuppam, Andhra Pradesh</b></span></div>
          <div className="contact-card contact-placeholder" data-testid="email-contact-card"><span><small>Email enquiries</small><b>hello@sairaksha.example</b></span><small>Placeholder</small></div>
        </div>
      </section>

      <section className="licences section-pad" data-testid="contact-locations-section">
        <div className="section-heading">
          <div><div className="section-kicker"><span>02</span><span className="kicker-rule" /><span>FIND US</span></div><h2>One plant,<br /><em>three chilling centres.</em></h2></div>
          <p>All within an 80 km radius of our main packing station at Kuppam.</p>
        </div>
        <div className="licence-grid location-grid" data-testid="contact-location-grid">
          {locations.map((location) => (
            <div className="licence-card location-card" key={location.name} data-testid={`contact-location-${location.name.toLowerCase().replaceAll(" ", "-")}`}>
              <small>{location.role}</small><b>{location.name}</b><span>{location.capacity}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

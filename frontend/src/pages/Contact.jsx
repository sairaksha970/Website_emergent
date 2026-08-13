import { useState } from "react";
import { ArrowUpRight, Check, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import { assets, locations } from "@/data";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const emptyForm = { name: "", phone: "", email: "", interest: "Distribution", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const update = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const response = await fetch(`${BACKEND_URL}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm(emptyForm);
    } catch {
      setStatus("idle");
      setError("Something went wrong while sending. Please try again.");
    }
  };

  return (
    <>
      <PageHero
        testId="contact-hero"
        eyebrow="Contact Us"
        title={<>Let’s bring good<br /><em>things to the table.</em></>}
        intro="Distribution, bulk supply, farmer partnerships or a simple question — tell us what you have in mind and our team will get back to you."
        image={assets.fleet}
      />

      <section className="contact section-pad" data-testid="contact-section">
        <div className="contact-top">
          <div className="section-kicker"><span>01</span><span className="kicker-rule" /><span>SEND AN ENQUIRY</span></div>
          <h2>Start a<br /><em>conversation.</em></h2>
          {status === "sent" ? (
            <div className="form-success" data-testid="enquiry-success-message">
              <Check size={20} />
              <div><b>Thank you — your enquiry has been received.</b><p>Our team will reach out to you shortly.</p></div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit} data-testid="enquiry-form">
              <div className="form-row">
                <input required placeholder="Your name" value={form.name} onChange={update("name")} data-testid="enquiry-name-input" aria-label="Your name" />
                <input required placeholder="Phone number" value={form.phone} onChange={update("phone")} data-testid="enquiry-phone-input" aria-label="Phone number" />
              </div>
              <div className="form-row">
                <input type="email" placeholder="Email (optional)" value={form.email} onChange={update("email")} data-testid="enquiry-email-input" aria-label="Email" />
                <select value={form.interest} onChange={update("interest")} data-testid="enquiry-interest-select" aria-label="I am interested in">
                  <option>Distribution</option>
                  <option>Bulk supply</option>
                  <option>Farmer partnership</option>
                  <option>General enquiry</option>
                </select>
              </div>
              <textarea required rows={5} placeholder="Tell us a little about your requirement" value={form.message} onChange={update("message")} data-testid="enquiry-message-input" aria-label="Message" />
              {error && <p className="form-error" data-testid="enquiry-error-message">{error}</p>}
              <button className="button button-dark form-submit" type="submit" disabled={status === "sending"} data-testid="enquiry-submit-button">
                {status === "sending" ? "Sending…" : "Send enquiry"} <ArrowUpRight size={16} />
              </button>
            </form>
          )}
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

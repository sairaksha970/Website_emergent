import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", testId: "nav-home-link" },
  { to: "/about", label: "About Us", testId: "nav-about-link" },
  { to: "/products", label: "Products", testId: "nav-products-link" },
  { to: "/farmers", label: "Farmers", testId: "nav-farmers-link" },
  { to: "/contact", label: "Contact Us", testId: "nav-contact-link" },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal-on-scroll:not(.in-view)");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <main className="site-shell">
      <div className="topline" data-testid="topline-notice">From our farmers to families across South India <span>✦</span> Since 2012</div>
      <header className="nav-wrap">
        <nav className="nav-bar" data-testid="main-navigation">
          <Link className="wordmark" to="/" data-testid="brand-home-button" aria-label="Go to home">
            <img className="wordmark-logo" src="/logo.png" alt="Sairaksha Dairy — Gomukhi logo" />
          </Link>
          <div className={`nav-links ${mobileOpen ? "is-open" : ""}`} data-testid="navigation-links">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} data-testid={item.testId}>{item.label}</NavLink>
            ))}
          </div>
          <Link className="nav-cta" to="/contact" data-testid="nav-enquiry-button">Enquire with us <ArrowUpRight size={15} /></Link>
          <button className="mobile-menu" onClick={() => setMobileOpen((open) => !open)} data-testid="mobile-menu-button" aria-label="Toggle menu">{mobileOpen ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <Outlet />

      <footer className="footer section-pad" data-testid="site-footer">
        <div className="footer-brand"><img className="wordmark-logo footer-logo" src="/logo.png" alt="Sairaksha Dairy — Gomukhi logo" /></div>
        <p>Goodness, made responsibly.<br />Kuppam · Andhra Pradesh<br /><a href="tel:08027839900" data-testid="footer-phone-link">080 - 27839900</a> · <a href="mailto:sairakshadairy@yahoo.com" data-testid="footer-email-link">sairakshadairy@yahoo.com</a></p>
        <div className="footer-links">
          <Link to="/about" data-testid="footer-about-link">About Us</Link>
          <Link to="/products" data-testid="footer-products-link">Products</Link>
          <Link to="/farmers" data-testid="footer-farmers-link">Farmers</Link>
          <Link to="/contact" data-testid="footer-contact-link">Contact</Link>
        </div>
        <span className="copyright">© 2024 Sairaksha Dairy</span>
      </footer>
    </main>
  );
}

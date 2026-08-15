import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X, MapPin, Phone, Mail } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", testId: "nav-home-link" },
  { to: "/about", label: "About Us", testId: "nav-about-link" },
  { to: "/products", label: "Products", testId: "nav-products-link" },
  { to: "/sustainability", label: "Sustainability", testId: "nav-farmers-link" },
  { to: "/contact", label: "Contact Us", testId: "nav-contact-link" },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileOpen(false);

    // Robust observer that attaches reliably after page mount
    const observeElements = () => {
      const items = document.querySelectorAll(".reveal-on-scroll:not(.in-view)");
      if (!items.length) return;

      if (!("IntersectionObserver" in window)) {
        items.forEach((item) => item.classList.add("in-view"));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "60px 0px 60px 0px" }
      );

      items.forEach((item) => observer.observe(item));

      // Fallback safeguard: reveal any stuck elements after 600ms
      const fallbackTimer = setTimeout(() => {
        items.forEach((item) => item.classList.add("in-view"));
      }, 600);

      return () => {
        observer.disconnect();
        clearTimeout(fallbackTimer);
      };
    };

    // Run immediately and also in next animation frame for smooth mounting
    const cleanup = observeElements();
    const frameId = requestAnimationFrame(() => {
      observeElements();
    });

    return () => {
      if (cleanup) cleanup();
      cancelAnimationFrame(frameId);
    };
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

      <footer className="site-footer" data-testid="site-footer">
        <div className="footer-sleek section-pad">
          <div className="footer-sleek-main">
            <div className="footer-brand-wrap">
              <Link className="footer-brand" to="/" aria-label="Go to home" data-testid="footer-brand-link">
                <img className="wordmark-logo footer-logo" src="/logo.png" alt="Sairaksha Dairy — Gomukhi logo" />
              </Link>
            </div>

            <div className="footer-node footer-address-node">
              <MapPin size={18} className="footer-node-icon" />
              <div className="footer-address-copy">
                <strong>Sairaksha Dairy Plant</strong>
                <span>Kuppam, Chittoor District, Andhra Pradesh, India</span>
              </div>
            </div>

            <span className="footer-vsep" aria-hidden="true">|</span>

            <a href="tel:+919849100805" className="footer-node footer-contact-node" data-testid="footer-phone-link">
              <Phone size={15} className="footer-node-icon" />
              <span>+91 98491 00805</span>
            </a>

            <span className="footer-vsep" aria-hidden="true">|</span>

            <a href="mailto:sairakshadairy@yahoo.com" className="footer-node footer-contact-node" data-testid="footer-email-link">
              <Mail size={15} className="footer-node-icon" />
              <span>sairakshadairy@yahoo.com</span>
            </a>

            <nav className="footer-sleek-nav" aria-label="Footer navigation">
              <Link to="/" data-testid="footer-home-link">Home</Link>
              <span className="footer-nav-divider" aria-hidden="true">|</span>
              <Link to="/about" data-testid="footer-about-link">About Us</Link>
              <span className="footer-nav-divider" aria-hidden="true">|</span>
              <Link to="/products" data-testid="footer-products-link">Products</Link>
              <span className="footer-nav-divider" aria-hidden="true">|</span>
              <Link to="/sustainability" data-testid="footer-farmers-link">Sustainability</Link>
              <span className="footer-nav-divider" aria-hidden="true">|</span>
              <Link to="/contact" data-testid="footer-contact-link">Contact</Link>
            </nav>
          </div>

          <div className="footer-sleek-sub">
            <span className="copyright">© 2012 Sairaksha Dairy. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

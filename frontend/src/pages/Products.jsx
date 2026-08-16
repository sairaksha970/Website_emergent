import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import ProductsHero from "@/components/ProductsHero";
import { brands, products } from "@/data";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const shouldReduceMotion = useReducedMotion();
  const activeBrand = searchParams.get("brand") || "All";
  const visibleProducts = activeBrand === "All" ? products : products.filter((product) => product.brand === activeBrand);

  const filterOptions = [
    { name: "All products", value: "All", testId: "filter-all-button" },
    ...brands.map((b) => ({
      name: b.name,
      value: b.name,
      testId: `filter-${b.name.toLowerCase().replace(" ", "-")}-button`,
    })),
  ];

  const setBrand = (brand) => {
    setSearchParams(brand === "All" ? {} : { brand });
  };

  return (
    <>
      <ProductsHero />

      <section className="products section-pad" data-testid="products-page-section">
        <div className="filter-row" data-testid="product-filters">
          <span>Browse by brand</span>
          {filterOptions.map((opt) => {
            const isActive = activeBrand === opt.value;
            return (
              <button
                key={opt.value}
                className={isActive ? "active" : ""}
                onClick={() => setBrand(opt.value)}
                data-testid={opt.testId}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeFilterPill"
                    className="filter-tab-pill"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 450, damping: 35 }
                    }
                  />
                )}
                <span className="filter-tab-text">{opt.name}</span>
              </button>
            );
          })}
        </div>

        <motion.div className="product-grid large" data-testid="product-grid" layout>
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((product, index) => (
              <motion.article
                layout
                className="product-card"
                key={`${product.brand}-${product.name}`}
                data-testid={`product-card-${product.brand.toLowerCase().replace(" ", "-")}-${product.name.toLowerCase().replaceAll(" ", "-")}`}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.94, y: 16 }
                }
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        scale: 0.94,
                        y: 8,
                        transition: { duration: 0.2, ease: "easeOut" },
                      }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        duration: 0.35,
                        delay: index * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                        layout: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                      }
                }
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : { y: -4, transition: { duration: 0.25, ease: "easeOut" } }
                }
              >
                <div className="product-image">
                  <img src={product.image} alt={`${product.brand} ${product.name}`} loading="lazy" />
                  <span>{product.category}</span>
                </div>
                <div className="product-meta">
                  <div>
                    <small>{product.brand}</small>
                    <h3>{product.name}</h3>
                    <p>{product.note}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="cta-band section-pad" data-testid="products-enquiry-cta">
        <div className="cta-copy">
          <h2>Interested in bulk supply<br /><em>or distribution?</em></h2>
          <p>We serve retail markets as well as bulk buyers — hotels, caterers and institutions. Tell us what you need.</p>
        </div>
        <Link className="button button-dark" to="/contact" data-testid="products-enquiry-button">Send an enquiry <ArrowUpRight size={16} /></Link>
      </section>
    </>
  );
}

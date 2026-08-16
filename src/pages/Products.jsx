import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ProductsHero from "@/components/ProductsHero";
import { brands, products } from "@/data";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeBrand = searchParams.get("brand") || "All";
  const visibleProducts = activeBrand === "All" ? products : products.filter((product) => product.brand === activeBrand);

  const setBrand = (brand) => {
    setSearchParams(brand === "All" ? {} : { brand });
  };

  return (
    <>
      <ProductsHero />

      <section className="products section-pad" data-testid="products-page-section">
        <div className="filter-row" data-testid="product-filters">
          <span>Browse by brand</span>
          <button className={activeBrand === "All" ? "active" : ""} onClick={() => setBrand("All")} data-testid="filter-all-button">All products</button>
          {brands.map((brand) => (
            <button className={activeBrand === brand.name ? "active" : ""} key={brand.name} onClick={() => setBrand(brand.name)} data-testid={`filter-${brand.name.toLowerCase().replace(" ", "-")}-button`}>{brand.name}</button>
          ))}
        </div>
        <div className="product-grid large" data-testid="product-grid">
          {visibleProducts.map((product) => (
            <article className="product-card" key={`${product.brand}-${product.name}`} data-testid={`product-card-${product.brand.toLowerCase().replace(" ", "-")}-${product.name.toLowerCase().replaceAll(" ", "-")}`}>
              <div className="product-image"><img src={product.image} alt={`${product.brand} ${product.name}`} /><span>{product.category}</span></div>
              <div className="product-meta">
                <div>
                  <small>{product.brand}</small>
                  <h3>{product.name}</h3>
                  <p>{product.note}</p>
                  {product.tags && product.tags.length > 0 && (
                    <div className="product-tags">
                      {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
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

import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function ProductShowcaseCard({
  product,
  blurb,
  index,
  isHovered,
  isDimmed,
  onHoverStart,
  onHoverEnd,
  shouldReduceMotion,
}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Opposite subtle parallax: 4px to 6px max displacement
    setOffset({
      x: -x * 7,
      y: -y * 6,
    });

    setLightPos({
      x: Math.round(((e.clientX - rect.left) / rect.width) * 100),
      y: Math.round(((e.clientY - rect.top) / rect.height) * 100),
    });
  };

  const handleMouseEnter = () => {
    onHoverStart();
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
    onHoverEnd();
  };

  const testId = `product-card-${product.brand.toLowerCase().replace(/\s+/g, "-")}-${product.name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.65,
              delay: 0.12 + index * 0.09,
              ease: [0.16, 1, 0.3, 1],
            }
      }
      className="sp-card-motion-wrapper"
    >
      <Link
        to={`/products?brand=${encodeURIComponent(product.brand)}`}
        className={`sp-card ${isDimmed ? "is-dimmed" : ""} ${isHovered ? "is-active" : ""}`}
        data-testid={testId}
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          "--light-x": `${lightPos.x}%`,
          "--light-y": `${lightPos.y}%`,
        }}
      >
        <div className="sp-card-light" aria-hidden="true" />
        
        <div className="sp-img-frame">
          <div className="sp-img-ambient-backdrop" />
          <div
            className="sp-img-parallax-wrap"
            style={{
              transform: shouldReduceMotion
                ? "none"
                : `translate3d(${offset.x.toFixed(2)}px, ${offset.y.toFixed(2)}px, 0)`,
            }}
          >
            <img
              src={product.image}
              alt={`${product.brand} ${product.name}`}
              loading="lazy"
              className="sp-product-photo"
            />
          </div>
        </div>

        <div className="sp-meta">
          <span className="sp-brand-kicker">{product.brand}</span>
          <h3 className="sp-product-title">
            {product.name === "Fresh Curd" ? "Curd" : product.name}
          </h3>
          <p className="sp-product-desc">{blurb}</p>
          
          <div className="sp-more-wrap">
            <span className="sp-more">
              Learn more
              <span className="sp-more-arrow">
                <ArrowUpRight size={13} />
              </span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

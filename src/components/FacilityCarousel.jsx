import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FacilityCarousel({ images, badgeText, badgeIcon: BadgeIcon, testId }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Optional subtle auto-rotation if user doesn't interact, pauses on hover
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const current = images[currentIndex] || images[0];

  return (
    <div 
      className="facility-card-image-wrap" 
      data-testid={testId}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Left Badge */}
      {badgeText && (
        <div className="image-overlay-badge">
          {BadgeIcon && <BadgeIcon size={13} className="overlay-badge-icon" />}
          <span>{badgeText}</span>
        </div>
      )}

      {/* Main Image Slides */}
      <div className="slider-track-container">
        {images.map((item, idx) => (
          <div
            key={idx}
            className={`slider-slide ${idx === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${item.src || item})` }}
            role="img"
            aria-label={item.caption || badgeText}
          >
            <img 
              src={item.src || item} 
              alt={item.caption || badgeText} 
              className="sr-only" 
            />
          </div>
        ))}
      </div>

      {/* Slide Caption Overlay at bottom */}
      {current?.caption && (
        <div className="slider-caption-bar">
          <span>{current.caption}</span>
          <span className="slider-counter">{currentIndex + 1} / {images.length}</span>
        </div>
      )}

      {/* Navigation Controls (Left / Right Arrows) */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            className="slider-nav-btn prev-btn"
            onClick={prevSlide}
            aria-label="Previous image"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            className="slider-nav-btn next-btn"
            onClick={nextSlide}
            aria-label="Next image"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots Indicators */}
          <div className="slider-dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`slider-dot ${idx === currentIndex ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

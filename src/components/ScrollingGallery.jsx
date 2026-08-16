import { useState, useRef, useEffect, useCallback } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize2, 
  Images, 
  LayoutGrid, 
  X, 
  ArrowUpRight,
  Sparkles,
  SlidersHorizontal
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { factoryGallery } from "@/data";

export const galleryCategories = [
  { id: "all", label: "All Photos" },
  { id: "plant", label: "Plant & Facilities" },
  { id: "fleet", label: "Cold Chain & Fleet" },
  { id: "hygiene", label: "Team & Hygiene" },
  { id: "campus", label: "Campus & Farm" },
];

const categoryMap = {
  "The gates of Sairaksha": "campus",
  "The Kuppam plant": "plant",
  "A fleet we call our own": "fleet",
  "Green by design": "campus",
  "The heart of processing": "plant",
  "A connected cold chain": "fleet",
  "Where every day begins": "campus",
  "Built for precision": "plant",
  "Milk on the move": "fleet",
  "Straight from the farm": "campus",
  "Bulk storage & silos": "plant",
  "Evenings at the plant": "campus",
  "Hygiene on the floor": "hygiene",
  "Kuppam from above": "plant",
  "Our dedicated dairy team": "hygiene",
  "Precision on the processing floor": "hygiene",
};

export const enrichedGallery = factoryGallery.map((item, idx) => ({
  ...item,
  id: `gallery-item-${idx + 1}`,
  index: idx,
  category: categoryMap[item.title] || "plant",
}));

export default function ScrollingGallery({ 
  onSelectImage, 
  shouldReduceMotion = false 
}) {
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const scrollTrackRef = useRef(null);

  // Manual scroll buttons for the marquee reel
  const handleScrollNudge = (direction) => {
    if (!scrollTrackRef.current) return;
    const scrollAmount = direction === "left" ? -380 : 380;
    scrollTrackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Filter items for the full gallery modal
  const filteredModalItems = enrichedGallery.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.caption.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle ESC key for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // Lock body scroll when full gallery modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Double the array for seamless endless scroll effect
  const marqueeItems = [...enrichedGallery, ...enrichedGallery];

  return (
    <div className="scrolling-gallery-wrapper" data-testid="scrolling-gallery-container">
      {/* Gallery Header Controls */}
      <div className="sg-header-actions">
        <div className="sg-count-badge">
          <Sparkles size={13} className="text-copper" />
          <span>{enrichedGallery.length} Plant & Facility Photographs</span>
        </div>

        <div className="sg-controls-group">
          {/* Play / Pause auto-scroll button */}
          <button
            type="button"
            className={`sg-ctrl-btn ${isPaused ? "is-paused" : ""}`}
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            data-testid="gallery-play-pause-btn"
          >
            {isPaused ? <Play size={14} /> : <Pause size={14} />}
            <span className="sg-ctrl-label">{isPaused ? "Play" : "Pause"}</span>
          </button>

          {/* Left / Right nudge arrows */}
          <div className="sg-nav-arrows">
            <button
              type="button"
              className="sg-arrow-btn"
              onClick={() => handleScrollNudge("left")}
              aria-label="Scroll left"
              title="Previous photos"
              data-testid="gallery-scroll-left-btn"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              className="sg-arrow-btn"
              onClick={() => handleScrollNudge("right")}
              aria-label="Scroll right"
              title="Next photos"
              data-testid="gallery-scroll-right-btn"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* "View Entire Gallery" Button */}
          <button
            type="button"
            className="sg-view-all-btn"
            onClick={() => setIsModalOpen(true)}
            data-testid="view-entire-gallery-button"
            aria-label="View entire photo gallery in full screen"
          >
            <Images size={15} />
            <span>View Entire Gallery</span>
            <span className="sg-badge-pill">{enrichedGallery.length}</span>
          </button>
        </div>
      </div>

      {/* Scrolling Reel Track */}
      <div 
        className="sg-marquee-viewport"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={scrollTrackRef}
      >
        <div 
          className={`sg-marquee-track ${isPaused || isHovered || shouldReduceMotion ? "is-paused" : ""}`}
          data-testid="factory-gallery-grid"
        >
          {marqueeItems.map((item, idx) => (
            <button
              key={`${item.title}-${idx}`}
              type="button"
              className="sg-card"
              onClick={() => onSelectImage(item, item.index)}
              data-testid={`factory-gallery-image-${(idx % enrichedGallery.length) + 1}`}
              aria-label={`View photo: ${item.title}`}
            >
              <div className="sg-card-img-wrap">
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  className="sg-card-img"
                />
                <div className="sg-card-gradient" />
                <span className="sg-card-zoom-indicator">
                  <Maximize2 size={14} />
                </span>
                <span className="sg-card-number">
                  {String((idx % enrichedGallery.length) + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="sg-card-meta">
                <h4 className="sg-card-title">{item.title}</h4>
                <p className="sg-card-caption">{item.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Full Gallery Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="sg-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsModalOpen(false);
            }}
            data-testid="gallery-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Inside Kuppam Complete Photo Gallery"
          >
            <motion.div
              className="sg-modal-container"
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Modal Header */}
              <div className="sg-modal-header">
                <div className="sg-modal-title-group">
                  <div className="sg-modal-eyebrow">
                    <span>INSIDE KUPPAM</span>
                    <span className="sg-dot-sep">·</span>
                    <span>COMPLETE GALLERY</span>
                  </div>
                  <h3 className="sg-modal-title">
                    Our Plant, People & <em>Pure Processes</em>
                  </h3>
                  <p className="sg-modal-sub">
                    Browse all {enrichedGallery.length} photographs of our Kuppam processing facility, quality labs, cold chain logistics, and campus.
                  </p>
                </div>

                <button
                  type="button"
                  className="sg-modal-close-btn"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close full gallery view"
                  data-testid="gallery-modal-close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Filter Tabs */}
              <div className="sg-modal-filters">
                <div className="sg-filter-pills" role="tablist">
                  {galleryCategories.map((cat) => {
                    const count = cat.id === "all" 
                      ? enrichedGallery.length 
                      : enrichedGallery.filter((item) => item.category === cat.id).length;
                    const isActive = activeCategory === cat.id;

                    return (
                      <button
                        key={cat.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`sg-filter-pill ${isActive ? "is-active" : ""}`}
                        onClick={() => setActiveCategory(cat.id)}
                        data-testid={`gallery-filter-${cat.id}`}
                      >
                        <span>{cat.label}</span>
                        <span className="sg-pill-count">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Photos Grid in Modal */}
              <div className="sg-modal-grid-scroll">
                <div className="sg-modal-grid" data-testid="gallery-modal-grid">
                  {filteredModalItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="sg-grid-card"
                      onClick={() => {
                        onSelectImage(item, item.index);
                      }}
                      data-testid={`modal-gallery-item-${item.index + 1}`}
                      aria-label={`Open high-resolution photo: ${item.title}`}
                    >
                      <div className="sg-grid-img-frame">
                        <img
                          src={item.image}
                          alt={item.caption}
                          loading="lazy"
                          className="sg-grid-img"
                        />
                        <div className="sg-grid-hover-overlay">
                          <span className="sg-grid-zoom-btn">
                            <Maximize2 size={16} />
                          </span>
                        </div>
                      </div>
                      <div className="sg-grid-meta">
                        <h4 className="sg-grid-item-title">{item.title}</h4>
                        <p className="sg-grid-item-caption">{item.caption}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {filteredModalItems.length === 0 && (
                  <div className="sg-empty-state">
                    <p>No photos found in this category.</p>
                  </div>
                )}
              </div>

              {/* Modal Footer Bar */}
              <div className="sg-modal-footer">
                <span>Showing {filteredModalItems.length} of {enrichedGallery.length} photographs</span>
                <button
                  type="button"
                  className="button button-dark"
                  onClick={() => setIsModalOpen(false)}
                >
                  Back to Overview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

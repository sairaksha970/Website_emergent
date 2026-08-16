/**
 * Video & Media Preloading Utility
 * Preloads all plant film videos and poster thumbnails immediately when the website is opened,
 * ensuring zero buffer delay and instantaneous playback.
 */

export const VIDEO_ASSETS = [
  "/videos/film1.mp4",
  "/videos/film2.mp4",
  "/videos/film3.mp4",
  "/videos/film4.mp4",
];

export const POSTER_ASSETS = [
  "/posters/film1.jpg",
  "/posters/film2.jpg",
  "/posters/film3.jpg",
  "/posters/film4.jpg",
];

// Retain preloaded DOM video instances in memory so browser buffering persists
const activeVideoCache = [];

export function preloadWebsiteVideos() {
  if (typeof window === "undefined") return;

  // 1. Preload video poster images immediately for instant crisp visual rendering
  POSTER_ASSETS.forEach((src) => {
    try {
      const img = new Image();
      img.src = src;
    } catch {
      // Ignore if image preloading fails
    }
  });

  // 2. Preload video streams into browser media and HTTP cache
  VIDEO_ASSETS.forEach((src) => {
    try {
      const video = document.createElement("video");
      video.preload = "auto";
      video.muted = true;
      video.playsInline = true;
      video.src = src;
      video.load();
      activeVideoCache.push(video);

      // Warm HTTP cache in background
      if (typeof window.fetch === "function") {
        window.fetch(src, { mode: "no-cors", cache: "force-cache" }).catch(() => {});
      }
    } catch {
      // Graceful fallback
    }
  });
}

// Auto-run preloader as early as possible upon module initialization
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", preloadWebsiteVideos, { once: true });
  } else {
    preloadWebsiteVideos();
  }
}

# PRD — Sairaksha Dairy Products Pvt Ltd Website

## Original problem statement
Build a website for Sairaksha Dairy Products Pvt Ltd (brands: Gomukhi, Amogh, Sri Lakshmi) to showcase the company profile, factory infrastructure, and product range, and to attract distributors/bulk enquiries. The user liked the initial "organic & earthy" template, colors and hero section and asked to keep them unchanged. The site must have 5 pages — Home, About Us, Products, Farmers, Contact Us — with content/layouts referenced from screenshots of the user's drafted Lovable project and media from their Google Drive.

## User personas
- Retail customers discovering the brands and product range
- Distributors / bulk buyers (hotels, caterers, institutions) sending enquiries
- Dairy farmers evaluating a procurement partnership
- Business visitors verifying credibility (licences, turnover, infrastructure)

## Architecture
- Frontend: React 19 + react-router-dom (BrowserRouter), 5 routed pages, custom CSS (organic & earthy theme, Playfair Display + Inter), lucide-react icons
- Backend: FastAPI with /api prefix, MongoDB via motor (MONGO_URL / DB_NAME from env)
- Data: static content in src/data.js; enquiries persisted in MongoDB `enquiries` collection

## Pages
- Home: hero (preserved), brand strip, story preview, product preview, 4-Point Purity Checkpoint, promise section, Inside Kuppam gallery + lightbox, SMP 2027 future section, contact CTA
- About Us: company profile, directors, metrics, 2012-2027 timeline, licences grid, vision banner
- Products: banner hero, brand filter (All / Gomukhi / Amogh / Sri Lakshmi) via ?brand= param, 11-product catalog with tags, bulk enquiry CTA
- Farmers: hero, direct procurement model, stats, 6 empowerment programs, collection network (3 chilling centres + Kuppam unit), farmer CTA
- Contact Us: working enquiry form (POST /api/enquiries), contact cards (placeholders for phone/WhatsApp/email), locations grid

## Key API endpoints
- POST /api/enquiries — create enquiry (name, phone, email, interest, message)
- GET /api/enquiries — list enquiries
- GET /api/ , GET/POST /api/status — template health endpoints

## Implemented (2026-08-13)
- Restructured single-page app into 5 routed pages with shared Layout (topline, nav, footer), preserving template, colors and hero
- Added 4-Point Purity Checkpoint section (from user's reference site) to Home
- Full product catalog (11 SKUs across 3 brands) with brand filtering and URL params
- Farmers page with procurement model, empowerment programs and collection network
- Contact page with working enquiry form wired to MongoDB backend
- About page with real company data (2012 incorporation, ₹100cr turnover, directors, licences, timeline)
- Verified: POST/GET /api/enquiries via curl; navigation, filters, form submission via browser automation; mobile menu

## Backlog
- P0: Replace placeholder contact details (official phone, WhatsApp number, email) — pending user input
- P0: Add remaining product/factory photos and videos — Google Drive links are bot-blocked (reCAPTCHA); user uploads images directly in batches of 5. DONE (2026-08-13): batch 1 added — Amogh Curd, Amogh Curd Bucket, Amogh Paneer, Gomukhi Double Toned Milk, Gomukhi Standardized Milk now show their real pack shots. Batch 2 added — Gomukhi Toned Milk real shot; Sri Lakshmi range expanded with Full Cream Milk, Standardised Milk, Butter Milk and Curd (catalog now 15 products). Batch 3 added — factory entrance, plant lawns, campus shrine, dusk pathway and packing-floor hygiene shots. Batch 4 added — farm trellis (also now the Farmers page feature image), processing hall interior, milk tanker, garlanded fleet and aerial plant view; gallery is now 14 tiles with lightbox. Awaiting next batch.
- P1: "Purity, In Motion" video section once the user shares the short factory videos
- P1: Admin view or email notification for incoming enquiries
- P2: Year-wise financial performance table on About page
- P2: SEO metadata per page

## Next tasks
1. Collect official contact details and activate WhatsApp/call/email actions
2. Collect remaining media via direct upload and populate gallery + product images
3. Optional: enquiry email notifications

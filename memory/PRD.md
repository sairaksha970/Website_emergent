# Sairaksha Dairy Website PRD

## Original problem statement
Build a marketing website for Sairaksha Dairy Products Pvt Ltd with three brands — Gomukhi, Amogh, and Sri Lakshmi — using the uploaded product imagery. The site should help visitors discover products, contact the dairy for bulk/distributor enquiries, and understand the company profile, facilities, quality promise, and growth story. Official phone, email, and WhatsApp details are to remain clearly marked placeholders until provided.

## Architecture decisions
- React single-page marketing site with responsive section navigation.
- Product data is local to the frontend for a fast, browse-first experience.
- Uploaded product images are used from the provided public asset URLs.
- No authentication, database, or third-party API is needed for the current public website.
- Contact interactions use visible placeholder notices until official details are supplied.

## Implemented
- Editorial, organic visual system with Playfair Display, Inter, forest green, cream, copper and product-led imagery.
- Hero section with brand story, proof metrics, and primary CTAs.
- Brand strip and product filtering for all three brands.
- Product cards for Gomukhi, Amogh, and Sri Lakshmi using the five supplied product images.
- Company story, operating metrics, quality promise, facilities, licenses context, and future SMP project section.
- Contact section with WhatsApp, phone, and email placeholder states.
- Responsive mobile navigation and layout with unique data-testid coverage for user-facing/interactive elements.

## Prioritized backlog
- P0: Replace phone, email, and WhatsApp placeholders with official business details.
- P1: Add the supplied factory/portfolio images when available and connect them to the infrastructure story.
- P1: Add a downloadable company profile PDF and individual product detail pages.
- P2: Add distributor enquiry form with enquiry routing and analytics.

## Next tasks
1. Provide official contact details and update the contact actions.
2. Provide any additional factory or certification images for the infrastructure section.
3. Confirm whether the product range needs pack sizes and retail/bulk availability labels.

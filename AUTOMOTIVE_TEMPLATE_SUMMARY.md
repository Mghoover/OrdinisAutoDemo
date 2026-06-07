# ODS Automotive Template Summary

## Pages Created

- Home: `/`
- Services hub: `/services/`
- Service detail pages: diagnostics, brake repair, oil change, suspension repair, AC repair, electrical diagnostics, engine repair, preventive maintenance, Toyota repair
- Symptoms hub: `/symptoms/`
- Symptom detail pages: check engine light, car won't start, brakes grinding, car shaking, engine overheating, oil leak, battery drain
- Maintenance hub: `/maintenance/`
- Maintenance detail pages: oil change intervals, brake fluid service, transmission service, coolant flush, spark plug replacement
- About: `/about/`
- FAQ: `/faq/`
- Contact: `/contact/`
- Schedule service: `/schedule-service/`
- Local SEO pages: `/auto-repair-florence-sc/`, `/brake-repair-florence-sc/`, `/oil-change-florence-sc/`, `/toyota-repair-florence-sc/`

## Components and Patterns Reused

- ODS Astro starter project structure
- `BaseLayout.astro` metadata and schema shell
- Shared navigation and footer component locations
- Config-driven business, navigation, theme, and hub settings
- Static Astro route generation for detail pages
- Content-card, CTA, grid, map, and form styling conventions

## New Components and Data Introduced

- `src/data/automotive.ts` centralizes services, symptoms, maintenance guides, FAQs, local SEO pages, trust indicators, and schema helpers.
- `src/layouts/DetailLayout.astro` renders reusable service, symptom, and maintenance detail pages.
- Automotive visual assets were added under `public/images/auto/`.
- Schedule and contact forms are static placeholders ready for ODS form handling or CRM integration.

## SEO Opportunities Identified

- Expand Toyota content by model: Camry, Corolla, RAV4, Tacoma, Highlander, 4Runner, Prius, Tundra.
- Add neighborhood and service-area pages beyond Florence.
- Add fleet maintenance content for small businesses.
- Add seasonal content: summer AC checks, holiday road-trip inspections, back-to-school vehicle checks.
- Add pre-purchase inspection and used-car buyer guides.
- Add review/testimonial schema once real client reviews are available.

## Structured Data

- Base layout emits `AutoRepair` local business schema.
- Detail pages emit breadcrumbs and FAQ schema.
- Service pages emit `Service` schema.
- FAQ page emits comprehensive `FAQPage` schema.
- Local SEO pages emit breadcrumbs and service schema when tied to a service.

## Future Enhancement Opportunities

- Appointment request backend
- Customer portal
- Vehicle history records
- Repair status tracking
- Automated service reminders
- Fleet account scheduling
- Review ingestion
- Photo galleries for real shop proof
- CRM or helpdesk integration

# Pure Water Window Cleaning Website

## Overview
Professional website for Pure Water Window Cleaning, a window cleaning company offering window cleaning, gutter clearing, solar panel cleaning, fascia/soffit cleaning, and conservatory valets.

## Architecture
- **Frontend**: React + TypeScript with Tailwind CSS v4 and shadcn/ui components
- **Backend**: Express.js server with API routes
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: wouter for frontend routing

## Key Features
- Hero section with background video
- Services showcase (Windows, Gutters, Solar Panels, Conservatories)
- Quote request form (stores enquiries in database)
- Online payment section (mockup)
- Contact information with real business details
- Logo integrated from brand assets

## Contact Details (from logo)
- Phone: 07551 017095
- Website: www.purewaterinfo.co.uk

## Data Model
- `enquiries` table: stores quote requests (firstName, lastName, email, phone, service, postcode, message, status)

## API Routes
- `POST /api/enquiries` - Submit a quote request
- `GET /api/enquiries` - List all enquiries

## Fonts
- Display: Nunito (matches logo style)
- Body: Inter

## File Structure
- `client/src/pages/Home.tsx` - Main landing page
- `client/src/components/Nav.tsx` - Navigation bar with logo
- `client/src/components/Hero.tsx` - Hero section with video background
- `client/src/components/Services.tsx` - Services showcase
- `client/src/components/Enquiry.tsx` - Quote request form
- `client/src/components/Payment.tsx` - Payment section
- `client/src/components/Footer.tsx` - Footer with contact info
- `shared/schema.ts` - Database schema (users, enquiries)
- `server/routes.ts` - API routes
- `server/storage.ts` - Database storage interface
- `server/db.ts` - Database connection

# Customizable Portfolio Platform (Next.js)

A multi-tenant, subdomain-based portfolio platform built with **Next.js**, allowing companies to showcase their work, services, and brand identity. The platform features a main landing page with top clients and individual client subdomains for personalized portfolios.

---

## **Table of Contents**
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## **Overview**
This platform allows multiple clients to create professional portfolios under a single domain using subdomains. The main domain serves as a landing page showcasing top clients, while each client manages their own portfolio via a secure login system.  

---

## **Features**
### Main Domain (`portfoliohub.com`)
- Hero section with call-to-action
- Top companies showcase
- Platform overview and features
- Testimonials / success stories
- Call-to-action section
- Footer with links and social media

### Client Subdomains (`client.portfoliohub.com`)
- Secure login/registration
- Company profile (logo, branding, mission)
- Portfolio gallery (projects, media, categories)
- Services section
- Testimonials section
- Contact form and optional map
- Template, color, and font customization

### Admin Dashboard
- Super-admin: manage all clients, subdomains, and templates
- Client-admin: manage only their portfolio content

---

## **Technology Stack**
- **Frontend & Backend:** Next.js  
- **Database:** MongoDB or Firebase  
- **Authentication:** NextAuth.js  
- **Hosting:** Vercel (supports subdomains)  
- **Styling:** Tailwind CSS / SCSS / CSS Modules  

---

## **Architecture**
- **Multi-tenant system:** one main domain with subdomains for each client.  
- **Subdomain routing:** detect subdomain in Next.js middleware and fetch client-specific data.  
- **Database structure:**
  - Clients: stores subdomain, branding, and theme settings
  - Portfolio content: projects, services, testimonials linked to `client_id`
  - Top clients: featured clients for main landing page  

---

## **Getting Started**
### Prerequisites
- Node.js >= 18
- npm or yarn
- MongoDB or Firebase account

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-platform.git
cd portfolio-platform

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev

# SMT Automotive Garage website

## Run it
    npm install
    npm run dev       # live preview at http://localhost:5173
    npm run build     # finished website in the /dist folder
    npm run preview   # test the finished website locally

## Where to edit things (no coding needed — just change the text between the quotes)
| What you want to change | File |
|---|---|
| Phone numbers, WhatsApp, email, address, map links, opening hours, rating, social links, website address, **site colours** | `src/data/businessInfo.js` |
| Wording on the Home page (hero, "why choose us", about, call to action) | `src/data/content.js` |
| Services and their lists | `src/data/services.js` |
| Car brands (add/remove names; logos in `brandLogos.js`) | `src/data/brands.js` |
| Customer reviews | `src/data/reviews.js` |
| Page titles / Google descriptions | first line of each file in `src/pages/` (`useSeo(...)`) |
| Button & card look | `src/styles/global.css` |
| Logo | replace `public/logos/smt-logo.webp` (square image works best) |
| Workshop photo | replace `public/images/workshop.jpg` |

## Before going live
1. Set `websiteUrl` in `businessInfo.js`, and replace `https://www.example.com` in `public/sitemap.xml` and `public/robots.txt`.
2. Add your Google Business Profile link (`googleProfileUrl`) and social links in `businessInfo.js`.
3. Replace the opening-hours placeholder in `businessInfo.js`.

## Contact form
No backend is connected: the form opens WhatsApp with the enquiry pre-filled. To also receive email, add a `fetch()` to a form service (e.g. Formspree) inside `submit` in `src/components/ContactForm.jsx`.

## Deploy
Run `npm run build`, then upload the `dist` folder to Netlify, Vercel or Cloudflare Pages. (`public/_redirects` is already set up so page links work on Netlify.)

## Project map
    src/data/        everything you edit (info, text, services, brands, reviews)
    src/pages/       Home, Services, Brands, Contact, 404
    src/components/  Navbar, Footer, ServiceCard, ContactForm, BrandLogo, FloatingButtons, ScrollEffects, Logo
    src/styles/      global.css (buttons, cards, animations)

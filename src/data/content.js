// ==========================================
// WEBSITE TEXT — edit the wording of the Home page here.
// (Phone numbers, address, hours: businessInfo.js · Services: services.js · Brands: brands.js · Reviews: reviews.js)
// ==========================================
import { Star, Wrench, ShieldCheck, MapPin } from "lucide-react";
import { businessInfo as b } from "./businessInfo";

export const content = {
  // Message pre-filled when someone taps a general WhatsApp button
  whatsappMessage: "Hello SMT Automotive Garage, I would like to make an enquiry.",

  hero: {
    eyebrow: "RAS AL KHOR, DUBAI",
    title: "Expert Car Repair & Automotive Care in Dubai",
    text: "Complete automotive repair, diagnostics, maintenance and bodywork for multiple car brands. Quality workmanship, transparent recommendations and reliable service at SMT Automotive Garage.",
  },

  // The strip under the hero. Rating and review count come from businessInfo.js
  trust: [
    { icon: Star, value: String(b.rating), label: "Google Rating" },
    { icon: Star, value: String(b.reviewCount), label: "Google Reviews" },
    { icon: Wrench, value: "Multi-Brand", label: "Vehicle Expertise" },
    { icon: ShieldCheck, value: "Complete", label: "Automotive Care" },
    { icon: MapPin, value: "Ras Al Khor", label: "Dubai" },
  ],

  servicesTitle: "Our Services",

  whyTitle: "Why Choose", whyHighlight: "SMT Automotive",
  why: ["Experienced automotive repair team", "Transparent repair recommendations", "Fair and reasonable pricing", "Multi-brand vehicle servicing", "Comprehensive automotive solutions", "Customer-focused service", "Convenient Dubai location", "Attention to repair quality"],

  brands: {
    title: "We Service Multiple Car Brands",
    text: "From everyday vehicles to premium automobiles, our team provides automotive repair and maintenance solutions for a wide range of makes and models.",
    disclaimer: "Logos are trademarks of their respective owners, shown only to indicate the makes we service. SMT Automotive is an independent garage, not affiliated with any manufacturer.",
  },

  about: {
    title: "Your Trusted Automotive Service Partner in Dubai",
    text: `SMT Automotive Garage (${b.fullName}) is a Dubai-based repair and maintenance workshop in Ras Al Khor Industrial Area 2. We combine hands-on repair expertise with a customer-focused approach and clear communication, so you know what your vehicle needs before work begins.`,
    image: "/images/workshop.jpg", // replace this file to change the photo
    imageAlt: "SMT Automotive Garage signboard, Ras Al Khor Industrial Area 2, Dubai",
    caption: "Our garage signboard — Ras Al Khor Industrial Area 2, Dubai.",
  },

  reviewsTitle: "Customer Reviews",

  cta: {
    title: "Need Professional Car Repair in Dubai?",
    text: "Contact SMT Automotive Garage today to discuss your vehicle's repair or maintenance needs.",
  },
};

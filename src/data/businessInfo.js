// ==========================================
// SMT AUTOMOTIVE GARAGE — BUSINESS DETAILS
// EDIT THESE VALUES TO UPDATE THE WHOLE WEBSITE
// Anything marked EDIT_ is a placeholder you must fill in.
// ==========================================
export const businessInfo = {
  name: "SMT Automotive Garage",
  fullName: "Saeed Huraz Auto Repairing Garage",
  logo: "/logos/smt-logo.webp", // put your logo file here (falls back to text if missing)

  phone: "+971586223970",
  alternatePhone: "+971525161166",
  whatsapp: "971586223970", // digits only, with country code
  email: "smtautomotivedubai@gmail.com", // read from your signboard — please double-check

  address: "Ras Al Khor Industrial Area 2, Ras Al Khor, Dubai, UAE",
  plusCode: "59M3+HC, Dubai, UAE",
  mapsUrl: "https://maps.app.goo.gl/FwgWXZWLsB3EiYe57", // directions link (your Google Maps share link)
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57769.14438241403!2d55.27724094863281!3d25.183941800000007!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f670346e34daf%3A0x4a0383d4af1c68d8!2sSMT%20Automotive%20Garage!5e0!3m2!1sen!2sae!4v1790849525543!5m2!1sen!2sae", // map shown on the page (Google Maps "Embed a map" link)
  googleProfileUrl: "", // EDIT: your Google Business Profile link (shows a "Read all reviews" button)

  // [days, hours] — edit freely
  hours: [["Daily", "Open until 8 PM (EDIT days / opening time)"]],

  // Leave "" to hide an icon
  social: { facebook: "", instagram: "", tiktok: "", youtube: "" },
  websiteUrl: "https://www.example.com", // EDIT: your real domain (used for the canonical link on every page)

  rating: 4.8,
  reviewCount: 41,

  // Site colours — change here and the WHOLE site updates (buttons, banner, accents).
  colors: { primary: "#111111", secondary: "#1F1F23", accent: "#B10809", accentLight: "#FF5A5F", /* accentLight = red used for small text on dark backgrounds */ light: "#F3F4F6" },
};

const b = businessInfo;
// Builds a WhatsApp link with an optional pre-filled message
export const waLink = (text = "") =>
  `https://wa.me/${b.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
export const telLink = (n = b.phone) => `tel:${n}`;
export const showPhone = (n) => n.replace(/^\+971(\d{2})(\d{3})(\d{4})$/, "+971 $1 $2 $3");
export const hasEmail = () => !b.email.startsWith("EDIT_");

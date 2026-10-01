// Colours are read from src/data/businessInfo.js — edit them there, not here.
import { businessInfo } from "./src/data/businessInfo.js";
const c = businessInfo.colors;
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {
    colors: { charcoal: c.primary, navy: c.secondary, brand: c.accent, brandlight: c.accentLight, light: c.light },
    fontFamily: { display: ["Oswald", "Impact", "sans-serif"], body: ["Inter", "system-ui", "sans-serif"] },
  } },
  plugins: [],
};

// HOME HERO with effects: spinning gears (from your logo), red spotlight that follows the mouse,
// speed lines, headline words that rise in, and a shine on the main button.
// Text comes from src/data/content.js. Effects are plain CSS at the end of src/styles/global.css.
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { waLink, telLink } from "../data/businessInfo";
import { content as c } from "../data/content";

// Draws the outline of a gear with the given number of teeth
function gearPath(teeth, outer, inner) {
  const step = (Math.PI * 2) / teeth, pts = [];
  for (let i = 0; i < teeth; i++)
    [[inner, 0], [outer, 0.18], [outer, 0.42], [inner, 0.6]].forEach(([r, f]) => {
      const a = (i + f) * step; pts.push(`${(Math.cos(a) * r).toFixed(1)} ${(Math.sin(a) * r).toFixed(1)}`);
    });
  return `M${pts.join("L")}Z`;
}
function Gear({ teeth, className }) {
  return (
    <svg viewBox="-100 -100 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d={gearPath(teeth, 96, 84)} /><circle r="58" /><circle r="20" />
      {[0, 1, 2, 3, 4, 5].map((i) => <line key={i} y1="-20" y2="-58" transform={`rotate(${i * 60})`} />)}
    </svg>
  );
}

export default function Hero() {
  const ref = useRef(null);
  // Moves the red spotlight to the mouse position (desktop only; on touch screens it stays put)
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <section ref={ref} onMouseMove={onMove} className="relative bg-gradient-to-br from-charcoal via-navy to-charcoal text-white overflow-hidden">
      <div className="hero-spot absolute inset-0" aria-hidden="true" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[30rem] lg:w-[44rem] opacity-[.14] text-brandlight" aria-hidden="true"><Gear teeth={16} className="gear-spin w-full" /></div>
      <div className="absolute right-56 lg:right-[34rem] -bottom-12 w-44 lg:w-72 opacity-[.14] text-brandlight" aria-hidden="true"><Gear teeth={10} className="gear-spin-rev w-full" /></div>
      {[["18%", "5s", "0s"], ["42%", "7s", "2s"], ["66%", "6s", "1s"], ["84%", "8s", "3.5s"]].map(([top, dur, delay]) => (
        <span key={top} className="speed-line" style={{ top, animationDuration: dur, animationDelay: delay }} aria-hidden="true" />
      ))}
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-28">
        <p className="fade-up text-brandlight font-semibold tracking-widest mb-3">{c.hero.eyebrow}</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-3xl leading-tight">
          {c.hero.title.split(" ").map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom"><span className="word" style={{ animationDelay: `${0.15 + i * 0.09}s` }}>{w}</span>{"\u00A0"}</span>
          ))}
        </h1>
        <p className="fade-up mt-5 max-w-2xl text-gray-300 text-base sm:text-lg" style={{ animationDelay: "0.9s" }}>{c.hero.text}</p>
        <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "1.1s" }}>
          <Link to="/contact" className="btn btn-brand btn-shine">Book Your Service</Link>
          <a href={waLink(c.whatsappMessage)} target="_blank" rel="noreferrer" className="btn btn-wa"><MessageCircle size={20} />WhatsApp Us</a>
          <a href={telLink()} className="btn btn-outline-light"><Phone size={20} />Call Now</a>
        </div>
      </div>
    </section>
  );
}

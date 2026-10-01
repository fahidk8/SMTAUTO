// HOME PAGE. Wording lives in src/data/content.js; this file only lays it out.
// Sections in order: hero (components/Hero.jsx) · trust strip · services · why us · brands · about · reviews · call to action · map
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Star, ShieldCheck } from "lucide-react";
import useSeo from "../useSeo";
import { businessInfo as b, waLink, telLink } from "../data/businessInfo";
import { content as c } from "../data/content";
import { services } from "../data/services";
import { brands } from "../data/brands";
import { reviews } from "../data/reviews";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import BrandLogo from "../components/BrandLogo";

export default function Home() {
  useSeo("Auto Repair Garage in Ras Al Khor, Dubai | SMT Automotive Garage", "Multi-brand car repair in Ras Al Khor, Dubai: mechanical, electrical, AC, diagnostics, denting and painting. WhatsApp or call for a quote.");
  return (
    <>
      <Hero />

      {/* TRUST STRIP */}
      <section className="bg-light"><div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
        {c.trust.map(({ icon: Icon, value, label }) => (
          <div key={label} className="last:col-span-2 sm:last:col-span-1"><Icon className="mx-auto text-brand" /><div className="font-display text-2xl mt-1">{value}</div><div className="text-sm text-gray-600">{label}</div></div>
        ))}
      </div></section>

      {/* SERVICES */}
      <section className="section">
        <h2 className="text-3xl sm:text-4xl text-center mb-10">{c.servicesTitle}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{services.map((s) => <ServiceCard key={s.id} service={s} />)}</div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-light"><div className="section">
        <h2 className="text-3xl sm:text-4xl text-center mb-10">{c.whyTitle} <span className="text-brand">{c.whyHighlight}</span></h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{c.why.map((w) => <li key={w} className="rounded-xl bg-white border border-brand/30 p-4 flex gap-3"><ShieldCheck className="text-brand shrink-0" />{w}</li>)}</ul>
      </div></section>

      {/* BRANDS */}
      <section className="section text-center">
        <h2 className="text-3xl sm:text-4xl">{c.brands.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">{c.brands.text}</p>
        <ul className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">{brands.map((x) => <li key={x.name} className="card !p-4 h-28 flex flex-col items-center justify-center gap-2 text-charcoal"><BrandLogo name={x.name} /><span className="text-xs text-gray-600">{x.name}</span></li>)}</ul>
        <p className="text-xs text-gray-500 mt-4">{c.brands.disclaimer}</p>
        <Link to="/brands" className="btn btn-brand mt-6">Browse All Brands</Link>
      </section>

      {/* ABOUT */}
      <section className="bg-light"><div className="section">
        <div className="max-w-3xl"><h2 className="text-3xl sm:text-4xl">{c.about.title}</h2><p className="mt-4 text-gray-700">{c.about.text}</p></div>
        <figure className="mt-8">
          <img src={c.about.image} alt={c.about.imageAlt} width="1600" height="430" loading="lazy" decoding="async" className="w-full h-auto rounded-2xl shadow-xl" />
          <figcaption className="text-sm text-gray-500 mt-2">{c.about.caption}</figcaption>
        </figure>
      </div></section>

      {/* REVIEWS — swipeable on phones */}
      <section className="section">
        <h2 className="text-3xl sm:text-4xl text-center mb-10">{c.reviewsTitle}</h2>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4" tabIndex={0} aria-label="Customer reviews">
          {reviews.map((r) => <blockquote key={r.name} className="card snap-center shrink-0 w-[85%] sm:w-[45%] lg:w-[32%]">
            <div className="flex text-brand mb-2" aria-label="5 stars">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div>
            <p className="text-gray-700">“{r.text}”</p><footer className="mt-3 font-semibold">{r.name}</footer></blockquote>)}
        </div>
        {b.googleProfileUrl && <p className="text-center mt-4"><a className="btn btn-brand" href={b.googleProfileUrl} target="_blank" rel="noreferrer">Read all Google reviews</a></p>}
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-charcoal text-white text-center"><div className="section">
        <h2 className="text-3xl sm:text-4xl">{c.cta.title}</h2>
        <p className="mt-3 text-gray-300">{c.cta.text}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={telLink()} className="btn btn-outline-light"><Phone size={20} />Call Now</a>
          <a href={waLink(c.whatsappMessage)} target="_blank" rel="noreferrer" className="btn btn-wa"><MessageCircle size={20} />WhatsApp Us</a>
          <Link to="/contact" className="btn btn-brand">Get a Quote</Link>
        </div>
      </div></section>

      {/* MAP */}
      <section className="section">
        <h2 className="text-3xl mb-2">Find Us</h2>
        <p className="mb-4">{b.name}<br />{b.address}<br />{b.plusCode}</p>
        <iframe title="SMT Automotive Garage location" src={b.mapsEmbedUrl} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" className="w-full h-72 sm:h-96 rounded-2xl border-0" />
        <a href={b.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-brand mt-4">Get Directions</a>
      </section>
    </>
  );
}

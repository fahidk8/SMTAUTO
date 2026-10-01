// Site footer. Everything comes from the data files — nothing to edit here.
import { Link } from "react-router-dom";
import { businessInfo as b, telLink, waLink, showPhone, hasEmail } from "../data/businessInfo";
import { services } from "../data/services";
import Logo from "./Logo";
export default function Footer() {
  const social = Object.entries(b.social).filter(([, u]) => u);
  return (
    <footer className="bg-charcoal text-gray-300 mt-0">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div><div className="bg-white rounded-xl p-2 inline-block mb-3"><Logo className="h-16" /></div><p className="text-sm">{b.fullName}. Multi-brand car repair and maintenance in Dubai.</p>
          {social.length > 0 && <p className="mt-3 flex gap-3 text-brand capitalize">{social.map(([n, u]) => <a key={n} href={u} target="_blank" rel="noreferrer">{n}</a>)}</p>}</div>
        <div><h3 className="text-brand mb-3">Quick Links</h3><ul className="space-y-2 text-sm">
          {[["/", "Home"], ["/services", "Services"], ["/brands", "Car Brands"], ["/contact", "Contact Us"]].map(([t, l]) => <li key={t}><Link to={t} className="hover:text-brand">{l}</Link></li>)}</ul></div>
        <div><h3 className="text-brand mb-3">Services</h3><ul className="space-y-2 text-sm">
          {services.map((s) => <li key={s.id}><Link to={`/services#${s.id}`} className="hover:text-brand">{s.title}</Link></li>)}</ul></div>
        <div className="text-sm space-y-2"><h3 className="text-brand mb-3">Visit Us</h3>
          <p>{b.address}<br />{b.plusCode}</p>
          <p><a href={telLink()}>{showPhone(b.phone)}</a><br /><a href={telLink(b.alternatePhone)}>{showPhone(b.alternatePhone)}</a></p>
          <p><a href={waLink()} target="_blank" rel="noreferrer" className="text-brand">WhatsApp</a>{hasEmail() && <> · <a href={`mailto:${b.email}`} className="break-all">{b.email}</a></>}</p>
          {b.hours.map(([d, h]) => <p key={d}>{d}: {h}</p>)}
          <a href={b.mapsUrl} target="_blank" rel="noreferrer" className="text-brand underline">Get directions</a></div>
      </div>
      <p className="border-t border-white/10 text-center text-xs py-4">© {new Date().getFullYear()} {b.name}. All rights reserved. Not affiliated with any vehicle manufacturer.</p>
    </footer>
  );
}

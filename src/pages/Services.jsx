// SERVICES PAGE: detailed list with search filter. Home cards link here via #id.
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle, Check } from "lucide-react";
import useSeo from "../useSeo";
import { services } from "../data/services";
import { waLink } from "../data/businessInfo";
export default function Services() {
  useSeo("Car Repair Services in Dubai | SMT Automotive Garage", "Car mechanical, electrical, AC, diagnostics, radiator, denting and painting, oil change and accessories fitting in Ras Al Khor, Dubai.");
  const [q, setQ] = useState("");
  const { hash } = useLocation();
  useEffect(() => { if (hash) setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }), 50); }, [hash]);
  const list = services.filter((s) => (s.title + s.items.join(" ")).toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="section">
      <h1 className="text-4xl sm:text-5xl">Our Automotive Services</h1>
      <label htmlFor="sq" className="sr-only">Search services</label>
      <input id="sq" className="input mt-6 max-w-md" placeholder="Search services (e.g. brake, AC, paint)" value={q} onChange={(e) => setQ(e.target.value)} />
      <div className="mt-8 space-y-6">
        {list.length === 0 && <p>No matching service. <a className="underline" href={waLink("Hello, I have an enquiry.")}>Ask us on WhatsApp</a>.</p>}
        {list.map((s) => { const Icon = s.icon; return (
          <section key={s.id} id={s.id} className="card scroll-mt-32">
            <h2 className="text-2xl flex items-center gap-3"><Icon className="text-brand" />{s.title}</h2>
            <ul className="grid sm:grid-cols-2 gap-2 mt-4">{s.items.map((i) => <li key={i} className="flex gap-2 text-gray-700"><Check size={18} className="text-brand shrink-0 mt-1" />{i}</li>)}</ul>
            {s.note && <p className="mt-4 text-sm bg-light rounded-lg p-3">{s.note}</p>}
            <a href={waLink(`Hello, I would like to enquire about: ${s.title}`)} target="_blank" rel="noreferrer" className="btn btn-wa mt-4"><MessageCircle size={20} />Enquire on WhatsApp</a>
          </section>); })}
      </div>
    </div>
  );
}

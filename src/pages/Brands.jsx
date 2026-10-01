// BRANDS PAGE: searchable brand list. Edit brands in src/data/brands.js.
import { useState } from "react";
import { Link } from "react-router-dom";
import useSeo from "../useSeo";
import BrandLogo from "../components/BrandLogo";
import { brands } from "../data/brands";
export default function Brands() {
  useSeo("Multi-Brand Car Garage in Dubai | SMT Automotive Garage", "We repair and maintain Toyota, Nissan, Honda, BMW, Mercedes-Benz and many more makes in Ras Al Khor, Dubai.");
  const [q, setQ] = useState("");
  const list = brands.filter((b) => b.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="section">
      <h1 className="text-4xl sm:text-5xl">We Service Multiple Car Brands</h1>
      <p className="mt-3 text-gray-600 max-w-2xl">We are an independent multi-brand garage. We are not an authorised dealer or partner of any manufacturer.</p>
      <label htmlFor="bq" className="sr-only">Search brands</label>
      <input id="bq" className="input mt-6 max-w-md" placeholder="Search your car brand" value={q} onChange={(e) => setQ(e.target.value)} />
      <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((b) => <div key={b.name} className="card text-center"><div className="h-14 flex items-center justify-center text-charcoal"><BrandLogo name={b.name} size="h-12" /></div><h2 className="text-xl text-navy mt-2">{b.name}</h2><p className="text-sm text-gray-600 my-2">{b.description}</p><Link className="btn btn-brand !py-2 text-sm" to={`/contact?brand=${encodeURIComponent(b.name)}`}>Service Enquiry</Link></div>)}
        {list.length === 0 && <p>No match — we may still be able to help. <Link className="underline" to="/contact">Contact us</Link>.</p>}
      </div>
    </div>
  );
}

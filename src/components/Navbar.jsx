// Announcement bar + sticky white navigation with mobile hamburger menu.
// Edit menu items in the `links` array below.
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { businessInfo as b, waLink, telLink, showPhone } from "../data/businessInfo";
import Logo from "./Logo";
const links = [["/", "Home"], ["/services", "Services"], ["/brands", "Car Brands"], ["/contact", "Contact Us"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 shadow-sm">
      <div className="bg-charcoal text-white text-xs sm:text-sm px-4 py-2 flex flex-wrap justify-center gap-x-4 gap-y-1">
        <span>{b.name} — Ras Al Khor, Dubai</span>
        <a href={telLink()} className="font-semibold underline decoration-brand">{showPhone(b.phone)}</a>
        <a href={waLink()} target="_blank" rel="noreferrer" className="underline">WhatsApp</a>
      </div>
      <nav className="bg-white text-charcoal border-b border-gray-200" aria-label="Main">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" aria-label="Home"><Logo className="h-16" /></Link>
          <ul className="hidden md:flex items-center gap-6 font-semibold">
            {links.map(([to, label]) => (
              <li key={to}><NavLink to={to} end className={({ isActive }) => `hover:text-brand ${isActive ? "text-brand" : ""}`}>{label}</NavLink></li>
            ))}
            <li><Link to="/contact" className="btn btn-brand !py-2">Get a Quote</Link></li>
          </ul>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <ul className="md:hidden bg-white px-4 pb-4 space-y-1 border-t">
            {links.map(([to, label]) => (
              <li key={to}><NavLink to={to} end onClick={() => setOpen(false)} className="block py-3 border-b border-gray-100">{label}</NavLink></li>
            ))}
            <li><Link to="/contact" onClick={() => setOpen(false)} className="btn btn-brand w-full mt-2">Get a Quote</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
}

// Service overview card (Home). "Learn More" opens WhatsApp with the service pre-filled; "Details" opens the Services page.
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { waLink } from "../data/businessInfo";
export default function ServiceCard({ service: s }) {
  const Icon = s.icon;
  return (
    <article className="card flex flex-col">
      <div className="w-12 h-12 rounded-xl bg-charcoal text-brand flex items-center justify-center mb-4"><Icon /></div>
      <h3 className="text-xl mb-2">{s.title}</h3>
      <p className="text-gray-600 text-sm flex-1">{s.short}</p>
      <div className="flex gap-2 mt-4 flex-wrap">
        <a href={waLink(`Hello SMT Automotive Garage, I would like to know more about: ${s.title}`)} target="_blank" rel="noreferrer" className="btn btn-brand !py-2 text-sm"><MessageCircle size={18} />Learn More</a>
        <Link to={`/services#${s.id}`} className="btn border border-gray-300 hover:border-brand !py-2 text-sm">Details</Link>
      </div>
    </article>
  );
}

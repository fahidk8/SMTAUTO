// CONTACT PAGE: details, hours, map and enquiry form.
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import useSeo from "../useSeo";
import { businessInfo as b, waLink, telLink, showPhone, hasEmail } from "../data/businessInfo";
import ContactForm from "../components/ContactForm";
export default function Contact() {
  useSeo("Contact SMT Automotive Garage | Car Repair Ras Al Khor, Dubai", "Call, WhatsApp or send an enquiry to SMT Automotive Garage, Ras Al Khor Industrial Area 2, Dubai.");
  return (
    <div className="section">
      <h1 className="text-4xl sm:text-5xl">Contact Us</h1>
      <div className="mt-8 grid lg:grid-cols-3 gap-8">
        <div className="space-y-3">
          <a className="btn btn-brand w-full" href={telLink()}><Phone size={20} />{showPhone(b.phone)}</a>
          <a className="btn btn-outline !text-charcoal hover:!text-white w-full" href={telLink(b.alternatePhone)}><Phone size={20} />{showPhone(b.alternatePhone)}</a>
          <a className="btn btn-wa w-full" href={waLink()} target="_blank" rel="noreferrer"><MessageCircle size={20} />WhatsApp</a>
          {hasEmail() && <a className="flex gap-2" href={`mailto:${b.email}`}><Mail />{b.email}</a>}
          <p className="flex gap-2"><MapPin className="shrink-0" />{b.address} ({b.plusCode})</p>
          <div className="flex gap-2"><Clock className="shrink-0" /><div>{b.hours.map(([d, h]) => <p key={d}>{d}: {h}</p>)}</div></div>
          <a href={b.mapsUrl} target="_blank" rel="noreferrer" className="underline">Get directions on Google Maps</a>
        </div>
        <div className="lg:col-span-2"><ContactForm /></div>
      </div>
      <iframe title="Garage location" src={b.mapsEmbedUrl} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" className="w-full h-80 rounded-2xl mt-10 border-0" />
    </div>
  );
}

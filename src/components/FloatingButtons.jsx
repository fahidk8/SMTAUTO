// Floating WhatsApp + Call buttons (all screens) and scroll-to-top button.
import { useEffect, useState } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { waLink, telLink } from "../data/businessInfo";
import { content } from "../data/content";
export default function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const base = "w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-white";
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      {show && <button aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`${base} bg-navy`}><ArrowUp /></button>}
      <a href={telLink()} aria-label="Call us" className={`${base} bg-brand !text-charcoal`}><Phone /></a>
      <a href={waLink(content.whatsappMessage)} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className={`${base} bg-green-600`}><MessageCircle /></a>
    </div>
  );
}

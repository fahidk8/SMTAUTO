// Scroll effects: red progress line at the top + elements fade/slide in as you scroll.
// To change what animates, edit the selector in `querySelectorAll`. Styles are at the end of global.css.
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export default function ScrollEffects() {
  const { pathname } = useLocation();
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => { const h = document.documentElement; setP(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)); };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in"); io.unobserve(e.target);
      setTimeout(() => { e.target.style.transitionDelay = ""; }, 1000);
    }), { threshold: 0.12 });
    const t = setTimeout(() => document.querySelectorAll("main h1, main h2, main .card, main blockquote").forEach((el, i) => {
      el.classList.add("reveal"); el.style.transitionDelay = `${(i % 3) * 90}ms`; io.observe(el);
    }), 0);
    return () => { clearTimeout(t); io.disconnect(); };
  }, [pathname]);
  return <div aria-hidden="true" className="fixed top-0 left-0 h-1 bg-brand z-[60]" style={{ width: `${p * 100}%` }} />;
}

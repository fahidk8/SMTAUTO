// Shows your logo image; falls back to a text wordmark if the file is missing.
import { useState } from "react";
import { businessInfo as b } from "../data/businessInfo";
export default function Logo({ className = "h-10" }) {
  const [failed, setFailed] = useState(false);
  return failed
    ? <span className="font-display text-xl text-brand tracking-widest">SMT <span className="text-white">AUTOMOTIVE</span></span>
    : <img src={b.logo} alt={`${b.name} logo`} className={`${className} w-auto`} width="360" height="360" decoding="async" style={{ mixBlendMode: "multiply" }} onError={() => setFailed(true)} />;
}

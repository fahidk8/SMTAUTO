// Shows a brand's logo (from src/data/brandLogos.js) or, if none exists, its name as text.
import { brandLogos } from "../data/brandLogos";
export default function BrandLogo({ name, size = "h-10" }) {
  const p = brandLogos[name];
  return p
    ? <svg viewBox="0 0 24 24" role="img" aria-label={`${name} logo`} className={`${size} w-auto fill-current`}><path d={p} /></svg>
    : <span className="font-display tracking-wide text-lg">{name}</span>;
}

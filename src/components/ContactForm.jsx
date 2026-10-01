// Contact form with validation. With no backend, it opens WhatsApp with a pre-filled message.
// To also send email/database later, add a fetch() call in `submit` (see README).
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { services } from "../data/services";
import { brands } from "../data/brands";
import { waLink } from "../data/businessInfo";

export default function ContactForm() {
  const [params] = useSearchParams();
  const [f, setF] = useState({ name: "", phone: "", email: "", brand: params.get("brand") || "", model: "", year: "", service: params.get("service") || "", date: "", problem: "" });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const validate = () => {
    const e = {};
    if (f.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^\+?[\d\s-]{8,15}$/.test(f.phone.trim())) e.phone = "Enter a valid phone number.";
    if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Enter a valid email or leave blank.";
    if (!f.service) e.service = "Please choose a service.";
    if (f.problem.trim().length < 5) e.problem = "Please describe the problem briefly.";
    return e;
  };
  const submit = (ev) => {
    ev.preventDefault();
    const e = validate(); setErrors(e); setDone(false);
    if (Object.keys(e).length) return;
    const svc = services.find((s) => s.id === f.service)?.title;
    const msg = `Hello SMT Automotive Garage,\nName: ${f.name}\nPhone: ${f.phone}${f.email ? `\nEmail: ${f.email}` : ""}\nVehicle: ${[f.brand, f.model, f.year].filter(Boolean).join(" ") || "Not specified"}\nService: ${svc}${f.date ? `\nPreferred date: ${f.date}` : ""}\nProblem: ${f.problem}`;
    window.open(waLink(msg), "_blank", "noopener");
    setDone(true);
  };
  const Field = ({ id, label, error, children }) => (
    <div><label htmlFor={id} className="block text-sm font-semibold mb-1">{label}</label>{children}
      {error && <p role="alert" className="text-red-600 text-sm mt-1">{error}</p>}</div>
  );
  return (
    <form onSubmit={submit} noValidate className="grid gap-4 sm:grid-cols-2">
      <Field id="name" label="Your name *" error={errors.name}><input id="name" className="input" value={f.name} onChange={set("name")} autoComplete="name" /></Field>
      <Field id="phone" label="Phone number *" error={errors.phone}><input id="phone" type="tel" className="input" value={f.phone} onChange={set("phone")} autoComplete="tel" /></Field>
      <Field id="email" label="Email (optional)" error={errors.email}><input id="email" type="email" className="input" value={f.email} onChange={set("email")} /></Field>
      <Field id="brand" label="Vehicle brand"><select id="brand" className="input" value={f.brand} onChange={set("brand")}><option value="">Select brand</option>{brands.map((b) => <option key={b.name}>{b.name}</option>)}</select></Field>
      <Field id="model" label="Vehicle model"><input id="model" className="input" value={f.model} onChange={set("model")} /></Field>
      <Field id="year" label="Model year (optional)"><input id="year" inputMode="numeric" maxLength={4} className="input" value={f.year} onChange={set("year")} /></Field>
      <Field id="service" label="Required service *" error={errors.service}><select id="service" className="input" value={f.service} onChange={set("service")}><option value="">Select service</option>{services.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}</select></Field>
      <Field id="date" label="Preferred date (optional)"><input id="date" type="date" className="input" value={f.date} onChange={set("date")} /></Field>
      <div className="sm:col-span-2"><Field id="problem" label="Describe the problem *" error={errors.problem}><textarea id="problem" rows={4} className="input" value={f.problem} onChange={set("problem")} /></Field></div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-wa w-full sm:w-auto">Send Enquiry via WhatsApp</button>
        {done && <p role="status" className="text-green-700 mt-3">WhatsApp has been opened with your enquiry — please press Send there to deliver it.</p>}
        {Object.keys(errors).length > 0 && <p role="alert" className="text-red-600 mt-3">Please fix the highlighted fields.</p>}
      </div>
    </form>
  );
}

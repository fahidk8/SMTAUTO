// ==========================================
// SERVICES — add, remove or edit entries.
// id = link anchor, icon = any icon name from lucide.dev
// ==========================================
import { Wrench, Zap, Settings, PaintBucket, Droplets, Snowflake, ScanLine, Thermometer, Plug, Truck } from "lucide-react";

export const services = [
  { id: "mechanical-repair", title: "Car Mechanical Repair", icon: Wrench,
    short: "Engine, transmission, suspension, steering and brake work.",
    items: ["Engine inspection and repair", "Engine troubleshooting", "Transmission-related inspection and repair", "Suspension and steering repairs", "Brake system inspection and repair", "Cooling system inspection", "Mechanical component replacement", "General mechanical troubleshooting"],
    note: "Exact repair scope depends on vehicle inspection and parts availability." },
  { id: "electrical-repair", title: "Car Electrical Repair", icon: Zap,
    short: "Battery, starter, alternator, wiring and lighting faults.",
    items: ["Electrical system diagnostics", "Battery testing and replacement", "Starter motor inspection", "Alternator inspection", "Wiring fault diagnosis", "Lighting system repair", "Fuse and relay inspection", "Electrical component troubleshooting", "Electric vehicle electrical diagnostics (where supported by equipment and technician capability)"] },
  { id: "general-repair", title: "Car General Repair", icon: Settings,
    short: "Inspections, preventive maintenance and routine repairs.",
    items: ["General vehicle inspection", "Preventive maintenance", "Component replacement", "Fault identification", "Vehicle performance checks", "Routine repair work", "Multi-brand servicing"] },
  { id: "denting-painting", title: "Car Denting and Painting", icon: PaintBucket,
    short: "Dent repair, panel work, paint matching and full respray.",
    items: ["Minor and major dent repair", "Body panel repair", "Scratch removal", "Surface preparation", "Full body painting", "Partial panel painting", "Bumper repair", "Paint matching", "Exterior restoration", "Finishing and polishing"] },
  { id: "oil-change", title: "Auto Oil Change", icon: Droplets,
    short: "Oil and filter replacement with fluid checks.",
    items: ["Engine oil replacement", "Oil filter replacement", "Oil level inspection", "Fluid checks", "Scheduled oil maintenance", "Vehicle-specific oil recommendations"] },
  { id: "ac-service", title: "Car AC Service", icon: Snowflake,
    short: "AC inspection, leak checks, compressor and filter service.",
    items: ["Air conditioning inspection", "AC performance checks", "Cooling system diagnosis", "Refrigerant checks", "AC leak inspection", "AC component diagnostics", "Compressor inspection", "Cabin air filter inspection and replacement"] },
  { id: "diagnostics", title: "Vehicle Diagnostics", icon: ScanLine,
    short: "Computerised scanning and warning-light diagnosis.",
    items: ["Computerised vehicle scanning", "Diagnostic trouble code reading", "Engine warning light diagnosis", "Electrical fault diagnostics", "Sensor troubleshooting", "Performance-related diagnostics", "Post-repair verification where applicable"] },
  { id: "radiator", title: "Radiator Repair and Maintenance", icon: Thermometer,
    short: "Overheating, coolant leaks, radiator and fan checks.",
    items: ["Radiator inspection", "Cooling system diagnostics", "Coolant leak detection", "Radiator replacement where required", "Cooling fan inspection", "Hose and connection inspection", "Coolant condition checks", "Overheating troubleshooting"] },
  { id: "accessories", title: "Auto Accessories Fitting", icon: Plug,
    short: "Interior, exterior, lighting and electronic accessories.",
    items: ["Vehicle accessories installation", "Interior accessories", "Exterior accessories", "Automotive lighting accessories", "Selected electronic accessories", "Compatible aftermarket accessory fitting"] },
  { id: "mobile-repair", title: "Mobile Auto Repair Service", icon: Truck,
    short: "Enquire about on-site inspection and breakdown help.",
    items: ["Mobile repair enquiry", "Vehicle breakdown assistance enquiry", "On-site inspection requests", "Minor repair assistance requests", "Battery-related assistance requests, subject to availability"],
    note: "Mobile services depend on location, repair requirements, staff availability and confirmation by the garage." },
];

// ==========================================
// CAR BRANDS — add/remove names here.
// Logos come from src/data/brandLogos.js (matched by exact name); a brand with no logo shows its name as text.
// ==========================================
export const brands = [
  "Toyota","Nissan","Mitsubishi","Mazda","Suzuki","Honda","Hyundai","Kia","Ford","Chevrolet",
  "Mercedes-Benz","BMW","Audi","Volkswagen","Lexus","Infiniti","Jeep","Land Rover","Renault",
].map((name) => ({ name, description: `Repair and maintenance for ${name} vehicles.` }))
 .concat([{ name: "Other makes", description: "Ask us about other compatible vehicle makes." }]);

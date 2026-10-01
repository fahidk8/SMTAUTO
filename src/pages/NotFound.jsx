// Custom 404 page.
import { Link } from "react-router-dom";
import useSeo from "../useSeo";
export default function NotFound() {
  useSeo("Page not found | SMT Automotive Garage", "The page you are looking for does not exist.");
  return <div className="section text-center"><h1 className="text-6xl text-brand">404</h1><p className="my-4">Sorry, we couldn't find that page.</p><Link to="/" className="btn btn-brand">Back to Home</Link></div>;
}

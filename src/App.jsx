// Page layout + routes. To add a page: create it in src/pages and add a <Route> here.
import { Routes, Route } from "react-router-dom";
import ScrollEffects from "./components/ScrollEffects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
export default function App() {
  return (
    <>
      <ScrollEffects />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

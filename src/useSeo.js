// Sets the page title, description and canonical link for each page. Used at the top of every page.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { businessInfo } from "./data/businessInfo";
export default function useSeo(title, description) {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", businessInfo.websiteUrl.replace(/\/$/, "") + pathname);
    window.scrollTo(0, 0);
  }, [title, description, pathname]);
}

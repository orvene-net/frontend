import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTawkTo } from "./useTawkTo";
import { CookieBanner } from "./CookieBanner";
import { RouteScroll } from "./components/layout/RouteScroll";
import { HomePage } from "./pages/home/HomePage";
import { ProductPage } from "./pages/product/ProductPage";
import { PrivacyPage } from "./pages/privacy/PrivacyPage";
import { TermsPage } from "./pages/terms/TermsPage";

const SITE_URL = "https://orvene.net";

function Canonical() {
  const { pathname } = useLocation();
  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = SITE_URL + (pathname === "/" ? "/" : pathname);
  }, [pathname]);
  return null;
}

function App() { useTawkTo(); return <BrowserRouter><RouteScroll /><Canonical /><Routes><Route path="/product" element={<ProductPage />} /><Route path="/privacy" element={<PrivacyPage />} /><Route path="/terms" element={<TermsPage />} /><Route path="*" element={<HomePage />} /></Routes><CookieBanner /></BrowserRouter>; }
export default App;


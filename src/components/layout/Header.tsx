import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navItems = [
  { label: "Home", href: "#home" }, { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" }, { label: "About", href: "#about" }, { label: "Contact", href: "#contact" },
];

const sectionIds = navItems.map((item) => item.href.slice(1));
const HEADER_OFFSET = 140;

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState("");
  useEffect(() => {
    if (!enabled) { setActive(""); return; }
    let frame = 0;
    const update = () => {
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= HEADER_OFFSET) current = id;
      }
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 4) current = sectionIds[sectionIds.length - 1];
      setActive(current);
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [enabled]);
  return active;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const home = location.pathname === "/";
  const onProduct = location.pathname === "/product";
  const active = useActiveSection(home);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { setOpen(false); }, [location.pathname, location.hash]);
  const target = (hash: string) => ({ pathname: "/", hash });
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}><div className="container nav-wrap"><Logo /><nav className="desktop-nav" aria-label="Main navigation">
    {navItems.map((item) => <Link key={item.label} to={target(item.href)} className={home && active === item.href.slice(1) ? "active" : ""}>{item.label}</Link>)}
    <Link className={`nav-product ${onProduct ? "active" : ""}`} to="/product">Axiom V2.0</Link>
  </nav><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button></div>
    {open && <nav className="mobile-nav">{navItems.map((item) => <Link key={item.label} to={target(item.href)} className={home && active === item.href.slice(1) ? "active" : ""} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link to="/product" className={onProduct ? "active" : ""} onClick={() => setOpen(false)}>Axiom V2.0</Link></nav>}
  </header>;
}


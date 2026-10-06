import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Button({ children, to, href, light = false, target }: { children: React.ReactNode; to?: string; href?: string; light?: boolean; target?: string }) { const content = <>{children}<ArrowRight size={16} /></>; return to ? <Link className={`button ${light ? "button-light" : ""}`} to={to}>{content}</Link> : <a className={`button ${light ? "button-light" : ""}`} href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>{content}</a>; }


import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "../shared/Eyebrow";
import workspaceIcon from "../../assets/Research registry.png";
import sourceIcon from "../../assets/Source management.png";
import findingsIcon from "../../assets/Findings & validation.png";
import searchIcon from "../../assets/Discovery workspace.png";
import historyIcon from "../../assets/Preserve the history.png";

const photos = {
  notes: "https://images.pexels.com/photos/8085931/pexels-photo-8085931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
};

const features = [
  { icon: workspaceIcon, no: "01", title: "Research Workspace", text: "Create and manage research projects with clear status tracking and guided topic exploration.", wide: true },
  { icon: sourceIcon, no: "02", title: "Source Repository", text: "Store, categorize and track the history of every document, dataset and reference in one central place." },
  { icon: findingsIcon, no: "03", title: "Evidence & Findings", text: "Link evidence directly to findings so every conclusion can be traced back to its supporting sources." },
  { icon: searchIcon, no: "04", title: "Smart Search & Filtering", text: "Find any project, source or finding in seconds with fast, flexible search and filtering." },
  { icon: historyIcon, no: "05", title: "Research History", text: "Keep a complete activity trail of changes and decisions, so your research trail is always clear and reviewable." },
];
export function Features() { return <section id="features" className="features section-paper"><div className="container"><div className="section-intro"><div><Eyebrow>THE PLATFORM</Eyebrow><h2>Everything your research needs, <em>in one workspace.</em></h2></div><p>Organize topics, sources, evidence and findings with a structured platform built to keep every research step traceable.</p></div><div className="feature-grid">{features.map(({ icon, no, title, text, wide }) => <article className={`feature-card ${wide ? "wide" : ""}`} key={title}><div className="feature-top"><span className="feature-no">{no}</span><img className="feature-icon" src={icon} alt="" /></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="feature-arrow" size={17} /></article>)}<article className="feature-card photo-card"><img src={photos.notes} alt="Research notes and a laptop on a desk" /><div className="photo-overlay"><span>Capture the context</span><ArrowUpRight size={17} /></div></article></div></div></section>; }
import { ArrowUpRight, FolderKanban, Archive, Network, Search, History } from "lucide-react";
import { Eyebrow } from "../shared/Eyebrow";

const photos = {
  notes: "https://images.pexels.com/photos/8085931/pexels-photo-8085931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
};

const features = [
  { icon: FolderKanban, no: "01", title: "Research Workspace", text: "Create and manage research projects with clear status tracking and guided topic exploration.", wide: true },
  { icon: Archive, no: "02", title: "Source Repository", text: "Store, categorize and track the history of every document, dataset and reference in one central place." },
  { icon: Network, no: "03", title: "Evidence & Findings", text: "Link evidence directly to findings so every conclusion can be traced back to its supporting sources." },
  { icon: Search, no: "04", title: "Smart Search & Filtering", text: "Find any project, source or finding in seconds with fast, flexible search and filtering." },
  { icon: History, no: "05", title: "Research History", text: "Keep a complete activity trail of changes and decisions, so your research trail is always clear and reviewable." },
];
export function Features() { return <section id="features" className="features section-paper"><div className="container"><div className="section-intro"><div><Eyebrow>THE PLATFORM</Eyebrow><h2>Everything your research needs, <em>in one workspace.</em></h2></div><p>Organize topics, sources, evidence and findings with a structured platform built to keep every research step traceable.</p></div><div className="feature-grid">{features.map(({ icon: Icon, no, title, text, wide }) => <article className={`feature-card ${wide ? "wide" : ""}`} key={title}><div className="feature-top"><span className="feature-no">{no}</span><Icon size={21} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="feature-arrow" size={17} /></article>)}<article className="feature-card photo-card"><img src={photos.notes} alt="Research notes and a laptop on a desk" /><div className="photo-overlay"><span>Capture the context</span><ArrowUpRight size={17} /></div></article></div></div></section>; }
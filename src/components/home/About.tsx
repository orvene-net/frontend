import { Eyebrow } from "../shared/Eyebrow";

export function About() { return <section id="about" className="about section-sage"><div className="container about-grid"><div className="about-number">O<span>r</span></div><div><Eyebrow>OUR APPROACH</Eyebrow><h2>Making research more organized, transparent, and <em>reusable.</em></h2><p className="large-copy">Orvene exists to help organizations create a structured environment for research, discovery, evidence management, and knowledge continuity.</p><div className="principles">{["Structured research", "Traceable evidence", "Clear ownership", "Reviewable findings", "Preserved history"].map((item, i) => <div key={item}><span>0{i + 1}</span>{item}</div>)}</div></div></div></section>; }


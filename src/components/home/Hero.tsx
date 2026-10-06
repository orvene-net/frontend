import { ArrowDown, ArrowRight } from "lucide-react";
import { Eyebrow } from "../shared/Eyebrow";
import { Button } from "../shared/Button";

export function Hero() { return <section id="home" className="hero section-dark"><div className="container hero-grid"><div className="hero-copy"><Eyebrow light>AI RESEARCH & DISCOVERY PLATFORM</Eyebrow><h1>Turn research<br /><em>into discovery.</em></h1><p>One structured workspace for research projects, trusted sources, evidence, and insights. Bring fragmented information together and make every discovery traceable.</p><div className="hero-actions"><Button to="/product" light>Explore the platform</Button><a href="#about" className="text-link light-text">Discover our approach <ArrowDown /></a></div></div><img src="/hero.png" alt="The Orvene research workspace" className="hero-image" /></div><div className="hero-bottom"><div className="container hero-bottom-inner"><span>For teams who ask better questions</span><div><span>Enterprise R&D</span><span>Technology</span><span>Consulting</span><span>Innovation</span></div></div></div></section>; }


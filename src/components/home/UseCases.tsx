import { Eyebrow } from "../shared/Eyebrow";
import teamImage from "../../assets/Team.png";

export function UseCases() { return <section className="use-cases section-dark"><div className="container"><div className="section-intro dark-intro"><div><Eyebrow light>WHO IT'S FOR</Eyebrow><h2>Designed for teams that<br /><em>discover what's next.</em></h2></div><p>Wherever the question is complex, the trail matters.</p></div><div className="use-case-grid"><div className="use-case-main"><img src={teamImage} alt="Teams collaborating around research in the Orvene workspace" /><div><span>01 / Enterprise R&D</span><strong>Turn long-running investigations into shared organizational memory.</strong></div></div><div className="use-case-list">{["Technology companies", "Business analysts", "Consulting teams", "Innovation groups", "Research engineers"].map((item, i) => <div key={item}><span>0{i + 2}</span><strong>{item}</strong></div>)}</div></div></div></section>; }


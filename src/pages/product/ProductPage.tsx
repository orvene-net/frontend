import { ArrowRight, Check, FileText, Link2, Network, Search, ShieldCheck, Sparkles } from "lucide-react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Eyebrow } from "../../components/shared/Eyebrow";
import { Button } from "../../components/shared/Button";
import "./ProductPage.css";

const productUrl = "https://central.Orvene.net";

const steps = [
  { number: "01", title: "Frame the question", detail: "Give each investigation a purpose, owner, and next step." },
  { number: "02", title: "Gather the evidence", detail: "Bring sources and notes into one organized record." },
  { number: "03", title: "Follow the connections", detail: "See how ideas, projects, and citations relate." },
  { number: "04", title: "Validate the finding", detail: "Review the support behind every conclusion." },
];

const capabilities = [
  { icon: Search, number: "01", title: "Discovery workspace", text: "Search by meaning, explore related work, and keep the path from question to source visible.", detail: "For the moment when you know what you mean, but not which document contains it." },
  { icon: FileText, number: "02", title: "Source management", text: "Collect papers, reports, notes, and references with the context that makes them useful.", detail: "Know what a source says, where it came from, and which findings depend on it." },
  { icon: Network, number: "03", title: "Evidence graph", text: "See the relationships between topics, claims, sources, and research initiatives.", detail: "Find the connections that a folder structure can hide." },
  { icon: ShieldCheck, number: "04", title: "Findings & validation", text: "Turn observations into findings that others can inspect, challenge, and build on.", detail: "Keep the supporting trail attached as the work moves forward." },
];

export function ProductPage() {
  return <>
    <Header />
    <main className="product-page">
      <section className="product-hero section-dark" aria-labelledby="product-title">
        <div className="container product-hero-grid">
          <div className="product-hero-copy">
            <Eyebrow light>INTRODUCING ORVENE AXIOM V2.0</Eyebrow>
            <h1 id="product-title">Make every insight<br /><em>traceable.</em></h1>
            <p>Research moves faster when the question, the evidence, and the people behind a finding stay connected. Axiom gives your team one thoughtful space to discover, evaluate, and move ideas forward.</p>
            <div className="product-hero-actions">
              <Button href={productUrl} light target="_blank">Open Axiom V2.0</Button>
              <a className="text-link light-text" href="#product-workflow">Explore how it works <ArrowRight size={15} /></a>
            </div>
            <div className="product-hero-proof"><span>ONE CONNECTED WORKSPACE</span><span>FROM QUESTION TO FINDING</span></div>
          </div>
          <div className="product-hero-visual" aria-label="Illustration of connected research records">
            <div className="axiom-visual-top"><span><span className="status-dot" /> AXIOM / RESEARCH SPACE</span><span>V2.0</span></div>
            <div className="axiom-visual-question"><small>ACTIVE INVESTIGATION</small><strong>How can new materials<br />reduce embodied carbon?</strong><span>One question. Many lines of evidence.</span></div>
            <div className="axiom-visual-path"><div><FileText size={17} /><span>Source library<small>Context preserved</small></span></div><i /><div><Link2 size={17} /><span>Evidence links<small>Relationships visible</small></span></div><i /><div><Check size={17} /><span>Reviewed finding<small>Ready to share</small></span></div></div>
            <div className="axiom-visual-bottom"><span>Illustrative workspace view</span><span>RESEARCH, CONNECTED</span></div>
          </div>
        </div>
      </section>

      <section id="product-workflow" className="axiom-intro section-paper">
        <div className="container"><div className="axiom-intro-heading"><Eyebrow>THE AXIOM APPROACH</Eyebrow><h2>Keep the thinking<br /><em>with the work.</em></h2><p>Axiom is built around the full research journey, so valuable context does not disappear between a search result and a decision.</p></div><div className="axiom-steps">{steps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.detail}</p></article>)}</div></div>
      </section>

      <section className="axiom-registry section-sage">
        <div className="container axiom-feature-grid"><div className="axiom-feature-copy"><Eyebrow>01 / RESEARCH REGISTRY</Eyebrow><h2>A clear home for<br /><em>every question.</em></h2><p>Start with the purpose of the work. Give each project a defined question, an owner, a priority, and a next step. Your team can see what is active, what needs review, and how separate initiatives fit together.</p><ul><li>Keep briefs, progress, and decisions in one place.</li><li>Pick up a project without rebuilding its history.</li><li>Spot overlapping work before it becomes duplicated effort.</li></ul></div><div className="axiom-registry-panel"><div className="axiom-panel-head"><span>RESEARCH REGISTRY</span><span>PROJECT VIEW</span></div><div className="axiom-registry-title"><small>ACTIVE QUESTION / MATERIALS</small><strong>What would a lower-carbon<br />built environment require?</strong><p>Track the question as it becomes a body of evidence, a set of findings, and a decision your team can explain.</p></div><div className="axiom-registry-rows"><div><span>01</span><strong>Research brief</strong><small>Purpose & scope</small></div><div><span>02</span><strong>Source library</strong><small>References & notes</small></div><div><span>03</span><strong>Review trail</strong><small>Findings & decisions</small></div></div></div></div>
      </section>

      <section className="axiom-capabilities section-paper">
        <div className="container"><div className="section-intro"><div><Eyebrow>02 / CONNECTED CAPABILITIES</Eyebrow><h2>Go deeper without<br /><em>losing the thread.</em></h2></div><p>Each part of Axiom is designed to answer a practical research question: What do we know? Where did it come from? How does it connect? Can we trust it?</p></div><div className="axiom-capability-grid">{capabilities.map(({ icon: Icon, number, title, text, detail }) => <article key={title}><div className="axiom-capability-top"><span>{number}</span><Icon size={23} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><div>{detail}</div></article>)}</div></div>
      </section>

      <section className="axiom-discovery section-dark">
        <div className="container axiom-feature-grid"><div className="axiom-feature-copy"><Eyebrow light>03 / DISCOVERY IN CONTEXT</Eyebrow><h2>Find the passage.<br /><em>Follow the proof.</em></h2><p>Ask a better question than a keyword search allows. Explore relevant passages alongside their source records, then move from an interesting answer back to the material that supports it.</p><p>Researchers can compare perspectives, capture what matters, and keep citations close to the claim.</p><a href="#product-evidence" className="text-link light-text">See the evidence trail <ArrowRight size={15} /></a></div><div className="axiom-search-panel"><div className="axiom-search-input"><Search size={17} /><span>How are mineralization methods being validated?</span></div><div className="axiom-search-label">RELATED EVIDENCE</div><div className="axiom-search-result"><span>01 / RESEARCH SOURCE</span><strong>Performance evidence from field trials</strong><p>Compare reported outcomes, conditions, and limitations before drawing a conclusion.</p><small><Link2 size={12} /> View source & citation</small></div><div className="axiom-search-result"><span>02 / CONNECTED NOTE</span><strong>A question for the next review</strong><p>Which findings hold across different material systems and deployment settings?</p><small><Link2 size={12} /> Follow related evidence</small></div><div className="axiom-panel-caption">Illustrative discovery flow</div></div></div>
      </section>

      <section id="product-evidence" className="axiom-evidence section-paper">
        <div className="container axiom-feature-grid">
          <div className="axiom-evidence-visual">
            <div className="axiom-panel-head"><span>EVIDENCE GRAPH</span><span>ILLUSTRATIVE VIEW</span></div>
            <div className="axiom-graph" role="img" aria-label="A published study, a research note, and a project connect to a finding under review">
              <svg viewBox="0 0 500 340" aria-hidden="true" preserveAspectRatio="none">
                <path d="M220 62 C246 62 239 170 263 170 M220 170 H263 M220 278 C246 278 239 170 263 170 M263 170 H278" />
                <circle cx="263" cy="170" r="4" />
              </svg>
              <div className="axiom-graph-node node-source"><span>SOURCE</span><strong>Field trial results</strong><small>Published study</small></div>
              <div className="axiom-graph-node node-note"><span>RESEARCH NOTE</span><strong>Deployment conditions</strong><small>Team observation</small></div>
              <div className="axiom-graph-node node-project"><span>PROJECT</span><strong>Low-carbon materials</strong><small>Research initiative</small></div>
              <div className="axiom-graph-node node-finding"><span>FINDING</span><strong>Mineralization shows promise</strong><small>In review</small></div>
            </div>
            <div className="axiom-graph-foot">The source, note, and project context stay attached to the finding.</div>
          </div>
          <div className="axiom-feature-copy"><Eyebrow>04 / EVIDENCE & VALIDATION</Eyebrow><h2>See why a finding<br /><em>holds up.</em></h2><p>A promising idea becomes useful when people can inspect the reasoning behind it. Axiom connects findings to notes, sources, and the projects that produced them, giving reviewers a clear path back to the original context.</p><ul><li>Trace a conclusion to its supporting material.</li><li>Surface related work across separate initiatives.</li><li>Keep review comments and decisions close to the finding.</li></ul></div>
        </div>
      </section>

      <section className="axiom-operations section-sage"><div className="container"><div className="section-intro"><div><Eyebrow>05 / TEAM WORKSPACE</Eyebrow><h2>Everyone sees<br /><em>what matters next.</em></h2></div><p>Bring active projects, pending reviews, and new findings into one calm view. Clear ownership and a durable history make handoffs easier and keep momentum visible.</p></div><div className="axiom-operations-note"><span><Check size={15} /> Shared context</span><span><Check size={15} /> Clear ownership</span><span><Check size={15} /> Reviewable history</span></div></div></section>

      <section className="axiom-technology section-dark"><div className="container axiom-tech-grid"><div><Eyebrow light>06 / THE AI LAYER</Eyebrow><h2>Intelligence that<br /><em>stays grounded.</em></h2><p>The selected NVIDIA AI stack is intended to support Axiom's next layer of discovery, synthesis, and evidence mapping. The goal is simple: help researchers reach relevant material faster while keeping people close to the sources and decisions.</p></div><div className="axiom-tech-list"><div><span>01</span><strong>NeMo Retriever</strong><p>Semantic retrieval and reranking with direct source citations.</p></div><div><span>02</span><strong>NeMo Framework</strong><p>Fine-tuning on specialist literature for source-aware synthesis.</p></div><div><span>03</span><strong>NVIDIA NIM</strong><p>Optimized language and embedding services for responsive team queries.</p></div><div><span>04</span><strong>RAPIDS · cuGraph · cuDF</strong><p>cuGraph maps relationships; cuDF prepares multi-source research records.</p></div></div></div></section>

      <section className="axiom-end section-paper"><div className="container"><div className="axiom-end-mark"><Sparkles size={24} strokeWidth={1.3} /></div><Eyebrow>ORVENE AXIOM V2.0</Eyebrow><h2>Give the next big question<br />a place to <em>become clear.</em></h2><p>Bring your research, sources, and findings into a workspace built to keep them connected.</p><Button href={productUrl} target="_blank">Open Axiom V2.0</Button></div></section>
    </main>
    <Footer />
  </>;
}

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useForm } from "@formspree/react";
import { ArrowUpRight, Check, Send } from "lucide-react";
import { Eyebrow } from "../shared/Eyebrow";
import { Turnstile } from "../../turnstile";

const FORMSPREE_FORM_ID = (import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined) ?? "xvkgjpbe";

export function Contact() {
  const [state, submitToFormspree, resetFormspree] = useForm(FORMSPREE_FORM_ID);
  const [token, setToken] = useState("");
  const [resetKey, setResetKey] = useState(0);
  const [unverified, setUnverified] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    if (!token) { event.preventDefault(); setUnverified(true); return; }
    setUnverified(false);
    submitToFormspree(event);
  };

  useEffect(() => { if (state.succeeded) { setToken(""); setResetKey((key) => key + 1); } }, [state.succeeded]);

  const startOver = () => { form.current?.reset(); resetFormspree(); setToken(""); setResetKey((key) => key + 1); };
  const serverErrors = state.errors ? [...state.errors.getFormErrors(), ...state.errors.getAllFieldErrors().flatMap(([, list]) => list)].map((error) => error.message).join(" ") : "";
  const received = (next: string) => { setToken(next); if (next) setUnverified(false); };

  return <section id="contact" className="contact section-dark"><div className="container"><div className="contact-grid"><div><Eyebrow light>START A CONVERSATION</Eyebrow><h2>Lets make your research workflow <em>more connected.</em></h2><p>Tell us a little about your team and the questions you are trying to answer.</p></div><form ref={form} className="contact-form" onSubmit={submit}><div className="form-row"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Work email<input required name="email" type="email" placeholder="you@company.com" /></label></div><div className="form-row"><label>Organization<input required name="organization" placeholder="Company or team" /></label><label>Inquiry type<select name="inquiry_type" defaultValue=""><option value="" disabled>Select one</option><option>Product walkthrough</option><option>Enterprise partnership</option><option>General question</option></select></label></div><label>Message<textarea required name="message" placeholder="What are you researching?" rows={3} /></label><Turnstile onToken={received} resetKey={resetKey} /><button className="submit-button" disabled={state.submitting || state.succeeded}>{state.submitting ? "Sending..." : state.succeeded ? "Message received" : "Send inquiry"}{state.succeeded ? <Check size={16} /> : <Send size={15} />}</button>{state.succeeded && <div className="form-success"><p>Thanks - your inquiry is on its way to the Orvene team.</p><button type="button" className="form-again" onClick={startOver}>Send another message</button></div>}{unverified && !state.succeeded && <p className="form-error">Please complete the verification above to send your inquiry.</p>}{serverErrors && !state.succeeded && <p className="form-error">{serverErrors}</p>}</form></div><div className="contact-detail"><div className="contact-office"><span>General inquiries</span><a href="mailto:hello@orvene.net">hello@orvene.net <ArrowUpRight size={14} /></a></div><div className="contact-office"><strong>Orvene Technologies (Pvt) Ltd — Sri Lanka</strong><address>No. 13, Emerald Park, Pelawatte, Sri Lanka</address><a href="tel:+94760001208">+94 76 000 1208</a></div><div className="contact-office"><strong>Orvene Technologies Inc. — United States</strong><address>550 S Hope Street, Los Angeles, CA 90071, USA</address><a href="tel:+12135550108">+1 213-555-0108</a></div></div></div></section>;
}
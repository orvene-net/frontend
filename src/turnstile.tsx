import { useEffect, useRef, useState } from 'react';

const SITE_KEY = (import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined) ?? '0x4AAAAAAFL1jMnl1CwWWO-O';
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

type TurnstileApi = { render: (target: HTMLElement, options: Record<string, unknown>) => string; reset: (widgetId: string) => void };

declare global {
  interface Window { turnstile?: TurnstileApi }
}

let loader: Promise<void> | null = null;

function loadTurnstile(): Promise<void> {
  if (loader) return loader;
  loader = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => { loader = null; reject(new Error('turnstile-unavailable')); };
    document.head.appendChild(script);
  });
  return loader;
}

export function Turnstile({ onToken, resetKey = 0 }: { onToken: (token: string) => void; resetKey?: number }) {
  const target = useRef<HTMLDivElement>(null);
  const handler = useRef(onToken);
  const widget = useRef<string | undefined>(undefined);
  const [failed, setFailed] = useState(false);
  handler.current = onToken;

  useEffect(() => {
    if (!SITE_KEY) return;
    let cancelled = false;
    loadTurnstile()
      .then(() => {
        if (cancelled || widget.current || !target.current || !window.turnstile) return;
        widget.current = window.turnstile.render(target.current, {
          sitekey: SITE_KEY,
          theme: 'dark',
          size: 'flexible',
          appearance: 'always',
          callback: (token: string) => handler.current(token),
          'expired-callback': () => handler.current(''),
          'error-callback': () => handler.current(''),
        });
      })
      .catch(() => { if (!cancelled) setFailed(true); });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (widget.current && window.turnstile) window.turnstile.reset(widget.current);
  }, [resetKey]);

  if (!SITE_KEY) return null;
  return <div className="turnstile"><div ref={target} />{failed && <p className="turnstile-fallback">Verification is unavailable right now — please email <a href="mailto:hello@orvene.net">hello@orvene.net</a>.</p>}</div>;
}
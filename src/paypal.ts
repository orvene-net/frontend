const CLIENT_ID = (import.meta.env.VITE_PAYPAL_CLIENT_ID as string | undefined) ?? 'BAAA8yN0lQTc7Tf_L30XglOAmIWkf7RePDVCY5N3qu38NB2yIoaL2M-wRIP5tAjnv8iiOR_ODdeolOZr50';
const CURRENCY = (import.meta.env.VITE_PAYPAL_CURRENCY as string | undefined) ?? 'USD';
const SDK_URL = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(CLIENT_ID)}&currency=${CURRENCY}&intent=capture&disable-funding=credit&components=buttons`;

export type PayPalPlan = { name: string; amount: string; label: string };

const POPUP_WIDTH = 460;
const POPUP_HEIGHT = 640;

function popupShell(plan: PayPalPlan) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>Checkout &middot; ${plan.name} &middot; Orvene</title>
<link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
<style>
:root { --teal:#073f3c; --mint:#b6d6c7; --paper:#f2f3ef; }
* { box-sizing:border-box; }
body { margin:0; background:var(--paper); color:#172f2c; font-family:'DM Sans',sans-serif; display:flex; flex-direction:column; min-height:100vh; }
.popup-head { background:var(--teal); color:#f4f4ed; padding:22px 24px 20px; }
.popup-head .mark { display:flex; align-items:center; gap:9px; font:700 16px 'DM Sans'; letter-spacing:-.06em; }
.popup-head .mark span { width:22px; height:22px; border:1px solid currentColor; border-radius:50%; display:inline-block; }
.popup-head small { display:block; margin-top:18px; font:10px 'DM Mono'; letter-spacing:.1em; text-transform:uppercase; color:var(--mint); }
.popup-head h1 { margin:8px 0 0; font:30px/1.02 'Instrument Serif'; font-weight:400; letter-spacing:-.02em; }
.popup-body { flex:1; padding:24px; display:flex; flex-direction:column; gap:18px; }
.summary { border:1px solid rgba(7,63,60,.16); padding:16px 18px; }
.summary div { display:flex; justify-content:space-between; font-size:12px; padding:5px 0; }
.summary div:last-child { border-top:1px solid rgba(7,63,60,.12); margin-top:8px; padding-top:12px; align-items:baseline; }
.summary strong { font:26px/1 'Instrument Serif'; }
#paypal-buttons { min-height:60px; }
.paypal-note { font:10px/1.5 'DM Mono'; color:#6d8178; letter-spacing:.04em; }
.paypal-status { display:none; border:1px solid rgba(7,63,60,.18); padding:16px; font-size:13px; line-height:1.5; }
.paypal-status.show { display:block; }
.paypal-status.pending { color:#8a6a34; background:#f7f0e2; }
.paypal-status.ok { color:#0d4f43; background:#e2eee7; }
.paypal-status.error { color:#8a4a32; background:#f6e7e0; }
.paypal-status button { display:block; margin-top:14px; width:100%; border:0; background:var(--teal); color:#f4f4ed; padding:12px 16px; font:600 12px 'DM Sans'; cursor:pointer; }
.popup-foot { border-top:1px solid rgba(7,63,60,.12); padding:14px 24px; font:10px 'DM Mono'; color:#7b8d87; display:flex; justify-content:space-between; }
</style></head><body>
<header class="popup-head"><div class="mark"><span></span>orvene</div><small>Secure checkout</small><h1>${plan.name} plan</h1></header>
<div class="popup-body">
  <div class="summary"><div><span>Plan</span><span>${plan.name}</span></div><div><span>One-time payment</span><span>${plan.label}</span></div><div><strong>Total</strong><strong>${CURRENCY} ${plan.amount}</strong></div></div>
  <div id="paypal-buttons"></div>
  <div class="paypal-status" id="paypal-status"></div>
  <p class="paypal-note">Test mode &mdash; no real charges. Payments are processed by PayPal; Orvene never stores your card details.</p>
</div>
<footer class="popup-foot"><span>ORVENE / RESEARCH OS</span><span>${CURRENCY} ${plan.amount}</span></footer>
</body></html>`;
}

export function openPayPalPopup(plan: PayPalPlan): boolean {
  if (!CLIENT_ID) return false;
  const left = Math.round((window.screenLeft ?? 0) + (window.outerWidth - POPUP_WIDTH) / 2);
  const top = Math.round((window.screenTop ?? 0) + (window.outerHeight - POPUP_HEIGHT) / 2);
  const popup = window.open('', 'orvene-checkout', `popup=1,width=${POPUP_WIDTH},height=${POPUP_HEIGHT},left=${left},top=${top}`);
  if (!popup) return false;

  const doc = popup.document;
  doc.open();
  doc.write(popupShell(plan));
  doc.close();
  doc.title = `Checkout · ${plan.name} · Orvene`;

  const status = (kind: string, message: string, closeLabel?: string) => {
    const el = doc.getElementById('paypal-status');
    if (!el) return;
    el.className = `paypal-status show ${kind}`;
    el.innerHTML = '';
    const text = doc.createElement('div');
    text.textContent = message;
    el.appendChild(text);
    if (closeLabel) {
      const button = doc.createElement('button');
      button.textContent = closeLabel;
      button.onclick = () => popup.close();
      el.appendChild(button);
    }
  };

  const sdk = doc.createElement('script');
  sdk.async = true;
  sdk.src = SDK_URL;
  sdk.onerror = () => status('error', 'The PayPal checkout could not be loaded. Check your connection and try again.', 'Close');
  sdk.onload = () => {
    const paypal = (popup as Window & { paypal?: { Buttons: (options: Record<string, unknown>) => { render: (target: string) => Promise<void> } } }).paypal;
    if (!paypal) { status('error', 'The PayPal checkout could not be started. Please try again.', 'Close'); return; }
    paypal.Buttons({
      style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal', height: 48 },
      createOrder: (_data: unknown, actions: { order: { create: (order: Record<string, unknown>) => Promise<string> } }) => actions.order.create({
        purchase_units: [{ description: `${plan.name} plan — Orvene`, amount: { currency_code: CURRENCY, value: plan.amount } }],
      }),
      onApprove: (_data: unknown, actions: { order: { capture: () => Promise<{ id?: string }> } }) => actions.order.capture().then((order) => status('ok', `Payment approved. Reference ${order.id ?? ''}. A receipt is on its way to your inbox.`, 'Close window')),
      onCancel: () => status('pending', 'Checkout cancelled. Nothing was charged — reopen it whenever you are ready.'),
      onError: () => status('error', 'PayPal could not complete this payment. No funds were taken; please try again.', 'Close'),
    }).render('#paypal-buttons').catch(() => status('error', 'The PayPal buttons could not be rendered. Please try again.', 'Close'));
  };
  doc.body.appendChild(sdk);
  return true;
}
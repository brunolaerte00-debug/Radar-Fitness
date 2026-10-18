// Mantém os eventos de conversão da página original.
let lastLeadAt = 0;
document.querySelector('.lp-cta').addEventListener('click', () => {
  const now = Date.now();
  if (now - lastLeadAt < 2000) return;
  lastLeadAt = now;
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', {}, { eventID: 'lead_' + now });
  }
  window.gtag?.('event', 'generate_lead');
});

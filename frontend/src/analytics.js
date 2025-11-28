// src/analytics.js
const MEASUREMENT_ID = 'G-35XV4Q1GQQ'; // replace if needed

export const initGA = () => {
  if (!window || !MEASUREMENT_ID) return;
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  // disable auto page_view so we send manual ones on route change
  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID, { send_page_view: false });
};

export const trackPage = (url) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: url,
      page_location: window.location.href
    });
  }
};

export const trackEvent = (name, params = {}) => {
  if (window.gtag) {
    window.gtag('event', name, params);
  }
};

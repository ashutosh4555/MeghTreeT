/**
 * Google Analytics (GA4) — loaded only after cookie consent
 */
(function () {
  "use strict";

  var GA_ID = "G-ZS7LLSSNWL";

  window.MeghtreeAnalytics = {
    load: function () {
      if (window.__meghtreeGaLoaded) return;
      window.__meghtreeGaLoaded = true;

      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };

      var script = document.createElement("script");
      script.async = true;
      script.src =
        "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_ID);
      script.onload = function () {
        gtag("js", new Date());
        gtag("config", GA_ID, { anonymize_ip: true });
      };
      document.head.appendChild(script);
    },
  };
})();

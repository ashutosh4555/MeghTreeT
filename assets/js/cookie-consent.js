/**
 * Cookie consent banner and analytics gating
 */
(function () {
  "use strict";

  var banner = document.getElementById("cookie-banner");
  if (!banner) return;

  var acceptBtn = document.getElementById("cookie-accept");
  var declineBtn = document.getElementById("cookie-decline");
  var consentKey = "meghtree_cookie_consent";

  function loadAnalyticsIfAccepted() {
    if (
      localStorage.getItem(consentKey) === "accepted" &&
      window.MeghtreeAnalytics
    ) {
      window.MeghtreeAnalytics.load();
    }
  }

  if (!localStorage.getItem(consentKey)) {
    banner.style.display = "block";
  } else {
    loadAnalyticsIfAccepted();
  }

  if (acceptBtn) {
    acceptBtn.addEventListener("click", function () {
      localStorage.setItem(consentKey, "accepted");
      banner.style.display = "none";
      loadAnalyticsIfAccepted();
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener("click", function () {
      localStorage.setItem(consentKey, "declined");
      banner.style.display = "none";
    });
  }
})();

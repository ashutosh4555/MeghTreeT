/**
* MeghTree Technologies
* Main JavaScript — cleaned & consolidated
*/

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader || (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top'))) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }
  window.addEventListener('load', aosInit);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      try {
        const hashId = CSS.escape(window.location.hash.slice(1));
        const section = document.querySelector('#' + hashId);
        if (section) {
          setTimeout(() => {
            let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth'
            });
          }, 100);
        }
      } catch (err) {
        // Invalid selector, skip scroll correction
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * Cloud Efficiency Scorecard — multi-step form wizard
   */
  (function initScorecard() {
    const step1El = document.getElementById('step-1');
    if (!step1El) return; // Not on a page with the scorecard

    let currentStep = 1;
    const answers = { spend: '', k8s: '', ai: '' };

    function updateProgress(step) {
      const pct = Math.round((step / 4) * 100);
      document.getElementById('progress-fill').style.width = pct + '%';
      document.getElementById('progress-label').textContent = 'Step ' + step + ' of 4';
      document.getElementById('progress-pct').textContent = pct + '%';
    }

    function showStep(n) {
      document.querySelectorAll('.scorecard-step').forEach(s => s.classList.remove('active'));
      const el = document.getElementById('step-' + n);
      if (el) el.classList.add('active');
      currentStep = n;
      updateProgress(n);
    }

    // Option button selection
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const step = this.dataset.step;
        document.querySelectorAll('.option-btn[data-step="' + step + '"]').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        if (step === '1') answers.spend = this.dataset.value;
        if (step === '2') answers.k8s = this.dataset.value;
        if (step === '3') answers.ai = this.dataset.value;
      });
    });

    // Next buttons
    document.getElementById('next-1').addEventListener('click', () => {
      if (!answers.spend) { alert('Please select your monthly cloud spend.'); return; }
      showStep(2);
    });
    document.getElementById('next-2').addEventListener('click', () => {
      if (!answers.k8s) { alert('Please select a Kubernetes option.'); return; }
      showStep(3);
    });
    document.getElementById('next-3').addEventListener('click', () => {
      if (!answers.ai) { alert('Please select an AI/ML option.'); return; }
      showStep(4);
    });

    // Back buttons
    document.getElementById('back-2').addEventListener('click', () => showStep(1));
    document.getElementById('back-3').addEventListener('click', () => showStep(2));
    document.getElementById('back-4').addEventListener('click', () => showStep(3));

    // Form submit
    const form = document.getElementById('scorecard-form');
    if (!form) return;

    let lastSubmitTime = 0;
    const SUBMIT_COOLDOWN = 30000;

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const now = Date.now();
      if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
        alert('Please wait a moment before submitting again.');
        return;
      }

      const honeypot = form.querySelector('[name="_gotcha"]');
      if (honeypot && honeypot.value) {
        document.getElementById('step-4').style.display = 'none';
        document.querySelector('.scorecard-progress').style.display = 'none';
        document.getElementById('scorecard-success').style.display = 'block';
        return;
      }

      if (!answers.spend || !answers.k8s || !answers.ai) {
        alert('Please complete all previous steps before submitting.');
        return;
      }

      document.getElementById('sc-spend').value = answers.spend;
      document.getElementById('sc-k8s').value = answers.k8s;
      document.getElementById('sc-ai').value = answers.ai;
      const data = new FormData(form);
      try {
        const res = await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
        if (res.ok) {
          lastSubmitTime = Date.now();
          document.getElementById('step-4').style.display = 'none';
          document.querySelector('.scorecard-progress').style.display = 'none';
          document.getElementById('scorecard-success').style.display = 'block';
        } else {
          alert('There was a problem submitting your form. Please try again.');
        }
      } catch (err) {
        alert('Network error. Please try again.');
      }
    });
  })();

  /**
   * Cookie Consent Banner
   */
  (function initCookieConsent() {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;

    var acceptBtn = document.getElementById('cookie-accept');
    var declineBtn = document.getElementById('cookie-decline');
    var consentKey = 'meghtree_cookie_consent';

    if (!localStorage.getItem(consentKey)) {
      banner.style.display = 'block';
    }

    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        localStorage.setItem(consentKey, 'accepted');
        banner.style.display = 'none';
      });
    }

    if (declineBtn) {
      declineBtn.addEventListener('click', function () {
        localStorage.setItem(consentKey, 'declined');
        banner.style.display = 'none';
      });
    }
  })();

  /**
   * Methodology Interactive Section
   */
  (function initMethodology() {
    const menuBtns = document.querySelectorAll('.methodology-btn');
    const contentPanels = document.querySelectorAll('.methodology-content');

    if (menuBtns.length === 0 || contentPanels.length === 0) return;

    function activateLayer(targetId) {
      // Remove active from all
      menuBtns.forEach(btn => btn.classList.remove('active'));
      contentPanels.forEach(panel => panel.classList.remove('active'));

      // Add active to target
      const activeBtn = document.querySelector(`.methodology-btn[data-target="${targetId}"]`);
      const activePanel = document.getElementById(targetId);

      if (activeBtn) activeBtn.classList.add('active');
      if (activePanel) activePanel.classList.add('active');
    }

    menuBtns.forEach(btn => {
      // Handle both click and hover
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        activateLayer(this.dataset.target);
      });
      
      btn.addEventListener('mouseenter', function() {
        activateLayer(this.dataset.target);
      });
    });
  })();

})();
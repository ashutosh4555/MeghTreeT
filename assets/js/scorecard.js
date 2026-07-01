/**
 * Cloud Efficiency Scorecard — multi-step form wizard
 */
(function () {
  "use strict";

  const step1El = document.getElementById("step-1");
  if (!step1El) return;

  let currentStep = 1;
  const answers = { spend: "", k8s: "", ai: "" };

  function updateProgress(step) {
    const pct = Math.round((step / 4) * 100);
    document.getElementById("progress-fill").style.width = pct + "%";
    document.getElementById("progress-label").textContent =
      "Step " + step + " of 4";
    document.getElementById("progress-pct").textContent = pct + "%";
  }

  function showStep(n) {
    document
      .querySelectorAll(".scorecard-step")
      .forEach((s) => s.classList.remove("active"));
    const el = document.getElementById("step-" + n);
    if (el) el.classList.add("active");
    currentStep = n;
    updateProgress(n);
  }

  document.querySelectorAll(".option-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const step = this.dataset.step;
      document
        .querySelectorAll('.option-btn[data-step="' + step + '"]')
        .forEach((b) => b.classList.remove("selected"));
      this.classList.add("selected");
      if (step === "1") answers.spend = this.dataset.value;
      if (step === "2") answers.k8s = this.dataset.value;
      if (step === "3") answers.ai = this.dataset.value;
    });
  });

  document.getElementById("next-1").addEventListener("click", () => {
    if (!answers.spend) {
      alert("Please select your monthly cloud spend.");
      return;
    }
    showStep(2);
  });
  document.getElementById("next-2").addEventListener("click", () => {
    if (!answers.k8s) {
      alert("Please select a Kubernetes option.");
      return;
    }
    showStep(3);
  });
  document.getElementById("next-3").addEventListener("click", () => {
    if (!answers.ai) {
      alert("Please select an AI/ML option.");
      return;
    }
    showStep(4);
  });

  document.getElementById("back-2").addEventListener("click", () => showStep(1));
  document.getElementById("back-3").addEventListener("click", () => showStep(2));
  document.getElementById("back-4").addEventListener("click", () => showStep(3));

  const form = document.getElementById("scorecard-form");
  if (!form) return;

  let lastSubmitTime = 0;
  const SUBMIT_COOLDOWN = 30000;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
      alert("Please wait a moment before submitting again.");
      return;
    }

    const honeypot = form.querySelector('[name="_gotcha"]');
    if (honeypot && honeypot.value) {
      document.getElementById("step-4").style.display = "none";
      document.querySelector(".scorecard-progress").style.display = "none";
      document.getElementById("scorecard-success").style.display = "block";
      return;
    }

    if (!answers.spend || !answers.k8s || !answers.ai) {
      alert("Please complete all previous steps before submitting.");
      return;
    }

    document.getElementById("sc-spend").value = answers.spend;
    document.getElementById("sc-k8s").value = answers.k8s;
    document.getElementById("sc-ai").value = answers.ai;
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        lastSubmitTime = Date.now();
        document.getElementById("step-4").style.display = "none";
        document.querySelector(".scorecard-progress").style.display = "none";
        document.getElementById("scorecard-success").style.display = "block";
      } else {
        alert("There was a problem submitting your form. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    }
  });
})();

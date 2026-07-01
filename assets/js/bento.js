(function () {
  "use strict";

  const contentDatabase = {
    "funding": { title: "Funding & Adoption", desc: "Enable migration, modernization, and PoC funding through cloud provider programs. Reduce day-one investment barriers before a single workload moves.", bullets: [] },
    "cost-vis": { title: "Cost Visibility", desc: "Full-spectrum insight into where every dollar goes — by service, team, workload, and time. No billing surprises. No hidden waste.", bullets: [] },
    "gov": { title: "Governance & Control", desc: "Budget thresholds, tagging frameworks, and cost ownership workflows. Accountability structures that make every engineer a FinOps partner.", bullets: [] },
    "k8s-vis": { title: "K8s Cost Visibility", desc: "Namespace-level, pod-level, and team-level cost attribution for container workloads. Identify idle resources before they drain budget silently.", bullets: [] },
    "k8s": { title: "K8s Optimization", desc: "Autonomous container optimization: bin-packing, autoscaling, and node rightsizing. Running continuously without human intervention.", bullets: [] },
    "infra": { title: "Infra Optimization", desc: "Spot orchestration, predictive autoscaling, and hybrid spot/on-demand strategies. Maximize compute savings without interruption risk.", bullets: [] },
    "commit": { title: "Commitment & Rightsizing", desc: "Savings plans, reserved capacity, and compute rightsizing. Baseline workload cost reduction with maximum coverage.", bullets: [] },
    "arch": { title: "Architecture Optimization", desc: "ARM compute migration, intelligent storage tiering, cloud-native patterns. Efficiency baked into how you build.", bullets: [] },
    "monitor": { title: "Monitoring & Observability", desc: "Metrics, logs, traces, and cost correlation stitched across all layers. Observability that makes optimization continuous and self-sustaining.", bullets: [] },
    "ai_gov": { title: "LLM & Inference Cost Governance", desc: "Token-level cost attribution, model benchmarking, and intelligent routing.", bullets: ["Per-model/per-team token spend tracking", "Prompt caching", "Model routing (cost vs quality)", "Budget guardrails on AI API consumption"] },
    "ai_infra": { title: "AI Infrastructure Rightsizing", desc: "GPU utilization optimization, training job scheduling, and spot strategies.", bullets: ["GPU cluster monitoring", "Spot orchestration for training", "Right-instance selection for inference", "Idle GPU detection & shutdown"] },
    "ai_obs": { title: "AI Observability & Cost Correlation", desc: "Connect latency, error rates, and throughput directly to per-request cost with purpose-built observability pipelines.", bullets: ["Request-level cost tracing", "Latency-vs-cost dashboards", "Anomaly detection on AI spend spikes"] },
    "ai_agent": { title: "Agentic AI Workflow Cost Management", desc: "Agentic pipelines introduce unpredictable cost loops.", bullets: ["Per-run cost ceilings for agent workflows", "Tool-call cost attribution", "Context window optimization strategies", "Cost-aware retrieval pipeline design"] }
  };

  function updateBentoHUD(hudId, element) {
    var key = element.getAttribute('data-key');
    var data = contentDatabase[key];
    var hud = document.getElementById(hudId);

    var parentGroup = element.closest('.bento-pill-group');
    parentGroup.querySelectorAll('.bento-pill').forEach(function(p) { p.classList.remove('active'); });
    element.classList.add('active');

    if (data && hud) {
      hud.querySelector('h3').innerText = data.title;
      hud.querySelector('h3').style.color = "var(--theme-primary)";
      hud.querySelector('p').innerText = data.desc;
      var ul = hud.querySelector('.hud-bullets');
      if (data.bullets.length > 0) {
        ul.innerHTML = data.bullets.map(function(b) { return '<li>' + b + '</li>'; }).join('');
        ul.classList.add('visible');
      } else {
        ul.innerHTML = '';
        ul.classList.remove('visible');
      }
    }
  }

  function setMode(mode) {
    if (mode === 'ai') {
      document.body.classList.add('ai-mode');
      document.getElementById('btn-ai').classList.add('active');
      document.getElementById('btn-cloud').classList.remove('active');

      document.getElementById('dynamic-subtitle').innerText = "Our Methodology";
      document.getElementById('dynamic-title').innerText = "AI Spend Is the Fastest-Growing Cost Problem";
      document.getElementById('desc-ai').classList.add('active');
      document.getElementById('desc-cloud').classList.remove('active');

      document.getElementById('bento-ai').classList.add('active');
      document.getElementById('bento-cloud').classList.remove('active');
    } else {
      document.body.classList.remove('ai-mode');
      document.getElementById('btn-cloud').classList.add('active');
      document.getElementById('btn-ai').classList.remove('active');

      document.getElementById('dynamic-subtitle').innerText = "Our Methodology";
      document.getElementById('dynamic-title').innerText = "A Layered FinOps & Optimization Framework";
      document.getElementById('desc-cloud').classList.add('active');
      document.getElementById('desc-ai').classList.remove('active');

      document.getElementById('bento-cloud').classList.add('active');
      document.getElementById('bento-ai').classList.remove('active');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.bento-pill').forEach(function (pill) {
      var parentGroup = pill.closest('.bento-pill-group');
      var hudId = parentGroup.previousElementSibling.id;

      pill.addEventListener('mouseenter', function () { updateBentoHUD(hudId, pill); });
      pill.addEventListener('touchstart', function (e) { e.stopPropagation(); updateBentoHUD(hudId, pill); }, { passive: true });
    });

    document.querySelectorAll('.bento-pill-group').forEach(function (group) {
      var firstPill = group.querySelector('.bento-pill');
      var hudId = group.previousElementSibling.id;
      if (firstPill) {
        updateBentoHUD(hudId, firstPill);
      }
    });

    document.getElementById('btn-cloud').addEventListener('click', function () { setMode('cloud'); });
    document.getElementById('btn-ai').addEventListener('click', function () { setMode('ai'); });
  });
})();

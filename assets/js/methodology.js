/**
 * Methodology interactive section
 */
(function () {
  "use strict";

  const menuBtns = document.querySelectorAll(".methodology-btn");
  const contentPanels = document.querySelectorAll(".methodology-content");

  if (menuBtns.length === 0 || contentPanels.length === 0) return;

  function activateLayer(targetId) {
    menuBtns.forEach((btn) => btn.classList.remove("active"));
    contentPanels.forEach((panel) => panel.classList.remove("active"));

    const activeBtn = document.querySelector(
      `.methodology-btn[data-target="${targetId}"]`,
    );
    const activePanel = document.getElementById(targetId);

    if (activeBtn) activeBtn.classList.add("active");
    if (activePanel) activePanel.classList.add("active");
  }

  menuBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      activateLayer(this.dataset.target);
    });

    btn.addEventListener("mouseenter", function () {
      activateLayer(this.dataset.target);
    });
  });
})();

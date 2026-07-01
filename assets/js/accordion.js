/**
 * AI FinOps & methodology master-detail accordion with sticky scroll
 */
(function () {
  "use strict";

  const containers = document.querySelectorAll(".ai-accordion-container");
  if (containers.length === 0) return;

  const isDesktop = window.matchMedia("(min-width: 992px)").matches;

  containers.forEach((container) => {
    const list = container.querySelector(".ai-accordion-list");
    const items = container.querySelectorAll(".ai-accordion-item");
    if (!list || items.length === 0) return;

    const indicator = document.createElement("div");
    indicator.className = "ai-active-indicator";
    list.appendChild(indicator);

    function updateIndicator() {
      const activeItem = list.querySelector(".ai-accordion-item.active");
      if (activeItem) {
        indicator.style.top = activeItem.offsetTop + "px";
        indicator.style.height = activeItem.offsetHeight + "px";
      }
    }

    const resizeObserver = new ResizeObserver(() => {
      updateIndicator();
    });
    items.forEach((item) => resizeObserver.observe(item));

    let wrapper;
    const numItems = items.length;

    if (isDesktop) {
      const scrollHeight = numItems * 75 + "vh";

      container.style.position = "sticky";
      container.style.top = "12vh";
      container.style.zIndex = "10";

      const parent = container.parentElement;
      wrapper = document.createElement("div");
      wrapper.className = "sticky-scroll-wrapper";
      wrapper.style.height = scrollHeight;
      wrapper.style.position = "relative";

      parent.insertBefore(wrapper, container);
      wrapper.appendChild(container);

      window.addEventListener("scroll", () => {
        const rect = wrapper.getBoundingClientRect();
        const topOffset = window.innerHeight * 0.12;

        if (rect.top <= topOffset && rect.bottom >= window.innerHeight) {
          const scrollDistance = topOffset - rect.top;
          const scrollableDistance = rect.height - window.innerHeight;
          let scrollProgress = scrollDistance / scrollableDistance;

          let activeIndex = Math.floor(scrollProgress * numItems);

          if (activeIndex < 0) activeIndex = 0;
          if (activeIndex >= numItems) activeIndex = numItems - 1;

          const targetItem = items[activeIndex];
          if (!targetItem.classList.contains("active")) {
            container
              .querySelectorAll(".ai-accordion-item")
              .forEach((el) => el.classList.remove("active"));
            container
              .querySelectorAll(".ai-visual-item")
              .forEach((el) => el.classList.remove("active"));

            targetItem.classList.add("active");
            const targetVisual = document.getElementById(
              targetItem.dataset.target,
            );
            if (targetVisual) targetVisual.classList.add("active");

            updateIndicator();
          }
        }
      });
    }

    items.forEach((item, index) => {
      const header = item.querySelector(".ai-accordion-header");
      if (header) {
        header.addEventListener("click", function (e) {
          e.preventDefault();

          if (isDesktop && wrapper) {
            const targetProgress = index / numItems;
            const scrollableDistance =
              wrapper.offsetHeight - window.innerHeight;
            const wrapperTopAbsolute =
              window.scrollY + wrapper.getBoundingClientRect().top;
            const topOffset = window.innerHeight * 0.12;

            const targetScrollY =
              wrapperTopAbsolute -
              topOffset +
              targetProgress * scrollableDistance +
              5;

            window.scrollTo({
              top: targetScrollY,
              behavior: "smooth",
            });
          } else {
            const containerAccordions =
              container.querySelectorAll(".ai-accordion-item");
            const containerVisuals =
              container.querySelectorAll(".ai-visual-item");

            containerAccordions.forEach((el) => el.classList.remove("active"));
            containerVisuals.forEach((el) => el.classList.remove("active"));

            item.classList.add("active");
            const targetId = item.dataset.target;
            const targetVisual = document.getElementById(targetId);
            if (targetVisual) targetVisual.classList.add("active");

            updateIndicator();
          }
        });
      }
    });

    setTimeout(updateIndicator, 100);
  });
})();

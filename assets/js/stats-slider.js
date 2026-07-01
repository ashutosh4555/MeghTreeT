/**
 * Drag-to-scroll and infinite auto-scroll for stats slider
 * Keyboard accessible: arrow keys scroll left/right
 */
(function () {
  "use strict";

  const sliders = document.querySelectorAll(".stats-scroller");
  sliders.forEach((slider) => {
    slider.setAttribute("role", "region");
    slider.setAttribute("aria-label", "Statistics carousel");
    slider.setAttribute("tabindex", "0");
    const originalItems = Array.from(slider.children);
    originalItems.forEach((item) => {
      slider.appendChild(item.cloneNode(true));
    });

    let isDown = false;
    let isHovered = false;
    let startX;
    let scrollLeft;
    let velX = 0;
    let momentumID;
    let autoScrollID;

    let cloneOffset = 0;
    setTimeout(() => {
      const firstClone = slider.children[originalItems.length];
      if (firstClone) {
        cloneOffset = firstClone.offsetLeft - originalItems[0].offsetLeft;
      }
    }, 200);

    function autoScroll() {
      if (!isDown && !isHovered && Math.abs(velX) < 0.5) {
        slider.scrollLeft += 1;

        if (cloneOffset > 0 && slider.scrollLeft >= cloneOffset) {
          slider.scrollLeft -= cloneOffset;
        }
      }
      autoScrollID = requestAnimationFrame(autoScroll);
    }

    autoScrollID = requestAnimationFrame(autoScroll);

    slider.addEventListener("mouseenter", () => {
      isHovered = true;
    });

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.style.cursor = "grabbing";
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      cancelAnimationFrame(momentumID);
    });

    slider.addEventListener("mouseleave", () => {
      isHovered = false;
      isDown = false;
      slider.style.cursor = "grab";
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.style.cursor = "grab";
      beginMomentumTracking();
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      const prevScrollLeft = slider.scrollLeft;
      slider.scrollLeft = scrollLeft - walk;
      velX = slider.scrollLeft - prevScrollLeft;

      if (cloneOffset > 0 && slider.scrollLeft >= cloneOffset) {
        slider.scrollLeft -= cloneOffset;
        scrollLeft -= cloneOffset;
      } else if (cloneOffset > 0 && slider.scrollLeft <= 0) {
        slider.scrollLeft += cloneOffset;
        scrollLeft += cloneOffset;
      }
    });

    function beginMomentumTracking() {
      slider.scrollLeft += velX;
      velX *= 0.95;

      if (cloneOffset > 0 && slider.scrollLeft >= cloneOffset) {
        slider.scrollLeft -= cloneOffset;
      } else if (cloneOffset > 0 && slider.scrollLeft <= 0) {
        slider.scrollLeft += cloneOffset;
      }

      if (Math.abs(velX) > 0.5) {
        momentumID = requestAnimationFrame(beginMomentumTracking);
      }
    }

    slider.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        slider.scrollLeft -= 200;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        slider.scrollLeft += 200;
      }
    });
  });
})();

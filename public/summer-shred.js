/* ============================================================
   VESSL · SUMMER SHRED — interactions
   Lightweight, no dependencies. Respects prefers-reduced-motion.
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Footer year */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---- Scroll reveals -------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    // Show everything immediately.
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---- Nav background on scroll (via a top sentinel, no scroll listener) */
  var nav = document.getElementById("nav");
  if (nav && "IntersectionObserver" in window) {
    var sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText = "position:absolute;top:0;left:0;width:1px;height:80px;pointer-events:none;";
    document.body.appendChild(sentinel);

    new IntersectionObserver(function (entries) {
      nav.classList.toggle("scrolled", !entries[0].isIntersecting);
    }, { threshold: 0 }).observe(sentinel);
  } else if (nav) {
    nav.classList.add("scrolled");
  }

  /* ---- Mobile sticky CTA: show once the hero is scrolled past ----------- */
  var sticky = document.getElementById("stickyCta");
  var hero = document.getElementById("hero");
  var offer = document.getElementById("offer");

  if (sticky && hero && "IntersectionObserver" in window) {
    var heroSeen = false;

    new IntersectionObserver(function (entries) {
      // Reveal after the hero leaves the viewport.
      if (!entries[0].isIntersecting && entries[0].boundingClientRect.top < 0) {
        heroSeen = true;
        sticky.classList.add("show");
        sticky.setAttribute("aria-hidden", "false");
      }
    }, { threshold: 0 }).observe(hero);

    // Hide the sticky bar while the offer (final CTA) is on screen to avoid duplication.
    if (offer) {
      new IntersectionObserver(function (entries) {
        if (!heroSeen) return;
        var onOffer = entries[0].isIntersecting;
        sticky.classList.toggle("show", !onOffer);
        sticky.setAttribute("aria-hidden", onOffer ? "true" : "false");
      }, { threshold: 0.25 }).observe(offer);
    }
  }
})();

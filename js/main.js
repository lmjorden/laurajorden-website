/* =========================================================
   Laura Jorden | Compass Luxury Real Estate
   Shared site script: mobile menu, sticky-nav shadow,
   scroll reveals, smooth anchor scroll, lightbox gallery.
   Every effect degrades gracefully — content is visible
   and readable with JavaScript disabled or by crawlers.
   ========================================================= */
(function () {
  "use strict";

  // Mark JS as available so CSS can safely use reveal animations.
  document.documentElement.classList.add("js");

  document.addEventListener("DOMContentLoaded", function () {
    /* ---------- Mobile menu ---------- */
    var toggle = document.querySelector(".menu-toggle");
    var nav = document.querySelector(".nav-links");
    var scrim = document.querySelector(".nav-scrim");

    function closeMenu() {
      if (!nav) return;
      nav.classList.remove("is-open");
      if (scrim) scrim.classList.remove("is-open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    }
    function openMenu() {
      if (!nav) return;
      nav.classList.add("is-open");
      if (scrim) scrim.classList.add("is-open");
      if (toggle) toggle.setAttribute("aria-expanded", "true");
    }
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var isOpen = nav.classList.contains("is-open");
        isOpen ? closeMenu() : openMenu();
      });
    }
    if (scrim) scrim.addEventListener("click", closeMenu);
    document.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    /* ---------- Sticky header shadow on scroll ---------- */
    var header = document.querySelector(".site-header");
    if (header) {
      var onScroll = function () {
        header.classList.toggle("is-scrolled", window.scrollY > 12);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    /* ---------- Scroll-triggered reveal ---------- */
    var revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealEls.length) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    }

    /* ---------- Smooth anchor scrolling (with focus for a11y) ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var id = link.getAttribute("href").slice(1);
        if (!id) return;
        var target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      });
    });

    /* ---------- Lightbox gallery ---------- */
    var lightbox = document.querySelector(".lightbox");
    if (lightbox) {
      var lightboxImg = lightbox.querySelector("img");
      var closeBtn = lightbox.querySelector(".lightbox-close");
      document.querySelectorAll(".gallery [data-full]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var src = btn.getAttribute("data-full");
          var label = btn.getAttribute("data-label") || "";
          lightboxImg.setAttribute("src", src);
          lightboxImg.setAttribute("alt", label);
          lightbox.classList.add("is-open");
        });
      });
      function closeLightbox() { lightbox.classList.remove("is-open"); }
      if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
      lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) closeLightbox();
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeLightbox();
      });
    }

    /* ---------- Click-to-play video covers (bio video + property tours) ---------- */
    document.querySelectorAll(".video-frame[data-embed-src], .video-frame[data-video-src]").forEach(function (frame) {
      var facade = frame.querySelector(".video-facade-link");
      if (!facade) return;
      facade.addEventListener("click", function (e) {
        e.preventDefault();
        var iframeSrc = frame.getAttribute("data-embed-src");
        var videoSrc = frame.getAttribute("data-video-src");
        var title = frame.getAttribute("data-video-title") || "Video";
        var el;
        if (videoSrc) {
          el = document.createElement("video");
          el.setAttribute("src", videoSrc);
          el.setAttribute("controls", "");
          el.setAttribute("autoplay", "");
          el.setAttribute("playsinline", "");
          el.setAttribute("title", title);
        } else if (iframeSrc) {
          el = document.createElement("iframe");
          el.setAttribute("src", iframeSrc);
          el.setAttribute("allow", "autoplay; fullscreen; picture-in-picture; clipboard-write");
          el.setAttribute("allowfullscreen", "");
          el.setAttribute("title", title);
        }
        if (!el) return;
        frame.innerHTML = "";
        frame.appendChild(el);
      });
    });

    /* ---------- Testimonial marquee (JS-driven for reliable mobile looping) ----------
       The track's HTML contains the testimonials duplicated back-to-back, so
       shifting exactly one copy's width to the left and snapping back to 0
       produces a seamless infinite loop. Driving this with requestAnimationFrame
       (instead of a CSS @keyframes animation) avoids a mobile Safari issue where
       long-running looped CSS animations on a masked/transformed flex container
       can stop compositing after the first pass, leaving the section blank. */
    var track = document.querySelector(".testimonial-scroll-track");
    if (track) {
      var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        track.style.transform = "translate3d(0,0,0)";
      } else {
        var outer = track.closest(".testimonial-scroll-outer");
        var halfWidth = 0;
        var position = 0;
        var paused = false;
        var lastTime = null;
        var pxPerSecond = 0;

        function measure() {
          halfWidth = track.scrollWidth / 2;
          // Original design speed: one full copy scrolls past in ~70s.
          pxPerSecond = halfWidth / 70;
          if (position < -halfWidth || position > 0) position = 0;
        }
        measure();

        var resizeTimer;
        window.addEventListener("resize", function () {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(measure, 200);
        });

        if (outer) {
          outer.addEventListener("mouseenter", function () { paused = true; });
          outer.addEventListener("mouseleave", function () { paused = false; });
          outer.addEventListener("touchstart", function () { paused = true; }, { passive: true });
          outer.addEventListener("touchend", function () { paused = false; });
        }

        function step(timestamp) {
          if (lastTime === null) lastTime = timestamp;
          var delta = (timestamp - lastTime) / 1000;
          lastTime = timestamp;
          if (!paused && halfWidth > 0) {
            position -= pxPerSecond * delta;
            if (position <= -halfWidth) position += halfWidth;
            track.style.transform = "translate3d(" + position + "px,0,0)";
          }
          requestAnimationFrame(step);
        }
        requestAnimationFrame(step);

        document.addEventListener("visibilitychange", function () {
          // Reset the clock reference so a long background tab doesn't
          // cause one giant jump in position when the tab becomes active again.
          lastTime = null;
        });
      }
    }

    /* ---------- Floating "Let's Connect" contact widget ---------- */
    var fabBtn = document.getElementById("floatingContactBtn");
    var fabPanel = document.getElementById("floatingContactPanel");
    var fabClose = document.getElementById("floatingContactClose");
    if (fabBtn && fabPanel) {
      var closeFab = function () {
        fabPanel.classList.remove("is-open");
        fabBtn.setAttribute("aria-expanded", "false");
      };
      var toggleFab = function () {
        var isOpen = fabPanel.classList.toggle("is-open");
        fabBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      };
      fabBtn.addEventListener("click", toggleFab);
      if (fabClose) fabClose.addEventListener("click", closeFab);
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeFab();
      });
      document.addEventListener("click", function (e) {
        if (!fabPanel.contains(e.target) && e.target !== fabBtn) closeFab();
      });
    }
  });
})();

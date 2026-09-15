/* ============================================================================
   Haziel Nablo — "Paper & Signal" interaction engine (vanilla, no libraries)

   Everything is progressive: with JS disabled the pages read perfectly. All
   motion is transform / opacity only and is skipped under
   prefers-reduced-motion: reduce.
   ============================================================================ */
(function () {
  "use strict";

  var STORAGE_KEY = "hn-theme";
  var reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function each(list, fn) {
    Array.prototype.forEach.call(list, fn);
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initDrawer();
    initReveal();
    initCountUp();
    initScrollSpy();
    initCopyEmail();
    initWorkflow();
    initPrint();
  });

  /* ---------------------------------------------------------------- Theme ---
     Writes 'hn-theme' to localStorage, sets data-theme on <html> and mirrors
     the state onto every toggle button's aria-pressed (true === light, which is
     the default). A tiny inline pre-paint script in <head> avoids the flash. */
  function initTheme() {
    var root = document.documentElement;
    var toggles = document.querySelectorAll("[data-theme-toggle]");

    function apply(theme) {
      if (theme === "dark") {
        root.setAttribute("data-theme", "dark");
      } else {
        root.removeAttribute("data-theme");
      }
      each(toggles, function (btn) {
        btn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
        btn.setAttribute("title", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
      });
    }

    var current = "light";
    try {
      current = localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
    } catch (e) {}
    apply(current);

    each(toggles, function (btn) {
      btn.addEventListener("click", function () {
        current = current === "dark" ? "light" : "dark";
        try {
          localStorage.setItem(STORAGE_KEY, current);
        } catch (e) {}
        apply(current);
      });
    });
  }

  /* --------------------------------------------------------------- Drawer ---
     Hamburger opens/closes the mobile drawer, toggles aria-expanded, closes on
     link click and on Escape. */
  function initDrawer() {
    var btn = document.querySelector("[data-menu-btn]");
    var drawer = document.querySelector("[data-drawer]");
    if (!btn || !drawer) return;

    function setOpen(open) {
      drawer.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    }

    btn.addEventListener("click", function () {
      setOpen(!drawer.classList.contains("open"));
    });

    each(drawer.querySelectorAll("a"), function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.classList.contains("open")) {
        setOpen(false);
        btn.focus();
      }
    });
  }

  /* ---------------------------------------------------------------- Reveal ---
     IntersectionObserver adds .is-visible; children stagger via the
     --reveal-delay custom property set inline in the markup. */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");

    if (reduceMotion || !("IntersectionObserver" in window)) {
      each(items, function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-72px 0px -60px 0px", threshold: 0 }
    );

    each(items, function (el) {
      observer.observe(el);
    });
  }

  /* -------------------------------------------------------------- Count-up ---
     Animates the hero stat from 0 to its data-count-to value once it scrolls
     into view. Reduced motion jumps straight to the final number. */
  function initCountUp() {
    var counters = document.querySelectorAll("[data-count-to]");
    if (!counters.length) return;

    function run(el) {
      var to = parseFloat(el.getAttribute("data-count-to")) || 0;
      if (reduceMotion) {
        el.textContent = String(to);
        return;
      }
      var duration = 900;
      var start = null;
      function tick(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(to * eased));
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = String(to);
      }
      requestAnimationFrame(tick);
    }

    if (reduceMotion || !("IntersectionObserver" in window)) {
      each(counters, run);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            run(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    each(counters, function (el) {
      observer.observe(el);
    });
  }

  /* ------------------------------------------------------------ Scrollspy ---
     IntersectionObserver over the section ids drives the active nav underline. */
  function initScrollSpy() {
    var links = document.querySelectorAll('.nav-link[href^="#"]');
    if (!links.length) return;

    var ids = [];
    each(links, function (link) {
      ids.push(link.getAttribute("href").slice(1));
    });

    var sections = ids
      .map(function (id) {
        return document.getElementById(id);
      })
      .filter(Boolean);

    if (!sections.length || !("IntersectionObserver" in window)) return;

    function setActive(id) {
      each(links, function (link) {
        var on = link.getAttribute("href") === "#" + id;
        link.classList.toggle("active", on);
        if (on) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(function (s) {
      observer.observe(s);
    });
  }

  /* ---------------------------------------------------------- Copy email ---
     Clipboard API with a textarea fallback; the label swaps to
     "Copied to clipboard" and back. */
  function initCopyEmail() {
    var buttons = document.querySelectorAll("[data-copy-email]");
    if (!buttons.length) return;

    each(buttons, function (btn) {
      var label = btn.querySelector("[data-copy-label]") || btn;
      var original = label.textContent;
      var timer;

      btn.addEventListener("click", function () {
        var email = btn.getAttribute("data-copy-email") || "hazielnablo19@gmail.com";

        function done() {
          label.textContent = "Copied to clipboard";
          clearTimeout(timer);
          timer = setTimeout(function () {
            label.textContent = original;
          }, 2400);
        }

        function fallback() {
          var area = document.createElement("textarea");
          area.value = email;
          area.setAttribute("readonly", "");
          area.style.position = "fixed";
          area.style.opacity = "0";
          document.body.appendChild(area);
          area.select();
          try {
            document.execCommand("copy");
            done();
          } catch (err) {
            /* nothing else to try — leave the label unchanged */
          }
          document.body.removeChild(area);
        }

        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(email).then(done).catch(fallback);
        } else {
          fallback();
        }
      });
    });
  }

  /* ------------------------------------------------------------- Workflow ---
     Tab clicks switch the step panel with a fade-out / fade-in crossfade. */
  function initWorkflow() {
    each(document.querySelectorAll("[data-workflow]"), function (root) {
      var btns = root.querySelectorAll("[data-step-btn]");
      var bodies = root.querySelectorAll("[data-step-panel]");
      if (!btns.length || btns.length !== bodies.length) return;

      var active = 0;
      each(bodies, function (b, i) {
        if (!b.hasAttribute("hidden")) active = i;
      });

      function select(next, focus) {
        if (next === active) {
          if (focus) btns[next].focus();
          return;
        }
        each(btns, function (b, i) {
          var on = i === next;
          b.classList.toggle("active", on);
          b.setAttribute("aria-selected", on ? "true" : "false");
          b.setAttribute("tabindex", on ? "0" : "-1");
        });

        var outgoing = bodies[active];
        var incoming = bodies[next];

        function swap() {
          outgoing.setAttribute("hidden", "");
          outgoing.classList.remove("is-swapping");
          incoming.removeAttribute("hidden");
          active = next;
          if (focus) btns[next].focus();
          if (reduceMotion) return;
          incoming.classList.add("is-swapping");
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              incoming.classList.remove("is-swapping");
            });
          });
        }

        if (reduceMotion) {
          swap();
        } else {
          outgoing.classList.add("is-swapping");
          setTimeout(swap, 180);
        }
      }

      each(btns, function (b, i) {
        b.addEventListener("click", function () {
          select(i, false);
        });
        b.addEventListener("keydown", function (e) {
          var target = -1;
          if (e.key === "ArrowDown" || e.key === "ArrowRight") target = (i + 1) % btns.length;
          else if (e.key === "ArrowUp" || e.key === "ArrowLeft") target = (i - 1 + btns.length) % btns.length;
          else if (e.key === "Home") target = 0;
          else if (e.key === "End") target = btns.length - 1;
          if (target >= 0) {
            e.preventDefault();
            select(target, true);
          }
        });
      });
    });
  }

  /* ------------------------------------------------------------- Printing ---
     "Print / Save as PDF" control on the resume page. */
  function initPrint() {
    each(document.querySelectorAll("[data-print]"), function (btn) {
      btn.addEventListener("click", function () {
        window.print();
      });
    });
  }
})();

/* HAZIEL NABLO - REDESIGN / interactive layer (light theme). */
document.addEventListener('DOMContentLoaded', function () {
  initReveals();
  initScrollProgress();
  initScrollSpy();
  initMobileMenu();
  initCopyButtons();
});

/* ---- Scroll reveal: IntersectionObserver ---- */
function initReveals() {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
  els.forEach(function (el) { io.observe(el); });
}

/* ---- Scroll progress bar ---- */
function initScrollProgress() {
  var bar = document.querySelector('.progress');
  if (!bar || !('IntersectionObserver' in window)) return;
  // Use scroll-driven CSS animation if supported; otherwise JS fallback.
  var root = document.documentElement;
  function update() {
    var scrollTop = window.scrollY || root.scrollTop;
    var height = root.scrollHeight - window.innerHeight;
    var pct = height > 0 ? Math.min(scrollTop / height, 1) : 0;
    bar.style.transform = 'scaleX(' + pct + ')';
  }
  // If CSS animation-timeline is supported, the CSS rule handles it; skip JS.
  if (CSS.supports && CSS.supports('animation-timeline: scroll()')) return;
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

/* ---- Active nav ScrollSpy (IntersectionObserver) ---- */
function initScrollSpy() {
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.site-nav .nav-link');
  if (!sections.length || !navLinks.length) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
  sections.forEach(function (sec) { io.observe(sec); });
}

/* ---- Mobile drawer ---- */
function initMobileMenu() {
  var btn = document.getElementById('menuBtn');
  var drawer = document.getElementById('drawer');
  if (!btn || !drawer) return;

  btn.addEventListener('click', function () {
    var open = drawer.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  drawer.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      drawer.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---- Copy email buttons ---- */
function initCopyButtons() {
  var toast = document.getElementById('toast');
  var toastTimer;

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2200);
  }

  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var msg = btn.getAttribute('data-toast') || 'Copied to clipboard';
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(function () { showToast(msg); });
      } else {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        try { document.execCommand('copy'); showToast(msg); } catch (e) {}
        document.body.removeChild(ta);
      }
    });
  });
}

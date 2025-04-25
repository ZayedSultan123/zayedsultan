// script.js
// Loads Spline Viewer, injects your 3D scene, and handles all interactivity

// 1. Your published Spline scene URL:
const SPLINE_SCENE_URL = 'https://prod.spline.design/whz5YEg5Zr-cAyYa/scene.splinecode';

// 2. Where to find the Spline Viewer module:
const SPLINE_VIEWER_MODULE = 'https://unpkg.com/@splinetool/viewer@latest/build/spline-viewer.js';

document.addEventListener('DOMContentLoaded', () => {
  // A. Init AOS
  if (window.AOS) AOS.init({ duration: 700, once: true });

  // B. Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // C. Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  }

  // D. Smooth scroll (buttons marked data-scroll="targetID")
  document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', () => {
      const sec = document.getElementById(btn.dataset.scroll);
      if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      if (mobileMenu) mobileMenu.classList.add('hidden');
    });
  });

  // E. "Read More" on blog
  const readMoreBtn = document.getElementById('readmore-btn');
  const blogMore    = document.getElementById('blog-more');
  if (readMoreBtn && blogMore) {
    readMoreBtn.addEventListener('click', () => {
      blogMore.classList.remove('hidden');
      readMoreBtn.classList.add('hidden');
    });
  }

  // F. Mailto contact
  const sendBtn = document.getElementById('send-btn');
  if (sendBtn) sendBtn.addEventListener('click', sendMessage);

  // G. Finally: load Spline Viewer and inject your 3D scene
  loadSplineViewer();
});

/**
 * Dynamically load the Spline Viewer web component,
 * then inject a <spline-viewer> tag into #model-container.
 */
function loadSplineViewer() {
  const head = document.head;
  const script = document.createElement('script');
  script.type = 'module';
  script.src  = SPLINE_VIEWER_MODULE;
  script.onload = () => {
    const container = document.getElementById('model-container');
    if (!container) return;
    const spline = document.createElement('spline-viewer');
    spline.setAttribute('url', SPLINE_SCENE_URL);
    // fill the container
    spline.style.width  = '100%';
    spline.style.height = '100%';
    container.appendChild(spline);
  };
  head.appendChild(script);
}

function sendMessage() {
  const name  = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg   = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('Message from ' + name);
  const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
  window.location.href = `mailto:zayedsultan37979@gmail.com?subject=${subject}&body=${body}`;
}

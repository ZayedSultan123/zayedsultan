// script.js
// Core interactivity and 3D model injection for Zayed Sultan portfolio

// Replace this URL with your own Spline scene link if needed
const SPLINE_SCENE_URL = 'https://prod.spline.design/whz5YEg5Zr-cAyYa/scene.splinecode';

// Wait until DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize AOS for scroll animations
  if (window.AOS) AOS.init({ duration: 700, once: true });

  // 2. Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 3. Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 4. Smooth scrolling buttons (elements with data-scroll="sectionID")
  document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      if (mobileMenu) mobileMenu.classList.add('hidden');
    });
  });

  // 5. "Read More" toggle on blog post
  const readMoreBtn = document.getElementById('readmore-btn');
  const blogMore = document.getElementById('blog-more');
  if (readMoreBtn && blogMore) {
    readMoreBtn.addEventListener('click', () => {
      blogMore.classList.remove('hidden');
      readMoreBtn.classList.add('hidden');
    });
  }

  // 6. Send message via mailto
  const sendBtn = document.getElementById('send-btn');
  if (sendBtn) sendBtn.addEventListener('click', sendMessage);

  // 7. Inject 3D model iframe into container
  const modelContainer = document.getElementById('model-container');
  if (modelContainer) {
    const iframe = document.createElement('iframe');
    iframe.src = SPLINE_SCENE_URL;
    iframe.id = 'model-canvas';
    iframe.width = '100%';
    iframe.height = '500';
    iframe.allowFullscreen = true;
    iframe.style.border = 'none';
    modelContainer.appendChild(iframe);
  }
});

/**
 * Compose and open mailto link
 */
function sendMessage() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('Message from ' + name);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
  window.location.href = `mailto:zayedsultan37979@gmail.com?subject=${subject}&body=${body}`;
}

// script.js
// Handles mobile menu, smooth scroll, AOS init, read-more, and mailto

document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  if (window.AOS) AOS.init({ duration: 700, once: true });

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

  // Smooth scroll for buttons with data-scroll
  document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.scroll);
      target?.scrollIntoView({ behavior: 'smooth' });
      mobileMenu.classList.add('hidden');
    });
  });

  // Read more toggle
  const readBtn = document.getElementById('readmore-btn');
  const moreTxt = document.getElementById('blog-more');
  readBtn?.addEventListener('click', () => {
    moreTxt.classList.remove('hidden');
    readBtn.classList.add('hidden');
  });

  // Mailto contact
  document.getElementById('send-btn')?.addEventListener('click', () => {
    const name  = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg   = document.getElementById('message').value.trim();
    const subject = encodeURIComponent('Message from ' + name);
    const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
    window.location.href = `mailto:zayedsultan37979@gmail.com?subject=${subject}&body=${body}`;
  });
});

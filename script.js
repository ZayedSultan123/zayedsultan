// script.js
// Menu, smooth scroll, AOS init, mailto and 3D model loader

document.addEventListener('DOMContentLoaded', () => {
  // AOS
  if (window.AOS) AOS.init({ duration: 700, once: true });

  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

  // Smooth scroll buttons
  document.querySelectorAll('[data-scroll]').forEach(btn =>
    btn.addEventListener('click', () => {
      const sec = document.getElementById(btn.dataset.scroll);
      sec?.scrollIntoView({ behavior: 'smooth' });
      mobileMenu.classList.add('hidden');
    })
  );

  // Read more
  document.getElementById('readmore-btn')?.addEventListener('click', () => {
    document.getElementById('blog-more').classList.remove('hidden');
    document.getElementById('readmore-btn').classList.add('hidden');
  });

  // Mailto contact
  document.getElementById('send-btn')?.addEventListener('click', () => {
    const n = document.getElementById('name').value.trim();
    const e = document.getElementById('email').value.trim();
    const m = document.getElementById('message').value.trim();
    const subj = encodeURIComponent('Message from ' + n);
    const body = encodeURIComponent(`Name: ${n}\nEmail: ${e}\n\n${m}`);
    window.location.href = `mailto:zayedsultan37979@gmail.com?subject=${subj}&body=${body}`;
  });
});

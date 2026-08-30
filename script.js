// script.js - Handles menu drawer, scroll behavior, text toggles, and email action

document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS scroll animations
  if (window.AOS) {
    AOS.init({ duration: 600, once: true });
  }

  // Set current footer year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // App project "Learn More" toggle buttons
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-toggle');
      const targetEl = document.getElementById(targetId);
      
      if (targetEl) {
        targetEl.classList.toggle('hidden');
        btn.textContent = targetEl.classList.contains('hidden') ? 'Learn More' : 'Hide';
      }
    });
  });

  // Mailto contact form trigger
  const sendBtn = document.getElementById('send-btn');
  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();

      if (!name || !email || !msg) {
        alert('Please fill out all fields before sending.');
        return;
      }

      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);
      window.location.href = `mailto:zayedsultan37979@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});

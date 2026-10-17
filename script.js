'use strict';
document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); }
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
// Reset the drawer when crossing into desktop layout or rotating a tablet.
const compactNavigation = window.matchMedia('(max-width: 760px)');
compactNavigation.addEventListener('change', closeMenu);
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
const filters = document.querySelector('.filters');
filters.hidden = false;
filters.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  let count = 0;
  filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.querySelectorAll('.project').forEach(project => {
    const visible = filter === 'all' || project.dataset.category.split(' ').includes(filter);
    project.hidden = !visible;
    if (visible) count++;
  });
  document.querySelector('#filter-status').textContent = `${count} ${count === 1 ? 'project' : 'projects'} shown.`;
}));
const steps = [
  ['01 / START WITH THE PERSON', 'A useful problem comes first.', 'A student needs to revise a long lesson. Define the audience, the source material, and what a useful set of study notes should contain.', '“Help a student review the key ideas without losing the meaning of the original lesson.”'],
  ['02 / MAKE THE REQUEST SPECIFIC', 'Give the model a clear brief.', 'Specify the source, format, and boundaries. A precise instruction makes the output easier to evaluate.', '“Using only the supplied lesson, create five key points and three revision questions. Flag anything the source does not explain.”'],
  ['03 / CHECK THE OUTPUT', 'Fluent does not always mean correct.', 'Compare each point with the original lesson. Look for unsupported claims, missing context, and questions that cannot be answered from the source.', '“Can I trace every claim back to the lesson? What did the response leave out?”'],
  ['04 / ITERATE WITH INTENTION', 'Improve the brief, then test again.', 'Adjust one instruction at a time. Ask for source references or a clearer structure, then repeat the same checks before using the notes.', '“Keep the five-point format. Add a source paragraph reference to each point, and remove any unsupported information.”']
];
document.querySelectorAll('[data-step]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-step]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  const values = steps[Number(button.dataset.step)];
  const panel = document.querySelector('#workflow-content');
  ['.step-label', 'h4', 'p', 'blockquote'].forEach((selector, index) => { panel.querySelector(selector).textContent = values[index]; });
}));
const copyButton = document.querySelector('#copy-email');
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    if (!navigator.clipboard) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('zayedsultan37979@gmail.com');
    status.textContent = 'Email address copied.';
  } catch { status.textContent = 'Please copy the address above, or use Get in touch to open your email app.'; }
});
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigation.querySelectorAll('a').forEach(link => {
        if (link.getAttribute('href') === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}

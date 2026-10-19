const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
const form = document.querySelector('.signup-form');
const message = document.querySelector('.form-message');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.querySelector('input').value.trim();
  message.textContent = `Thanks — we'll save ${email} for the next issue.`;
  form.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();

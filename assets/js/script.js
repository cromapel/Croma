const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');
const menuLinks = document.querySelectorAll('.main-nav a');
const quoteForm = document.querySelector('#quote-form');
const currentYear = document.querySelector('#current-year');

function updateHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 24);
}

function closeMenu() {
  menu.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  document.body.classList.remove('menu-open');
}

menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  document.body.classList.toggle('menu-open', isOpen);
});

menuLinks.forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px' });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

quoteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#nome').value.trim();
  const phone = document.querySelector('#telefone').value.trim();
  const service = document.querySelector('#servico').value;
  const message = document.querySelector('#mensagem').value.trim();

  if (!name || !service || !message) {
    window.alert('Preencha nome, serviço e descrição do projeto.');
    return;
  }

  const whatsappMessage = [
    'Olá, Croma! Vim pelo site e gostaria de solicitar um orçamento.',
    '',
    `Nome: ${name}`,
    `Telefone: ${phone || 'Não informado'}`,
    `Serviço: ${service}`,
    '',
    'Detalhes do projeto:',
    message
  ].join('\n');

  const url = 'https://wa.me/553230253588?text=' + encodeURIComponent(whatsappMessage);
  window.open(url, '_blank', 'noopener,noreferrer');
});

currentYear.textContent = new Date().getFullYear();


const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-nav");
const quoteForm = document.querySelector("#quote-form");
const currentYear = document.querySelector("#current-year");

menuButton.addEventListener("click", () => {
  const open = menu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

const carousel = document.querySelector("[data-carousel]");
const slides = [...carousel.querySelectorAll(".hero-slide")];
const dotsWrap = carousel.querySelector(".carousel-dots");
let activeIndex = 0;
let timer;

slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.setAttribute("aria-label", `Ir para o slide ${index + 1}`);
  dot.addEventListener("click", () => {
    showSlide(index);
    restartTimer();
  });
  dotsWrap.appendChild(dot);
});

const dots = [...dotsWrap.children];

function showSlide(index) {
  activeIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("is-active", i === activeIndex));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === activeIndex));
}

function restartTimer() {
  clearInterval(timer);
  timer = setInterval(() => showSlide(activeIndex + 1), 5500);
}

carousel.querySelector(".next").addEventListener("click", () => {
  showSlide(activeIndex + 1);
  restartTimer();
});

carousel.querySelector(".prev").addEventListener("click", () => {
  showSlide(activeIndex - 1);
  restartTimer();
});

showSlide(0);
restartTimer();

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -30px" });
  revealElements.forEach(el => observer.observe(el));
} else {
  revealElements.forEach(el => el.classList.add("is-visible"));
}

quoteForm.addEventListener("submit", event => {
  event.preventDefault();

  const nome = document.querySelector("#nome").value.trim();
  const telefone = document.querySelector("#telefone").value.trim();
  const categoria = document.querySelector("#categoria").value;
  const mensagem = document.querySelector("#mensagem").value.trim();

  const texto = [
    "Olá, Croma! Vim pelo site e gostaria de solicitar um orçamento.",
    "",
    `Nome: ${nome}`,
    `Telefone: ${telefone || "Não informado"}`,
    `Categoria: ${categoria}`,
    "",
    "Detalhes:",
    mensagem
  ].join("\n");

  window.open(
    "https://wa.me/553230253588?text=" + encodeURIComponent(texto),
    "_blank",
    "noopener,noreferrer"
  );
});

currentYear.textContent = new Date().getFullYear();

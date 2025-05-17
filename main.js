// Inicializar AOS
AOS.init();

// Animación contador para estadísticas
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let current = 0;
    const duration = 2000; // duración total en ms
    const stepTime = 15;
    const steps = Math.ceil(duration / stepTime);
    const increment = target / steps;

    function updateCounter() {
      current += increment;
      if (current < target) {
        counter.innerText = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    }

    updateCounter();
  });
});


// Funcionalidad del menú móvil
const menuBtn = document.getElementById("menu-btn");
const menuMobile = document.getElementById("menu-mobile");
let isMenuOpen = false;

menuBtn.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    menuMobile.classList.remove("hidden", "opacity-0");
    menuMobile.classList.add("block", "opacity-100");
  } else {
    menuMobile.classList.remove("block", "opacity-100");
    menuMobile.classList.add("opacity-0");
    setTimeout(() => {
      menuMobile.classList.add("hidden");
    }, 300); // espera a que termine la transición
  }
});

// Cerrar menú al hacer clic en un enlace
const menuLinks = menuMobile.querySelectorAll("a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    isMenuOpen = false;
    menuMobile.classList.remove("block", "opacity-100");
    menuMobile.classList.add("opacity-0");
    setTimeout(() => {
      menuMobile.classList.add("hidden");
    }, 300);
  });
});



// src/main.ts (o main.js si prefieres JavaScript)

// --- Lógica para el Menú Móvil ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mainNav = document.getElementById('main-nav'); // Para ocultar si es necesario

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // Cambiar ícono de hamburguesa a X y viceversa
    const icon = mobileMenuButton.querySelector('i');
    if (icon) {
      if (mobileMenu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      }
    }
  });

  // Opcional: Cerrar menú móvil al hacer clic en un enlace (si es una SPA o para mejor UX)
  // mobileMenu.querySelectorAll('a').forEach(link => {
  //   link.addEventListener('click', () => {
  //     mobileMenu.classList.add('hidden');
  //     const icon = mobileMenuButton.querySelector('i');
  //     if (icon) {
  //       icon.classList.remove('fa-times');
  //       icon.classList.add('fa-bars');
  //     }
  //   });
  // });
}

// --- Lógica para el Header Pegajoso (Sticky Header) con cambio de estilo al hacer scroll ---
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Puedes ajustar este valor
      header.classList.add('py-3', 'bg-opacity-95', 'backdrop-blur-sm');
      header.classList.remove('py-4');
    } else {
      header.classList.remove('py-3', 'bg-opacity-95', 'backdrop-blur-sm');
      header.classList.add('py-4');
    }
  });
}


// --- Animaciones al hacer scroll (Intersection Observer API) ---
// Esta es una forma moderna y eficiente de manejar animaciones cuando los elementos entran en el viewport.
const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-down');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Opcional: dejar de observar el elemento una vez que ha sido animado
      // observer.unobserve(entry.target);
    } else {
      // Opcional: remover la clase si quieres que la animación se repita cada vez que sale y entra
      // entry.target.classList.remove('is-visible');
    }
  });
}, {
  threshold: 0.1 // El porcentaje del elemento que debe estar visible para disparar la animación (0.1 = 10%)
});

animatedElements.forEach(element => {
  observer.observe(element);
});

// --- Actualizar el año actual en el footer ---
const currentYearSpan = document.getElementById('currentYear');
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear().toString();
}

// --- Placeholder para futuras funcionalidades ---
console.log('Faro del Río Main JS/TS Loaded');

// Puedes añadir más funcionalidades aquí:
// - Carruseles para la galería o testimonios
// - Carga diferida de imágenes (lazy loading) para mejorar rendimiento
// - Integración con APIs si es necesario

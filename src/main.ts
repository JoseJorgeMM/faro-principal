
// src/main.ts - Archivo TypeScript para lógica adicional

// Función para manejar animaciones de scroll
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  // Observar elementos con animación
  const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-down');
  animatedElements.forEach((el) => observer.observe(el));
};

// Función para inicializar la aplicación
export const initApp = () => {
  console.log('Aplicación Faro iniciada');
  
  // Inicializar animaciones cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    initScrollAnimations();
  }
};

// Auto-inicializar si el script se ejecuta directamente
if (typeof window !== 'undefined') {
  initApp();
}

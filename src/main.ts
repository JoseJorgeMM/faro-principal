/* src/style.css - añadir al final */

/* Clases para animaciones de entrada con Intersection Observer */
.animate-fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.animate-fade-in-down {
  opacity: 0;
  transform: translateY(-30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animation-delay-300 {
  transition-delay: 0.3s;
}
.animation-delay-600 {
  transition-delay: 0.6s;
}


.is-visible {
  opacity: 1;
  transform: translateY(0);
}

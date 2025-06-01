// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}", // Asegúrate de que esto cubra tus archivos donde usarás clases de Tailwind
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue-dark': '#0D2F4B', // Azul oscuro predominante del logo (ajustar si es necesario)
        'brand-blue-light': '#4DB0D3', // Turquesa/Azul claro del logo (ajustar si es necesario)
        'brand-pink': '#E5007E',     // Fucsia del logo (ajustar si es necesario)
        'brand-green': '#8BC53F',   // Verde lima del logo (ajustar si es necesario)
        'brand-gray': {
          light: '#F4F7F6',
          DEFAULT: '#A0AEC0',
          dark: '#3A3A3A',
        }
      },
      fontFamily: {
        // Puedes elegir las fuentes que prefieras. Montserrat y Open Sans son buenas opciones modernas.
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      // Aquí puedes añadir otras extensiones como espaciados, breakpoints, etc.
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [
    // Aquí puedes añadir plugins de Tailwind si los necesitas (e.g., @tailwindcss/forms, @tailwindcss/typography)
  ],
} satisfies Config

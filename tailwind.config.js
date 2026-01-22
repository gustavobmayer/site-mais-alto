/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores EXATAS do PDF Mais Alto
        mais: {
          deep: '#142332',       // Fundo Principal (Azul Profundo)
          card: '#1B2836',       // Fundo Secundário (Cartões)
          cyan: '#00CDCD',       // Destaque Principal (Cyan)
          cyanHover: '#00E0E0',  // Cyan Brilhante (Hover)
          text: '#EBEBEB',       // Texto Principal (Off-white)
          muted: '#6E8296',      // Texto de Apoio (Slate Blue)
          border: 'rgba(255, 255, 255, 0.1)', // Bordas sutis
        }
      },
      fontFamily: {
        // Alumni Sans para Títulos (Verticalidade/Aventura)
        display: ['var(--font-alumni)', 'sans-serif'],
        // Montserrat para Leitura (Técnico/Limpo)
        sans: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em', // Para subtítulos pequenos
        tighter: '-0.03em', // Para títulos gigantes
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #142332 0deg, #1B2836 180deg, #142332 360deg)',
      }
    },
  },
  plugins: [],
};
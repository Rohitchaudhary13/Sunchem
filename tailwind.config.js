/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 35s linear infinite',
        marquee2: 'marquee2 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      colors: {
        primary: '#f3bb18',
        secondary: '#f6f6f6',
        dark: '#1c1a18',
        // tertiary: '#9ACD32',
        // ...other color variables
      },
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        grotesk: ['Clash Grotesk', 'sans-serif'],
        outfit: ['Outfit', 'Arial', 'sans-serif'],
        // ...other font variables
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
        'marquee': '7rem',
        'head': '8rem',
        'bigmarquee': '15rem',
        'litmarquee': '1rem',
        // ...other font size variables
      },
      // ...other style variables
    },
  },
  plugins: [],
}

// #D3FD50

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#1a1a1a',
        },
        // Beige and stone-harmonious accent colors
        beige: {
          50: '#fefcf5',
          100: '#fef7e7',
          200: '#fdedc4',
          300: '#fbdd96',
          400: '#f8c766',
          500: '#f5b041',
          600: '#e89e2b',
          700: '#c17c1e',
          800: '#9d651b',
          900: '#7f5218',
          950: '#452a0a',
        },
        warmStone: {
          50: '#faf9f7',
          100: '#f4f2ee',
          200: '#e8e4dc',
          300: '#d9d2c4',
          400: '#c5b8a4',
          500: '#b0a088',
          600: '#9a8a70',
          700: '#80725d',
          800: '#685e4e',
          900: '#544c41',
          950: '#2b2621',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7cfc8',
          300: '#a1afa4',
          400: '#7a8b7e',
          500: '#5f7063',
          600: '#4a5a4e',
          700: '#3d4941',
          800: '#333c35',
          900: '#2c322e',
          950: '#161a17',
        },
        dustyRose: {
          50: '#faf8f8',
          100: '#f4efef',
          200: '#e8dedd',
          300: '#d6c4c2',
          400: '#bfa19e',
          500: '#a58078',
          600: '#8f675e',
          700: '#75544d',
          800: '#614742',
          900: '#523e3a',
          950: '#2b1f1d',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};
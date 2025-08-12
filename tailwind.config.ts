import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#22d3ee',   // cyan-400
          emphasis: '#06b6d4',  // cyan-500
          fg: '#041016'
        }
      },
      boxShadow: {
        soft: '0 12px 30px rgba(0,0,0,.35)'
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: [],
} satisfies Config


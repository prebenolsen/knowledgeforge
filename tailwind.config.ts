import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // KnowledgeForge palette — deep indigo night with an ember accent
        ink: {
          900: '#0f0f1a',
          800: '#15152b',
          700: '#1a1a2e',
          600: '#232342',
          500: '#2e2e54'
        },
        ember: {
          400: '#ff9e5e',
          500: '#f97316',
          600: '#ea580c'
        },
        mist: {
          100: '#f4f4fb',
          200: '#d8d8ec',
          300: '#a8a8c8',
          400: '#7a7a9e'
        },
        good: '#22c55e',
        bad: '#ef4444'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        card: '1rem'
      }
    }
  },
  plugins: []
} satisfies Config;

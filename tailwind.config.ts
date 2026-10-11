import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#191915',
        surface: '#262624',
        'surface-2': '#2f2e2b',
        border: '#3a3935',
        fg: {
          DEFAULT: '#faf9f5',
          muted: '#b0aea5',
          subtle: '#8a8880',
        },
        accent: {
          DEFAULT: '#cc785c',
          hover: '#e08c6b',
        },
      },
      fontFamily: {
        serif: [
          '"IBM Plex Serif"',
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'serif',
        ],
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      maxWidth: {
        container: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
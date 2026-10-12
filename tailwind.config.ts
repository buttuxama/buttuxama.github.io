import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#1e222a',
        panel: '#282c34',
        'panel-hover': '#2c313c',
        border: '#3b4048',
        fg: {
          DEFAULT: '#abb2bf',
          muted: '#636d83',
          subtle: '#4b5263',
        },
        accent: {
          DEFAULT: '#61afef',
          hover: '#78c2ff',
        },
        syntax: {
          string: '#98c379',
          number: '#d19a66',
          keyword: '#c678dd',
          comment: '#5c6370',
        },
      },
      fontFamily: {
        mono: [
          '"IBM Plex Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'monospace',
        ],
        sans: [
          '"IBM Plex Sans"',
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
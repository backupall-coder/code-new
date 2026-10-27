/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        meta: {
          blue: '#0064E0',
          'blue-hover': '#0056C7',
          'blue-active': '#004DB3',
          link: '#1877F2',
          'blue-light': '#33B5FF',
          'blue-electric': '#00A3FF',
          navy: '#053D87',
          dark: '#1C2B33',
          'dark-deep': '#1b2a34',
          bg: '#FFFFFF',
          'bg-soft': '#F5F7FA',
          'bg-page': '#F0F2F5',
          surface: '#FFFFFF',
          'surface-soft': '#F5F7FA',
          border: '#CED0D4',
          'border-light': '#E4E6EB',
          text: '#1C1E21',
          'text-body': '#465A69',
          'text-secondary': '#65676B',
          'text-muted': '#8595A4',
          accent: '#833AB4',
          'accent-magenta': '#C13584',
        },
      },
      maxWidth: {
        'mv-content': '1328px',
      },
      spacing: {
        'mv-section': 'clamp(3rem, 5vw, 5rem)',
        'mv-section-lg': 'clamp(4rem, 7vw, 6rem)',
      },
      fontSize: {
        'mv-xs': ['0.75rem', { lineHeight: '1.5' }],
        'mv-sm': ['0.8125rem', { lineHeight: '1.55' }],
        'mv-base': ['0.9375rem', { lineHeight: '1.65' }],
        'mv-lg': ['1.0625rem', { lineHeight: '1.65' }],
        'mv-xl': ['1.125rem', { lineHeight: '1.6' }],
      },
      boxShadow: {
        'mv-sm': '0 1px 3px rgba(0, 0, 0, 0.06)',
        'mv-md': '0 4px 16px rgba(0, 100, 224, 0.08)',
        'mv-lg': '0 12px 32px rgba(5, 61, 135, 0.1)',
        'mv-btn': '0 4px 14px rgba(0, 100, 224, 0.28)',
        'mv-btn-hover': '0 6px 20px rgba(0, 100, 224, 0.34)',
      },
      borderRadius: {
        'mv-sm': '10px',
        'mv-md': '16px',
        'mv-lg': '20px',
        'mv-xl': '24px',
      },
    },
  },
  plugins: [],
}

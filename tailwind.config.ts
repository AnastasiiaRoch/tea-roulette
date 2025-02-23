import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/feature/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        border: 'var(--border)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        text: 'var(--text)',
      },
      gridTemplateRows: {
        layout: 'max-content auto max-content',
      },
      keyframes: {
        appear: {
          from: { marginTop: "40px", opacity: "0" },
          to: { marginTop: "0", opacity: "1" },
        },
      },
      animation: {
        appear: "appear 0.3s ease-out",
      },
    },
  },
  plugins: [
    function ({ addVariant }: { addVariant: (name: string, option: string) => void }) {
      addVariant('first', '&:first-child');
      addVariant('onlyChild', '&:only-child');
      addVariant('last', '&:last-child');
      addVariant('children', '& > *');
      addVariant('next', '& + &');
    },
  ],
} satisfies Config;

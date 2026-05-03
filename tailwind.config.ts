import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'eco-green': '#10b981',
        'eco-dark': '#1f2937',
        'eco-light': '#f3f4f6',
        'eco-accent': '#06b6d4',
      },
      backgroundImage: {
        'gradient-eco': 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
      },
    },
  },
  plugins: [],
}
export default config

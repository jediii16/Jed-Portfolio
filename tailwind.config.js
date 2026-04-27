/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        sand: '#f5efe6',
        coral: '#ff7a59',
        teal: '#2f7c7c',
        gold: '#f1c86b',
      },
      boxShadow: {
        soft: '0 30px 80px rgba(15, 23, 42, 0.12)',
      },
      fontFamily: {
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at top left, rgba(255,122,89,0.22), transparent 35%), radial-gradient(circle at top right, rgba(47,124,124,0.18), transparent 30%), linear-gradient(135deg, #fff9f2 0%, #ffffff 45%, #f5fbfb 100%)',
      },
    },
  },
  plugins: [],
};

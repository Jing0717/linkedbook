/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true, // 水平置中
      padding: '1rem', // 水平間距
      screens: {
        // sm: '600px',
        md: '926px',
      },
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: '#046CCE',
          light: '#7CC0FF',
          neutral: '#2186E5',
          dark: '#334657',
          logo: '#0C4B6F',
        },
        gray: {
          holder: '#D1D7DD',
        },
      },
      backgroundImage: {
        member: "url('/linkedbook_member.jpg')",
        people3: "url('/linkedbook_people03.png')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",    // Folder App Router Next.js
    "./pages/**/*.{js,ts,jsx,tsx}",  // (Opsional jika pakai pages/)
    "./components/**/*.{js,ts,jsx,tsx}", // Komponen reusable
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E8B57',     // Hijau Utama
        secondary: '#A9F0C5',   // Hijau Muda Sekunder
        accent: '#3CB371',      // Tambahan aksen
        background: '#F8FFF9',  // Warna dasar lembut
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'], // Font default modern
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 10px rgba(0, 0, 0, 0.1)',
        glow: '0 0 10px rgba(46, 139, 87, 0.5)',
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [

  ],
};
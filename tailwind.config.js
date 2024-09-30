/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        myColor: "#ebcc78",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
/**
 * file tailwind config js file yang dibuat otomatis oleh nextjs saat
 * instalasi untuk konfigurasi tailwindcss seperti warna custom, gradien,ukuran,dll
 * detail cek di https://tailwindcss.com/docs/configuration
 */

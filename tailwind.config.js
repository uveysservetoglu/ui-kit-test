/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{ts,tsx}", // UI-kit bileşenlerin buradan taranacak
    "./app/**/*.{ts,tsx}",        // Eğer app directory varsa
    "./pages/**/*.{ts,tsx}",      // pages-based projeler için
    "./src/**/*.{ts,tsx}",        // src/ yapısı kullanılıyorsa
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563eb", // kendi marka rengi eklemek istersen
          dark: "#1e40af",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
  ],
}

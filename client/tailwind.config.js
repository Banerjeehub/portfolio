/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-br": "linear-gradient(to bottom right, #3f5efb, #fc466b)",
      },
      textColor: {
        "transparent-gradient": "transparent",
      },
      backgroundClip: {
        text: "text",
      },
    },
  },
  plugins: [],
};

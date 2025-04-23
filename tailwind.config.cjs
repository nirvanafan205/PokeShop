// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Ms Madi"],
      },
      backgroundImage: {
        banner: 'url("/src/Imgs/banner.jpg")',
      },
    },
  },
  plugins: [],
};

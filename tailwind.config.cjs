// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Ms Madi"],
      },
      backgroundImage: {
        banner: 'url("/src/Imgs/multipoke.jpg")',
        pokeBanner: 'url("/src/Imgs/pokemonDisplay.jpg")',
      },
    },
  },
  plugins: [],
};

import React, { useEffect, useState } from "react";
import pokemon from "pokemontcgsdk";
import logo from "../Imgs/pokeLogo.jpg";
import useEmblaCarousel from "embla-carousel-react";

const LandingPage = () => {
  const [images, setImages] = useState([]);
  const pokemonSet = [
    "base1-",
    "base2-",
    "neo1-",
    "neo2-",
    "sm12-",
    "swsh7-",
    "swsh9-",
    "sv8pt5-",
  ];

  const pokeSets = [];

  function pokeSet() {
    const series = pokemonSet;
    let i = 0;

    while (i < 3) {
      let choice = Math.floor(Math.random() * (7 - 1) + 1);
      let cardNum = Math.floor(Math.random() * (64 - 1) + 1);
      if (!pokeSets.includes(series[choice])) {
        pokeSets.push(series[choice]);
        cardNum.toString();
        pokeSets[i] += cardNum;
        i++;

        console.log("The number entered is " + choice);
        console.log("The card number entered is " + cardNum);
      }
    }
  }

  pokeSet();

  const [emblaRef] = useEmblaCarousel();

  useEffect(() => {
    // Access the API key from the environment variables.
    const apiKey = import.meta.env.VITE_POKEMON_API_KEY;
    pokemon.configure({ apiKey });

    for (let j = 0; j < 3; j++) {
      pokemon.card
        .find(pokeSets[j])
        .then((card) => {
          // Check that the card and its images exist
          if (card && card.images && card.images.small) {
            console.log("Small image URL:", card.images.small);
            console.log("The image should be " + pokeSets[j]);
            console.log("This should be final " + pokeSets);
            setImages((prevImages) => [...prevImages, card.images.small]);
          } else {
            console.error("Card data does not contain the expected image.");
          }
        })
        .catch((err) => {
          console.error("Error fetching Pokémon card:", err);
        });
    }
  }, []);

  return (
    <>
      <header className="flex flex-row bg-blue-300 h-18 p-4 border-4 border-purple-500">
        <div className="basis-full text-left">
          <img className="rounded-full h-16 w-18" src={logo} alt="pokeLogo" />
        </div>
        <div className="basis-full text-center text-purple-500 font-body text-5xl">
          Royalty Poke Shop
        </div>
        <div className="basis-full text-right"> login button</div>
      </header>

      <section className="bg-pink-500 h-72 flex flex-row justify-center items-center">
        <div className="flex flex-row gap-4 items-center justify-center embla" ref={emblaRef}>
              {images[0] ? (
                <img className="h-64" src={images[0]} alt="Pokémon Card 1" />
              ) : (
                <div>Loading…</div>
              )}

              {images[1] ? (
                <img className="h-64" src={images[1]} alt="Pokémon Card 2" />
              ) : (
                <div>Loading…</div>
              )}

              {images[2] ? (
                <img className="h-64" src={images[2]} alt="Pokémon Card 3" />
              ) : (
                <div>Loading…</div>
              )}
        </div>
      </section>

      <footer className="bg-banner bg-cover bg-center h-48"></footer>
    </>
  );
};

export default LandingPage;

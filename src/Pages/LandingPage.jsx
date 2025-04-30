import React, { useEffect, useState } from "react";
import pokemon from "pokemontcgsdk";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../Imgs/pokeLogo.jpg";
import evoskies from "../Imgs/evolingSkies.png";
import stars from "../Imgs/brilliantStars.png";
import eclipes from "../Imgs/cosmicEclipes.png";
import stellar from "../Imgs/stellarCrown.png";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const pokeSets = [];

  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 2800, stopOnInteraction: false }),
  ]);

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

        <div className="basis-full text-right">
          {!isAuthenticated ? (
            <button
              onClick={() => loginWithRedirect()}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Log In
            </button>
          ) : (
            <>
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Log Out
              </button>
            </>
          )}
        </div>
      </header>

      <section className="bg-fuchsia-400 h-64 flex justify-center items-center">
        <div className="text-center">
          <h2>Welcome to Royalty Poke Shop!</h2>
          <h1 className="font-bold animate-pulse">WE'LL BUY YOUR SINGLE AND SEALED PRODUCTS!</h1>
          <h2>Come and look at what we have to offer!</h2>
        </div>
        <div className="overflow-hidden w-full max-w-lg" ref={emblaRef}>
          <div className="flex">
            {images.map((src, i) => (
              <div key={i} className="flex-[0_0_100%] p-2">
                <img
                  src={src}
                  alt={`Pokémon card ${i + 1}`}
                  className="h-64 mx-auto select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center flex flex-col gap-8">
          <img
            className="rounded-full h-24 w-18 "
            src={evoskies}
            alt="pokeLogo"
          />
          <img
            className="rounded-full h-24 w-18"
            src={eclipes}
            alt="pokeLogo"
          />
        </div>

        <div className="text-center flex flex-col gap-8">
          <img
            className="rounded-full h-24 w-18 "
            src={stars}
            alt="pokeLogo"
          />
          <img
            className="rounded-full h-24 w-18"
            src={stellar}
            alt="pokeLogo"
          />
        </div>
      </section>

      <footer className="bg-banner bg-cover bg-center h-64"></footer>
    </>
  );
};

export default LandingPage;
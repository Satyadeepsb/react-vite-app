import React, { useEffect, useState } from "react";
import { getAPI } from "../helper/axio-helper";

interface Ability {
  name: string;
  url: string;
  is_hidden: boolean;
  slot: number;
}

interface Pokemon {
  name: string;
  url: string;
  image: string;
  abilities: Ability[];
}

export default function PokeComponent() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [hidden, setHidden] = useState("false");
  const [pokemon, setPokemon] = useState<Pokemon>();

  const fetchPokemonDetail = async (url: string, isImage = false) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const imageData = await (isImage ? response.blob() : response.json()); // You can use response.json() for JSON data
        return imageData;
      } else {
        throw new Error("Failed to fetch image");
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const fetchAllPokemonDetails = async (urls: string[], isImage = false) => {
    const promises = urls.map((url) => fetchPokemonDetail(url, isImage));
    try {
      const data = await Promise.all(promises);
      // images now contains the data for all 20 images
      // You can process the image data here
      console.log(data);
      return data;
    } catch (error) {
      console.error("One or more API calls failed:", error);
      return null;
    }
  };

  const extractPokemonNumber = (url: string) => {
    const trimmedUrl = url.replace(/\/$/, ""); // Remove the last slash
    const regex = /\/(\d+)$/; // Matches the number at the end of the URL
    const match = trimmedUrl.match(regex);
    if (match) {
      const number = match[1];
      return number;
    }
    return 0;
  };

  const getPokemons = () => {
    getAPI(`/api/v2/pokemon/`)
      .then((pokemonResponse: any) => {
        console.log(pokemonResponse);
        const apiResponse = pokemonResponse?.data?.results as Pokemon[];

        const pokemonDetails = apiResponse.map((pokemon) => {
          return {
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractPokemonNumber(
              pokemon.url
            )}.png`,
            url: pokemon.url,
          } as Pokemon;
        });

        fetchAllPokemonDetails(
          pokemonDetails.map((pokemonDetail) => pokemonDetail.url),
          false
        ).then((resData: any) => {
          console.log("resData");
          console.log(resData);
          resData.map((res: any, index: number) => {
            const abilitiesLocal = res.abilities.map((abl: any) => {
              return {
                name: abl.ability.name,
                url: abl.ability.url,
                is_hidden: abl.is_hidden,
                slot: abl.slot,
              } as Ability;
            });
            pokemonDetails[index].abilities = abilitiesLocal;
          });
          console.log("pokemonDetails");
          console.log(pokemonDetails);

          setPokemons(pokemonDetails);
          setPokemon(pokemonDetails[0]);
        });

        // const allPokemonDetailPromise = fetchAllPokemonDetails(
        //   pokemonDetailUrls,
        //   false
        // );
        // allPokemonDetailPromise.then((d) => {
        //   const allPokemonImageUrls = d?.map(
        //     (detail) => detail.sprites.other.dream_world.front_default
        //   ) as string[];
        //   fetchAllPokemonDetails(allPokemonImageUrls, true).then(
        //     (pokemonImages: any) => {
        //       const finalResponse = apiResponse.map((res, index) => {
        //         return {
        //           name: res.name,
        //           image: URL.createObjectURL(pokemonImages[index]),
        //           url: res.url,
        //         } as Pokemon;
        //       });
        //       console.log("finalResponse==================================");
        //       console.log(finalResponse);

        //       setPokemons(finalResponse);
        //     }
        //   );
        // });
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const handleSumbmit = (e: Event) => {
    e.preventDefault();
    console.log(pokemon);
  };

  const handleChange = (e: any) => {
    console.log("change ");
    console.log(e.target.value);
    const pokemonLocal = pokemons.find((pok) => pok.url === e.target.value);
    console.log(pokemonLocal);
    setPokemon(pokemonLocal);
  };

  const handleHidden = (e: any) => {
    console.log("hidden " + e.target.value);
    setHidden(e.target.value);
  };

  return (
    <div>
      <main>
        {pokemon ? (
          <div
            key={
              Math.floor(Math.random()) +
              pokemon.name +
              Math.floor(Math.random()) +
              pokemon.name
            }
          >
            <img src={`${pokemon.image}`} alt="" />
            <h2 className="title">{pokemon.name}</h2>
            <ul style={{ listStyleType: "none" }}>
              {pokemon.abilities.map((abl: Ability) =>
                hidden == "true" && abl.is_hidden ? null : (
                  <li key={Math.floor(Math.random()) + abl.name}>{abl.name}</li>
                )
              )}
            </ul>
          </div>
        ) : null}
      </main>
      <form>
        <div>
          <select name="" id="" onChange={handleChange}>
            {pokemons?.length > 0 ? (
              pokemons.map((pokemon: any, i: number) => (
                <option
                  value={pokemon.url}
                  key={Math.floor(Math.random()) + pokemon.name}
                >
                  {pokemon.name}
                </option>
              ))
            ) : (
              <>NO Pokemon Found</>
            )}
          </select>
        </div>
        <div>
          <label htmlFor="Hidden">Hidden</label>
          <input
            onChange={handleHidden}
            type="radio"
            value="true"
            name="prop"
            id="Hidden"
          />
          <label htmlFor="Not_Hidden">Not Hidden</label>
          <input
            onChange={handleHidden}
            type="radio"
            value="false"
            name="prop"
            id="Not_Hidden"
          />
        </div>
        {/* <div>
          <button
            type="button"
            onSubmit={() => handleSumbmit}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div> */}
      </form>
    </div>
  );
}

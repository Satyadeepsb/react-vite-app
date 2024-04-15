import React, { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
  image: string;
}

export default function PokemonComponent() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  return (
    <div>
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
            onChange={() => setHidden("true")}
            type="radio"
            value={hidden}
            name="prop"
            id="Hidden"
          />
          <label htmlFor="Not_Hidden">Not Hidden</label>
          <input
            onChange={() => setHidden("false")}
            type="radio"
            value={hidden}
            name="prop"
            id="Not_Hidden"
          />
          {hidden}
          {pokemon?.name}
        </div>
        <div>
          <button
            type="button"
            onSubmit={() => handleSumbmit}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

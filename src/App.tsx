import { useEffect, useState } from "react";
import "./App.scss";
import { getAllPokemon, getPokemon } from "./utils/pokemon.ts";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  const loadPokemon: any = async (data: any): void => {
    const loadPokemonData: any = await Promise.all(
      data.map((pokemon: any) => {
        const pokemonRecord: any = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(loadPokemonData);
  };

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      const res: any = await getAllPokemon(initialURL);
      // 各ポケモンの詳細なデータを取得
      loadPokemon(res.results);

      setLoading(false);
    };

    fetchPokemonData();
  }, []);

  console.log(pokemonData);

  return (
    <>
      {loading ? <p>ロード中・・・</p> : <p>ポケモンデータを取得しました</p>}
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png" />
      ;
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.scss";
import { getAllPokemon, getPokemon } from "./utils/pokemon.ts";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      const res: any = await getAllPokemon(initialURL);
      console.log(res);

      setLoading(false);
    };

    fetchPokemonData();
  }, []);

  return (
    <>
      {loading ? <p>ロード中・・・</p> : <p>ポケモンデータを取得しました</p>}
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png" />
      ;
    </>
  );
}

export default App;

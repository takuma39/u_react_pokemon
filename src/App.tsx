import { useEffect, useState } from "react";
import "./App.scss";
import Card from "./components/Card/Card";
import PagiNav from "./components/PagiNav/PagiNav";
import { getAllPokemon, getPokemon } from "./utils/pokemon.ts";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [prevUrl, setPrevUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");

  const loadPokemon: any = async (data: any): void => {
    const loadPokemonData: any = await Promise.all(
      data.map((pokemon: any) => {
        const pokemonRecord: any = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(loadPokemonData);
  };

  const handlePrevPage = async () => {
    // 全てのポケモンデータを取得
    const res: any = await getAllPokemon(prevUrl);
    loadPokemon(res.results);
    setPrevUrl(res.previous);
    setNextUrl(res.next);
  };
  const handleNextPage = async () => {
    // 全てのポケモンデータを取得
    const res: any = await getAllPokemon(nextUrl);
    loadPokemon(res.results);
    setPrevUrl(res.previous);
    setNextUrl(res.next);
  };

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      const res: any = await getAllPokemon(initialURL);
      // 各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      console.log(res);

      setLoading(false);
      setPrevUrl(res.previous);
      setNextUrl(res.next);
    };

    fetchPokemonData();
  }, []);

  return (
    <>
      {loading ? (
        <p>ロード中・・・</p>
      ) : (
        <>
          <PagiNav handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
          <div className="flex flex-wrap">
            {pokemonData.map((pokemon, index) => {
              return <Card key={index} pokemon={pokemon} />;
            })}
          </div>
          <PagiNav handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
        </>
      )}
    </>
  );
}

export default App;

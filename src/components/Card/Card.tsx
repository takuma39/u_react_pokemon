import React from "react";

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <p className="cardName">{pokemon.name}</p>
      <div className="cardTypes">
        <p>タイプ</p>
        {pokemon.types.map((type) => {
          return <span className="px-1">{type.type.name}</span>;
        })}
        <div className="cardInfo">
          <div className="cardData">
            <p className="title">重さ：{pokemon.weight}</p>
            <p className="title">高さ：{pokemon.height}</p>
            <p className="title">
              アビリティ：{pokemon.abilities[0].ability.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import { useState } from "react";
import "./Item.css";

const Item = ({ card }) => {
  const [showLogo, setShowLogo] = useState(true);

  return (
    <div className="card" onClick={() => setShowLogo(!showLogo)}>
      {showLogo ? (
        <>
          <img className="card-logo" src={card.img} alt="logo" />
          <h3 className="card-title">{card.name}</h3>
        </>
      ) : (
        <ul className="list">
          {card.infos.map((optelement, i) => {
            return <li key={i}>{optelement}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Item;

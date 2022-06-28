import { useState } from "react";
import "./Item.css";

const Item = ({ card }) => {
  const [showLogo, setShowLogo] = useState(true);

  const { name, img, infos } = card;

  return (
    <div className="card" onClick={() => setShowLogo(!showLogo)}>
      {showLogo ? (
        <div>
          <img className="card-logo" src={img} alt="logo" />
          <h3 className="card-title">{name}</h3>
        </div>
      ) : (
        <ul className="list">
          {infos.map((element, i) => {
            return <li key={i}>{element}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Item;

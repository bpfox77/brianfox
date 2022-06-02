import React from "react";
import weth from "../../Assets/weth.png";
import "./collectionCard.css";

const CollectionCard = ({ koan, id, name, traits, image, setSelectedKoan }) => {
  return (
    <div className="collectionCard">
      <img
        src={image}
        alt=""
        onClick={() => {
          setSelectedKoan(id);
        }}
      />
      <div className="details">
        <div className="name">
          {name} <div className="id"> .#{id}</div>
        </div>

        <div className="priceContainer">
          {/* <img src={weth} className="wethImage" alt="" /> */}
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;

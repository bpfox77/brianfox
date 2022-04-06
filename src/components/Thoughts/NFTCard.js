import React from "react";

const NFTCard = ({ nft }) => {
  return (
    <div className="card nft-card">
      <img src={nft.meta.content[0].url} className="nft-image" />

      <div className="card">{nft.meta.name}</div>
    </div>
  );
};

export default NFTCard;

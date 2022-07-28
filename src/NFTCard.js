import React from 'react';

const NFTCard = ({ nft }) => {
  return (
    <div className="card nft-card">
      <img src={nft.image_preview_url} className="nft-image" />
      <div className="card content">
        <div className="card">{nft.name}</div>
      </div>
      <div>hello</div>
    </div>
  );
};

export default NFTCard;

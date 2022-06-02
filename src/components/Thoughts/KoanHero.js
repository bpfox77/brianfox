import React from "react";
import "./koanHero.css";

const KoanHero = ({ selectedKoan, koanListData }) => {
  const koanHero = koanListData.filter((obj) => {
    return obj.token_id === String(selectedKoan);
  });

  return (
    <div className="main">
      <div className="mainContent">
        <div className="KoanHighlight">
          <div className="KoanContainer">
            <img className="selectedKoan" src={koanHero[0].image_url} alt="" />
          </div>
        </div>

        <div className="KoanDetails" style={{ color: "#fff" }}>
          <div className="title">
            {koanHero[0].name}
            <span className="itemNumber">....#{koanHero[0].token_id}</span>
          </div>
          <div className="collectionDescription">
            {" "}
            <b className="purple"> THOUGHTS</b> tell the monomyth of timeless
            existence. <br /> In it's totality, it is{" "}
            <b className="purple"> science fiction satori</b> <br />
            with each of the 49 pieces being a <b className="purple"> Koan.</b>
            <div
              className="openSea"
              onClick={() => window.open("https://opensea.io/", "_blank")}
            >
              {" "}
              View the collection on OpenSea
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoanHero;

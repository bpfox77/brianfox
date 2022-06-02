import React, { useState, useEffect } from 'react';
import './main.css';

const Main = ({ selectedKoan, koanListData }) => {
  const [activeKoan, setActiveKoan] = useState(koanListData[0]);

  useEffect(() => {
    setActiveKoan(koanListData[selectedKoan]);
  }, [koanListData, selectedKoan]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="KoanHighlight">
          <div className="KoanContainer">
            <img className="selectedKoan" src={activeKoan.image_url} alt="" />
          </div>
        </div>

        <div className="KoanDetails" style={{ color: '#fff' }}>
          <div className="title">
            {activeKoan.name}
            <span className="itemNumber">....#{activeKoan.token_id}</span>
          </div>
          <div className="collectionDescription">
            {' '}
            <b className="purple"> THOUGHTS</b> tell the monomyth of timeless
            existence. <br /> In it's totality, it is{' '}
            <b className="purple"> science fiction satori</b> <br />
            with each of the 49 pieces being a <b className="purple"> Koan.</b>
            <div
              className="openSea"
              onClick={() => window.open('https://opensea.io/', '_blank')}
            >
              {' '}
              View the collection on OpenSea
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

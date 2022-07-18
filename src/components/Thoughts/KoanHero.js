import React from 'react';
import './koanHero.css';

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
        <div className="KoanDetails" style={{ color: '#fff' }}>
          <div className="title">
            {koanHero[0].name}
            {/* <span className="itemNumber">....#{koanHero[0].token_id}</span> */}
          </div>

          <div className="collectionDescription">
            <span className="green">
              <span className="descText">
                {' '}
                THOUGHTS tell the monomyth of timeless existence.
              </span>{' '}
            </span>{' '}
            In it's totality, the collection is a transcendent hero's journey
            beyond spacetime. It is Science Fiction Satori with each of the 49
            pieces being a Koan unto itself.
          </div>

          <div
            className="openSea"
            onClick={() => window.open('https://opensea.io/', '_blank')}
          >
            {' '}
            <u>View the collection on OpenSea</u>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoanHero;

import React from 'react';
import './main.css';

const ThoughtHeader = () => {
  return (
    <div className="nft-header">
      <h5>
        {' '}
        <div className="purple1">
          Thoughts are Science Fiction Satori. Each one a Koan
        </div>
        <div
          className="openSea"
          onClick={() => window.open('https://opensea.io/', '_blank')}
        >
          {' '}
          View the collection on OpenSea
        </div>
      </h5>
      <br />
    </div>
  );
};

export default ThoughtHeader;

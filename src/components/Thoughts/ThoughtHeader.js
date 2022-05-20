import React from 'react';
import './main.css';

const ThoughtHeader = () => {
  return (
    <div className="nft-header">
      <h5>
        {' '}
        <div className="purple1">
          Thoughts tell the monomyth of timeless existence. In total, it is
          Science Fiction Satori with each one a Koan.
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

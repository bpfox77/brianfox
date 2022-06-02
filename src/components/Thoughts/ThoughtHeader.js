import React from 'react';
import './main.css';

const ThoughtHeader = () => {
  return (
    <div className="nft-header">
      <h5>
        {' '}
        <p className="home-about-body2"></p>
        <b className="purple"> THOUGHTS</b> tell the monomyth of timeless
        existence. In it's totality, it is{' '}
        <b className="purple"> Science Fiction Satori</b> with each of the 49
        pieces a<b className="purple"> Koan.</b> <br />
        Future collections will feature guest authors and artists and enable
        individuals to mint their own thoughts.
        <br />
        These thoughts will be displayed in an interactive exhibit,{' '}
        <b className="purple"> "I WAS HERE".</b>{' '}
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

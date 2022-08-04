// left the thoughts components alone for future api attempts in unused files
// if i revisit with another collection . . . perhaps look at a loading function to prevent
// a react render timeout  - pure supposition at this point.

import React, { useRef } from 'react';
import styled from 'styled-components';
import './thoughts.css';

import img1 from './assets/Nfts/1_Apes.svg';
import img2 from './assets/Nfts/2_Photons.svg';
import img3 from './assets/Nfts/3_Antennae.svg';
import img4 from './assets/Nfts/4_Clues.svg';
import img5 from './assets/Nfts/5_Atoms.svg';
import img6 from './assets/Nfts/6_ECCO.svg';
import img7 from './assets/Nfts/7_Laboratories.svg';
import img8 from './assets/Nfts/8_Downloads.svg';
import img9 from './assets/Nfts/9_Dreams.svg';
import img10 from './assets/Nfts/10_Radar.svg';
import img11 from './assets/Nfts/11_Beacons.svg';
import img12 from './assets/Nfts/12_Reality.svg';
import img13 from './assets/Nfts/13_Riddles.svg';
import img14 from './assets/Nfts/14_Fractals.svg';
import img15 from './assets/Nfts/15_Linearity.svg';
import img16 from './assets/Nfts/16_Bits.svg';
import img17 from './assets/Nfts/17_Stargate.svg';
import img18 from './assets/Nfts/18_Entangled.svg';
import img19 from './assets/Nfts/19_Threshold.svg';
import img20 from './assets/Nfts/20_Vessels.svg';
import img21 from './assets/Nfts/21_Magic.svg';
import img22 from './assets/Nfts/22_Simulations.svg';
import img23 from './assets/Nfts/23_Entities.svg';
import img24 from './assets/Nfts/24_Upgrades.svg';
import img25 from './assets/Nfts/25_Alchemy.svg';
import img26 from './assets/Nfts/26_Indra.svg';
import img27 from './assets/Nfts/27_Synthesis.svg';
import img28 from './assets/Nfts/28_Engine.svg';
import img29 from './assets/Nfts/29_Traceroute.svg';
import img30 from './assets/Nfts/30_Flowing.svg';
import img31 from './assets/Nfts/31_Cathedral.svg';
import img32 from './assets/Nfts/32_Gateless.svg';
import img33 from './assets/Nfts/33_Avatars.svg';
import img34 from './assets/Nfts/34_Surrender.svg';
import img35 from './assets/Nfts/35_Nectar.svg';
import img36 from './assets/Nfts/36_Now.svg';
import img37 from './assets/Nfts/37_Self.svg';
import img38 from './assets/Nfts/38_Symbols.svg';
import img39 from './assets/Nfts/39_Ceremony.svg';
import img40 from './assets/Nfts/40_Metamorphis.svg';
import img41 from './assets/Nfts/41_Resurrection.svg';
import img42 from './assets/Nfts/42_Atman.svg';
import img43 from './assets/Nfts/43_Divergence.svg';
import img44 from './assets/Nfts/44_Cipher.svg';
import img45 from './assets/Nfts/45_Gnosis.svg';
import img46 from './assets/Nfts/46_Transcribe.svg';
import img47 from './assets/Nfts/47_Readouts.svg';
import img48 from './assets/Nfts/48_Equanimity.svg';
import img49 from './assets/Nfts/49_Perception.svg';

import ETH from './assets/icons8-ethereum-48.png';

const NFTRow = styled.div`
  margin-top: 0.1rem 0;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: flex-start;
  overflow-x: scroll;
`;

const NftItem = ({ img, number = 0, price = 0, passRef, name = '' }) => {
  let expand = (e) => {
    // research a solution here
    passRef.current.zoom = 'running';
  };

  return (
    <div className="imgContainer" onClick={(e) => expand(e)}>
      <img width={800} height={800} src={img} alt={name} />
      <div className="details">
        <div>
          <span>{name}</span> <br />
          <h7>#{number}</h7>
        </div>

        <div>
          <span>Price </span>
          <div className="price">
            <div>
              <img width={100} height={100} src={ETH} alt="ETH" />
            </div>
            <h7>{Number(price).toFixed(1)}</h7>
          </div>
        </div>
      </div>
    </div>
  );
};

const Game = () => {
  const Row1Ref = useRef(null);

  //removed bootsrap containers from this page and replaced with divs
  // to maximize space on mobile. breakpoints aren't as smooth as bootstrap
  // and hard to perfectly match margins, but good enough for now.
  // ideal would be to match the description margins to copy on other pages - 5px
  // and then have the row full screen so a NFT can be fully visible on mobile.
  // i tried to add negative values to row class to escape the parent but it did not work.

  return (
    <div className="thoughtWrapper">
      {/* <Row> */}
      <div className="thoughts-about-description">
        <p className="thoughts-about-body">
          <b className="purple">THOUGHTS </b> tell the monomyth of timeless
          existence. In it's totality, the collection is a transcendent hero's
          journey beyond spacetime. It is Science Fiction Satori with each of
          the 49 pieces being a Koan unto itself.
          <div
            className="openSea"
            onClick={() => window.open('https://opensea.io/', '_blank')}
          >
            {' '}
            <u>View the Collection on OpenSea</u>
          </div>
          <br></br>
          <div className="row">
            <NFTRow ref={Row1Ref}>
              <NftItem
                img={img1}
                number={1}
                price={1.0}
                name={'Apes'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img2}
                number={2}
                price={1.0}
                name={'Photons'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img3}
                number={3}
                price={1.0}
                name={'Antennae'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img4}
                number={4}
                price={1.0}
                name={'Clues'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img5}
                number={1.0}
                price={0.05}
                name={'Atoms'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img6}
                number={6}
                price={1.0}
                name={'ECCO'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img7}
                number={7}
                price={1.0}
                name={'Laboratories'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img8}
                number={8}
                price={1.0}
                name={'Downloads'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img9}
                number={9}
                price={1.0}
                name={'Dreams'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img10}
                number={10}
                price={1.0}
                name={'Radar'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img11}
                number={11}
                price={1.0}
                name={'Beacons'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img12}
                number={12}
                price={1.0}
                name={'Reality'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img13}
                number={13}
                price={1.0}
                name={'Riddles'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img14}
                number={14}
                price={1.0}
                name={'Fractals'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img15}
                number={15}
                price={1.0}
                name={'Linearity'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img16}
                number={16}
                price={1.0}
                name={'Bits'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img17}
                number={17}
                price={1.0}
                name={'Stargate'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img18}
                number={18}
                price={1.0}
                name={'Entangled'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img19}
                number={19}
                price={1.0}
                name={'Threshold'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img20}
                number={20}
                price={1.0}
                name={'Vessels'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img21}
                number={21}
                price={1.0}
                name={'Magic'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img22}
                number={22}
                price={1.0}
                name={'Simulations'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img23}
                number={23}
                price={1.0}
                name={'Entities'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img24}
                number={24}
                price={1.0}
                name={'Upgrades'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img25}
                number={25}
                price={1.0}
                name={'Alchemy'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img26}
                number={26}
                price={1.0}
                name={'Indra'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img27}
                number={27}
                price={1.0}
                name={'Synthesis'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img28}
                number={28}
                price={1.0}
                name={'Engine'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img29}
                number={29}
                price={1.0}
                name={'Traceroute'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img30}
                number={30}
                price={1.0}
                name={'Flowing'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img31}
                number={31}
                price={1.0}
                name={'Cathedral'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img32}
                number={32}
                price={1.0}
                name={'Gateless'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img33}
                number={33}
                price={1.0}
                name={'Avatars'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img34}
                number={34}
                price={1.0}
                name={'Surrender'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img35}
                number={35}
                price={1.0}
                name={'Nectar'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img36}
                number={36}
                price={1.0}
                name={'Now'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img37}
                number={37}
                price={1.0}
                name={'Self'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img38}
                number={38}
                price={1.0}
                name={'Symbols'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img39}
                number={39}
                price={1.0}
                name={'Ceremony'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img40}
                number={40}
                price={1.0}
                name={'Metamorphis'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img41}
                number={41}
                price={1.0}
                name={'Resurrection'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img42}
                number={42}
                price={1.0}
                name={'Atman'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img43}
                number={43}
                price={1.0}
                name={'Divergence'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img44}
                number={44}
                price={1.0}
                name={'Cipher'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img45}
                number={45}
                price={1.0}
                name={'Gnosis'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img46}
                number={46}
                price={1.0}
                name={'Transcribe'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img47}
                number={47}
                price={1.0}
                name={'Readouts'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img48}
                number={48}
                price={1.0}
                name={'Equanimity'}
                passRef={Row1Ref}
              />
              <NftItem
                img={img49}
                number={49}
                price={1.0}
                name={'Perception'}
                passRef={Row1Ref}
              />
            </NFTRow>
          </div>
        </p>
      </div>
      {/* </Row> */}
    </div>
  );
};

export default Game;

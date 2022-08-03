import ImageSlider from './ImageSlider';
import './thoughts.css';

// import img1 from './assets/Nfts/1_Apes.svg';
// import img2 from './assets/Nfts/2_Photons.svg';
// import img3 from './assets/Nfts/3_Antennae.svg';
// import img4 from './assets/Nfts/4_Clues.svg';
// import img5 from './assets/Nfts/5_Atoms.svg';
// import img6 from './assets/Nfts/6_ECCO.svg';
// import img7 from './assets/Nfts/7_Laboratories.svg';
// import img8 from './assets/Nfts/8_Downloads.svg';
// import img9 from './assets/Nfts/9_Dreams.svg';
// import img10 from './assets/Nfts/10_Radar.svg';
// import img11 from './assets/Nfts/11_Beacons.svg';
// import img12 from './assets/Nfts/12_Reality.svg';
// import img13 from './assets/Nfts/13_Riddles.svg';
// import img14 from './assets/Nfts/14_Fractals.svg';
// import img15 from './assets/Nfts/15_Linearity.svg';
// import img16 from './assets/Nfts/16_Bits.svg';
// import img17 from './assets/Nfts/17_Stargate.svg';
// import img18 from './assets/Nfts/18_Entangled.svg';
// import img19 from './assets/Nfts/19_Threshold.svg';
// import img20 from './assets/Nfts/20_Vessels.svg';
// import img21 from './assets/Nfts/21_Magic.svg';
// import img22 from './assets/Nfts/22_Simulations.svg';
// import img23 from './assets/Nfts/23_Entities.svg';
// import img24 from './assets/Nfts/24_Upgrades.svg';
// import img25 from './assets/Nfts/25_Alchemy.svg';
// import img26 from './assets/Nfts/26_Indra.svg';
// import img27 from './assets/Nfts/27_Synthesis.svg';
// import img28 from './assets/Nfts/28_Engine.svg';
// import img29 from './assets/Nfts/29_Traceroute.svg';
// import img30 from './assets/Nfts/30_Flowing.svg';
// import img31 from './assets/Nfts/31_Cathedral.svg';
// import img32 from './assets/Nfts/32_Gateless.svg';
// import img33 from './assets/Nfts/33_Avatars.svg';
// import img34 from './assets/Nfts/34_Surrender.svg';
// import img35 from './assets/Nfts/35_Nectar.svg';
// import img36 from './assets/Nfts/36_Now.svg';
// import img37 from './assets/Nfts/37_Self.svg';
// import img38 from './assets/Nfts/38_Symbols.svg';
// import img39 from './assets/Nfts/39_Ceremony.svg';
// import img40 from './assets/Nfts/40_Metamorphis.svg';
// import img41 from './assets/Nfts/41_Resurrection.svg';
// import img42 from './assets/Nfts/42_Atman.svg';
// import img43 from './assets/Nfts/43_Divergence.svg';
// import img44 from './assets/Nfts/44_Cipher.svg';
// import img45 from './assets/Nfts/45_Gnosis.svg';
// import img46 from './assets/Nfts/46_Transcribe.svg';
// import img47 from './assets/Nfts/47_Readouts.svg';
// import img48 from './assets/Nfts/48_Equanimity.svg';
// import img49 from './assets/Nfts/49_Perception.svg';

const Thoughts2 = () => {
  const slides = [
    {
      url: 'https://picsum.photos/id/237/200/300',
      name: 'apes',
      price: '1',
      number: '',
    },
    { url: 'https://picsum.photos/id/220/200/300', name: 'photon' },
    { url: 'https://picsum.photos/id/289/200/300', name: 'forest' },
    { url: 'https://picsum.photos/id/211/200/300', name: 'city' },
  ];

  const containerStyles = {
    width: '400px',
    height: '400px',
    margin: '0 auto',
  };

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
        </p>
        <br></br>
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>

        <br />
        <br />
      </div>
    </div>
  );
};

export default Thoughts2;

// import React, { lazy, Suspense } from 'react';
// import styled, { ThemeProvider } from 'styled-components';
// // import Carousel from '../Carousel'
// import Button from './Button';
// import { dark } from './styles/Themes';
// import Loading from './Loading';

// const Carousel = lazy(() => import('./Carousel'));

// const Section = styled.section`
//   min-height: 100vh;
//   width: 100%;
//   background-color: ${(props) => props.theme.text};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   overflow: hidden;
// `;
// const Container = styled.div`
//   width: 75%;
//   margin: 0 auto;
//   /* background-color: lightblue; */

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @media (max-width: 70em) {
//     width: 85%;
//   }

//   @media (max-width: 64em) {
//     width: 100%;
//     flex-direction: column;

//     & > *:last-child {
//       width: 80%;
//     }
//   }
//   @media (max-width: 40em) {
//     & > *:last-child {
//       width: 90%;
//     }
//   }
// `;
// const Box = styled.div`
//   width: 50%;
//   height: 100%;
//   min-height: 60vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 40em) {
//     min-height: 50vh;
//   }
// `;

// const Title = styled.h2`
//   font-size: ${(props) => props.theme.fontxxl};
//   text-transform: capitalize;
//   color: ${(props) => props.theme.body};
//   align-self: flex-start;
//   width: 80%;
//   margin: 0 auto;

//   @media (max-width: 64em) {
//     width: 100%;
//     text-align: center;
//   }
//   @media (max-width: 40em) {
//     font-size: ${(props) => props.theme.fontxl};
//   }
//   @media (max-width: 30em) {
//     font-size: ${(props) => props.theme.fontlg};
//   }
// `;
// const SubText = styled.p`
//   font-size: ${(props) => props.theme.fontlg};
//   color: ${(props) => props.theme.body};
//   align-self: flex-start;
//   width: 80%;
//   margin: 1rem auto;
//   font-weight: 400;
//   @media (max-width: 64em) {
//     width: 100%;
//     text-align: center;
//     font-size: ${(props) => props.theme.fontmd};
//   }
//   @media (max-width: 40em) {
//     font-size: ${(props) => props.theme.fontmd};
//   }
//   @media (max-width: 30em) {
//     font-size: ${(props) => props.theme.fontsm};
//   }
// `;
// const SubTextLight = styled.p`
//   font-size: ${(props) => props.theme.fontmd};
//   color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
//   align-self: flex-start;
//   width: 80%;
//   margin: 1rem auto;
//   font-weight: 400;

//   @media (max-width: 64em) {
//     width: 100%;
//     text-align: center;
//     font-size: ${(props) => props.theme.fontsm};
//   }
//   @media (max-width: 40em) {
//     font-size: ${(props) => props.theme.fontsm};
//   }
//   @media (max-width: 30em) {
//     font-size: ${(props) => props.theme.fontxs};
//   }
// `;
// const ButtonContainer = styled.div`
//   width: 80%;
//   margin: 1rem auto;
//   display: flex;
//   align-self: flex-start;

//   @media (max-width: 64em) {
//     width: 100%;

//     button {
//       margin: 0 auto;
//     }
//   }
// `;

// const Game = () => {
//   return (
//     <Section id="about">
//       <Container>
//         <Box>
//           <Suspense fallback={<Loading />}>
//             <Carousel />{' '}
//           </Suspense>{' '}
//         </Box>
//         <Box>
//           <Title>
//             Do You Like
//             <br /> Passive Income?
//           </Title>
//           <SubText>
//             The Scotch Noblemen collection offers an industry refining staking
//             game, securitized tokenomics, and a metaverse-land owning DAO!{' '}
//           </SubText>
//           <SubTextLight>
//             Earn ERC-20 tokens from yield farm name, then win big, or loose it
//             all by predicting the victor of the highland game!
//           </SubTextLight>
//           <ButtonContainer>
//             <ThemeProvider theme={dark}>
//               <button class="sc-bdvvtL hhmjnQ">
//                 <a
//                   href="https://discord.gg/uvU3Fs3vMM"
//                   aria-label="JOIN OUR DISCORD"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   JOIN OUR DISCORD
//                 </a>
//               </button>
//             </ThemeProvider>
//           </ButtonContainer>
//         </Box>
//       </Container>
//     </Section>
//   );
// };

// export default Game;

import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';

import img1 from './assets/Nfts/1_Apes.svg';
import img2 from './assets/Nfts/2_Photons.svg';
import img3 from './assets/Nfts/3_Antennae.svg';
import img4 from './assets/Nfts/4_Clues.svg';
import img5 from './assets/Nfts/5_Atoms.svg';
import img6 from './assets/Nfts/6_ECCO.svg';
import img7 from './assets/Nfts/7_Laboratories.svg';
import img8 from './assets/Nfts/8_Downloads.svg';
import img9 from './assets/Nfts/9_Dreams.svg';

import ETH from './assets/icons8-ethereum-48.png';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  & > *:first-child {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
  & > *:last-child {
    animation-duration: 15s;
    @media (max-width: 30em) {
      animation-duration: 10s;
    }
  }
`;
const move = keyframes`
0%{ transform: translateX(100%)   };
100%{ transform: translateX(-100%)   }

`;

const Row = styled.div`
  /* background-color: lightblue; */
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move} linear infinite ${(props) => props.direction};
`;
const ImgContainer = styled.div`
  width: 30rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};

  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 48em) {
    width: 12rem;
  }
  @media (max-width: 30em) {
    width: 10rem;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
  }

  h1 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
    font-weight: 600;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 1rem;
    height: auto;
  }
`;

const NftItem = ({ img, number = 0, price = 0, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  };
  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  };

  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img width={800} height={800} src={img} alt="The Scotch Noblemen" />
      <Details>
        <div>
          <span>Scotch Noblemen</span> <br />
          <h1>#{number}</h1>
        </div>

        <div>
          <span>Price</span>
          <Price>
            <img width={200} height={200} src={ETH} alt="ETH" />
            <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  );
};

const Game = () => {
  const Row1Ref = useRef(null);

  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={img1} number={852} price={0.05} passRef={Row1Ref} />
        <NftItem img={img2} number={123} price={0.05} passRef={Row1Ref} />
        <NftItem img={img3} number={456} price={0.05} passRef={Row1Ref} />
        <NftItem img={img4} number={666} price={0.05} passRef={Row1Ref} />
        <NftItem img={img5} number={452} price={0.05} passRef={Row1Ref} />

        <NftItem img={img6} number={888} price={0.05} passRef={Row1Ref} />
        <NftItem img={img7} number={211} price={0.05} passRef={Row1Ref} />
        <NftItem img={img8} number={455} price={0.05} passRef={Row1Ref} />
        <NftItem img={img9} number={456} price={0.05} passRef={Row1Ref} />
      </Row>
    </Section>
  );
};

export default Game;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/Tokenomics.svg';
// import Particle from '../Particle';

import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home() {
  return (
    <Container fluid className="home-about-section" id="about">
      {/* <Particle /> */}
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            {/* added now dao header here. old header & connect button are in components/HomeOld.js */}
            {/* <div className="home-header">
              <h1 style={{ fontSize: '2.6em' }}>
                {' '}
                <strong className="purple">NowDAO</strong>
              </h1>
              <br />
            </div> */}

            <p className="home-about-body">
              <a href="https://app.nowdao.io/" target="_self">
                {' '}
                <b className="purple">NowDao's</b>{' '}
              </a>
              mission is nothing short of building{' '}
              <a
                href="https://mirror.xyz/subek.eth/Ay-Oy8eAMJjDD-9pBNbaXH9ucXGQ7BqD_lv-o9heHiA"
                target="_blank"
              >
                {' '}
                <b className="purple">a game to save humanity.</b>{' '}
              </a>{' '}
              Along the way we will incorporate the latest in cognitive science
              to shift human perception and move past the antiquated confines of
              spacetime. Utilizing a multi-modal approach to{' '}
              <a href="https://www.effectivealtruism.org/" target="_blank">
                {' '}
                <b className="purple">Effective Altruism,</b>{' '}
              </a>
              this project is the culmination of a 15 year thought experiment
              made possible by the open source technology of the blockchain. You
              can find the roadmap, mechanics, references and deep dive into the
              thought process in{' '}
              <a href="http://localhost:3000/#/info" target="_self">
                {' '}
                <b className="purple"> THE INFORMATION.</b>{' '}
              </a>{' '}
              <br />
              <br />
              The DAO and it's native token,{' '}
              <a href="https://app.nowdao.io/" target="_self">
                {' '}
                <b className="purple">PHOTON,</b>{' '}
              </a>
              will initially be fed through a cross cultural NFT narrative,{' '}
              <a href="http://localhost:3000/#/thoughts" target="_self">
                {' '}
                <b className="purple"> THOUGHTS.</b>{' '}
              </a>{' '}
              The 49 piece collection is NFT native poetry. As language
              stimulates the visual cortex, it is inherently visual. The
              collection is a celebration of existence and transcendance. It is
              an homage to the infinite possibilities of web3. It is a
              metta-verse.
              <br />
              <br />
              <Col md={12} className="myAvtar">
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Col>
              <br />
              As thoughts are a conversation through time, the initial launch
              will be followed by quest authors and artists, ultimately building
              to an interactive exhibit of Thoughts entitled{' '}
              <b className="purple"> I AM HERE.</b> The exhibit will enable
              individuals to mint their own Thoughts and indelibly proclaim
              their existence on the Interplanetary File System.
              <br />
              <br />
              To begin, NOW DAO has launched upgradeable Governance contracts.
              This will allow us to evolve along with the latest advances in the
              space and move towards complete decentralization, eventually
              becoming one cluster of UBI for the globe.
              <br />
              <br />
              The NFT's, game and DAO all will initially funnel donations direct
              to
              <a href="https://www.operationsunflower.com/" target="_blank">
                {' '}
                <b className="purple"> Operation Sunflower</b>{' '}
              </a>{' '}
              then by votes of the community and ultimately to
              <a href="https://singularitynet.io/" target="_blank">
                {' '}
                <b className="purple">decentralized A.I.'s</b>{' '}
              </a>{' '}
              for real time aid relief.
              <br />
              <br />
              Each movement of a
              <a href="https://app.nowdao.io/" target="_self">
                {' '}
                <b className="purple">PHOTON,</b>{' '}
              </a>{' '}
              will have a .7% tax to fund the DAO.
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>BE SOCIAL ON</h1>
            <p>
              Feel free to <b className="purple">connect </b>as I've too much
              history to be anon.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://twitter.com/buddhaloop"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/brianfox/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/b_p_fox/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home;

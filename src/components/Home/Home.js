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
              mission is nothing short of achieving transcendence through a
              simple thought experiment focused on the reality that time and
              space are an antiquated mode of perceiving this world. Just like
              any game, there are many levels to this and NowDao takes a
              multi-modal approach to
              <a href="https://www.effectivealtruism.org/" target="_blank">
                {' '}
                <b className="purple">Effective Altruism.</b>{' '}
              </a>
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
              The 49 piece collection tells the monomyth of timeless existence
              through Science Fiction <b className="purple"> Satori.</b> It is
              NFT native poetry with each piece being a
              <b className="purple"> koan</b> unto itself. The collection is a
              celebration of existence and transcendance. It is an homage to the
              infinite possibilities of web3. It is a
              <a
                href="https://www.yogapedia.com/definition/7603/metta"
                target="_blank"
              >
                {' '}
                <b className="purple"> metta-</b>
              </a>{' '}
              verse.
              <br />
              <br />
              As thoughts are a conversation through time, the initial launch
              will be followed by quest authors and artists ultimately building
              to an interactive exhibit of Thoughts entitled{' '}
              <b className="purple"> I AM HERE.</b> The exhibit will enable
              individuals to mint their own Thoughts and indelibly proclaim
              their existence on the Interplanetary File System.
              <br />
              <br />
              Along with the programmed 10% direct donation of the DAO, it's
              main purpose is to continue development of{' '}
              <a href="http://localhost:3000/#/info" target="_self">
                {' '}
                <b className="purple"> NOW the Game,</b>{' '}
              </a>{' '}
              a neuroscience based micro donation based built on Polygon. It not
              only utilizes the proven dual mechanisms of gaming and giving to
              enhance mental wellbeing, but also incorporates time entrainment
              to slow the player's perception of time. The network will discover
              the players who are most adept at slowing down time and the DAO
              will reward the community for the participation in the game. You
              can find the roadmap, mechanics, references and deep dive into the
              thought process in{' '}
              <a href="http://localhost:3000/#/info" target="_self">
                {' '}
                <b className="purple"> THE INFORMATION.</b>{' '}
              </a>{' '}
              <br />
              <br />
              To begin we have rebuilt and simplified the DAO mechanics with an
              upgradeable contract. This will enable us to evolve along with the
              latest advances in the open source space and become one cluster of
              UBI for the globe.
              <br />
              <br />
              <Col md={12} className="myAvtar">
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Col>
              <br />
              The NFT's, game and DAO all will initially funnel donations direct
              to
              <a href="https://Givewell.org" target="_blank">
                {' '}
                <b className="purple"> Givewell.org</b>{' '}
              </a>{' '}
              then by votes of the community and ultimately to{' '}
              <b className="purple"> decentralized A.I.'s</b> for real time
              <b className="purple"> aid relief.</b>
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
              Feel free to <span className="purple">connect </span>as I've too
              much history to be anon.
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

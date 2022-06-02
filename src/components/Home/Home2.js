import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/Tokenomics.svg';

import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              Let's save <span className="purple"> Humanity </span>
            </h1>
            <br />

            <p className="home-about-body">
              With a blend of optimism and reality NowDao takes a holistic
              approach to
              <a href="https://www.effectivealtruism.org/" target="_blank">
                {' '}
                <b className="purple"> Effective Altruism.</b>{' '}
              </a>
              <br />
              <br />
              The DAO will initially be fed through a cross cultural NFT
              narrative,{' '}
              <a href="http://localhost:3000/#/thoughts" target="_self">
                {' '}
                <b className="purple"> THOUGHTS.</b>{' '}
              </a>{' '}
              The 49 piece collection tells the monomyth through Science Fiction
              Satori. It is NFT native poetry with each piece being a koan unto
              itself. The collection is a celebration of existence and
              transcendance. It is an homage to the infinite possibilities of
              computational logic and web3.
              <br />
              <br />
              Thoughts are a conversation through time and the initial launch
              will be followed by quest authors and artists ultimately building
              to an interactive exhibit of Thoughts entitled “I WAS HERE”. The
              exhibit will enable individuals to mint their own Thoughts and
              indelibly proclaim their existence on-chain.
              <br />
              <br />
              The DAO’s main purpose is to continue development of{' '}
              <a href="http://localhost:3000/#/game" target="_self">
                {' '}
                <b className="purple"> NOW the Game.</b>{' '}
              </a>{' '}
              It is a micro donation based game incorporating ZK rollups that
              not only uses the proven dual mechanisms of gaming and giving to
              enhance mental wellbeing, but will also utilize time entrainment
              to slow the player's perception of time. The front end will evolve
              from a thumbtapping time passer to incorporate the evolving
              economics of NVIDIA GPU's for realtime photoreal enviornments and
              other rapidly advancing techology like A.I. NPC's. The ambitious
              ten year roadmap is available in{' '}
              <a href="http://localhost:3000/#/info" target="_self">
                {' '}
                <b className="purple"> THE INFORMATION.</b>{' '}
              </a>{' '}
              section. To begin we have purposely simplified the DAO mechanics
              to minimize the attack surface and will utilize votes to direct
              donations. Next step is based off of CultDAO’s transaction tax we
              will incorporate a similar mechanism for NOW's native token,
              PHOTON. Each movement of a PHOTON will have a .7% tax to fund the
              DAO.
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
                Givewell.org{' '}
              </a>
              then by votes of the community and ultimately to{' '}
              <b className="purple"> decentralized A.I.'s</b> for real time
              <b className="purple"> aid relief.</b>
              <br />
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
export default Home2;

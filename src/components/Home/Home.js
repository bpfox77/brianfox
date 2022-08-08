import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/Tokenomics.svg';

//import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
//import { FaLinkedinIn } from 'react-icons/fa';

function Home() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <div className="home-about-body">
              <a
                href="https:/young-violet-6800.on.fleek.co"
                target="_self"
                // rel="noopener noreferrer"
              >
                {' '}
                <b className="purple">NowDao's</b>{' '}
              </a>
              mission is nothing short of building{' '}
              <a
                href="https://mirror.xyz/subek.eth/Ay-Oy8eAMJjDD-9pBNbaXH9ucXGQ7BqD_lv-o9heHiA"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <b className="purple">a game to save humanity.</b>{' '}
              </a>{' '}
              Along the way we will incorporate the latest in cognitive science
              to shift human perception and move past the antiquated confines of
              spacetime
              <a
                href="https://neurotree.org/beta/publications.php?pid=48818"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <b className="greenInfoSmall">[1]</b>{' '}
              </a>{' '}
              <a
                href="https://writings.stephenwolfram.com/2020/04/finally-we-may-have-a-path-to-the-fundamental-theory-of-physics-and-its-beautiful/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <b className="greenInfoSmall">[2]</b>.{' '}
              </a>{' '}
              Utilizing a multi-modal approach to{' '}
              <a
                href="https://www.effectivealtruism.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <b className="purple">Effective Altruism,</b>{' '}
              </a>
              this project is the culmination of a 15 year thought experiment
              made possible by the open source technology of the blockchain. You
              can find the roadmap, mechanics and references in{' '}
              <a href="https://now-dao.io/#/info" target="_self">
                {' '}
                <b className="purple"> THE INFORMATION.</b>{' '}
              </a>{' '}
              <br />
              <br />
              The DAO and it's native token,{' '}
              <a href="https://app.now-dao.io/" target="_self">
                {' '}
                <b className="purple">PHOTON,</b>{' '}
              </a>
              will initially be fed through a cross cultural NFT narrative,{' '}
              <a href="http://now-dao.io/#/thoughts" target="_self">
                {' '}
                <b className="purple"> THOUGHTS.</b>{' '}
              </a>{' '}
              The 49 piece collection is NFT native poetry. As language
              stimulates the visual cortex, words paint the pictures. The
              collection is a celebration of existence and transcendance. It is
              an homage to the infinite possibilities of web3. It is a
              mettá-verse.
              <br />
              <br />
              Smart Contracts:
              <a
                href="https://rinkeby.etherscan.io/address/0x01Ce6dE293148b6C1785a2caD15a5A1062027443#code"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <b className="purple">Governance /</b>{' '}
              </a>{' '}
              <a
                href="https://rinkeby.etherscan.io/address/0x2A4DC52d84Fcf16CDf81aE1BbA2be755945B48e4#code"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <b className="purple">Photon</b>{' '}
              </a>{' '}
              {/* would like to make this svg clickable */}
              <Col md={12} className="avatar">
                <img src={myImg} className="avatar" alt="avatar" />
              </Col>
              <div className="greenInfoSmall">
                Each movement of a PHOTON will have a .7% tax to fund the DAO
                --migrating to Mumbai/Polygon.
              </div>
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
              becoming one cluster of UBI for the globe's network state.
              <br />
              <br />
              The NFT's, game and DAO all will initially funnel donations direct
              to
              <a
                href="https://www.operationsunflower.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <b className="purple"> Operation Sunflower</b>{' '}
              </a>{' '}
              then by votes of the community and ultimately to
              <a
                href="https://singularitynet.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <b className="purple">decentralized A.I.'s</b>{' '}
              </a>{' '}
              for real time aid relief.
              <br />
              <br />
            </div>
          </Col>
        </Row>
        {/* <Row>
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
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home;

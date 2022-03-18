import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Tokenomics.svg";

import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let's save <span className="purple"> Humanity </span>
            </h1>
            <br />

            <p className="home-about-body">
              With a blend of optimism and reality NowDao takes a holistic
              approach to
              <a href="https://www.effectivealtruism.org/" target="_blank">
                {" "}
                <b className="purple"> Effective Altruism.</b>{" "}
              </a>
              <br />
              <br />
              The DAO is fed through a cross cultural{" "}
              <b className="purple">NFT narrative </b> that will be told over
              time to reveal the Monomyth that is humanity. An onchain&nbsp;
              <b className="purple">Game</b> medically vetted to slow the
              perception of time and utilizing the dual mechanistic science of{" "}
              <b className="purple">Gaming and Philanthropy.</b>
              <br />
              <Col md={12} className="myAvtar">
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Col>
              <br />
              The NFT's, game and DAO all funnel donations direct to
              <a href="https://Givewell.org" target="_blank">
                {" "}
                Givewell.org{" "}
              </a>
              and ultimately to <b className="purple">
                {" "}
                decentralized A.I.'s
              </b>{" "}
              for real time
              <i>
                <b className="purple"> aid relief.</b>
              </i>
              <br />
              <br />
              &nbsp;Check out the Whitepaper for the near term releases and ten
              year road map.
              <i>
                <b className="purple"> Namaste.</b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
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

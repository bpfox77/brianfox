import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Info() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              Let's play <span className="purple"> a Game </span>
            </h1>
            <br />

            <p className="home-about-body">
              I have been Working in various forms of emerging technology for 2
              decades and storytelling for even longer. I bought my first eth in
              July '17, subsequently gaining and losing money and belief a
              hundred times over. I could have kicked myself for my losses, but
              instead my experience forced me to really want to understand
              everything about the technology. So I dove deep into web3 and
              eventually had the epiphany we all share - the infinite promise. I
              understood that we are only limited by logic and realized an idea
              I had been working on for 15 years was made possible by the
              blockchain. In June 2021 I went to the Colorado mountains to
              collate my thoughts and pinpoint the feasibility of a global
              donation based game in a grandiose attempt to save the planet.
              <br />
              <br />
              <a
                href="https://mirror.xyz/subek.eth/Ay-Oy8eAMJjDD-9pBNbaXH9ucXGQ7BqD_lv-o9heHiA"
                target="_blank"
              >
                {' '}
                <b className="purple">
                  {' '}
                  https://mirror.xyz/subek.eth/Ay-Oy8eAMJjDD-9pBNbaXH9ucXGQ7BqD_lv-o9heHiA
                </b>{' '}
              </a>
              <br />
              <br />
              What I can call a litepaper is a wide ranging write up
              incorporating my experience in technology, love of theoretical
              physics and philosophy. In the year since, an idea that would seem
              far too grandiose is rapidly becoming even more feasible through
              converging technologies.
              <br />
              <br />
              <a
                href="https://blogs.nvidia.com/blog/2021/11/12/earth-2-supercomputer/"
                target="_blank"
              >
                {' '}
                <b className="purple">
                  {' '}
                  https://blogs.nvidia.com/blog/2021/11/12/earth-2-supercomputer/
                </b>{' '}
              </a>
              <br />
              <br />
              <a href="https://www.inworld.ai/. " target="_blank">
                {' '}
                <b className="purple">
                  {' '}
                  https://www.inworld.ai/. "Brains for Virtual Characters"
                </b>{' '}
              </a>
              <br />
              <br />
              Since that time I'm have the good fortune to work with some
              amazing minds/people to continue development of the prototype.
              Since having written my original lite paper a year ago a number of
              developments that are hastening the possibilities Of a complete
              simulation of our planet.
              <br />
              <br />
              The DAO’s main purpose is to continue development of{' '}
              <a
                href="https://blogs.nvidia.com/blog/2021/11/12/earth-2-supercomputer/"
                target="_self"
              >
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
      </Container>
    </Container>
  );
}

export default Info;

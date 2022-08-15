import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
// import { FaLinkedinIn } from 'react-icons/fa';
import { TbBrandDiscord } from 'react-icons/tb';

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Beliefs are global variables set to true</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://twitter.com/buddhaloop"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://discord.gg/A3FqneqdAJ/"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandDiscord />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/thoughts.nowdao/"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

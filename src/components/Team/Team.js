import { Card, Row, Col } from 'react-bootstrap';
import './team.css';
import amy from '../../Assets/Projects/Amy.jpg';
import chris from '../../Assets/Projects/Chris.jpeg';
import brian from '../../Assets/Projects/Brian.jpg';

function Team() {
  return (
    <div className="teamWrapper">
      <div className="team-about-description">
        <div className="team-about-body">
          <h1 style={{ fontSize: '2.6rem' }}>
            How we <strong className="purple"> $pend Time </strong>
          </h1>
        </div>

        <Row
          style={{
            justifyContent: 'center',
            paddingBottom: '10px',
          }}
        >
          <Col lg={4} className="project-card">
            <Card className="project-card-view">
              <img
                className="card-img-top"
                src={brian}
                alt="Brian Fox"
                style={{ height: 'auto', width: '100%' }}
              />
              <Card.Body>
                <Card.Title>Brian Fox</Card.Title>
                <Card.Title>
                  <b className="purple"> Founder</b>{' '}
                </Card.Title>
                <Card.Text style={{ textAlign: 'left' }}>
                  Innovation Lead @Meta, Creator/Developer of Now, Novelist,
                  Filmmaker, Vedantic Yogi
                </Card.Text>
                {/* <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? 'View Blog' : 'View Info'}
        </Button> */}
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} className="project-card">
            <Card className="project-card-view">
              {/* if mobile is messed up . . . i changed card-img-top to className from class */}
              <img
                className="card-img-top"
                src={chris}
                alt="Dr. Chris Heddon"
                style={{ height: 'auto', width: '100%' }}
              />
              <Card.Body>
                <Card.Title>Dr. Chris Heddon</Card.Title>
                <Card.Title>
                  <b className="purple"> Advisor/Multi-sig</b>{' '}
                </Card.Title>
                <Card.Text style={{ textAlign: 'left' }}>
                  A doctor, entreprenuer and yogi currently building medical
                  A.I. systems.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} className="project-card">
            <Card className="project-card-view">
              <img
                className="card-img-top"
                src={amy}
                alt="Dr. Chris Heddon"
                style={{ height: 'auto', width: '100%' }}
              />
              <Card.Body>
                <Card.Title>Amy Karr</Card.Title>
                <Card.Title>
                  <b className="purple"> Advisor/Multi-sig</b>
                </Card.Title>
                <Card.Text style={{ textAlign: 'left' }}>
                  Director of Humanitarian Affairs, Human Rights Foundation,
                  Forbes 30 under 30.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Team;

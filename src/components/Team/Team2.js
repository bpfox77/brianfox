import ProjectCard from './TeamCard';
import { Card, Row, Col } from 'react-bootstrap';
import './team.css';
import amy from '../../Assets/Projects/Amy.jpg';
import chris from '../../Assets/Projects/Chris.jpeg';
import brian from '../../Assets/Projects/Brian.jpg';

function Team2() {
  return (
    <div className="teamWrapper">
      <Col md={12} className="team-about-body">
        <h1 style={{ fontSize: '2.6rem' }}>
          How we <strong className="purple"> spend time </strong>
        </h1>

        <Row
          style={{
            justifyContent: 'center',
            paddingBottom: '10px',
          }}
        >
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brian}
              isBlog={false}
              title="Brian Fox"
              role="Founder"
              description="Innovation Lead @Meta, Creator/Developer of Now, Novelist, Filmmaker, Vedantic Yogi "
              // link="https://subek.eth.limo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chris}
              isBlog={false}
              title="Dr. Chris Heddon"
              role="Advisor, Multi-sig"
              description="A doctor, entreprenuer and yogi currently building medical A.I. systems."
              //link="https://www.amazon.com/Stars-Now-Brian-Fox-ebook/dp/B00HZVJYHM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amy}
              isBlog={false}
              title="Amy Karr"
              role="Advisor, Multi-sig"
              description="Director of Humanitarian Affairs, Human Rights Foundation, Forbes 30 under 30."
              // link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>
          <Card className="project-card-view">
            <img
              src={brian}
              alt="card-img"
              style={{ height: '100%', width: '100%' }}
            />
            <Card.Body>
              <Card.Title>spaceman</Card.Title>
              <Card.Title>dreamer</Card.Title>
              <Card.Text style={{ textAlign: 'left' }}>
                done a few things in my time
              </Card.Text>
              {/* <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? 'View Blog' : 'View Info'}
        </Button> */}
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </div>
  );
}

export default Team2;

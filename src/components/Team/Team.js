import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './TeamCard';

// import TeamCard from "./TeamCard";
import amy from '../../Assets/Projects/Amy.jpg';
import chris from '../../Assets/Projects/Chris.jpeg';
import brian from '../../Assets/Projects/Brian.jpg';

function Team() {
  return (
    <Container fluid className="project-section">
      <Container>
        <Col md={12} className="home-about-description2">
          <h1 style={{ fontSize: '2.6em' }}>
            How we <strong className="purple"> SPEND TIME 11111 </strong>
          </h1>
        </Col>

        <Row
          style={{
            justifyContent: 'center',
            paddingBottom: '10px',
            height: 'auto',
          }}
        >
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brian}
              isBlog={false}
              title="Brian Fox"
              role="Founder"
              description="Innovation Lead @Meta, Creator/Developer of Now, Novelist, Filmmaker, Vedantic Yogi "
              link="https://subek.eth.limo"
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

          {/* <Col md={12} className="project-card">
            <ProjectCard
              imgPath={dodger}
              isBlog={false}
              title="Writer, Producer, Director"
              description="A feature film where a secret government experiment disseminates a drug to mind control the population"
              link="https://vimeo.com/22359658"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Team;

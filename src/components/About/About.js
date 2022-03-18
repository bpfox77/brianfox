import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./TeamCard";

// import TeamCard from "./TeamCard";
import amy from "../../Assets/Projects/Amy.jpg";
import chris from "../../Assets/Projects/Chris.jpeg";
import brian from "../../Assets/Projects/me.jpeg";

function About() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          How we <strong className="purple">spend time</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brian}
              isBlog={false}
              title="Brian Fox"
              description="Innovation Lead @Meta - Creator / Developer of Now "
              link="https://github.com/bpfox77/indraWhitepaper/blob/917cda0b5742145774ccfa1910661d4b7d9c74f9/Change.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chris}
              isBlog={false}
              title="Chris Heddon"
              description="A doctor and entreprenuer currently building A.I. systems throughout the land."
              link="https://www.amazon.com/Stars-Now-Brian-Fox-ebook/dp/B00HZVJYHM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amy}
              isBlog={false}
              title="Amy Karr"
              description="A humanitarian, Forbes 30 under 30, Seeker of light."
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

export default About;

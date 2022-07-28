import { useEffect, useState } from 'react';
import NFTContainer2 from './NFTContainer2';

function Game() {
  const [nfts, setNfts] = useState([]);

  const getNftData = async () => {
    const options = { method: 'GET', headers: { Accept: 'application/json' } };

    fetch(
      'https://testnets-api.opensea.io/assets?asset_contract_address=0x93F93B8E9293147D7C7C1795b4E72B665ea1FA6a&order_direction=asc',
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setNfts(response.assets);
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getNftData();
  }, []);

  return (
    <div className="App">
      <NFTContainer2 nfts={nfts} />
    </div>
  );
}

export default Game;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./PersonalCards";
// import now from "../../Assets/Projects/now.png";

// function Game() {
//   return (
//     <Container fluid className="project-section">
//       <Container>
//         <h1 className="project-heading">
//           <strong className="purple">Let's play a game.</strong>
//         </h1>

//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={12} className="project-card">
//             <ProjectCard
//               imgPath={now}
//               isBlog={false}
//               title="Now"
//               description="Currently in development, NOW is a multi modality wellness game utilizing research from
//               the fields ot time entrainment, story science, gaming and the benefits of philanthropy. "
//               link="https://github.com/bpfox77/indraWhitepaper/blob/917cda0b5742145774ccfa1910661d4b7d9c74f9/Change.pdf"
//             />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Game;

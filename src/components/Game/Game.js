import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import NFTContainer2 from './NFTContainer2';

function Game() {
  const [account, setAccount] = useState('');
  const [data, setData] = useState([]);

  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let res = await provider.send('eth_requestAccounts', []);
    setAccount(res[0]);
    getData(res[0]);
  };

  const getData = async (_account) => {
    const options = { method: 'GET', headers: { Accept: 'application/json' } };

    fetch(
      `https://api.opensea.io/api/v1/assets?owner=${_account}&order_direction=asc&limit=20&include_orders=false`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.assets);
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  // useEffect(() => {
  //   getNftData();
  // }, []);

  return (
    <div className="App3">
      {account}
      <button onClick={connect}>Connect</button>
      {data.map((nft) => {
        return (
          <div>
            <img src={nft.image_preview_url} width="200" height="200" />
            <p>{nft.name}</p>
            what up
          </div>
        );
      })}
    </div>
  );
}

//   return (
//     <div className="App">
//       <NFTContainer2 nfts={nfts} />
//     </div>
//   );
// }

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

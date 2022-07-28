import './index.css';
import { useEffect, useState } from 'react';

import NFTContainer2 from './NFTContainer2';

function App() {
  const [nfts, setNfts] = useState([]);

  const getNftData = async () => {
    const options = { method: 'GET' };

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

export default App;

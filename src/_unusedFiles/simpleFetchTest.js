import { useEffect, useState } from 'react';
import NFTContainer2 from './NFTContainer2';

function fetchTest() {
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
      {/* <NFTContainer2 nfts={nfts} /> */}
      {nfts.map((nft) => {
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

export default fetchTest;

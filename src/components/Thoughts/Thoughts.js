import { useEffect, useState } from "react";
import NFTContainer from "./NFTContainer";

function Thoughts() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [nfts, setNfts] = useState([]);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setWalletAddress(accounts[0]);
    }
  };

  const getNftData = async () => {
    if (!walletAddress) return;

    const response = await fetch(
      "https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x60f80121c31a0d46b5279700f9df786054aa5ee5"
    );

    //this should be my own wallet, once my NFt's are in there. note need to use backticks
    // const response = await fetch(
    //   `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`

    // this is how to get collection address
    // https://api.rarible.org/v0.1/collections/{collection}
    // https://api.rarible.org/v0.1/collections/byOwner
    // example test colleciont
    // mutant ape address   0x60e4d786628fea6478f785a6d7e704777c86a7c6
    // );

    const data = await response.json();

    setNfts(data.items);
  };

  useEffect(() => {
    getNftData();
  }, [walletAddress]);

  return (
    <div className="Thought">
      <div className="text"> Account: {walletAddress}</div>
      <div>
        <button className="" onClick={connectWallet}>
          Connect Wallet
        </button>
        <NFTContainer nfts={nfts} />
      </div>
    </div>
  );
}

export default Thoughts;

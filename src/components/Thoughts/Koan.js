import React from "react";
import "./KoanGallery.css";
//import Header from './components/Header';
import { useState, useEffect } from "react";
import axios from "axios";
import KoanGallery from "./KoanGallery";
import KoanHero from "./KoanHero";
import "./koanHero.css";
import ThoughtHeader from "./ThoughtHeader";

function Thoughts() {
  const [koanListData, setKoanListData] = useState([]);
  const [selectedKoan, setSelectedKoan] = useState([0]);

  useEffect(() => {
    async function fetchData() {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x93F93B8E9293147D7C7C1795b4E72B665ea1FA6a&order_direction=asc"
      );
      console.log("Fetched: ", openseaData.data.assets);
      setKoanListData(openseaData.data.assets);
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      {koanListData.length > 0 && (
        <>
          {/* <ThoughtHeader /> */}
          <KoanHero koanListData={koanListData} selectedKoan={selectedKoan} />
          <KoanGallery
            koanListData={koanListData}
            setSelectedKoan={setSelectedKoan}
          />
        </>
      )}
    </div>
  );
}

export default Thoughts;

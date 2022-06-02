import React from 'react';
import './Koanlist.css';
//import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Koanlist from './Koanlist';
import Main from './Main';
import './main.css';
import ThoughtHeader from './ThoughtHeader';

function Thoughts() {
  const [koanListData, setKoanListData] = useState([]);
  const [selectedKoan, setSelectedKoan] = useState([0]);

  useEffect(() => {
    async function fetchData() {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x93F93B8E9293147D7C7C1795b4E72B665ea1FA6a&order_direction=asc'
      );
      console.log(openseaData.data.assets);
      setKoanListData(openseaData.data.assets);
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      {koanListData.length > 0 && (
        <>
          {/* <ThoughtHeader /> */}
          <Main koanListData={koanListData} selectedKoan={selectedKoan} />
          <Koanlist
            koanListData={koanListData}
            setSelectedKoan={setSelectedKoan}
          />
        </>
      )}
    </div>
  );
}

export default Thoughts;

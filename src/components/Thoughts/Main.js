import React, { useState, useEffect } from 'react';
import './main.css';

const Main = ({ selectedKoan, koanListData }) => {
  const [activeKoan, setActiveKoan] = useState(koanListData[0]);

  useEffect(() => {
    setActiveKoan(koanListData[selectedKoan]);
  }, [koanListData, selectedKoan]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="KoanHighlight">
          <div className="KoanContainer">
            <img className="selectedKoan" src={activeKoan.image_url} alt="" />
          </div>
        </div>

        <div className="KoanDetails" style={{ color: '#fff' }}>
          <div className="title">
            {activeKoan.name}
            <span className="itemNumber">....#{activeKoan.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activeKoan.owner.profile_img_url} alt="" />
            </div>

            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>{activeKoan.owner.address}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

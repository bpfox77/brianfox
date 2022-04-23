import React from 'react';
import CollectionCard from './CollectionCard';
import './Koanlist.css';

const koanlist = ({ koanListData, setSelectedKoan }) => {
  return (
    <div className="koanlist">
      {koanListData.map((koan) => (
        <div onClick={() => setSelectedKoan(koan.token_id)}>
          {/* <div onClick={() => console.log(koan.token_id)}> */}
          <CollectionCard
            key={koan.token_id}
            id={koan.token_id}
            name={koan.name}
            traits={koan.traits}
            image={koan.image_url}
          />
        </div>
      ))}
    </div>
  );
};

export default koanlist;

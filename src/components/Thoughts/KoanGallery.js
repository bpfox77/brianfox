import React from 'react';
import CollectionCard from './CollectionCard';
import './KoanGallery.css';

const KoanGallery = ({ koanListData, setSelectedKoan }) => {
  return (
    <div className="koangallery">
      {[...koanListData].reverse().map((koan) => (
        <div>
          <CollectionCard
            key={koan.token_id}
            id={koan.token_id}
            name={koan.name}
            traits={koan.traits}
            image={koan.image_url}
            setSelectedKoan={setSelectedKoan}
          />
        </div>
      ))}
    </div>
  );
};

export default KoanGallery;

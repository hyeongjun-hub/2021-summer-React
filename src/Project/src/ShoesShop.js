import React, { useState } from 'react';
import Shoes from '../Data/ShoesData';
import Card from '../Card';

const ShoesShop = () => {
  // eslint-disable-next-line no-unused-vars
  const [cloth, clothState] = useState(Shoes);
  return (
    <div className="bigContainer">
      <div className="container">
        {cloth.map((num, i) => {
          return <Card cloth={num} key={i} />;
        })}
      </div>
    </div>
  );
};

export default ShoesShop;

import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Item from './Item';

const Shop = () => {
  const [items, setItems] = useState(['abbey road', 'revolver', 'rubber soul']);

  const itemsElements = items.map((item, index) => {
    return <Item key={index} item={item} />;
  });

  return (
    <div>
      <h1>Hello from Shop</h1>
      <Link to="/">Home</Link>
      <div>{itemsElements}</div>
    </div>
  );
};

export default Shop;

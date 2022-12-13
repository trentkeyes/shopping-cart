import React, { useState } from 'react';
import '../../styles/item.css';

const Item = ({ album, artist, art, price, id, addItem }) => {
  const [quantity, setQuantity] = useState(1);
  const handleChange = (e) => setQuantity(Number(e.target.value));
  return (
    <li className="item__card item">
      <div className="item__img">
        <img src={art} alt="album cover" className="item__img" />
      </div>
      <h3>{album}</h3>
      <h3>{artist}</h3>
      <h3>${price}</h3>
      <div className="item__inputs">
        <input
          type="number"
          name="item-quantity"
          value={quantity}
          onChange={handleChange}
          min="1"
          className="item__quantity"
        ></input>
        <button className="item__add" onClick={() => addItem(id, quantity)}>
          Add to Cart
        </button>
      </div>
    </li>
  );
};

export default Item;

import React, { useState } from 'react';
import '../../styles/item.css';
import img from '../../assets/MagicalMysteryTourDoubleEPcover.jpg';

const Item = ({ album, artist, id, addItem }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => setQuantity(e.target.value);

  return (
    <div className="item__card">
      <div className="item__img">
        <img src={img} alt="album cover" className="item__img" />
      </div>
      <h3>{album}</h3>
      <h3>{artist}</h3>
      <div className="item__inputs">
        <input
          type="number"
          name="item-quantity"
          value={quantity}
          onChange={handleChange}
          id=""
          className="item__quantity"
        ></input>
        <button className="item__add" onClick={() => addItem(id, quantity)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Item;

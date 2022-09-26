import React from 'react';
import '../../styles/item.css';
import img from '../../assets/MagicalMysteryTourDoubleEPcover.jpg';

const Item = ({ album, artist, quantity }) => {
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
          // value={quantity}
          // onChange={setQuantity}
          id=""
          className="item__quantity"
        ></input>
        <button className="item__add">Add to Cart</button>
      </div>
    </div>
  );
};

export default Item;

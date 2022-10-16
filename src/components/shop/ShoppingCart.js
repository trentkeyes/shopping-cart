import React from 'react';
import '../../styles/shoppingCart.css';

export const ShoppingCart = ({ shopData, cart }) => {
  const cartElements = cart.map((item) => {
    const album = shopData[item.id];
    return (
      <div>
        <p>
          {album.album} ({item.quantity}){' '}
          <p className="shopping-cart__text-right">
            ${item.quantity * album.price}
          </p>
        </p>
        <p>{album.artist} </p>
      </div>
    );
  });

  return (
    <div>
      {cart.length > 0 ? (
        <div className="shopping-cart">
          <div>{cartElements}</div>
          <p>Total</p>
        </div>
      ) : (
        <p>Add something to your cart</p>
      )}
    </div>
  );
};

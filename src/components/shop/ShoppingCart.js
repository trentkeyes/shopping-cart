import React from 'react';
import '../../styles/shoppingCart.css';

export const ShoppingCart = ({ cart }) => {
  const cartArr = Object.values(cart);

  const cartElements = cartArr.map((item, index) => {
    const album = item.info;
    return (
      <div key={index}>
        <div className="shopping-cart__flex">
          <p>
            {album.album} <span>({album.artist})</span>
          </p>
          <p className="shopping-cart__push-right">
            ({item.quantity})
            <span className="underline">${item.quantity * album.price}</span>
          </p>
        </div>
      </div>
    );
  });

  const totals = cartArr.reduce(
    (acc, current) => {
      const item = current.info;
      const quant = current.quantity;
      console.log(item);
      return {
        quantity: acc.quantity + quant,
        price: Math.round(acc.price + quant * item.price),
      };
    },
    { quantity: 0, price: 0 }
  );
  return (
    <div>
      {cartArr.length > 0 ? (
        <div className="shopping-cart">
          <div>{cartElements}</div>
          <div className="shopping-cart__flex shopping-cart__total">
            <p className="">Total</p>
            <p className="shopping-cart__push-right">
              <span>({totals.quantity})</span>
              <span className="underline"> ${totals.price}</span>
            </p>
          </div>
        </div>
      ) : (
        <p>Add something to your cart</p>
      )}
    </div>
  );
};

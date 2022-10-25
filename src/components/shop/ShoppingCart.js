import React from 'react';
import '../../styles/shoppingCart.css';

export const ShoppingCart = ({ shopData, cart }) => {
  console.log(shopData, cart);

  const cartElements = cart.map((item) => {
    const album = shopData[item.id];
    return (
      <div>
        <div className="shopping-cart__flex">
          <p>
            {album.album} <span>({album.artist})</span>
          </p>
          <p className="shopping-cart__push-right">
            ({item.quantity})$
            <span className="underline">{item.quantity * album.price}</span>
          </p>
        </div>
      </div>
    );
  });

  const totals = cart.reduce(
    (acc, current, index) => {
      console.log('acc', acc, 'current', current);
      console.log('album', current.id);
      return {
        quantity: acc.quantity + current.quantity,
        price: acc.price + current.quantity * shopData[current.id].price,
      };
    },
    { quantity: 0, price: 0 }
  );

  console.log(totals);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="shopping-cart">
          <div>{cartElements}</div>
          <div className="shopping-cart__flex shopping-cart__total">
            <p className="">Total</p>
            <p className="shopping-cart__push-right">
              ({totals.quantity})$
              <span className="underline">{totals.price}</span>
            </p>
          </div>
        </div>
      ) : (
        <p>Add something to your cart</p>
      )}
    </div>
  );
};

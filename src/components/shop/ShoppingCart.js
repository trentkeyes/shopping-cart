import React from 'react';
import '../../styles/shoppingCart.css';

export const ShoppingCart = ({ shopData, cart }) => {
  console.log(shopData, cart);

  const cartElements = cart.map((item) => {
    const album = shopData[item.id];
    return (
      <div>
        <div className="shopping-cart__flex">
          <p>{album.album}</p>
          <p className="shopping-cart__push-right">
            ({item.quantity}) ${item.quantity * album.price}
          </p>
        </div>
        <p>{album.artist}</p>
      </div>
    );
  });

  const totals = cart.reduce(
    (prev, current, index) => {
      console.log('prev', prev, 'current', current);
      return {
        quantity: prev.quantity + current.quantity,
        price: prev.price + current.quantity * shopData[index].price,
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
          <div className="shopping-cart__flex">
            <p>Total</p>
            <p className="shopping-cart__push-right">
              ({totals.quantity}){totals.price}
            </p>
          </div>
        </div>
      ) : (
        <p>Add something to your cart</p>
      )}
    </div>
  );
};

import React from 'react';

export const ShoppingCart = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div>
      {cartItems.length > 0 ? (
        <div>{cartItems}</div>
      ) : (
        <p>Add something to your cart</p>
      )}
    </div>
  );
};

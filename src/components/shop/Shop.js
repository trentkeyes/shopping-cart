import React from 'react';
import Item from './Item';
import { ShoppingCart } from './ShoppingCart';
import '../../styles/shop.css';
import Modal from 'react-modal';
import modalStyles from '../../styles/modalStyles';

const Shop = ({ shopData, cart, addItem, modalIsOpen, closeModal }) => {
  const shopElements = shopData.map((item, index) => {
    return (
      <Item
        key={index}
        id={index}
        album={item.album}
        artist={item.artist}
        price={item.price}
        art={item.art}
        addItem={addItem}
      />
    );
  });

  return (
    <div className="shop__background">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Shopping Cart"
        appElement={document.getElementById('app')}
      >
        <ShoppingCart cart={cart} />
      </Modal>
      <div className="container">
        <button>
          {' '}
          <img
            src={
              '/shopping-cart/assets/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg'
            }
            alt="cart"
          />
        </button>
        <div className="shop__items__flex">{shopElements}</div>
      </div>
    </div>
  );
};

export default Shop;

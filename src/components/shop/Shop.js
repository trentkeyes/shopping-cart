import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import { ShoppingCart } from './ShoppingCart';
import '../../styles/shop.css';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Shop = ({
  shopData,
  cart,
  addItem,
  modalIsOpen,
  closeModal,
  cartElements,
}) => {
  console.log(shopData);
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
        style={customStyles}
        contentLabel="Shopping Cart"
      >
        <ShoppingCart shopData={shopData} cart={cart} />
      </Modal>
      <div className="container">
        <div className="shop__items__flex">{shopElements}</div>
      </div>
    </div>
  );
};

export default Shop;

import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { wikiData } from '../../wikiData';
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
  handleYearChange,
  selectedYear,
  cartElements
}) => {
  console.log(shopData);
  const shopElements = shopData.map((item, index) => {
    return (
      <Item
        key={index}
        id={index}
        album={item.album}
        artist={item.artist}
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
        contentLabel="Example Modal"
      >
        <ShoppingCart cartItems={cartElements} />
      </Modal>
      <div className="container">
        <div className="shop__selector__flex">
          <p className="shop__instructions">
            See the albums that reached #1 on the Billboard charts in the
            year...
          </p>
          <select
            className="shop__selector"
            name="year-select"
            id="year-select"
            onChange={handleYearChange}
            value={selectedYear}
          >
            <option>1945</option>
            <option>1946</option>
            <option>1947</option>
            <option>1948</option>
            <option>1949</option>
            <option>1950</option>
            <option>1951</option>
            <option>1952</option>
            <option>1953</option>
            <option>1954</option>
            <option>1955</option>
            <option>1956</option>
            <option>1957</option>
            <option>1958</option>
            <option>1959</option>
            <option>1960</option>
            <option>1961</option>
            <option>1962</option>
            <option>1963</option>
            <option>1964</option>
            <option>1965</option>
            <option>1966</option>
            <option>1967</option>
            <option>1968</option>
            <option>1969</option>
            <option>1970</option>
            <option>1971</option>
            <option>1972</option>
            <option>1973</option>
            <option>1974</option>
            <option>1975</option>
            <option>1976</option>
            <option>1977</option>
            <option>1978</option>
            <option>1979</option>
            <option>1980</option>
            <option>1981</option>
            <option>1982</option>
            <option>1983</option>
            <option>1984</option>
            <option>1985</option>
            <option>1986</option>
            <option>1987</option>
            <option>1988</option>
            <option>1989</option>
            <option>1990</option>
            <option>1991</option>
            <option>1992</option>
            <option>1993</option>
            <option>1994</option>
            <option>1995</option>
            <option>1996</option>
            <option>1997</option>
            <option>1998</option>
            <option>1999</option>
            <option>2000</option>
            <option>2001</option>
            <option>2002</option>
            <option>2003</option>
            <option>2004</option>
            <option>2005</option>
            <option>2006</option>
            <option>2007</option>
            <option>2008</option>
            <option>2009</option>
            <option>2010</option>
            <option>2011</option>
            <option>2012</option>
            <option>2013</option>
            <option>2014</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
          </select>
        </div>
        <div className="shop__items__flex">{shopElements}</div>
      </div>
    </div>
  );
};

export default Shop;

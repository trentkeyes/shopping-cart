import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../src/components/home/Home';
import Shop from '../src/components/shop/Shop';
import Nav from '../src/components/Nav';
import './styles/index.css';
import './styles/shoppingCart.css';
import { shopData } from './shopData';

function App() {
  const [cart, setCart] = useState({});
  const addItem = (albumId, quantity) => {
    setCart((prev) => {
      if (prev.albumId) {
        prev.albumId.quantity += quantity;
      } else {
        return {
          ...prev,
          [albumId]: {
            quantity: quantity,
            info: {
              ...shopData[albumId],
            },
          },
        };
      }
    });
  };

  const cartQuantity = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App" id="app">
      <HashRouter>
        <Nav cartQuantity={cartQuantity} openModal={openModal} />
        <Routes>
          <Route path="/" index element={<Navigate to="/home" replace />} />
          <Route
            path="/home"
            element={
              <Home
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                shopData={shopData}
                cart={cart}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <Shop
                shopData={shopData}
                cart={cart}
                addItem={addItem}
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
              />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

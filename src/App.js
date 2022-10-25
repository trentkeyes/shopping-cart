import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../src/components/home/Home';
import Shop from '../src/components/shop/Shop';
import Nav from '../src/components/Nav';
import './styles/index.css';
import './styles/shoppingCart.css';
import { shopData } from './shopData';

function App() {
  const [cart, setCart] = useState([]);
  const addItem = (id, quantity) => {
    setCart((prev) => {
      return [...prev, { id: id, quantity: quantity }];
    });
  };

  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;

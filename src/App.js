import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/components/home/Home';
import Shop from '../src/components/shop/Shop';
import Nav from '../src/components/Nav';
import './styles/index.css';
import { wikiData } from './wikiData';

function App() {
  const [cart, setCart] = useState([]);

  const [shopData, setShopData] = useState();

  useEffect(() => {
    const addIds = wikiData.map((item, index) => {
      if (!item.id) {
        return {
          ...item,
          id: index,
        };
      }
      return item;
    });
    setShopData(addIds);
  }, [wikiData]);

  const addItem = (id, quantity) => {
    setCart((prev) => {
      return [...prev, { id: id, quantity: quantity }];
    });
  };

  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const [modalIsOpen, setIsOpen] = useState(false);
  console.log(modalIsOpen);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  console.log(shopData);
  return (
    <div className="App">
      <BrowserRouter>
        <Nav cartQuantity={cartQuantity} openModal={openModal} />
        <Routes>
          <Route
            path="/"
            index
            element={<Home />}
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
          />
          <Route
            path="/shop"
            element={
              <Shop
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

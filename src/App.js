import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/components/home/Home';
import Shop from '../src/components/shop/Shop';
import Nav from '../src/components/Nav';
import './styles/index.css';
import { wikiData } from './wikiData';

function App() {
  const [cart, setCart] = useState([]);

  const [shopData, setShopData] = useState(['data', 'more']);

  const [selectedYear, setSelectedYear] = useState('1968');

  async function getData() {
    let url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=List%20of%20Billboard%20200%20number-one%20albums%20of%20${selectedYear}`;
    url = '#';
    return await fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        const html_code = response['parse']['text']['*'];
        const parser = new DOMParser();
        const html = parser.parseFromString(html_code, 'text/html');
        const tables = html.querySelectorAll('.wikitable');
        console.log(tables);
        const album = html.querySelectorAll('.wikitable > tbody > tr > td > i');
        const artist = html.querySelectorAll(
          '.wikitable > tbody > tr > td:nth-child(3)'
        );
        let albums = [];
        album.forEach((node) => {
          albums.push({
            album: node.textContent,
            artist: node.parentElement.nextElementSibling.textContent,
          });
        });
        const uniqueAlbums = albums.reduce((a, b) => {
          if (a.indexOf(b) < 0) a.push(b);
          return a;
        }, []);
        console.log(uniqueAlbums);
        return uniqueAlbums;
      });
  }

  useEffect(() => {
    getData().then((data) => {
      setShopData(data);
    });
  }, [selectedYear]);

  // useEffect(() => {
  //   const addIds = wikiData.map((item, index) => {
  //     if (!item.id) {
  //       return {
  //         ...item,
  //         id: index,
  //       };
  //     }
  //     return item;
  //   });
  //   setShopData(addIds);
  // }, [wikiData]);

  const addItem = (id, quantity) => {
    setCart((prev) => {
      return [...prev, { id: id, quantity: quantity }];
    });
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const cartElements = cart.map((item) => {
    return (
      <p>
        Album {item.id} ({item.quantity})
      </p>
    );
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Nav cartQuantity={cartQuantity} openModal={openModal} />
        <Routes>
          <Route
            path="/"
            index
            element={
              <Home
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                cartElements={cartElements}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <Shop
                shopData={shopData}
                handleYearChange={handleYearChange}
                selectedYear={selectedYear}
                cart={cart}
                addItem={addItem}
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                cartElements={cartElements}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

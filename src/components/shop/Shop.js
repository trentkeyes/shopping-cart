import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { wikiData } from '../../wikiData';
import Item from './Item';

const Shop = () => {
  const [items, setItems] = useState(wikiData);
  const [albums, setAlbums] = useState();

  let url =
    'https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=List%20of%20Billboard%20200%20number-one%20albums%20of%201968';

  url = '#';
  useEffect(() => {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        const html_code = response['parse']['text']['*'];
        const parser = new DOMParser();
        const html = parser.parseFromString(html_code, 'text/html');
        const tables = html.querySelectorAll('.wikitable');
        const album = html.querySelectorAll('.wikitable > tbody > tr > td > i');
        const artist = html.querySelectorAll(
          '.wikitable > tbody > tr > td:nth-child(3)'
        );

        let albums = [];
        album.forEach((node, index) => {
          albums.push({
            album: node.textContent,
            artist: artist[index].textContent,
          });
        });
        artist.forEach((node) => console.log(node.textContent));
        setAlbums(albums);
        console.log(albums);
      });
  }, [items]);

  const itemsElements = items.map((item, index) => {
    return <Item key={index} album={item.album} artist={item.artist} />;
  });

  return (
    <div>
      <h1>Hello from Shop</h1>
      <Link to="/">Home</Link>
      <div>{itemsElements}</div>
      {/* <div>{albums}</div> */}
    </div>
  );
};

export default Shop;

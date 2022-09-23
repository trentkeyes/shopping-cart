import React from 'react';

const Item = ({ album, artist }) => {
  return (
    <div>
      <h1>{album}</h1>
      <h2>{artist}</h2>
    </div>
  );
};

export default Item;

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Hello from Home</h1>
      <Link to="/">Home</Link> | <Link to="/shop">Shop</Link>
    </div>
  );
};

export default Home;

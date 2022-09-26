import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/index.css';
import '../../styles/home.css';

const Home = () => {
  return (
    <div className="home__background">
      <div className="container">
        <div className="hero__text">
          <h1 className="hero__title">
            The best records. <br />
            Of <em>all</em> time.
          </h1>
          <p className="hero__copy">
            Buy the highest selling albums from every year.
          </p>
          <div className="hero__link">
            <Link to="/shop">Shop now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

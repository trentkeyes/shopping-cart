import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { ShoppingCart } from '../shop/ShoppingCart';
import '../../styles/index.css';
import '../../styles/home.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#3A5A40',
    color: '#DAD7CD',
  },
};

const Home = ({ modalIsOpen, closeModal, shopData, cart }) => {
  return (
    <div className="home__background">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        appElement={document.getElementById('app')}
      >
        <ShoppingCart shopData={shopData} cart={cart} />
      </Modal>
      <div className="container">
        <div className="hero__text">
          <h1 className="hero__title">
            The best records. <br />
            Of 1989.
          </h1>
          <p className="hero__copy">
            Buy the highest selling albums from 1989.
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

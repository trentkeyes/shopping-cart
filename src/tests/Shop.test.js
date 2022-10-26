import React from 'react';
import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import Shop from '../components/shop/Shop';
// import shopData from '../shopData';

const shopData = [
  {
    album: 'Giving You the Best That I Got',
    artist: 'Anita Baker',
    art: '/assets/album-art/GivingYoutheBestThatIGot.jpg',
    price: 9.99,
  },
  {
    album: "Don't Be Cruel",
    artist: 'Bobby Brown',
    art: '/assets/album-art/Cruelalbum.jpg',
    price: 10.99,
  },
  {
    album: 'Appetite for Destruction',
    artist: "Guns N' Roses",
    art: '/assets/album-art/GunsnRosesAppetiteforDestructionalbumcover.jpg',
    price: 12.99,
  },
];

describe('Shop component', () => {
  it('renders the available items in the store', () => {
    const shop = TestRenderer.create(<Shop shopData={shopData} />);
    expect(shop).toMatchSnapshot();
  });
});

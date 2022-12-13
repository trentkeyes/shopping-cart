import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Shop from './Shop';

const mockShopData = [
  {
    album: 'Album 1',
    artist: 'Artist 1',
    price: '10.00',
    art: 'http://www.example.com/album1.jpg',
  },
  {
    album: 'Album 2',
    artist: 'Artist 2',
    price: '12.00',
    art: 'http://www.example.com/album2.jpg',
  },
  {
    album: 'Album 3',
    artist: 'Artist 3',
    price: '8.00',
    art: 'http://www.example.com/album3.jpg',
  },
];

describe('Shop', () => {
  it('renders the correct number of items in the shop', () => {
    const { getAllByRole } = render(<Shop shopData={mockShopData} cart={[]} />);
    const items = getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });
});


import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ShoppingCart } from './ShoppingCart';

const cart = {
  0: {
    quantity: 1,
    info: {
      album: 'Album 1',
      artist: 'Artist 1',
      price: 10,
    },
  },
  1: {
    quantity: 2,
    info: {
      album: 'Album 2',
      artist: 'Artist 2',
      price: 20,
    },
  },
};

test('ShoppingCart component renders correctly with items in the cart', () => {
  const { container } = render(<ShoppingCart cart={cart} />);
  expect(container).toMatchSnapshot();
});

test('ShoppingCart component shows the correct total quantity and price', () => {
  const { getByText } = render(<ShoppingCart cart={cart} />);
  expect(getByText('(3)')).toBeInTheDocument();
  expect(getByText('$50')).toBeInTheDocument();
});

test('ShoppingCart component shows the correct message when the cart is empty', () => {
  const { getByText } = render(<ShoppingCart cart={{}} />);
  expect(getByText('Add something to your cart')).toBeInTheDocument();
});

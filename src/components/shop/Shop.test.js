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

// it('renders the shopping cart modal when the cart button is clicked', () => {
//   const { getByRole, queryByRole } = render(
//     <Shop shopData={mockShopData} cart={{}} />
//   );
//   const cartButton = getByRole('button', { name: 'cart' });
//   const openModal = jest.fn()
//   console.log(cartButton);
//   fireEvent.click(cartButton);
//   const shoppingCart = queryByRole('button', {name: 'cart'});
//   expect(shoppingCart).toBeInTheDocument();
//   expect(openModal).toHaveBeenCalledTimes(1)
// it('renders the shopping cart modal when the cart button is clicked', () => {
  //     const { getByTestId, queryByTestId } = render(
  //       <Shop shopData={mockShopData} cart={[]} />
  //     );
  //     const cartButton = getByTestId('cart-button');
  //     fireEvent.click(cartButton);
  //     const shoppingCart = queryByTestId('shopping-cart-modal');
  //     expect(shoppingCart).toBeInTheDocument();
  //   });
// });

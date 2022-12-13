import React from 'react';
import { render } from '@testing-library/react';
import Item from './Item';

describe('Item', () => {
  it('renders the album name', () => {
    const album = 'Thriller';
    const { getByText } = render(<Item album={album} />);
    expect(getByText(album)).toBeInTheDocument();
  });

  it('renders the artist name', () => {
    const artist = 'Michael Jackson';
    const { getByText } = render(<Item artist={artist} />);
    expect(getByText(artist)).toBeInTheDocument();
  });

  it('renders the album art', () => {
    const art = 'https://example.com/thriller.jpg';
    const { getByAltText } = render(<Item art={art} />);
    const img = getByAltText('album cover');
    expect(img).toBeInTheDocument();
    expect(img.src).toBe(art);
  });

  it('renders the price', () => {
    const price = 9.99;
    const { getByText } = render(<Item price={price} />);
    expect(getByText(`$${price}`)).toBeInTheDocument();
  });
});

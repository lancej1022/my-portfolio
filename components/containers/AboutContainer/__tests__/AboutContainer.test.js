import React from 'react';
import { render } from '@testing-library/react';
import AboutContainer from '../AboutContainer';

test('image should be my photo and load lazy', () => {
  const { getByAltText } = render(<AboutContainer />);
  const profilePic = getByAltText(/lance/i);

  expect(profilePic).toHaveAttribute('src', '/images/lance-photo.jpg');
  expect(profilePic).toHaveAttribute('loading', 'lazy');
});

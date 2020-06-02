import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import NavBar from '../NavBar';

test('anchor should point to homepage', () => {
  const { getByText } = render(<NavBar />);
  const homeAnchor = getByText(/lance jeffers/i);
  expect(homeAnchor).toHaveAttribute('href', '/');
});

test('Hamburger should cause nav menu to cover the screen', () => {
  const { container, getByRole } = render(<NavBar />);
  const hamburger = getByRole('button');
  expect(hamburger).not.toHaveClass('is-active');
  fireEvent.click(hamburger);
  expect(hamburger).toHaveClass('is-active');

  const navList = getByTestId(container, 'nav');
  expect(navList).toHaveStyle('height: 100%');
  expect(document.body.style.overflow).toBe('hidden');
});

test('it displays default nav items', () => {
  const { container } = render(<NavBar />);
  const navList = getByTestId(container, 'nav-list');
  expect(navList.children.length).toBe(5);
});

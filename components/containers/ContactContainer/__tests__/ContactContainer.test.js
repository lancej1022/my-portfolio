import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import ContactContainer from '../ContactContainer';

test('anchors should point to GH, LinkedIn, and Twtter', () => {
  const { container } = render(<ContactContainer />);
  const anchorsContainer = getByTestId(container, 'social-icons');
  expect(anchorsContainer.children).toHaveLength(3);
  expect(anchorsContainer.children[0]).toHaveAttribute(
    'href',
    'https://github.com/lancej1022/'
  );
  expect(anchorsContainer.children[1]).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/lance-jeffers/'
  );
  expect(anchorsContainer.children[2]).toHaveAttribute(
    'href',
    'https://twitter.com/6catsinacoat/'
  );
});

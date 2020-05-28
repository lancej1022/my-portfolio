import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Imports the hamburger icon for the menu
import Hamburger from './Hamburger/Hamburger';

const Nav = styled.header`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;

  /* used to separate the navbar from the rest of the content on the page since the background color is identical */
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);

  /* Position:fixed and top:0 and z-index are used to create a sticky navbar at the top of the viewport */
  position: fixed;
  top: 0;
  z-index: 10;

  width: 100%;
  background-color: ${(props) => props.theme.colorExtraLight};
  opacity: 0.98;
  border-radius: 0 0 1rem 1rem;
`;

interface NavListProps {
  readonly active: boolean;
}

const NavList = styled.nav<NavListProps>`
  /* we only display the menu items if the state is active */
  height: ${({ active }) => (active === true ? `100%` : `0`)};
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 11; /* Sit on top */
  left: 0;
  top: 0;
  background-color: ${(props) => props.theme.colorExtraLight};
  opacity: 0.97; /* Provide some opacity so its clearer to users that they havent left the page */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */

  ul {
    position: relative;
    top: 25%; /* 25% from the top */
    width: 100%; /* 100% width */
    text-align: center; /* Centered text/links */
    margin-top: 3rem; /* 30px top margin to avoid conflict with the close button on smaller screens */
    list-style-type: none;
    text-align: center;
    padding-left: 0;
  }

  li {
    margin: 1rem;
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: ${(props) => props.theme.colorPrimary};
    display: block; /* Display block instead of inline */
    transition: all 0.3s; /* Transition effects on hover (color) */

    &:hover {
      text-decoration: underline;
    }
  }
`;

const NavBar: React.FC = () => {
  /* Determines whether to show the menu items or not. */
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    isOpen && (document.body.style.overflow = 'hidden'); // prevents scrolling when menu is active
    !isOpen && (document.body.style.overflow = ''); // allows user to scroll again when menu is closed
  }, [isOpen]);

  return (
    <Nav>
      <a href="/" aria-label="go to homepage">
        Lance Jeffers
      </a>
      <Hamburger onClick={handleClick} isOpen={isOpen} />
      {/* isOpen must be converted to a string since we cannot pass a boolean to the styled component */}
      <NavList className="nav-list" active={isOpen} data-testid="nav">
        <ul data-testid="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Blog</li>
          <li className="nav-item">Contact</li>
        </ul>
      </NavList>
    </Nav>
  );
};

export default NavBar;

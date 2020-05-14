import React, { useState } from 'react';
import styled from 'styled-components';

import Hamburger from './Hamburger/Hamburger';

const Nav = styled.header`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;

  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);

  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: ${(props) => props.theme.colorExtraLight};
  opacity: 0.98;
  border-radius: 0 0 1rem 1rem;
`;

const NavList = styled.nav`
  height: ${({ active }) => (active === 'true' ? `100%` : `0`)};
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 11; /* Sit on top */
  left: 0;
  top: 0;
  // background-color: rgb(0,0,0); /* Black fallback color */
  background-color: ${(props) => props.theme.colorExtraLight};
  opacity: 0.97;
  // background-color: rgba(0,0,0, 0.9); /* Black w/opacity */
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
    margin 1rem;
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: ${(props) => props.theme.colorPrimary};;
    display: block; /* Display block instead of inline */
    transition: all 0.3s; /* Transition effects on hover (color) */

    &:hover {
      text-decoration: underline;
    }
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <a href="/" aria-label="go to homepage">
        Lance Jeffers
      </a>
      <Hamburger onClick={handleClick} isOpen={isOpen} />
      {/* isOpen must be converted to a string since we cannot pass a boolean to the styled component */}
      <NavList className="nav-list" active={isOpen.toString()}>
        <ul>
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

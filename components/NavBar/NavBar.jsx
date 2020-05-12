import React, { useState } from 'react';
import styled from 'styled-components';

import Hamburger from './Hamburger/Hamburger';

const Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
  // box-shadow: 0 0.4px 1.8px rgba(0, 0, 0, 0.028), 0 1.3px 4.3px rgba(0, 0, 0, 0.04),
  //   0 2.7px 8.1px rgba(0, 0, 0, 0.05), 0 5.4px 14.5px rgba(0, 0, 0, 0.06),
  //   0 10.7px 27.2px rgba(0, 0, 0, 0.072), 0 28px 65px rgba(0, 0, 0, 0.1);

  box-shadow: 0 0.5px 28.9px rgba(0, 0, 0, 0.025), 0 1.3px 29.5px rgba(0, 0, 0, 0.036),
    0 2.8px 27.7px rgba(0, 0, 0, 0.045), 0 5.1px 27.2px rgba(0, 0, 0, 0.054),
    0 8.9px 32.3px rgba(0, 0, 0, 0.065), 0 20px 80px rgba(0, 0, 0, 0.09);

  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: ${(props) => props.theme.colorExtraLight};
  opacity: 0.97;
  border-radius: 0 0 1rem 1rem;
`;

const NavList = styled.nav`
  display: ${({ active }) => (active === 'true' ? 'block' : 'none')};
  transition: transform 0.4s ease-in-out;

  ul {
  list-style-type: none;
  text-align: center;
  padding-left: 0;
  }

  li {
    margin 1rem
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

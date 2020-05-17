import React from 'react';

type HamburgerProps = {
  isOpen: boolean;
  onClick: any; // this should be a function but I'm too lazy to make an interface/type for it.
};

/**
 * Reusable hamburger icon that has some animations built in.
 * @param isOpen: boolean based on whether the hamburger has launched the menu overlay
 * the classname is dynamic, based on whether the button is clicked or not
 * onClick toggles the menu overlay in NavBar.tsx and is prop drilled from there
 */
const Hamburger: React.FC<HamburgerProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className={`hamburger hamburger--collapse ${isOpen ? 'is-active' : ''}`}
      onClick={onClick}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
};

export default Hamburger;

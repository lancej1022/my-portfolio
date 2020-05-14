import React, { useState } from 'react';

const Hamburger = ({ isOpen, onClick }) => {
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

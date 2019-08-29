import React from 'react';
import "./header.css";
import devshop from "./../../assets/logo.svg"


const Header: React.FunctionComponent = () => {
  return (
    <header className="header-component">
      <div className="header-wrapper">
        <img className="header-logo" src={devshop} alt="Devshop Logo" />
        <div className="header-content">
          <h1 className="header-tagline">Are you building software? We can help.</h1>
          <p>See how</p>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import "./navigation.css";
import logo from "../../assets/logo.svg"

const Navigation: React.FunctionComponent = () => {
  return (
    <nav className="navigation-component">
      <div className="navigation-wrapper">
        <img className="navigation-logo" src={logo} alt="Devshop logo"/><h1 className="navigation-company-name">Devshop</h1>
      </div>
    </nav>
  )
}

export default Navigation;
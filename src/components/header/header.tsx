import React, { CSSProperties } from 'react';
import "./header.css";
import devshop from "./../../assets/logo.svg"
import Cube from '../cube/cube';


const Header = () => {
  const cube_one:CSSProperties = { top: "50%", left: 10, zIndex: 4 };
  const cube_two:CSSProperties = { top: "18%", right: 60, zIndex: 4 };
  const cube_three:CSSProperties = { top: 20, left: "43%", zIndex: 4 };
  const cube_four:CSSProperties = { top: "65%", left: "30%", zIndex: 4 };

  return (
    <header className="header-component">
      <div className="header-wrapper">
        <Cube size={42} position={cube_one} duration="12s" />
        <Cube size={56} position={cube_two} duration="14s"/>
        <Cube size={30} position={cube_three} duration="16s"/>
        <Cube size={25} position={cube_four} duration="6s"/>
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

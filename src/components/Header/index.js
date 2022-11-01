import React from "react";
import logo from './logo.png';
import "./logo.css";
import * as C from "./styles";


const Header = () => {
  return (
    <C.Container>
      <C.Header>
        <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <C.Title>Gestion de Budget</C.Title>
        </div>
      </C.Header>
    </C.Container>
  );
};

export default Header;
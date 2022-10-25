import React from "react";
import logo from '../images/logo-staart.svg'

export const Header = () => {
  return (
    <nav>
      <div className="container">
        <a className="navigation-brand" href="/">
          <img src={logo} alt="React" />
        </a>
      </div>
    </nav>
  )
};

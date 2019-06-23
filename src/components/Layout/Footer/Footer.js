import React from "react";

const Footer = () => {
  return (
    <div className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <span className="font-weight-bold">Owlvey App </span>
          <span className="font-italic">{`${process.env.buildNumber}`}</span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

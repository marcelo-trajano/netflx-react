import React from "react";
import "./Header.css";

export default ({ black }) => {
  return (
    <header className={`${black ? "black" : ""}`}>
      <div className="logo-header">
        <img
          className=""
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        />
      </div>
      <div className="avatar--header">
        <img
          className=""
          src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
        />
      </div>
    </header>
  );
};

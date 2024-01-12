import React, { useState } from "react";
import style from "./Header.module.css";
import logo from "../assets/logo.png";

function Header() {
  const [isOpne, setisOpen] = useState(false);
  const toggleheader = () => {
    setisOpen(!isOpne);
  };
  return (
    <div className={style.header}>
      <img src={logo} alt="image not found" className={style.logo} />
      {!isOpne && (
        <>
          <ul>
            <li style={{ fontWeight: "500" }}>Home</li>
            <li>Features</li>
            <li>Preview</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </>
      )}
      <div className={style.btns}>
        <button className={style.loginbtn}>Login</button>
        <button className={style.downbtn}>Download</button>
      </div>

      <button className={style.togglebtn} onClick={toggleheader}>
        ☰
      </button>
    </div>
  );
}

export default Header;

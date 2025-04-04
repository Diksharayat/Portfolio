import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* copyright */}
      <div className="footer-cpyright">
        <p>© 2025. Design by Diksha</p>
      </div>
      {/* social */}
      <ul className="footer-social-media">
     
        <li>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/diksharayat?igsh=MWZvd2FhdHhzc253eQ%3D%3D&utm_source=qr">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/diksha-rayat-922156232/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

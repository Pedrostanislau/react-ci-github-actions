import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import {
  FaFacebookSquare,
  FaInstagram,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { IoMdRocket } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer">
      <a href={"/#"} className="footer_logo">
        Stanislau
      </a>

      <ul className="permalinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="experience">Experience</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>

      <div className="social_media">
        <a href={"https://github.com/pstanislau"} target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href={"https://www.instagram.com/pedrostanislau/"}
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a href={"https://twitter.com/pedrostanislau"} target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a
          href={"https://facebook.com/pstanislau"}
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare />
        </a>
        <a href={"https://linktr.ee/pstanislau"} target="_blank" rel="noreferrer">
          <SiLinktree />
        </a>
      </div>
      <div className="rocket_container">
        <a href={"/#"} className="rocket">
          <IoMdRocket className="rocket-img" />
        </a>
        <p className="rocket_p">Beam me up, Shawty!</p>
      </div>
      <div className="copyright">
        <small>&copy; Losier. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

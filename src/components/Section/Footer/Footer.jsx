import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import {
  FaFacebookSquare,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
import AWSIcon from 'react-aws-icons/dist/aws/logo/AWS';
import S3 from 'react-aws-icons/dist/aws/logo/S3';
import CloudFront from 'react-aws-icons/dist/aws/logo/CloudFront';
import Route53 from 'react-aws-icons/dist/aws/logo/Route53';
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

      <div className="social_media">
      <a href={"https://aws.amazon.com"} target="_blank" rel="noreferrer">
          <AWSIcon/>
        </a>

        <a href={"https://aws.amazon.com/s3/"} target="_blank" rel="noreferrer">
          <S3/>
        </a>

        <a href={"https://aws.amazon.com/pt/cloudfront/"} target="_blank" rel="noreferrer">
          <CloudFront/>
        </a>

        <a href={"https://aws.amazon.com/pt/route53/"} target="_blank" rel="noreferrer">
          <Route53/>
        </a>

        <a href={"https://domains.google/"} target="_blank" rel="noreferrer">
          <FaGoogle/>
        </a>
      </div>
      <div className="rocket_container">
        <a href={"/#"} className="rocket">
          <IoMdRocket className="rocket-img" />
        </a>
        <p className="rocket_p">Beam me up, Shawty!</p>
      </div>
      <div className="copyright">
        <small>&copy; Tropa do Sábio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

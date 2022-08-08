import React from "react";

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div>
      <div className="header_socials">
        <a
          href={"https://github.com/pstanislau"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href={"https://www.linkedin.com/in/pedro-stanislau-tomacheski/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href={"https://www.instagram.com/pedrostanislau/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href={"https://twitter.com/pedrostanislau"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter />
        </a>
        <a href={"mailto:tomacheski18@gmail.com"}>
          <BsEnvelope />
        </a>
      </div>

      <div className="mail-container">
        <a href={"mailto:tomacheski18@.gmail.com"} className="mail">
           tomacheski18@.gmail.com
        </a>
      </div>
    </div>
  );
};

export default HeaderSocials;

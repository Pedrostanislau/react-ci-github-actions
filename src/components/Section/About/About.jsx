import React from "react";
import "./About.css";

// import About_Image from "../../../assets/Pics/about_image.png";

import { FaAward } from "react-icons/fa";
import { BsFolder } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

var ProjectNumber;

fetch("https://api.github.com/users/pstanislau")
  .then((response) => response.json())
  .then((data) => {
    ProjectNumber = `${data.public_repos + data.public_gists + "+"}`;
  })
  .catch(() => {
    ProjectNumber = "60+";
  });

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="me image-card">
          <img src={require("../../../assets/Pics/me2.jpeg")} alt="me" />
        </div>
        {/* </div> */}

        <div className="about_content">
          <div className="about_card">
            <article className="about_card-content">
              <FaAward className="about_icons" />
              <h5>Experience</h5>
              <small>Working at Iteris</small>
            </article>

            <article className="about_card-content">
              <BsFolder className="about_icons" />
              <h5>Projects</h5>
              <small>{ProjectNumber}</small>
            </article>

            <article className="about_card-content">
              <BsStar className="about_icons" />
              <h5>Achivements</h5>
              <small>6 - TRÔ</small>
            </article>
          </div>
          <p>
            Hello! My name is <span>Pedro Stanislau</span> and I enjoy creating
            things that live on the internet. My interest in web development
            started back in high school and has been something that's been a
            part of my life for the past few years.
            <br />I'm a fast learner who loves to interact with people and solve
          problems.
          <br />
          My professional goal is to always learn as much
as possible to have a great skills repertory and further assist
my mates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

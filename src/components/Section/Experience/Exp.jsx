import React from "react";
import "./Exp.css";
import { BsPatchCheck } from "react-icons/bs";

const Exp = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>DevOps</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>Cloud</h4>
                <small className="text-light">Low Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>Containers</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>Observability</h4>
                <small className="text-light">Elementary</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>CI/CD</h4>
                <small className="text-light">Low Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>Automation</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>IAC</h4>
                <small className="text-light">Elementary</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Upper Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>C#</h4>
                <small className="text-light">Upper Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>Postman</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h4>JAVA</h4>
                <small className="text-light">Pre-advanced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exp;

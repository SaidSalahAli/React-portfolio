import React from "react";
import { DataSkills } from "./data/data";
import {Zoom }from "react-reveal";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <Zoom>
      <div className="skills__container bd-grid">
      <h2 className="section-title">Skills</h2>
        <div>
          <h2 className="skills__subtitle">Profesional Skills</h2>
          <p className="skills__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            optio id vero amet, alias architecto consectetur error eum eaque
            sit.
          </p>
          {DataSkills.map((data) => (
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-html5 skills__icon"></i>
                <span className="skills__name">{data.skills}</span>
              </div>
              <div className={`skills__bar ${data.classNa}`}></div>
              <div>
                <span className="skills__percentage">{data.reted}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
        </Zoom>
    </section>
  );
};

export default Skills;

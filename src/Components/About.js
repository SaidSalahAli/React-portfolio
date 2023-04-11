import React from "react";
import {Zoom }from "react-reveal";
const About = () => {
  return (
    // <!--===== ABOUT =====-->
    <section className="about section " id="about">
    <Zoom  >
      <h2 className="section-title">About</h2>

      <div className="about__container bd-grid">
        <div className="about__img">
          <img src="/img/myImg1.jpg" alt="" />
        </div>

        <div className="title_p">
          <h2 className="about__subtitle">I'am Said</h2>
          <p className="about__text">
            I love turning beautiful designs into usable websites that respond
            to different devices and user contexts and are supported by
            beautiful, scalable code. I am always a perfectionist to make my
            projects unique and creative, and I do this by keeping my eye on new
            tools, reading articles, following the right people, and always
            striving to learn and work in a team.
          </p>
        </div>
      </div>
      </Zoom>
    </section>
  );
};

export default About;

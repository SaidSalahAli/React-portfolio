import React from "react";
import {Zoom }from "react-reveal";
const Projectes = () => {
  return (
    <section className="work section" id="work">
      <Zoom>
      <h2 className="section-title">Work</h2>
      <div className="work__container bd-grid">
        <a href="https://steady-meringue-4f38a2.netlify.app" className="work__img">
          <img src="/img/img2.png" alt="" />
        </a>{" "}
        <a href="https://steady-sundae-96ce5b.netlify.app" className="work__img">
          <img src="/img/img3.png" alt="" />
        </a>{" "}
        <a href="https://chimerical-croissant-5de9e1.netlify.app" className="work__img">
          <img src="/img/img1.png" alt="" />
        </a>
        <a href="#s" className="work__img">
          <img src="/img/img4.png" alt="" />
        </a>{" "}
        <a href="https://saidsalahali.github.io/Landing_Page/" className="work__img">
          <img src="/img/img5.png" alt="" />
        </a>{" "}
      </div>
      </Zoom>
    </section>
  );
};

export default Projectes;

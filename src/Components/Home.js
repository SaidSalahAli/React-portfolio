import { BsFacebook } from "react-icons/bs";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
const Home = () => {
  return (
    // <!--===== HOME =====-->
      <div className="home  " id="home">

      <div className="home__data">
        <h1 className="home__title">Hi,I'am</h1>
        <span className="home__title-color">Said Salah</span>
        <p>
          Front End devolpor <span> |React.js|</span>
        </p>
        <div className="home__social">
          <a
            href="https://www.facebook.com/alhdre.s/"
            className="home__social-icon">
            <BsFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/said-salah-a064a5234/"
            className="home__social-icon">
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/SaidSalahAli"
            className="home__social-icon">
            <AiFillGithub />
          </a>
          <a
            href="https://www.instagram.com/Said_Salah_Ali/"
            className="home__social-icon">
            <FaInstagram />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1IKNyjD73HVwIwQwSLKr77hmzmS9sIriQ/view?usp=sharing"
          className="button">
          My Resume
        </a>
      </div>
    </div>

  );
};

export default Home;

import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import {MdOutlineMailOutline} from 'react-icons/md'

const Footer = () => {
  return (
    //* <!--===== FOOTER =====--> */
    <div>
    <footer className="footer">
        <p className="footer__title">Said Salah Ali</p>
        <div className="footer__social">
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
        <p className="footer__copy">&#169; Said Salah</p>
    </footer>
</div>
  )
}

export default Footer
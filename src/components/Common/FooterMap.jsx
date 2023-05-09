import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "../../assets/styles/components/footer.scss";
export default function FooterMap() {
  return (
    <footer>
      <div className="rowf">
        <iframe
          title="google-maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4540.06147856743!2d10.194189534729876!3d36.843176731763336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34c6d1e93bef%3A0x4153c4733f285343!2sInstitut%20national%20des%20sciences%20appliqu%C3%A9es%20et%20de%20technologie!5e0!3m2!1sfr!2stn!4v1635017602016!5m2!1sfr!2stn"
          className="map"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <div className="footer-content">
          <Link className="navbar-logo" to="/">
            <img src={logo} alt="logo" />
          </Link>

          <ul className="socials">
            <li>
              <a
                href="//www.facebook.com/IeeeInsatStudentBranch"
                className="fa"
              >
                <i className="icofont-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="//www.linkedin.com/company/ieee-insat-student-branch"
                className="fa"
              >
                <i className="icofont-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="//www.instagram.com/ieee.insat.sb" className="fa">
                <i className="icofont-instagram"></i>
              </a>
            </li>
            <li>
              <a href="mailto:ieee@insat.ucar.tn" className="fa">
                <i className="icofont-email"></i>
              </a>
            </li>
          </ul>
          <div className="footer-menu">
            <ul className="f-menu">
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/chapters" className="link">
                  Chapters
                </Link>
              </li>
              <li>
                <Link to="/activities" className="link">
                  Activities
                </Link>
              </li>
              <li>
                <Link to="/awards" className="link">
                  Awards
                </Link>
              </li>
              <li>
                <Link to="/faq" className="link">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          <i className="icofont-copyright"></i> IEEE INSAT Student Branch 2023
        </p>
      </div>
    </footer>
  );
}

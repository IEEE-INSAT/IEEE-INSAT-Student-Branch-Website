import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <Fade left>
              <div className="col-lg-6 col-md-6">
                <div className="single-footer-widget">
                  <h3>Location</h3>

                  <p className="location">
                    <i className="icofont-google-map"></i> 676 INSAT Centre
                    Urbain Nord BP، Tunis Cedex 1080
                  </p>

                  <Link to="tel:+21692712714" className="contact-authority">
                    <i className="icofont-phone"></i> (+216) 92 712 714
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="single-footer-widget">
                  <h3>Connect with us!</h3>
                  <p>
                    Follow us on our social media channels to keep yourself
                    updated about our latest content.
                  </p>

                  <ul className="social-links">
                    <li>
                      <a
                        href="//www.facebook.com/IeeeInsatStudentBranch"
                        className="facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.linkedin.com/company/ieee-insat-student-branch"
                        className="linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.instagram.com/ieee.insat.sb"
                        className="instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:sb.insat@ieee.org"
                        className="instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icofont-email"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="copyright-area">
                  <div className="logo">
                    <Link to="/">
                      <img
                        src={require("../../assets/images/logo.png")}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <ul>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="contact">Contact</Link>
                    </li>
                  </ul>
                  <p>
                    <i className="icofont-copyright"></i> IEEE INSAT Student
                    Branch 2022
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

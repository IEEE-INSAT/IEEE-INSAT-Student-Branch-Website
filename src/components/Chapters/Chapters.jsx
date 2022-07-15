import React from "react";
import lax from "lax.js";
import { Link } from "react-router-dom";
import LaxDiv from "../Shared/LaxDiv";
import Bounce from "react-reveal/Bounce";

class Chapters extends React.Component {
  constructor(props) {
    super(props);
    lax.setup();

    document.addEventListener(
      "scroll",
      function (x) {
        lax.update(window.scrollY);
      },
      false
    );

    lax.update(window.scrollY);
  }

  render() {
    return (
      <>
        <section className="speakers-area ptb-120 pb-0">
          <div className="container">
            <Bounce bottom>
              <div className="section-title">
                <span>Discover Our Chapters and Affinity Groups!</span>
                <h2>CHAPTERS & AFFINITY GROUPS </h2>
                <div className="bar"></div>
                <LaxDiv text="CHAPTERS" dataPreset="driftRight" />
                <Link to="chapters" className="btn btn-primary">
                  View Chapters and Affinity Groups
                </Link>
              </div>
            </Bounce>
          </div>
        </section>

        <section className="speakers-area ptb-120">
          <div className="row m-0">
            <Bounce bottom>
              <div className="col-lg-3 col-md-6 p-0">
                <div className="elkevent-single-speakers">
                  <img
                    src={require("../../assets/images/chapters/RAS.jpg")}
                    alt="chapters"
                  />

                  <ul>
                    <li>
                      <a
                        href="//www.facebook.com/INSAT.RAS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook"
                      >
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.instagram.com/ieee_ras_insat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram"
                      >
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.linkedin.com/company/ieee-insat-ras"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                      >
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//ras-insat.ieee.tn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                      >
                        <i className="icofont-web"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Bounce>

            <Bounce bottom>
              <div className="col-lg-3 col-md-6 p-0">
                <div className="elkevent-single-speakers">
                  <img
                    src={require("../../assets/images/chapters/CS.jpg")}
                    alt="chapters"
                  />

                  <ul>
                    <li>
                      <a
                        href="//www.facebook.com/INSAT.CS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook"
                      >
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.instagram.com/ieee_cschapterinsatsb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram"
                      >
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.linkedin.com/company/ieeeinsat-cschapter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                      >
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//cs-insat.ieee.tn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                      >
                        <i className="icofont-web"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Bounce>
            <Bounce bottom>
              <div className="col-lg-3 col-md-6 p-0">
                <div className="elkevent-single-speakers">
                  <img
                    src={require("../../assets/images/chapters/IAS.jpg")}
                    alt="chapters"
                  />

                  <ul>
                    <li>
                      <a
                        href="//www.facebook.com/IASINSAT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook"
                      >
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.linkedin.com/company/ieee-insat-ias-sbc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                      >
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//ias-insat.ieee.tn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                      >
                        <i className="icofont-web"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Bounce>
            <Bounce bottom>
              <div className="col-lg-3 col-md-6 p-0">
                <div className="elkevent-single-speakers">
                  <img
                    src={require("../../assets/images/chapters/PES.jpg")}
                    alt="chapters"
                  />

                  <ul>
                    <li>
                      <a
                        href="//www.facebook.com/PES.INSAT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook"
                      >
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.instagram.com/ieee.pes.insat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram"
                      >
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.linkedin.com/company/ieee-pes-chapter-insat-sb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                      >
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//pes-insat.ieee.tn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                      >
                        <i className="icofont-web"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Bounce>
            <Bounce bottom>
              <div className="col-lg-3 col-md-6 p-0">
                <div className="elkevent-single-speakers">
                  <img
                    src={require("../../assets/images/chapters/EMBS.png")}
                    alt="chapters"
                  />

                  <ul>
                    <li>
                      <a
                        href="//www.facebook.com/EMBS.INSAT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook"
                      >
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.instagram.com/ieee.embs.insat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram"
                      >
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.linkedin.com/company/ieee-embs-insat-sb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                      >
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//embs-insat.ieee.tn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                      >
                        <i className="icofont-web"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Bounce>
            <Bounce bottom>
              <div className="col-lg-3 col-md-6 p-0">
                <div className="elkevent-single-speakers">
                  <img
                    src={require("../../assets/images/chapters/NPSS.jpg")}
                    alt="chapters"
                  />

                  <ul>
                    <li>
                      <a
                        href="//www.facebook.com/INSAT.NPSS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook"
                      >
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.instagram.com/ieee.npss.insat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram"
                      >
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.linkedin.com/showcase/ieee-npss-insat-sbc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                      >
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Bounce>
            <Bounce bottom>
              <div className="col-lg-3 col-md-6 p-0">
                <div className="elkevent-single-speakers">
                  <img
                    src={require("../../assets/images/chapters/PELS.jpg")}
                    alt="chapters"
                  />
                </div>
              </div>
            </Bounce>
            <Bounce bottom>
              <div className="col-lg-3 col-md-6 p-0">
                <div className="elkevent-single-speakers">
                  <img
                    src={require("../../assets/images/chapters/WIE.jpg")}
                    alt="chapters"
                  />

                  <ul>
                    <li>
                      <a
                        href="//www.facebook.com/IEEE.WIE.INSAT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook"
                      >
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.instagram.com/ieee_wie_insat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram"
                      >
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.linkedin.com/company/ieee-wie-affinity-group-insat-student-branch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                      >
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="//wie-insat.ieee.tn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                      >
                        <i className="icofont-web"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Bounce>
          </div>
        </section>
      </>
    );
  }
}

export default Chapters;

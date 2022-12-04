import lax from "lax.js";
import React from "react";
import Bounce from "react-reveal/Bounce";
import LaxDiv from "../Shared/LaxDiv";

class SBCommittee extends React.Component {
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
            <div className="section-title">
              <span>Meet Our Executive Board</span>
              <h2>EXECUTIVE BOARD 2022</h2>
              <div className="bar"></div>
              <LaxDiv text="BOARD" dataPreset="driftRight" />
              {/* <a href="#" className="btn btn-primary">
              Get to know them!
            </a> */}
            </div>
          </div>
        </section>
        <section className="speakers-area-two ptb-120">
          <div className="container">
            <div className="row">
              <Bounce right>
                <div className="col-lg-4 col-md-6">
                  <div className="single-speakers-box">
                    <div className="speakers-image">
                      <img
                        src={require("../../assets/images/members/Mahdi.jpg")}
                        alt="speakers"
                      />
                    </div>

                    <div className="speakers-content">
                      <h3>
                        <a href="https://www.facebook.com/ghorbelmahdi0">
                          Mahdi Ghorbel
                        </a>
                      </h3>
                      <span>Chairman</span>

                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/ghorbelmahdi0"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/mahdighorbel/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/mahdi-ghorbel-0b102a170/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="mailto:zormati@ieee.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin"
                          >
                            <i className="icofont-email"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Bounce>
              <Bounce right>
                <div className="col-lg-4 col-md-6">
                  <div className="single-speakers-box">
                    <div className="speakers-image">
                      <img
                        src={require("../../assets/images/members/Imen.jpg")}
                        alt="speakers"
                      />
                    </div>

                    <div className="speakers-content">
                      <h3>
                        <a href="https://www.facebook.com/profile.php?id=100006124454903">
                          Imen Kaabachi
                        </a>
                      </h3>
                      <span>General Secretary</span>

                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/profile.php?id=100006124454903"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/imen_kaabachi/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/imen-kaabachi-07a288224/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="mailto:hend.kmiha@ieee.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin"
                          >
                            <i className="icofont-email"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Bounce>
              <Bounce right>
                <div className="col-lg-4 col-md-6">
                  <div className="single-speakers-box">
                    <div className="speakers-image">
                      <img
                        src={require("../../assets/images/members/Hela.jpg")}
                        alt="speakers"
                      />
                    </div>

                    <div className="speakers-content">
                      <h3>
                        <a href="https://www.linkedin.com/in/imen-kaabachi-07a288224/">
                          Hela Khadhar
                        </a>
                      </h3>
                      <span>Vice Chair Membership Activities</span>

                      <ul className="social">
                        <li>
                          <a
                            href="https://www.linkedin.com/in/imen-kaabachi-07a288224/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/hela_khadhar/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/hela-khaddar-091280220/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="mailto:mariemmanai@ieee.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin"
                          >
                            <i className="icofont-email"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Bounce>
              <Bounce right>
                <div className="col-lg-4 col-md-6">
                  <div className="single-speakers-box">
                    <div className="speakers-image">
                      <img
                        src={require("../../assets/images/members/Kais.jpg")}
                        alt="speakers"
                      />
                    </div>

                    <div className="speakers-content">
                      <h3>
                        <a href="https://www.facebook.com/kais.chammakhi.7">
                          Kais Chammakhi
                        </a>
                      </h3>
                      <span>Vice Chair Technical Activities</span>

                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/kais.chammakhi.7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/kaischammakhi/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/kais-chammakhi-473129227/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="mailto:zormati@ieee.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin"
                          >
                            <i className="icofont-email"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Bounce>
              <Bounce right>
                <div className="col-lg-4 col-md-6">
                  <div className="single-speakers-box">
                    <div className="speakers-image">
                      <img
                        src={require("../../assets/images/members/Rayene.jpg")}
                        alt="speakers"
                      />
                    </div>

                    <div className="speakers-content">
                      <h3>
                        <a href="https://www.facebook.com/nesrine.mademoizlle1">
                          Rayene Braik
                        </a>
                      </h3>
                      <span>Media & Communication Manager</span>

                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/nesrine.mademoizlle1"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/rayenebraik/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/rayene-braik-094aa121b/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="mailto:amirabecheikh12@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin"
                          >
                            <i className="icofont-email"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Bounce>
              <Bounce right>
                <div className="col-lg-4 col-md-6">
                  <div className="single-speakers-box">
                    <div className="speakers-image">
                      <img
                        src={require("../../assets/images/members/Safa.jpg")}
                        alt="speakers"
                      />
                    </div>

                    <div className="speakers-content">
                      <h3>
                        <a href="https://www.facebook.com/safa.kdidi">
                          Safa Kedidi
                        </a>
                      </h3>
                      <span>Webmaster</span>

                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/safa.kdidi"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/safakdidi/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/safa-kedidi-513509226/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/safaakdidi"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-github"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="mailto:sirajeddineaissa@ieee.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin"
                          >
                            <i className="icofont-email"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Bounce>
              <Bounce right>
                <div className="col-lg-4 col-md-6">
                  <div className="single-speakers-box">
                    <div className="speakers-image">
                      <img
                        src={require("../../assets/images/members/Eya.jpg")}
                        alt="speakers"
                      />
                    </div>

                    <div className="speakers-content">
                      <h3>
                        <a href="https://www.facebook.com/souissi.eya.33">
                          Aya Souissi
                        </a>
                      </h3>
                      <span>Treasurer</span>

                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/souissi.eya.33"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/souissi.eya/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/safa-kedidi-513509226/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="mailto:zeinebtekaya@ieee.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin"
                          >
                            <i className="icofont-email"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Bounce>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SBCommittee;

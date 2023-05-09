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
                      <span>Chairman</span>

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
                            href="mailto:kaischammakhi@ieee.org"
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
                            href="mailto:Imen.kaabachi@ieee.org"
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
                        <a href="https://www.facebook.com/khadharhela">
                          Hela Khadhar
                        </a>
                      </h3>
                      <span>Vice Chair Technical Activities</span>

                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/khadharhela"
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
                            href="mailto:hela.khaddar@ieee.org"
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
                        src={require("../../assets/images/members/sahar.jpg")}
                        alt="speakers"
                      />
                    </div>

                    <div className="speakers-content">
                      <h3>
                        <a href="https://www.facebook.com/sahar.bettaieb.9">
                          Sahar Bettaieb
                        </a>
                      </h3>
                      <span>Media & Communication Manager</span>

                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/sahar.bettaieb.9"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/sahar_btaieb/?igshid=NTc4MTIwNjQ2YQ%3D%3D&fbclid=IwAR3d6pRtPng3Ia1qrCYVWS4EGxTrLXAzRGiB5TPrvrxCDosj6-1bKZIJN4U"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/sahar-bettaieb-976888209?fbclid=IwAR2HI-F68XC8suFP-pXQ4t942q-S-WvJjx6VBMY7AQv7D80ijIRo7EaSbd8"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="mailto:saharbetaieb@gmail.com"
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
                            href="mailto:safakedidi@ieee.org"
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
                            href="mailto:ayasouissi@ieee.org"
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

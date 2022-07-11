import React from "react";
import lax from "lax.js";
import LaxDiv from "../Shared/LaxDiv";
import Bounce from "react-reveal/Bounce";

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
                        src={require("../../assets/images/members/Zormati.jpg")}
                        alt="speakers"
                      />
                    </div>

                    <div className="speakers-content">
                      <h3>
                        <a href="//www.facebook.com/ma.zormati">
                          Mohamed Ali Zormati
                        </a>
                      </h3>
                      <span>Chairman</span>

                      <ul className="social">
                        <li>
                          <a
                            href="//www.facebook.com/ma.zormati"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="//www.instagram.com/maz.zormati"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="//www.linkedin.com/mohamedalizormati"
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
                        src={require("../../assets/images/members/Hend.jpg")}
                        alt="speakers"
                      />
                    </div>

                    <div className="speakers-content">
                      <h3>
                        <a href="//www.facebook.com/hend.kmiha">Hend Kmiha</a>
                      </h3>
                      <span>General Secretary</span>

                      <ul className="social">
                        <li>
                          <a
                            href="//www.facebook.com/hend.kmiha"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="//www.instagram.com/in/hend-kmiha-08b607222"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="//www.linkedin.com/"
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
                        src={require("../../assets/images/members/Mariem.jpg")}
                        alt="speakers"
                      />
                    </div>

                    <div className="speakers-content">
                      <h3>
                        <a href="//www.facebook.com/profile.php?id=100009415355434">
                          Mariem Manai
                        </a>
                      </h3>
                      <span>HR Manager</span>

                      <ul className="social">
                        <li>
                          <a
                            href="//www.facebook.com/profile.php?id=100009415355434"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="//www.instagram.com/mariem._mannai"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="//www.linkedin.com/in/mariem-manai-2688481a9"
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
                        src={require("../../assets/images/members/Amira.jpg")}
                        alt="speakers"
                      />
                    </div>

                    <div className="speakers-content">
                      <h3>
                        <a href="//www.facebook.com/amira.becheikh.56">
                          Amira Becheikh
                        </a>
                      </h3>
                      <span>Media & Communication Manager</span>

                      <ul className="social">
                        <li>
                          <a
                            href="//www.facebook.com/amira.becheikh.56"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="//www.instagram.com/amira_becheikh"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="//www.linkedin.com/in/amira-becheikh-85600620a"
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
                        src={require("../../assets/images/members/Siraje.jpg")}
                        alt="speakers"
                      />
                    </div>

                    <div className="speakers-content">
                      <h3>
                        <a href="//www.facebook.com/Sirajeddine.Aissa">
                          Sirajeddine Aissa
                        </a>
                      </h3>
                      <span>Webmaster</span>

                      <ul className="social">
                        <li>
                          <a
                            href="//www.facebook.com/Sirajeddine.Aissa"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="//www.instagram.com/sirajeddine.aissa"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="//www.linkedin.com/in/sirajeddineaissa"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="//github.com/sirajeddineaissa"
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
                        src={require("../../assets/images/members/Zaineb.jpg")}
                        alt="speakers"
                      />
                    </div>

                    <div className="speakers-content">
                      <h3>
                        <a href="//www.facebook.com/tekaya.zeineb">
                          Zaineb Tekaya
                        </a>
                      </h3>
                      <span>Treasurer</span>

                      <ul className="social">
                        <li>
                          <a
                            href="//www.facebook.com/tekaya.zeineb"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="//www.instagram.com/zeinebtekaya"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icofont-instagram"></i>
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

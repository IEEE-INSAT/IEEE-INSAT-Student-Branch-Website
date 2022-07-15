import React from "react";
import LaxButton from "../Shared/LaxButton";
import Slide from "react-reveal/Slide";
import Wobble from "react-reveal/Wobble";

class About extends React.Component {
  render() {
    return (
      <>
        <section className="about-area-three ptb-120 bg-image">
          <div className="container">
            <div className="row h-100 align-items-center">
              <div className="col-lg-6">
                <div className="about-image">
                  <img
                    src={require("../../assets/images/about/IEEE.svg")}
                    className="about-img1"
                    alt="about"
                  />

                  <LaxButton buttonText="Visit IEEE" link="//www.ieee.org" />
                </div>
              </div>

              <div className="col-lg-6">
                <Wobble>
                  <div className="about-content">
                    <span>ABOUT IEEE</span>
                    <h2>
                      The Institute of Electrical and Electronics Engineers
                    </h2>

                    <p>
                      IEEE is the world’s largest technical professional
                      organization dedicated to advancing technology for the
                      benefit of humanity. IEEE and its members inspire a global
                      community through its highly cited publications,
                      conferences, technology standards, and professional and
                      educational activities.
                    </p>
                  </div>
                </Wobble>
              </div>
            </div>
          </div>
        </section>
        <section className="about-area-two ptb-120 bg-image">
          <div className="container">
            <div className="row h-100 align-items-center">
              <div className="col-lg-6">
                <Wobble>
                  <div className="about-content">
                    <span>ABOUT IEEE TUNISIA SECTION</span>
                    <h2>IEEE Tunisia Section</h2>

                    <p>
                      IEEE Tunisia Section aims to spread IEEE Activities to all
                      corners of the country through educational and technical
                      activities, networking opportunities, and to develop
                      technology and its applications for humanitarian goals.
                      The section supports chapters, special interest groups,
                      student activities and student awards.
                    </p>
                  </div>
                </Wobble>
              </div>

              <div className="col-lg-6">
                <div className="about-image">
                  <Slide right>
                    <img
                      src={require("../../assets/images/about/IEEE_TN.png")}
                      className="about-img1"
                      alt="about"
                    />
                  </Slide>
                  <LaxButton
                    buttonText="Visit IEEE Tunisia Section"
                    link="https://ieee.tn/"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-area-three ptb-120 bg-image">
          <div className="container">
            <div className="row h-100 align-items-center">
              <div className="col-lg-6">
                <div className="about-image">
                  <Slide left>
                    <img
                      src={require("../../assets/images/about/IEEE_INSAT_SB.png")}
                      className="about-img1"
                      alt="about"
                    />
                  </Slide>
                </div>
              </div>

              <div className="col-lg-6">
                <Wobble>
                  <div className="about-content">
                    <span>ABOUT IEEE INSAT STUDENT BRANCH</span>
                    <h2>IEEE INSAT Student Branch</h2>

                    <p>
                      IEEE INSAT Student Branch is an IEEE Student Branch that
                      provides opportunities to meet and learn from fellow IEEE
                      Student and Graduate Student Members and engage with
                      professional IEEE members locally. IEEE currently has
                      Student Branches at thousands of universities and colleges
                      in hundreds of countries throughout the world.
                    </p>

                    {/* <ul>
                    <li>
                      <i className="icofont-long-arrow-right"></i>
                      Curabitur blandit tempus porttitor.
                    </li>
                    <li>
                      <i className="icofont-long-arrow-right"></i>
                      Maecenas sed diam eget risus varius blandit sit amet non
                      magna.
                    </li>
                    <li>
                      <i className="icofont-long-arrow-right"></i>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris.
                    </li>
                    <li>
                      <i className="icofont-long-arrow-right"></i>
                      Condimentum nibh, ut fermentum massa justo sit amet risus
                      nibh.
                    </li>
                  </ul> */}
                  </div>
                </Wobble>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;

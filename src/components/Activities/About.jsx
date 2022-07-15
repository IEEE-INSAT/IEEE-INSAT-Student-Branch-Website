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
                    src={require("../../assets/images/activities/SS.jpg")}
                    className="about-img1"
                    alt="about"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <Wobble>
                  <div className="about-content">
                    <span>ABOUT Summer School 4.0</span>
                    <h2>Summer School 4.0</h2>

                    <p>
                      Summer School is a series of introductory workshops aiming
                      to enrich newcomers with the basic knowledge needed in
                      IEEE's available domains.
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
                    <span>ABOUT The Integration Day</span>
                    <h2>Integration Day</h2>

                    <p>
                      IEEE's integration day takes part during INSAT's
                      integration day where all of its clubs gather in one place
                      to introduce their communities and what they have to
                      offer.
                    </p>
                  </div>
                </Wobble>
              </div>

              <div className="col-lg-6">
                <div className="about-image">
                  <Slide right>
                    <img
                      src={require("../../assets/images/activities/INTEGDAY.jpg")}
                      className="about-img1"
                      alt="about"
                    />
                  </Slide>
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
                      src={require("../../assets/images/activities/IEEEDAY.jpg")}
                      className="about-img1"
                      alt="about"
                    />
                  </Slide>
                </div>
              </div>

              <div className="col-lg-6">
                <Wobble>
                  <div className="about-content">
                    <span>ABOUT IEEE Day</span>
                    <h2>IEEE Day</h2>

                    <p>
                      IEEE Day is celebrating the first time in history when
                      engineers and IEEE members worldwide gathered to share
                      their technical ideas.
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
        <section className="about-area-two ptb-120 bg-image">
          <div className="container">
            <div className="row h-100 align-items-center">
              <div className="col-lg-6">
                <Wobble>
                  <div className="about-content">
                    <span>ABOUT SPAx 2022</span>
                    <h2>SPAx 2022</h2>

                    <p>
                      The Student Professional Awareness Program features
                      discussions, virtual and in-person presentations, lectures
                      and a series of activities focused on developing
                      professional skills.
                    </p>
                  </div>
                </Wobble>
              </div>

              <div className="col-lg-6">
                <div className="about-image">
                  <Slide right>
                    <img
                      src={require("../../assets/images/activities/SPAx.jpg")}
                      className="about-img1"
                      alt="about"
                    />
                  </Slide>
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
                      src={require("../../assets/images/activities/PAXIS.jpg")}
                      className="about-img1"
                      alt="about"
                    />
                  </Slide>
                </div>
              </div>

              <div className="col-lg-6">
                <Wobble>
                  <div className="about-content">
                    <span>ABOUT Project Axis 2022</span>
                    <h2>Project Axis 2022</h2>

                    <p>
                      Project Axis is organized by IEEE INSAT Student Branch,
                      with the collaboration of its chapters and affinity group.
                      It aims to help future engineers kickstart their careers
                      and improve their skillset through trainings, enterprise
                      projects and workshops.
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
                <Slide bottom>
                  <div className="about-content">
                    <span>ABOUT Region 8 SYP Tunis 2022</span>
                    <h2>IEEE R8 SYP Tunis 2022</h2>

                    <p>
                      The IEEE R8 Student and Young Professional Congress is the
                      largest event in all Region 8. It occurs every two years
                      and gathers both students and young professionals members
                      from all Sections in this Region. SYP's main goal is to
                      enhance and foster the engineering sense and capabilities
                      through different activities both technically and
                      culturally. It also provides an opportunity to network.
                      For the year 2022, this glorious event will be hosted in
                      the land of dreams, Tunis.
                    </p>
                  </div>
                </Slide>
              </div>

              <div className="col-lg-6">
                <div className="about-image">
                  <Slide bottom>
                    <img
                      src={require("../../assets/images/activities/SYP.jpg")}
                      className="about-img1"
                      alt="about"
                    />
                  </Slide>
                  <LaxButton
                    buttonText="Visit SYP 2022"
                    link="https://r8syp.ieee.tn/"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;

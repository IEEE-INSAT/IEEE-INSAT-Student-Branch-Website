import React from "react";
import lax from "lax.js";
import LaxButton from "../Shared/LaxButton";
import { Fade } from "react-reveal";

class AboutSYP extends React.Component {
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
      <section className="about-area ptb-120 bg-image">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <Fade left>
                <div className="about-content">
                  <span>THE EVENT OF THE YEAR</span>
                  <h2>
                    THE <b>EXCEPTIONAL</b> EVENT OF THE YEAR - IEEE R8 SYP 2022
                  </h2>
                  <p>
                    The IEEE R8 Student and Young Professional Congress is the
                    largest event in all Region 8.
                  </p>

                  <p>
                    It occurs every two years and gathers both students and
                    young professionals members from all Sections in this
                    Region. SYP's main goal is to enhance and foster the
                    engineering sense and capabilities through different
                    activities both technically and culturally. It also provides
                    an opportunity to network.
                  </p>
                  <a
                    href="//docs.google.com/forms/d/e/1FAIpQLSc9cuqsuyGXx-ZQHxLDC23-vCrtHMEhzH0eKoAIZtsLDsFw7Q/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Register Here!
                  </a>
                </div>
              </Fade>
            </div>

            <div className="col-lg-6">
              <div className="about-image">
                <img
                  src={require("../../assets/images/sb_with_antonio.jpg")}
                  className="about-img1"
                  alt="about"
                />

                <img
                  src={require("../../assets/images/SYP.jpg")}
                  className="about-img2"
                  alt="about"
                />

                <img
                  src={require("../../assets/images/shapes/5.png")}
                  className="shape-img"
                  alt="about"
                />

                <LaxButton buttonText="Explore SYP!" link="//r8syp.ieee.tn" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSYP;

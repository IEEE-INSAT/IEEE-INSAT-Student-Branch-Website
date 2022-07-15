import React from "react";
import { Link } from "react-router-dom";
import lax from "lax.js";
import OwlCarousel from "react-owl-carousel3";
import Flip from "react-reveal/Flip";

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: false,
  autoplay: true,
  navText: [
    "<i class='icofont-rounded-left'></i>",
    "<i class='icofont-rounded-right'></i>"
  ],
  responsive: {
    0: {
      items: 2
    },
    400: {
      items: 3
    },
    576: {
      items: 3
    },
    768: {
      items: 3
    },
    1200: {
      items: 3
    }
  }
};

class Partner extends React.Component {
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
      <section className="partner-area ptb-120">
        <Flip left>
          <div className="container">
            <div className="section-title">
              <span>Get To Know Our Lovely Partners!</span>
              <h2>OUR PARTNERS</h2>

              {/* <Link to="#" className="btn btn-primary">
                Become A Partner
              </Link> */}

              <div className="bar"></div>
            </div>

            <div className="row">
              <OwlCarousel
                className="platinum-partner-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#" target="_blank">
                      <img
                        src={require("../../assets/images/partners/fratelli.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/partners/fratelli.jpg")}
                        alt="Partner Logo"
                      />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#" target="_blank">
                      <img
                        src={require("../../assets/images/partners/planB.png")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/partners/planB.png")}
                        alt="Partner Logo"
                      />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#" target="_blank">
                      <img
                        src={require("../../assets/images/partners/octopusPUB.jpg")}
                        alt="Partner Logo"
                      />
                      <img
                        src={require("../../assets/images/partners/octopusPUB.jpg")}
                        alt="Partner Logo"
                      />
                    </Link>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </Flip>
      </section>
    );
  }
}

export default Partner;

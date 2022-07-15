import React from "react";
import { Link } from "react-router-dom";
import lax from "lax.js";
import OwlCarousel from "react-owl-carousel3";
import PlatinumSponsors from "../LaxButton/PlatinumSponsors";
import GoldSponsors from "../LaxButton/GoldSponsors";
import Footer from "../components/Common/Footer";

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='icofont-rounded-left'></i>",
    "<i class='icofont-rounded-right'></i>"
  ],
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 3
    },
    1200: {
      items: 5
    }
  }
};

class Sponsor extends React.Component {
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
      <React.Fragment>
        <div className="page-title-area item-bg2">
          <div className="container">
            <h1>Sponsors</h1>
            <span>Check Who Makes This Event Possible!</span>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Sponsors</li>
            </ul>
          </div>
        </div>

        <section className="partner-area ptb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="partner-title platinum-sponsor">
                  <PlatinumSponsors />
                </div>
              </div>

              <OwlCarousel
                className="platinum-partner-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#">
                      <img
                        src={require("../../assets/images/platinum-partner1.png")}
                        alt="sponsor"
                      />
                      <img
                        src={require("../../assets/images/platinum-partner1.png")}
                        alt="sponsor"
                      />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#">
                      <img
                        src={require("../../assets/images/platinum-partner2.png")}
                        alt="sponsor"
                      />
                      <img
                        src={require("../../assets/images/platinum-partner2.png")}
                        alt="sponsor"
                      />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#">
                      <img
                        src={require("../../assets/images/platinum-partner3.png")}
                        alt="sponsor"
                      />
                      <img
                        src={require("../../assets/images/platinum-partner3.png")}
                        alt="sponsor"
                      />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#">
                      <img
                        src={require("../../assets/images/platinum-partner4.png")}
                        alt="sponsor"
                      />
                      <img
                        src={require("../../assets/images/platinum-partner4.png")}
                        alt="sponsor"
                      />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#">
                      <img
                        src={require("../../assets/images/platinum-partner5.png")}
                        alt="sponsor"
                      />
                      <img
                        src={require("../../assets/images/platinum-partner5.png")}
                        alt="sponsor"
                      />
                    </Link>
                  </div>
                </div>
              </OwlCarousel>

              <div className="col-lg-12">
                <div className="border"></div>
              </div>

              <div className="col-lg-12">
                <div className="partner-title gold-sponsor">
                  <GoldSponsors />
                </div>
              </div>

              <OwlCarousel
                className="gold-partner-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#">
                      <img
                        src={require("../../assets/images/gold-partner1.png")}
                        alt="sponsor"
                      />
                      <img
                        src={require("../../assets/images/gold-partner1.png")}
                        alt="sponsor"
                      />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#">
                      <img
                        src={require("../../assets/images/gold-partner2.png")}
                        alt="sponsor"
                      />
                      <img
                        src={require("../../assets/images/gold-partner2.png")}
                        alt="sponsor"
                      />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#">
                      <img
                        src={require("../../assets/images/gold-partner3.png")}
                        alt="sponsor"
                      />
                      <img
                        src={require("../../assets/images/gold-partner3.png")}
                        alt="sponsor"
                      />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#">
                      <img
                        src={require("../../assets/images/gold-partner4.png")}
                        alt="sponsor"
                      />
                      <img
                        src={require("../../assets/images/gold-partner4.png")}
                        alt="sponsor"
                      />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#">
                      <img
                        src={require("../../assets/images/gold-partner5.png")}
                        alt="sponsor"
                      />
                      <img
                        src={require("../../assets/images/gold-partner5.png")}
                        alt="sponsor"
                      />
                    </Link>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Sponsor;

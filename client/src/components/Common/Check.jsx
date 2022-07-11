import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
class Check extends React.Component {
  render() {
    return (
      <section className="buy-tickets-area ptb-120">  
        <Fade right>
          <div className="buy-tickets">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="section-title">
                    <span>Curious About What We Do?</span>
                    <h2>Check Our Activties!</h2>
                    <p>
                      IEEE INSAT Student Branch isn't only about work and
                      diligence. We have multiple fun activities (Teambuildings,
                      games, etc...) that will change your mood and improve your
                      performance.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="buy-ticket-btn">
                    <Link to="/activities" className="btn btn-primary">
                      Our Activities
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Check;

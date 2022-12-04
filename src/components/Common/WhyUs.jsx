import React from "react";
import { Link } from "react-router-dom";

class WhyUs extends React.Component {
  render() {
    return (
      <section className="why-choose-us">
        <div className="row m-0">
          <div className="col-lg-3 col-sm-6 p-0">
            <div className="single-box">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="content">
                    <div className="icon">
                      <i className="icofont-exchange"></i>
                    </div>
                    <h3>Diversity</h3>
                    <p>
                      IEEE INSAT Student Branch contains 7 different chapters
                      that tackle multiple fields ranging from IT to Robotics to
                      Industrial Applications to even Biology & Medicine. Don't
                      hestitate to try the various options we're offering for
                      you and see what interests you the most.
                    </p>

                    <Link to="about" className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 p-0">
            <div className="single-box">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="content">
                    <div className="icon">
                      <i className="icofont-group"></i>
                    </div>
                    <h3>Networking</h3>
                    <p>
                      IEEE INSAT Student Branch has over 350 members in total.
                      You'll have the opportunity to network and communicate
                      with this vast number as well as engage yourselves in
                      diverse activities. You will also be able to sharpen your
                      technical and non-technical skills.
                    </p>

                    <Link to="about" className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 p-0">
            <div className="single-box">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="content">
                    <div className="icon">
                      <i className="icofont-bubble-up"></i>
                    </div>
                    <h3>Experience</h3>
                    <p>
                      Spending a year among INSAT IEEE members allows you to
                      expand your technical and social skills and have the
                      opportunity to hold/participate in multiple events. This
                      will slowly but surely help you gain experience which will
                      be of benefit for you in the long run.
                    </p>

                    <Link to="about" className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 p-0">
            <div className="single-box">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="content">
                    <div className="icon">
                      <i className="icofont-wink-smile"></i>
                    </div>
                    <h3>Entertainment</h3>
                    <p>
                      IEEE INSAT Student Branch isn't only about work and
                      diligence. The lovely atmosphere will strike you the
                      moment you enter our workplace. In fact, We have got
                      multiple fun activities (teambuildings, games, etc...)
                      that will change your mood and improve your performance.
                    </p>

                    <Link to="about" className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="slideshow">
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
        </ul>
      </section>
    );
  }
}

export default WhyUs;

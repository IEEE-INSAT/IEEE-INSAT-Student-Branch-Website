import React from "react";
import CountUp from "react-countup";
import Slide from "react-reveal/Slide";
import VisibilitySensor from "react-visibility-sensor";

class Stats extends React.Component {
  state = {
    didViewCountUp: false
  };

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };

  render() {
    return (
      <section className="funfacts-area ptb-120">
        <Slide bottom>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-6 col-sm-6">
                <div className="single-funfact">
                  <div className="icon">
                    <i className="icofont-business-man"></i>
                  </div>
                  <h3 className="odometer">
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10
                      }}
                      delayedCall
                    >
                      <CountUp
                        start={0}
                        end={this.state.didViewCountUp ? 65 : 0}
                        duration={3}
                      />
                    </VisibilitySensor>
                  </h3>
                  <p>Officers</p>
                </div>
              </div>

              <div className="col-lg-3 col-6 col-sm-6">
                <div className="single-funfact">
                  <div className="icon">
                    <i className="icofont-ui-user-group"></i>
                  </div>
                  <h3 className="odometer">
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10
                      }}
                      delayedCall
                    >
                      <CountUp
                        start={0}
                        end={this.state.didViewCountUp ? 532 : 0}
                        duration={3}
                      />
                    </VisibilitySensor>
                  </h3>
                  <p>Members</p>
                </div>
              </div>

              <div className="col-lg-3 col-6 col-sm-6">
                <div className="single-funfact">
                  <div className="icon">
                    <i className="icofont-copy"></i>
                  </div>
                  <h3 className="odometer">
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10
                      }}
                      delayedCall
                    >
                      <CountUp
                        start={0}
                        end={this.state.didViewCountUp ? 55 : 0}
                        duration={3}
                      />
                    </VisibilitySensor>
                  </h3>
                  <p>Activities</p>
                </div>
              </div>

              <div className="col-lg-3 col-6 col-sm-6">
                <div className="single-funfact">
                  <div className="icon">
                    <i className="icofont-users-social"></i>
                  </div>
                  <h3 className="odometer">
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10
                      }}
                      delayedCall
                    >
                      <CountUp
                        start={0}
                        end={this.state.didViewCountUp ? 10 : 0}
                        duration={3}
                      />
                    </VisibilitySensor>
                  </h3>
                  <p>Partners</p>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Stats;

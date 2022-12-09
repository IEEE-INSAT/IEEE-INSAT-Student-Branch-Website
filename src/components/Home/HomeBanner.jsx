import React from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import "../../assets/styles/components/homeBanner.scss";
class HomeBanner extends React.Component {
  state = {
    // days: "",
    // hours: "",
    // minutes: "",
    // seconds: "",
    isOpen: false
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  // makeTimer = () => {
  //   let endTime = new Date("August 02, 2022 07:00:00 GMT");
  //   let endTimeParse = Date.parse(endTime) / 1000;
  //   let now = new Date();
  //   let nowParse = Date.parse(now) / 1000;
  //   let timeLeft = endTimeParse - nowParse;
  //   let days = Math.floor(timeLeft / 86400);
  //   let hours = Math.floor((timeLeft - days * 86400) / 3600);
  //   let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  //   let seconds = Math.floor(
  //     timeLeft - days * 86400 - hours * 3600 - minutes * 60
  //   );
  //   if (hours < "10") {
  //     hours = "0" + hours;
  //   }
  //   if (minutes < "10") {
  //     minutes = "0" + minutes;
  //   }
  //   if (seconds < "10") {
  //     seconds = "0" + seconds;
  //   }
  //   this.setState({
  //     days,
  //     hours,
  //     minutes,
  //     seconds
  //   });
  // };

  // componentDidMount() {
  //   setInterval(() => {
  //     this.makeTimer();
  //   }, 1000);
  // }
  render() {
    return (
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="kDwDc90bpV0"
          onClose={() => this.setState({ isOpen: false })}
        />
        <div className="welcome">
          <div className="left-hex">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <p>
                    <Typewriter
                      words={[
                        "Advancing Technology For Humanity!",
                        "One Team, One Dream!"
                      ]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={5}
                      delaySpeed={500}
                    />
                  </p>
                  <h1>
                    IEEE INSAT STUDENT BRANCH &nbsp;
                    <b>2022</b>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="between">
            <Link
              onClick={(e) => {
                e.preventDefault();
                this.openModal();
              }}
              to="#"
              className="video-btn popup-youtube"
            >
              <div className="hexagone">
                <span>
                  <i className="icofont-ui-play"></i>
                </span>
              </div>
            </Link>
          </div>
          <div className="right-vid">
            <video loop muted autoPlay poster="#" className="video-background">
              <source
                src={require("../../assets/video/RecapSYPSB.mp4")}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </React.Fragment>
      //   <ModalVideo
      //     channel="youtube"
      //     isOpen={this.state.isOpen}
      //     videoId="kDwDc90bpV0"
      //     onClose={() => this.setState({ isOpen: false })}
      //   />

      //   <div className="main-banner video-banner">
      //     <video loop muted autoPlay poster="#" className="video-background">
      //       <source
      //         src={require("../../assets/video/video.mp4")}
      //         type="video/mp4"
      //       />
      //     </video>

      //     <div className="d-table">
      //       <div className="d-table-cell">
      //         <div className="container">
      //           <div className="main-banner-content">
      //             <p>
      //               <Typewriter
      //                 words={[
      //                   "Advancing Technology For Humanity!",
      //                   "One Team, One Dream!"
      //                 ]}
      //                 loop={true}
      //                 cursor
      //                 cursorStyle="|"
      //                 typeSpeed={70}
      //                 deleteSpeed={50}
      //                 delaySpeed={500}
      //               />
      //             </p>
      //             <h1>
      //               IEEE INSAT STUDENT BRANCH &nbsp;
      //               <b>2</b>
      //               <b>0</b>
      //               <b>2</b>
      //               <b>2</b>
      //             </h1>

      //             {/* <ul>
      //               <li>
      //                 <i className="icofont-compass"></i> Yellow Street, United
      //                 State
      //               </li>
      //               <li>
      //                 <i className="icofont-calendar"></i> 23-27 Jan, 2020
      //               </li>
      //             </ul> */}

      //             <div className="button-box">
      //               <Link to="/about" className="btn btn-primary">
      //                 Learn more!
      //               </Link>
      //               <Link
      //                 onClick={(e) => {
      //                   e.preventDefault();
      //                   this.openModal();
      //                 }}
      //                 to="#"
      //                 className="video-btn popup-youtube"
      //               >
      //                 <i className="icofont-ui-play"></i> Watch Video
      //               </Link>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>

      //     {/* <div className="event-countdown">
      //       <div className="main-banner-content">
      //         <p>
      //           <span>SYP 2022</span> COUNTDOWN :
      //         </p>
      //       </div>
      //       <div id="timer">
      //         <div id="days">
      //           0<span>Days</span>
      //         </div>
      //         <div id="hours">
      //          0<span>Hours</span>
      //         </div>
      //         <div id="minutes">
      //          0<span>Minutes</span>
      //         </div>
      //         <div id="seconds">
      //           0<span>Seconds</span>
      //         </div>
      //       </div>
      //      </div>

      //      <div className="shape1">
      //       <img
      //         src={require("../../assets/images/shapes/1.png")}
      //         alt="shape1"
      //       />
      //      </div>
      //      <div className="shape2 rotateme">
      //       <img
      //         src={require("../../assets/images/shapes/2.png")}
      //         alt="shape2"
      //       />
      //      </div>
      //      <div className="shape3 rotateme">
      //       <img
      //         src={require("../../assets/images/shapes/3.png")}
      //         alt="shape3"
      //       />
      //      </div>
      //      <div className="shape4">
      //       <img
      //         src={require("../../assets/images/shapes/4.png")}
      //         alt="shape4"
      //       />
      //               </div>*/}
      //   </div>
      // </React.Fragment>
    );
  }
}

export default HomeBanner;

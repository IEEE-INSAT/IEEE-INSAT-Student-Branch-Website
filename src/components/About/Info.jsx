import { motion } from "framer-motion";
import React from "react";
import "../../assets/styles/components/about.scss";

class About extends React.Component {
  render() {
    return (
      <>
        <section>
          <div className="activity-container">
            <div className="activity-row">
              <div className="about-img">
                <div className="left">
                  <span></span>
                </div>

                <div className="big">
                  <span></span>
                </div>
                <img
                  className="imageTest"
                  src={require("../../assets/images/about/IEEE.jfif")}
                  alt=""
                ></img>

                <div className="right">
                  <span>
                    <a href="https://www.ieee.org/">Visit IEEE</a>
                  </span>
                </div>
              </div>
              <motion.div
                initial={{
                  y: 300,
                  opacity: 0,
                  scale: 0.5
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  duration: 1.5
                }}
                className="activity-content"
              >
                <h2 className="title">
                  The Institute of Electrical and Electronics Engineers
                </h2>

                <p className="description">
                  IEEE is the world’s largest technical professional
                  organization dedicated to advancing technology for the benefit
                  of humanity. IEEE and its members inspire a global community
                  through its highly cited publications, conferences, technology
                  standards, and professional and educational activities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section>
          <div className="activity-container">
            <div className="activity-row">
              <div className="about-img">
                <div className="left">
                  <span></span>
                </div>

                <div className="big">
                  <span></span>
                </div>
                <img
                  className="imageTest"
                  src={require("../../assets/images/about/IEEETN.png")}
                  alt=""
                  height={250}
                  width={300}
                ></img>

                <div className="right">
                  <span>
                    <a href="https://ieee.tn/">Explore</a>
                  </span>
                </div>
              </div>
              <motion.div
                initial={{
                  y: 300,
                  opacity: 0,
                  scale: 0.5
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  duration: 1.5
                }}
                className="activity-content"
              >
                <h2 className="title">IEEE Tunisia Section</h2>

                <p className="description">
                  IEEE Tunisia Section aims to spread IEEE Activities to all
                  corners of the country through educational and technical
                  activities, networking opportunities, and to develop
                  technology and its applications for humanitarian goals. The
                  section supports chapters, special interest groups, student
                  activities and student awards.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section>
          <div className="activity-container">
            <div className="activity-row">
              <div className="about-img">
                <div className="left">
                  <span></span>
                </div>

                <div className="big">
                  <span></span>
                </div>
                <img
                  className="imageTest"
                  src={require("../../assets/images/logo.png")}
                  alt=""
                ></img>

                <div className="right">
                  <span>
                    <img
                      className="imageTest"
                      src={require("../../assets/images/activities/IEEEDAY.jpg")}
                      alt=""
                    ></img>
                  </span>
                </div>
              </div>
              <motion.div
                initial={{
                  y: 300,
                  opacity: 0,
                  scale: 0.5
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  duration: 1.5
                }}
                className="activity-content"
              >
                <h2 className="title">IEEE INSAT Student Branch</h2>

                <p className="description">
                  IEEE INSAT Student Branch is an IEEE Student Branch that
                  provides opportunities to meet and learn from fellow IEEE
                  Student and Graduate Student Members and engage with
                  professional IEEE members locally. IEEE currently has Student
                  Branches at thousands of universities and colleges in hundreds
                  of countries throughout the world.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;

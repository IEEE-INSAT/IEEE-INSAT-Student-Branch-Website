import { motion } from "framer-motion";
import React from "react";
import "../../assets/styles/components/activities.scss";

class About extends React.Component {
  render() {
    return (
      <>
        <section className="about-area-three ptb-120 bg-image">
          <div className="activity-container">
            <div className="activity-row">
              <div className="hexagon-gallery">
                <div className="hexagon">
                  <div className="hex">
                    <img
                      src={require("../../assets/images/activities/ss/1.jpg")}
                      alt="about"
                    />
                  </div>

                  <div className="hex">
                    <img
                      src={require("../../assets/images/activities/ss/2.jpg")}
                      alt="about"
                    />
                  </div>
                </div>

                <div className="hexagon">
                  {" "}
                  <div className="hex">
                    <img
                      src={require("../../assets/images/activities/ss/3.jpg")}
                      alt="about"
                    />
                  </div>
                  <div className="hex">
                    <img
                      src={require("../../assets/images/activities/ss/7.jpg")}
                      alt="about"
                    />
                  </div>
                  <div className="hex">
                    <img
                      src={require("../../assets/images/activities/ss/5.jpg")}
                      alt="about"
                    />
                  </div>
                </div>

                <div className="hexagon">
                  <div className="hex">
                    <img
                      src={require("../../assets/images/activities/ss/6.jpg")}
                      alt="about"
                    />
                  </div>
                  <div className="hex">
                    <img
                      src={require("../../assets/images/activities/ss/4.jpg")}
                      alt="about"
                    />
                  </div>
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
                <h2 className="title">Summer School 5.0</h2>

                <p className="description">
                  Summer School is a series of introductory workshops aiming to
                  enrich newcomers with the basic knowledge needed in IEEE's
                  available domains.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="about-area-two ptb-120 bg-image">
          <div className="activity-row">
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
              <h2 className="title">Integration Day</h2>

              <p className="description">
                IEEE's integration day takes part during INSAT's integration day
                where all of its clubs gather in one place to introduce their
                communities and what they have to offer.
              </p>
            </motion.div>

            <div className="hexagon-gallery">
              <div className="hexagon">
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/id/1.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>

                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/id/2.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>
              </div>

              <div className="hexagon">
                {" "}
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/id/3.jpg")}
                    //  className="about-img1"
                    alt="about"
                  />
                </div>
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/id/7.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/id/5.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>
              </div>

              <div className="hexagon">
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/id/6.jpg")}
                    //  className="about-img1"
                    alt="about"
                  />
                </div>
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/id/4.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-area-three ptb-120 bg-image">
          <div className="activity-row">
            <div className="hexagon-gallery">
              <div className="hexagon">
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/ieeed/1.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>

                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/ieeed/2.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>
              </div>

              <div className="hexagon">
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/ieeed/3.jpg")}
                    //  className="about-img1"
                    alt="about"
                  />
                </div>
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/ieeed/4.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/ieeed/5.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>
              </div>

              <div className="hexagon">
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/ieeed/6.jpg")}
                    //  className="about-img1"
                    alt="about"
                  />
                </div>
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/ieeed/7.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>
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
              <h2 className="title">IEEE Day</h2>

              <p className="description">
                IEEE Day is celebrating the first time in history when engineers
                and IEEE members worldwide gathered to share their technical
                ideas.
              </p>
            </motion.div>
          </div>
        </section>
        <section className="about-area-two ptb-120 bg-image">
          <div className="activity-row">
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
              <h2 className="title">SPAx 2023</h2>

              <p className="description">
                The Student Professional Awareness Program features discussions,
                virtual and in-person presentations, lectures and a series of
                activities focused on developing professional skills.
              </p>
            </motion.div>

            <div className="hexagon-gallery">
              <div className="hexagon">
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/spax/1.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>

                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/spax/2.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>
              </div>

              <div className="hexagon">
                {" "}
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/spax/3.jpg")}
                    //  className="about-img1"
                    alt="about"
                  />
                </div>
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/spax/4.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/spax/5.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>
              </div>

              <div className="hexagon">
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/spax/6.jpg")}
                    //  className="about-img1"
                    alt="about"
                  />
                </div>
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/spax/7.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-area-three ptb-120 bg-image">
          <div className="activity-row">
            <div className="hexagon-gallery">
              <div className="hexagon">
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/ss/1.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>

                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/ss/2.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>
              </div>

              <div className="hexagon">
                {" "}
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/ss/3.jpg")}
                    //  className="about-img1"
                    alt="about"
                  />
                </div>
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/inter/4.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/ss/5.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>
              </div>

              <div className="hexagon">
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/ss/6.jpg")}
                    //  className="about-img1"
                    alt="about"
                  />
                </div>
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/ss/4.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>
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
              <h2 className="title">INTERNEE 2022-2023</h2>

              <p className="description">
                INTERNEE is organized by IEEE INSAT Student Branch, with the
                collaboration of its chapters and affinity group. It aims to
                help future engineers kickstart their careers and improve their
                skillset through trainings, enterprise projects and workshops.
              </p>
            </motion.div>
          </div>
        </section>
        <section className="about-area-two ptb-120 bg-image">
          <div className="activity-row">
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
              <h2 className="title">IEEE R8 SYP Tunis 2022</h2>

              <p className="description">
                The IEEE R8 Student and Young Professional Congress is the
                largest event in all Region 8. It occurs every two years and
                gathers both students and young professionals members from all
                Sections in this Region. SYP's main goal is to enhance and
                foster the engineering sense and capabilities through different
                activities both technically and culturally. It also provides an
                opportunity to network. For the year 2022, this glorious event
                will be hosted in the land of dreams, Tunis.
              </p>
            </motion.div>

            <div className="hexagon-gallery">
              <div className="hexagon">
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/syp/1.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>

                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/syp/2.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>
              </div>

              <div className="hexagon">
                {" "}
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/syp/3.jpg")}
                    //  className="about-img1"
                    alt="about"
                  />
                </div>
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/syp/4.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/syp/5.jpg")}
                    // className="about-img1"
                    alt="about"
                  />
                </div>
              </div>

              <div className="hexagon">
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/syp/6.jpg")}
                    //  className="about-img1"
                    alt="about"
                  />
                </div>
                <div className="hex">
                  <img
                    src={require("../../assets/images/activities/syp/7.jpg")}
                    // className="about-img1"
                    alt="about"
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

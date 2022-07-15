import React from "react";
import LaxButton from "../Shared/LaxButton";
import Slide from "react-reveal/Slide";
import Wobble from "react-reveal/Wobble";
import Fade from "react-reveal/Fade";
class About extends React.Component {
  render() {
    return (
      <>
        <section className="about-area-three ptb-120 bg-image">
          <div className="container">
            <div className="row h-100 align-items-center">
              <div className="col-lg-6">
                <div className="about-image">
                  <Slide bottom>
                    <img
                      src={require("../../assets/images/misc/RAS.jpg")}
                      className="about-img1"
                      alt="about"
                    />
                    <LaxButton
                      buttonText="Visit Website"
                      link="//ras-insat.ieee.tn"
                    />
                  </Slide>
                </div>
              </div>

              <div className="col-lg-6">
                <Wobble>
                  <div className="about-content">
                    <span>About RAS Chapter</span>

                    <h2>IEEE INSAT Robotics & Automation Society Chapter</h2>

                    <p>
                      In IEEE RAS INSAT SBC, we aim to share our knowledge and
                      expertise with our members. Our goal is to create a
                      cohesive community fond of robotics that can share its
                      proficiency and leave its footprint in this field. This
                      was my childhood dream and by joining IEEE RAS INSAT SBC,
                      I knew from the first days that I was in the right place
                      and took my first steps to make my dream come true. When
                      joining the IEEE RAS chapter, you will have the
                      opportunity to practice your technical skills and
                      implement your ideas into real projects.
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
                <Fade>
                  <div className="about-content">
                    <span>About CS Chapter</span>
                    <h2>IEEE INSAT Computer Society Chapter</h2>

                    <p>
                      The IEEE INSAT Computer Society Chapter is the premier
                      source of information, inspiration, and collaboration in
                      INSAT’s computer science community, connecting them to
                      multiple resources and professionals in the field. The CS
                      Chapter helps boost the skills of developers and future
                      engineers by providing a variety of professional training,
                      which allows them to test their skills through yearly
                      competitions and teaches them teamwork by integrating them
                      into the IEEE family.
                    </p>
                  </div>
                </Fade>
              </div>

              <div className="col-lg-6">
                <div className="about-image">
                  <Slide right>
                    <img
                      src={require("../../assets/images/misc/CS.jpg")}
                      className="about-img1"
                      alt="about"
                    />
                  </Slide>
                  <LaxButton
                    buttonText="Visit Website"
                    link="//cs-insat.ieee.tn"
                  />
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
                      src={require("../../assets/images/misc/IAS.jpg")}
                      className="about-img1"
                      alt="about"
                    />
                    <LaxButton
                      buttonText="Visit Website"
                      link="//ias-insat.ieee.tn"
                    />
                  </Slide>
                </div>
              </div>

              <div className="col-lg-6">
                <Fade>
                  <div className="about-content">
                    <span>About IAS Chapter</span>

                    <h2>IEEE INSAT Industry and Automation Society Chapter</h2>

                    <p>
                      Founded in October 2014, the IAS INSAT student chapter was
                      conceived from the belief of a group of students in the
                      importance of putting their theoretical knowledge into
                      practice at an early stage of their education to develop
                      skills enabling them to become potential leaders and to
                      have a prosperous career path. Counting more than 180
                      active members, it is one of the most active chapters in
                      our student branch.
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
                </Fade>
              </div>
            </div>
          </div>
        </section>
        <section className="about-area-two ptb-120 bg-image">
          <div className="container">
            <div className="row h-100 align-items-center">
              <div className="col-lg-6">
                <Fade>
                  <div className="about-content">
                    <span>About PES Chapter</span>
                    <h2>IEEE INSAT Power & Energy Society Chapter</h2>

                    <p>
                      The IEEE Tunisia chapter of Power & energy was established
                      in August 2011. In 2016, the INSAT Student Chapter was
                      established as the third PES chapter in Tunisia Section.
                      The INSAT PES chapter is the largest student R8 PES
                      chapter with around 150 IEEE INSAT SB members that hail
                      from different academic backgrounds. The IEEE INSAT PES
                      chapter presents incredible opportunities for the members.
                      The power and energy domain is an unlimited source of
                      knowledge and our chapter is a place where all those
                      interested could exchange the knowledge they have creating
                      a space where ideas bloom into inventions.
                    </p>
                  </div>
                </Fade>
              </div>

              <div className="col-lg-6">
                <div className="about-image">
                  <Slide right>
                    <img
                      src={require("../../assets/images/misc/PES.jpg")}
                      className="about-img1"
                      alt="about"
                    />
                  </Slide>
                  <LaxButton
                    buttonText="Visit Website"
                    link="//pes-insat.ieee.tn"
                  />
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
                  <img
                    src={require("../../assets/images/misc/EMBS.jpg")}
                    className="about-img1"
                    alt="about"
                  />

                  <LaxButton
                    buttonText="Visit Website"
                    link="//embs-insat.ieee.tn"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <Fade>
                  <div className="about-content">
                    <span>About EMBS Chapter</span>

                    <h2>IEEE INSAT EMBS Chapter</h2>

                    <p>
                      The IEEE INSAT Student Branch EMBS Chapter is the latest
                      chapter within our Student Branch, it was created in 2017,
                      by students from different fields mainly Biological
                      Engineering and Chemical Engineering We aim to link our
                      studies to the latest technologies and opinions worldwide
                      and we count more than 50 members giving their best to
                      progress and to share what they learned with their
                      environement.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </section>

        <section className="about-area-three ptb-120 bg-image">
          <div className="container">
            <div className="row h-100 align-items-center">
              <div className="col-lg-6">
                <Fade>
                  <div className="about-content">
                    <span>About NPSS Chapter</span>

                    <h2>
                      IEEE INSAT Nuclear and Plasma Sciences Society Chapter
                    </h2>

                    <p>
                      IEEE NPSS INSAT Student chapter aims to give its members
                      an opportunity to engage in activities and projects
                      revolving around nuclear and plasma sciences and their
                      multiple applications, as well as discover multiple ways
                      in which their university studies can be implemented in
                      said fields. In order to achieve this purpose, we opted
                      for an activity program that teaches the basics of nuclear
                      and plasma sciences and demonstrates their importance,
                      while accounting for the members’ respective fields of
                      study: this program will include lectures,training
                      sessions,field and virtual visits, projects and events
                      mainly revolving around the NPSS fields of interest: •
                      Nuclear Energy technology •
                      <li>
                        Particle accelerators and their applications (medical
                        imaging, energy production, research, …).
                      </li>
                      <li>
                        Physico-chemical analysis techniques and technologies
                        and their applications in nuclear and plasma sciences
                      </li>
                      <li>
                        Nuclear and plasma sciences applications in medicine and
                        biology(medical imaging technologies, radiopharmacy,
                        radiotherapy and Cold atmospheric plasma therapy)
                      </li>
                      <li>
                        Radiation effects and applications(Radiation monitoring,
                        detection and instrumentation, Radioprotection, food
                        irradiation) • Computer applications in nuclear and
                        plasma sciences (Computational Physics methods,
                        real-time computer systems, data analysis and
                        acquisition,…..)
                      </li>
                      <li>
                        Plasma technology and its applications ( energy
                        technology, electronics manufacturing and semiconductor
                        processing, biomass conversion, jet propulsion……)
                      </li>
                      <li>
                        Pulsed power technology and its applications ( water
                        treatment, food processing, medical applications)
                      </li>
                    </p>
                  </div>
                </Fade>
              </div>
              <div className="col-lg-6">
                <div className="about-image">
                  <Slide left>
                    <img
                      src={require("../../assets/images/misc/NPSS.jpg")}
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
                  <img
                    src={require("../../assets/images/misc/WIE.jpg")}
                    className="about-img1"
                    alt="about"
                  />

                  <LaxButton
                    buttonText="Visit Website"
                    link="//wie-insat.ieee.tn"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <Fade>
                  <div className="about-content">
                    <span>About WIE Affinity Group</span>

                    <h2>IEEE INSAT Women In Engineering Affinity Group</h2>

                    <p>
                      IEEE Women in Engineering (WIE) is the largest
                      international professional organization dedicated to
                      promoting women engineers and scientists and inspiring
                      girls around the world to follow their academic interests
                      to a career in engineering. The WIE affinity group helps
                      boost the soft skills of students and future engineers by
                      providing a variety of professional training, which allows
                      them to test their skills through yearly competitions and
                      teaches them teamwork by integrating them into the IEEE
                      family.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;

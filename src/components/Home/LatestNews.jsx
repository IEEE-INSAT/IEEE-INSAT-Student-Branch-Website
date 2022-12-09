import lax from "lax.js";
import React from "react";
import Zoom from "react-reveal";
import "../../assets/styles/components/latestNews.scss";
import LaxDiv from "../Shared/LaxDiv";

const options = {
  loop: true,
  nav: false,
  dots: true,
  margin: 30,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='icofont-rounded-left'></i>",
    "<i class='icofont-rounded-right'></i>"
  ],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
};

class LatestNews extends React.Component {
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
  componentDidMount() {
    const script = document.createElement("script");
    script.innerHTML = `
var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: 'fade',
  loop: false,
  mousewheel: {
    invert: false
  },
 
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true
  }
})
`;
    document.body.appendChild(script);
  }
  render() {
    return (
      <section className="blog-area ptb-120 bg-image">
        <Zoom bottom>
          <div className="container">
            <div className="section-title">
              <span>Info Update!</span>
              <h2>OUR LATEST NEWS</h2>

              <LaxDiv text="NEWS" dataPreset="driftLeft" />

              <div className="bar"></div>
            </div>

            <div className="blog-slider">
              <div className="blog-slider__wrp swiper-wrapper">
                <div className="blog-slider__item swiper-slide">
                  <div className="left">
                    <span></span>
                  </div>
                  <div className="big">
                    <span></span>
                  </div>
                  <div className="blog-slider__img">
                    <img
                      src={require("../../assets/images/latestNews/1.jpg")}
                      alt=""
                    ></img>

                    <div className="right">
                      <span>
                        <a href="https://www.facebook.com/events/881496119882944/?ref=newsfeed">
                          Explore...
                        </a>
                      </span>
                    </div>
                  </div>

                  <div className="blog-slider__content">
                    <span className="blog-slider__code">27 Nov-2 Dec 2022</span>
                    <div className="blog-slider__title">AI 101</div>
                    <div className="blog-slider__text">
                      AI 101 is all about Machine Learning, Computer Vision, and
                      anything AI related! Both IEEE AAST Alex SB and IEEE INSAT
                      SB will have their versions of the event, however, the
                      content stays the same for both.
                    </div>
                  </div>
                </div>

                <div className="blog-slider__item swiper-slide">
                  <div className="left">
                    <span></span>
                  </div>
                  <div className="big">
                    <span></span>
                  </div>
                  <div className="blog-slider__img">
                    <img
                      src={require("../../assets/images/latestNews/2.png")}
                      alt=""
                    ></img>
                    <div className="right">
                      <span>
                        <a href="https://www.facebook.com/ieee.r8sac/photos/a.10150200361831912/10160177335826912/">
                          Explore...
                        </a>
                      </span>
                    </div>
                  </div>

                  <div className="blog-slider__content">
                    <span className="blog-slider__code">16 Nov 2022</span>
                    <div className="blog-slider__title">
                      Region 8 Student Branch Website Award 2022
                    </div>
                    <div className="blog-slider__text">
                      The winner of the first place on Region 8 Student Branch
                      Website Award 2022 is Nat'l Inst of Applied Sci & Tech
                      (INSAT) - Tunisia Section
                    </div>
                  </div>
                </div>

                <div className="blog-slider__item swiper-slide">
                  <div className="left">
                    <span></span>
                  </div>
                  <div className="big">
                    <span></span>
                  </div>
                  <div className="blog-slider__img">
                    <img
                      src={require("../../assets/images/latestNews/3.jpg")}
                      alt=""
                    ></img>
                    <div className="right">
                      <span>
                        <a href="https://www.facebook.com/IeeeInsatStudentBranch/photos/a.516255961746311/5761373323901189">
                          Explore...
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="blog-slider__content">
                    <span className="blog-slider__code">10 Nov 2022</span>
                    <div className="blog-slider__title">
                      IEEE Regional Exemplary Student Branch Award
                    </div>
                    <div className="blog-slider__text">
                      The IEEE INSAT Student Branch has won the 2022 IEEE
                      Regional Exemplary Student Branch Award. This is thanks to
                      each one of you who contributed your time and efforts. We
                      are still excelling and keeping the dedication to the
                      fullest
                    </div>
                  </div>
                </div>
              </div>

              <div className="blog-slider__pagination"></div>
            </div>
          </div>
        </Zoom>
      </section>
    );
  }
}

export default LatestNews;

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
    //     useEffect(() => {
    //       const script = document.createElement("script");
    //       script.innerHTML = `
    // var swiper = new Swiper(".blog-slider", {
    //   spaceBetween: 30,
    //   effect: "fade",
    //   loop: true,
    //   mousewheel: {
    //     invert: false
    //   },
    //   // autoHeight: true,
    //   pagination: {
    //     el: ".blog-slider__pagination",
    //     clickable: true
    //   }
    // })
    // `;
    //       document.body.appendChild(script);
    //     }, []);
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.innerHTML = `
var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false
  },
  // autoHeight: true,
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
                  <div className="blog-slider__img">
                    <img
                      src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
                      alt=""
                    ></img>
                  </div>

                  <div className="blog-slider__content">
                    <span className="blog-slider__code">26 December 2019</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div className="blog-slider__text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Recusandae voluptate repellendus magni illo ea animi?{" "}
                    </div>
                    <a href="#" className="blog-slider__button">
                      READ MORE
                    </a>
                  </div>
                </div>

                <div className="blog-slider__item swiper-slide">
                  <div className="blog-slider__img">
                    <img
                      src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp"
                      alt=""
                    ></img>
                  </div>

                  <div className="blog-slider__content">
                    <span className="blog-slider__code">26 December 2019</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor2</div>
                    <div className="blog-slider__text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Recusandae voluptate repellendus magni illo ea animi?
                    </div>
                    <a href="#" className="blog-slider__button">
                      READ MORE
                    </a>
                  </div>
                </div>

                <div className="blog-slider__item swiper-slide">
                  <div className="blog-slider__img">
                    <img
                      src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp"
                      alt=""
                    ></img>
                  </div>
                  <div className="blog-slider__content">
                    <span className="blog-slider__code">26 December 2019</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div className="blog-slider__text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Recusandae voluptate repellendus magni illo ea animi?
                    </div>
                    <a href="#" className="blog-slider__button">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>

              <div className="blog-slider__pagination"></div>
            </div>

            {/* <div className="row">
              <OwlCarousel
                className="blog-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12 col-md-12">
                  <div className="single-blog-post">
                    <div className="blog-image">
                      <img
                        src={require("../../assets/images/posts/post1.png")}
                        alt="blog"
                      />

                      <div className="post-tag"></div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">Posted on 25 Feb, 2020</span>
                      <a
                        href="https://www.facebook.com/IeeeInsatStudentBranch/photos/a.516255961746311/5209208415784352/"
                        className="read-more-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More <i className="icofont-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="single-blog-post">
                    <div className="blog-image">
                      <img
                        src={require("../../assets/images/posts/post2.jpg")}
                        alt="blog"
                      />

                      <div className="post-tag"></div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">Posted on 25 Feb, 2020</span>
                      <a
                        href="//www.facebook.com/IeeeInsatStudentBranch/photos/a.516255961746311/5209208415784352/"
                        className="read-more-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More <i className="icofont-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="single-blog-post">
                    <div className="blog-image">
                      <img
                        src={require("../../assets/images/posts/post3.png")}
                        alt="blog"
                      />

                      <div className="post-tag"></div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">Posted on 25 Feb, 2020</span>
                      <a
                        href="//www.facebook.com/R8SYP/photos/a.132702937404707/936912956983697/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="read-more-btn"
                      >
                        Read More <i className="icofont-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
    </div>*/}
          </div>
        </Zoom>
      </section>
    );
  }
}

export default LatestNews;

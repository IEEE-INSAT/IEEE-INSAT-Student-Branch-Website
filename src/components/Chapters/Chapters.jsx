import lax from "lax.js";
import React from "react";
import Bounce from "react-reveal/Bounce";
import "../../assets/styles/components/chapters.scss";
import LaxDiv from "../Shared/LaxDiv";
import Chapter from "./Chapter";

class Chapters extends React.Component {
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
      <>
        <section className="speakers-area ptb-120 pb-0">
          <div className="container">
            <Bounce bottom>
              <div className="section-title">
                <span>Discover Our Chapters and Affinity Groups!</span>
                <h2>CHAPTERS & AFFINITY GROUPS </h2>
                <div className="bar"></div>
                <LaxDiv text="CHAPTERS" dataPreset="driftRight" />
              </div>
            </Bounce>
          </div>
        </section>

        <section className="chapters-section">
          <div className="chapters-gallery">
            <div className="hexagonArea">
              <Chapter
                name="CS"
                instaLink="//www.instagram.com/ieee_cschapterinsatsb"
              />
              <Chapter
                name="EMBS"
                instaLink="//www.instagram.com/ieee.embs.insat"
              />
              <Chapter
                name="IAS"
                instaLink="//www.instagram.com/ieeeiasinsat"
              />
            </div>
            <div className="hexagonArea middle">
              <Chapter
                name="NPSS"
                instaLink="//www.instagram.com/ieee.npss.insat"
              />
              <Chapter
                name="WIE"
                instaLink="//www.instagram.com/ieee_wie_insat"
              />
            </div>
            <div className="hexagonArea last">
              <Chapter
                name="PELS"
                instaLink="//www.instagram.com/ieee.pels.insat"
              />
              <Chapter
                name="PES"
                instaLink="//www.instagram.com/ieee.pes.insat"
              />
              <Chapter
                name="RAS"
                instaLink="//www.instagram.com/ieee_ras_insat"
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Chapters;

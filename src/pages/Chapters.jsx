import lax from "lax.js";
import React from "react";
import Info from "../components/Chapters/Info";
import FooterMap from "../components/Common/FooterMap";
import MainBanner from "../components/Common/MainBanner";
import GoTop from "../components/Shared/GoTop";

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
      <React.Fragment>
        <MainBanner
          bannerTitle="Chapters"
          bannerDescription="Discover our Chapters and Affinity Groups!"
          section="Chapters"
        />
        <Info />
        {/* <Partner />
        <Check /> */}
        <FooterMap />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
      </React.Fragment>
    );
  }
}

export default Chapters;

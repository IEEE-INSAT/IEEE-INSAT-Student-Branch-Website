import lax from "lax.js";
import React from "react";
import FooterMap from "../Common/FooterMap";
import MainBanner from "../Common/MainBanner";
import GoTop from "../Shared/GoTop";
import Timeline from "./Timeline";

class Awards extends React.Component {
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
          bannerTitle="Awards"
          bannerDescription="Check out our Awards!"
          section="Awards"
        />
        <Timeline />
        {/* <Partner /> */}
        <FooterMap />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
      </React.Fragment>
    );
  }
}

export default Awards;

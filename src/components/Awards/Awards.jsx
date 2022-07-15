import React from "react";
import MainBanner from "../Common/MainBanner";
import Timeline from "./Timeline";
import GoTop from "../Shared/GoTop";
import lax from "lax.js";
import Partner from "../Common/Partner";
import Footer from "../Common/Footer";

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
        <Partner />
        <Footer />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
      </React.Fragment>
    );
  }
}

export default Awards;

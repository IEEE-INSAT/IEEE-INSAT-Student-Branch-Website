import React from "react";
import MainBanner from "../components/Common/MainBanner";
import Info from "../components/Chapters/Info";
import GoTop from "../components/Shared/GoTop";
import Partner from "../components/Common/Partner";
import Check from "../components/Common/Check";
import Footer from "../components/Common/Footer";
import lax from "lax.js";

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
        <Partner />
        <Check />
        <Footer />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
      </React.Fragment>
    );
  }
}

export default Chapters;

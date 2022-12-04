import lax from "lax.js";
import React from "react";
import Chapters from "../components/Chapters/Chapters";
import Check from "../components/Common/Check";
import FooterMap from "../components/Common/FooterMap";
import Partner from "../components/Common/Partner";
import Stats from "../components/Common/Stats";
import WhyUs from "../components/Common/WhyUs";
import HomeBanner from "../components/Home/HomeBanner";
import LatestNews from "../components/Home/LatestNews";
import GoTop from "../components/Shared/GoTop";

class Home extends React.Component {
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
        <HomeBanner />
        <LatestNews />
        <Stats />
        <Chapters />
        <WhyUs />
        {/* <AboutSYP /> */}
        <Partner />
        <Check />
        <FooterMap />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
      </React.Fragment>
    );
  }
}

export default Home;

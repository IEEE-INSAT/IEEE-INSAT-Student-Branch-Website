import React from "react";
import HomeBanner from "../components/Home/HomeBanner";
import AboutSYP from "../components/Home/AboutSYP";
import WhyUs from "../components/Common/WhyUs";
import Chapters from "../components/Chapters/Chapters";
import GoTop from "../components/Shared/GoTop";
import Footer from "../components/Common/Footer";
import Stats from "../components/Common/Stats";
import lax from "lax.js";
import Partner from "../components/Common/Partner";
import LatestNews from "../components/Home/LatestNews";
import Check from "../components/Common/Check";

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
        <AboutSYP />
        <Partner />
        <Check />
        <Footer />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
      </React.Fragment>
    );
  }
}

export default Home;

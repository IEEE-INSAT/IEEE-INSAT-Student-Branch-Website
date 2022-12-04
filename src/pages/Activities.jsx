import React from "react";
import About from "../components/Activities/About";
import Extra from "../components/Common/Extra";
import FooterMap from "../components/Common/FooterMap";
import MainBanner from "../components/Common/MainBanner";
import Partner from "../components/Common/Partner";
import GoTop from "../components/Shared/GoTop";

class Activities extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainBanner
          bannerTitle="Activities"
          bannerDescription="Get to know more about our Activities!"
          section="Activities"
        />
        <About />
        <Partner />
        <Extra />
        <FooterMap />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
      </React.Fragment>
    );
  }
}

export default Activities;

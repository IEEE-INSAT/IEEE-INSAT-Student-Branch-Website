import React from "react";
import MainBanner from "../components/Common/MainBanner";
import About from "../components/Activities/About";
import Partner from "../components/Common/Partner";
import Extra from "../components/Common/Extra";
import Footer from "../components/Common/Footer";
import GoTop from "../components/Shared/GoTop";

class Activities extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainBanner bannerTitle="Activities" bannerDescription="Get to know more about our Activities!" section="Activities"/>
        <About />
        <Partner />
        <Extra />
        <Footer />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
      </React.Fragment>
    );
  }
}

export default Activities;

import React from "react";
import Info from "../components/About/Info";
import FooterMap from "../components/Common/FooterMap";
import MainBanner from "../components/Common/MainBanner";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainBanner
          bannerTitle="About us"
          bannerDescription="Get to know more about IEEE INSAT Student Branch!"
          section="About"
        />
        <Info />
        {/* <FunFact />
        <SBCommittee /> */}
        {/* <Partner /> */}
        {/* <BuyTicket /> */}
        {/* <Extra /> */}
        <FooterMap />
        {/* <GoTop scrollStepInPx="50" delayInMs="16.66" /> */}
      </React.Fragment>
    );
  }
}

export default About;

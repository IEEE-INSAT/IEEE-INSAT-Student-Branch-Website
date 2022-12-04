import React from "react";
import Info from "../components/About/Info";
import SBCommittee from "../components/About/SBCommittee";
import BuyTicket from "../components/Common/Check";
import Extra from "../components/Common/Extra";
import FooterMap from "../components/Common/FooterMap";
import MainBanner from "../components/Common/MainBanner";
import Partner from "../components/Common/Partner";
import FunFact from "../components/Common/Stats";
import GoTop from "../components/Shared/GoTop";

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
        <FunFact />
        <SBCommittee />
        <Partner />
        <BuyTicket />
        <Extra />
        <FooterMap />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
      </React.Fragment>
    );
  }
}

export default About;

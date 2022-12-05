import React from "react";
import MainBanner from "../components/Common/MainBanner";
import Info from "../components/About/Info";
import Partner from "../components/Common/Partner";
import BuyTicket from "../components/Common/Check";
import Extra from "../components/Common/Extra";
import Footer from "../components/Common/Footer";
import GoTop from "../components/Shared/GoTop";
import FunFact from "../components/Common/Stats";
import SBCommittee from "../components/About/SBCommittee";

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
        <Footer />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
      </React.Fragment>
    );
  }
}

export default About;

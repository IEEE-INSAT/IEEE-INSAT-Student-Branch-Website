import React from "react";
import ReactCardCarousel from "react-card-carousel";
import { Container } from "./Style";
import SC from "../../assets/images/actitivites/Summer School.jpg";
import IDay from "../../assets/images/actitivites/Integration Day.jpg";
import Soon from "../../assets/images/actitivites/Coming Soon.jpg";
import ActivityTemplate from "./ActivityTemplate";

const Activities = () => {
  return (
    <Container id="activities">
      <ReactCardCarousel autoplay={true} autoplay_speed={4000}>
        <ActivityTemplate
          GradientDirection="120deg"
          GradientColor1="#a142f5"
          GradientColor2="#0000ff"
          opacity="0.7"
          Photo={SC}
          Title="Summer School 4.0"
          Description="test"
        />
        <ActivityTemplate
          GradientDirection="190deg"
          GradientColor1="yellow"
          GradientColor2="#000"
          opacity="0.3"
          Photo={IDay}
          Title="Integration Day"
          Description="test"
        />
        <ActivityTemplate
          GradientDirection="190deg"
          GradientColor1="#000ff"
          GradientColor2="#000"
          opacity="0.3"
          Photo={Soon}
          Title="IEEE Day"
          Description="test"
        />
        <ActivityTemplate
          GradientDirection="190deg"
          GradientColor1="#000ff"
          GradientColor2="#000"
          opacity="0.3"
          Photo={Soon}
          Title="Triple-I Conference"
          Description="test"
        />
        <ActivityTemplate
          GradientDirection="190deg"
          GradientColor1="#000ff"
          GradientColor2="#000"
          opacity="0.3"
          Photo={Soon}
          Title="Tunisian Young & Student Professionals"
          Description="test"
        />
        <ActivityTemplate
          GradientDirection="190deg"
          GradientColor1="#000ff"
          GradientColor2="#000"
          opacity="0.3"
          Photo={Soon}
          Title="Winter School"
          Description="test"
        />
        <ActivityTemplate
          GradientDirection="190deg"
          GradientColor1="#000ff"
          GradientColor2="#000"
          opacity="0.3"
          Photo={Soon}
          Title="Student Professional Awareness"
          Description="test"
        />
      </ReactCardCarousel>
    </Container>
  );
};

export default Activities;

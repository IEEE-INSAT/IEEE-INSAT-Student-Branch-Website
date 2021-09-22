import React from "react";
import ReactCardCarousel from "react-card-carousel";
import { CardContainer, Card } from "./ActivitiesStyle";
import test from "../../assets/images/test.jpg";
const Activities = () => {
  return (
    <CardContainer id="activities">
      <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
        <Card>
          <img src={test} alt="test" />
        </Card>
        <Card>
          First
          <img src={test} alt="test" />
        </Card>
        <Card>
          First
          <img src={test} alt="test" />
        </Card>
        <Card>
          First
          <img src={test} alt="test" />
        </Card>
      </ReactCardCarousel>
    </CardContainer>
  );
};

export default Activities;

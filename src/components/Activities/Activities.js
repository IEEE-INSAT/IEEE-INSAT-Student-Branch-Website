import React from "react";
import ReactCardCarousel from "react-card-carousel";
import {
  Container,
  Card,
  CardContainer,
  ImageWrapper,
  Description,
  InfoContainer,
  ActivityTitle,
  ActivityDescription
} from "./ActivitiesStyle";
import test from "../../assets/images/test.jpg";
const Activities = () => {
  return (
    <Container id="activities">
      <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
        <Card>
          <CardContainer direction="50deg" color1="blue" color2="#00629b">
            <ImageWrapper src={test} alt="test"></ImageWrapper>
          </CardContainer>
          <InfoContainer>
            <ActivityTitle>Title</ActivityTitle>
            <ActivityDescription>
              tetatatatatatatatatatatatatatatatatatatatat
            </ActivityDescription>
          </InfoContainer>
        </Card>
        <Card>
          <CardContainer direction="55deg" color1="yellow" color2="#00ff00">
            <ImageWrapper src={test} alt="test"></ImageWrapper>
          </CardContainer>
          <InfoContainer>
            <ActivityTitle>Title</ActivityTitle>
            <ActivityDescription>
              tetatatatatatatatatatatatatatatatatatatatat
            </ActivityDescription>
          </InfoContainer>
        </Card>
        <Card>
          <CardContainer direction="170deg" color1="green" color2="#00ff00">
            <ImageWrapper src={test} alt="test"></ImageWrapper>
          </CardContainer>
          <InfoContainer>
            <ActivityTitle>Title</ActivityTitle>
            <ActivityDescription>
              tetatatatatatatatatatatatatatatatatatatatat
            </ActivityDescription>
          </InfoContainer>
        </Card>
      </ReactCardCarousel>
    </Container>
  );
};

export default Activities;

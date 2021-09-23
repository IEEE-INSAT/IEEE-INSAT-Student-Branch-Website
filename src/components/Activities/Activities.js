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
              it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop 
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
              it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop 
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
              it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop 
            </ActivityDescription>
          </InfoContainer>
        </Card>
      </ReactCardCarousel>
    </Container>
  );
};

export default Activities;

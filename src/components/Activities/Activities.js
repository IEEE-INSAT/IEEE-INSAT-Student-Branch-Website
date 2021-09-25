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
import SC from "../../assets/images/actitivites/Summer School.jpg";
import IDay from "../../assets/images/actitivites/Integration Day.jpg";
import Soon from "../../assets/images/actitivites/Coming Soon.jpg";

const Activities = () => {
  return (
    <Container id="activities">
      <ReactCardCarousel autoplay={true} autoplay_speed={6000}>
        <Card>
          <CardContainer direction="190deg" color1="#0000ff" color2="#000" opacity="0.3">
            <ImageWrapper src={SC} alt="Summer School 4.0"></ImageWrapper>
          </CardContainer>
          <InfoContainer>
            <ActivityTitle>Summer School 4.0</ActivityTitle>
            <ActivityDescription>
              it is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop
            </ActivityDescription>
          </InfoContainer>
        </Card>
        <Card>
          <CardContainer direction="155deg" color1="#0000ff" color2="red" opacity="0.2">
            <ImageWrapper src={IDay} alt="Integration Day"></ImageWrapper>
          </CardContainer>
          <InfoContainer>
            <ActivityTitle>Integration Day</ActivityTitle>
            <ActivityDescription>
              it is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop
            </ActivityDescription>
          </InfoContainer>
        </Card>
        <Card>
          <CardContainer direction="170deg" color1="green" color2="#00ff00">
            <ImageWrapper src={Soon} alt="IEEE Day"></ImageWrapper>
          </CardContainer>
          <InfoContainer>
            <ActivityTitle>IEEE Day</ActivityTitle>
            <ActivityDescription>
              it is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop
            </ActivityDescription>
          </InfoContainer>
        </Card>
        <Card>
          <CardContainer direction="170deg" color1="green" color2="#00ff00">
            <ImageWrapper src={Soon} alt="Triple I Conference"></ImageWrapper>
          </CardContainer>
          <InfoContainer>
            <ActivityTitle>Triple I Conference</ActivityTitle>
            <ActivityDescription>
              it is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop
            </ActivityDescription>
          </InfoContainer>
        </Card>
        <Card>
          <CardContainer direction="170deg" color1="green" color2="#00ff00">
            <ImageWrapper src={Soon} alt="TSYP"></ImageWrapper>
          </CardContainer>
          <InfoContainer>
            <ActivityTitle>
              Tunisian Students & Young Professionals
            </ActivityTitle>
            <ActivityDescription>
              it is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop
            </ActivityDescription>
          </InfoContainer>
        </Card>
        <Card>
          <CardContainer direction="170deg" color1="green" color2="#00ff00">
            <ImageWrapper src={Soon} alt="Winter School"></ImageWrapper>
          </CardContainer>
          <InfoContainer>
            <ActivityTitle>Winter School</ActivityTitle>
            <ActivityDescription>
              it is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop
            </ActivityDescription>
          </InfoContainer>
        </Card>
      </ReactCardCarousel>
    </Container>
  );
};

export default Activities;

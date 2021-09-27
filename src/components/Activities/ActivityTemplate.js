import React from "react";
import {
  Card,
  CardContainer,
  ImageWrapper,
  InfoContainer,
  ActivityTitle,
  ActivityDescription
} from "./Style";

const ActivityTemplate = ({
  GradientDirection,
  GradientColor1,
  GradientColor2,
  GradientOpacity,
  Photo,
  Title,
  Description
}) => {
  return (
    <Card>
      <CardContainer
        direction={GradientDirection}
        color1={GradientColor1}
        color2={GradientColor2}
        opacity={GradientOpacity}
      >
        <ImageWrapper src={Photo} alt={Photo}></ImageWrapper>
      </CardContainer>
      <InfoContainer>
        <ActivityTitle>{Title}</ActivityTitle>
        <ActivityDescription>{Description}</ActivityDescription>
      </InfoContainer>
    </Card>
  );
};

export default ActivityTemplate;

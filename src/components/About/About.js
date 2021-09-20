import React from "react";
import { Button } from "../ButtonStyle";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from "./AboutStyle";
import AboutPhoto from "../../assets/images/SVG1.svg";

const About = () => {
  return (
    <>
      <InfoContainer lightBg="true" id="about">
        <InfoWrapper>
          <InfoRow imgStart="false">
            <Column1>
              <TextWrapper>
                <TopLine>What are we?</TopLine>
                <Subtitle darkText="true">
                  As members of INSAT IEEE Student
                  Branch, we give students the opportunity to meet and learn
                  from fellow students, as well as faculty members and
                  professionals in the field. An active IEEE Student Branch can
                  be one of the most positive elements in the school offering
                  programs in IEEE designated fields of Engineering, Computer
                  Science and Information Technology.
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={AboutPhoto} alt="test" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default About;

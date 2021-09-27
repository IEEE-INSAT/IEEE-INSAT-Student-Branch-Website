import React from "react";
import { Slide } from "react-reveal";
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
import SVG1 from "../../assets/images/SVG1.svg";
import SVG2 from "../../assets/images/SVG2.svg";
import SVG3 from "../../assets/images/SVG3.svg";

const About = () => {
  return (
    <>
      <InfoContainer lightBg="true" id="about">
        <InfoWrapper>
          <InfoRow imgStart="false">
            <Slide bottom cascade>
              <Column1>
                <TextWrapper>
                  <TopLine>What is IEEE?</TopLine>
                  <Subtitle darkText="true">
                    IEEE is the world’s largest technical professional
                    organization dedicated to advancing technology for the
                    benefit of humanity. IEEE and its members inspire a global
                    community through its highly cited publications,
                    conferences, technology standards, and professional and
                    educational activities.
                  </Subtitle>
                </TextWrapper>
              </Column1>
            </Slide>
            <Column2>
              <ImgWrap>
                <Slide Left>
                  <Img src={SVG3} alt="About" />
                </Slide>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      <InfoContainer lightBg="true">
        <InfoWrapper>
          <InfoRow imgStart="true">
            <Slide Bottom cascade>
              <Column1>
                <TextWrapper>
                  <TopLine>IEEE Tunisia Section</TopLine>
                  <Subtitle darkText="true">
                    IEEE Tunisia Section aims to spread IEEE Activities to all
                    corners of the country by educational and technical
                    activities, human networking, and to develop technology and
                    its applications for humanitarian challenges. The section
                    supports Chapters, special interest groups, student
                    activities and student awards.
                  </Subtitle>
                </TextWrapper>
              </Column1>
            </Slide>
            <Column2>
              <ImgWrap>
                <Slide Left>
                  <Img src={SVG3} alt="About" />
                </Slide>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <InfoContainer lightBg="true" id="about">
        <InfoWrapper>
          <InfoRow imgStart="false">
            <Slide bottom cascade>
              <Column1>
                <TextWrapper>
                  <TopLine>IEEE INSAT Student Branch</TopLine>
                  <Subtitle darkText="true">
                    IEEE INSAT Student Branch is a branch of IEEE at insat
                    institute, Tunis, Tunisia. Founded on january 2nd, 2013 by
                    12 students of the institute, it has now about 550 members
                    and by that It breaks the record of the largest student
                    branch in Region 8.
                  </Subtitle>
                </TextWrapper>
              </Column1>
            </Slide>
            <Column2>
              <ImgWrap>
                <Slide Left>
                  <Img src={SVG3} alt="About" />
                </Slide>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default About;

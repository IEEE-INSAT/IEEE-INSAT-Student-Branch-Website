import React from "react";
import { Slide } from "react-reveal";
// import { Button } from "../ButtonStyle";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Subtitle,
  ImgWrap,
  Img
} from "../../commonStyles/AboutActivStyles";
import SVG1 from "../../assets/images/SVG1.svg";
import SVG2 from "../../assets/images/SVG2.svg";
import SVG3 from "../../assets/images/SVG3.svg";

const About = () => {
  return (
    <>
      <InfoContainer lightBg="true" id="about">
        <InfoWrapper>
          <InfoRow imgStart="false">
            <Slide right cascade>
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
              <Slide left>
                <ImgWrap>
                  <Img src={SVG1} alt="About" />
                </ImgWrap>
              </Slide>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      <InfoContainer lightBg="true">
        <InfoWrapper>
          <InfoRow imgStart="false">
            <Slide right cascade>
              <Column1>
                <TextWrapper>
                  <TopLine>IEEE Tunisia Section</TopLine>
                  <Subtitle darkText="true">
                    IEEE Tunisia Section aims to spread IEEE Activities to all
                    corners of the country through  educational and technical
                    activities, networking opportunities, and to develop technology and
                    its applications for humanitarian goals. The section
                    supports chapters, special interest groups, student
                    activities and student awards.
                  </Subtitle>
                </TextWrapper>
              </Column1>
            </Slide>
            <Column1>
              <Slide right>
                <ImgWrap>
                  <Img src={SVG2} alt="About" />
                </ImgWrap>
              </Slide>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <InfoContainer lightBg="true" id="about">
        <InfoWrapper>
          <InfoRow imgStart="false">
            <Slide right cascade>
              <Column1>
                <TextWrapper>
                  <TopLine>IEEE INSAT Student Branch</TopLine>
                  <Subtitle darkText="true">
                    IEEE INSAT Student Branch is an IEEE Student Branch that
                    provides opportunities to meet and learn from fellow IEEE
                    Student and Graduate Student Members and engage with
                    professional IEEE members locally. IEEE currently has
                    Student Branches at thousands of universities and colleges
                    in hundreds of countries throughout the world.
                  </Subtitle>
                </TextWrapper>
              </Column1>
            </Slide>
            <Column2>
              <Slide left>
                <ImgWrap>
                  <Img src={SVG3} alt="About" />
                </ImgWrap>
              </Slide>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default About;

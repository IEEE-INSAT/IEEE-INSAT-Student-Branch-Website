import React from "react";
import { Slide } from "react-reveal";
import ActivityTemplate from "./ActivityTemplate";
import SC from "../../assets/images/actitivites/Summer School.jpg";
import IntegDay from "../../assets/images/actitivites/Integration Day.jpg";
import IEEEDay from "../../assets/images/actitivites/IEEE Day.jpg";
import Soon from "../../assets/images/actitivites/Coming Soon.jpg";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2
} from "../../commonStyles/AboutActivStyles";

const Activities = () => {
  return (
    <>
      <InfoContainer lightBg="" id="activities">
        <InfoWrapper>
          <InfoRow imgStart="false">
            <Column2>
              <Slide left>
                <ActivityTemplate
                  GradientDirection="120deg"
                  GradientColor1="#a142f5"
                  GradientColor2="#0000ff"
                  opacity="0.7"
                  Photo={SC}
                  Title="Summer School 4.0"
                  Description="Summer School is a series of introductory workshops aiming to enrich newcomers with the basic knowledge needed in IEEE's available domains."
                />
              </Slide>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      <InfoContainer lightBg="">
        <InfoWrapper>
          <InfoRow imgStart="false">
            <Column1>
              <Slide bottom>
                <ActivityTemplate
                  GradientDirection="120deg"
                  GradientColor1="#a142f5"
                  GradientColor2="#0000ff"
                  opacity="0.7"
                  Photo={IntegDay}
                  Title="Integration Day"
                  Description="IEEE's integration day takes part during INSAT's integration day where all of its clubs gather in one place to introduce their communities and what they have to offer."
                />
              </Slide>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      <InfoContainer lightBg="">
        <InfoWrapper>
          <InfoRow imgStart="false">
            <Column2>
              <Slide left>
                <ActivityTemplate
                  GradientDirection="120deg"
                  GradientColor1="#a142f5"
                  GradientColor2="#0000ff"
                  opacity="0.7"
                  Photo={IEEEDay}
                  Title="IEEE Day"
                  Description="IEEE Day is celebrating the first time in history when engineers and IEEE members worldwide gathered to share their technical ideas."
                />
              </Slide>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      {/* <InfoContainer lightBg="">
        <InfoWrapper>
          <InfoRow imgStart="false">
            <Column1>
              <Slide bottom>
                <ActivityTemplate
                  GradientDirection="120deg"
                  GradientColor1="#a142f5"
                  GradientColor2="#0000ff"
                  opacity="0.7"
                  Photo={Soon}
                  Title="Tunisian Students and Young Professionals Congress (TSYP)"
                  Description="The Tunisian Students and Young Professionals Congress (TSYP) is the IEEE Tunisian Annual Meeting where more than 500 engineering students from several Tunisian universities, as well as young professionals, gather to learn further details about the IEEE technical, professional, and educational benefits; and to discuss the future engineering challenges worldwide and in Tunisia. The purpose of this event is to help IEEE Members gain further insight, enabling exchange of knowledge and skills."
                />
              </Slide>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      <InfoContainer lightBg="">
        <InfoWrapper>
          <InfoRow imgStart="false">
            <Column2>
              <Slide left>
                <ActivityTemplate
                  GradientDirection="120deg"
                  GradientColor1="#a142f5"
                  GradientColor2="#0000ff"
                  opacity="0.7"
                  Photo={Soon}
                  Title="Winter School"
                  Description="Winter School is a series of introductory workshops aiming to enrich newcomers with the basic knowledge needed in IEEE's available domains."
                />
              </Slide>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      <InfoContainer lightBg="">
        <InfoWrapper>
          <InfoRow imgStart="false">
            <Column1>
              <Slide bottom>
                <ActivityTemplate
                  GradientDirection="120deg"
                  GradientColor1="#a142f5"
                  GradientColor2="#0000ff"
                  opacity="0.7"
                  Photo={Soon}
                  Title="The Student Professional Awareness Program (SPAx)"
                  Description="The Student Professional Awareness Program features discussions, virtual and in-person presentations, lectures and a series of activities focused on developing professional skills."
                />
              </Slide>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer> */}
    </>
  );
};

export default Activities;

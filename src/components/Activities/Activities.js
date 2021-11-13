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
                  Description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words."
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
                  Description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words."
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
                  Description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words."
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
                  Title="Tunisia Entrepreneurship Summit (TES)"
                  Description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words."
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
                  Title="Tunisian Students and Young Professionals Congress (TSYP)"
                  Description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words."
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
                  Title="Winter School"
                  Description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words."
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
                  Title="The Student Professional Awareness Program (SPAx)"
                  Description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words."
                />
              </Slide>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Activities;

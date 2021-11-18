import React from "react";
import Bounce from "react-reveal/Bounce";
import WIE from "../../assets/images/chapters/wie.png";
import {
  ChaptersContainer,
  ChaptersWrapper,
  ChaptersCard,
  ChaptersIcon,
  ChaptersH2,
  ChaptersP,
  Testha
} from "./AGStyle";

const AffinityGroups = () => {
  return (
    <>
      <ChaptersContainer id="affinity">
        <ChaptersWrapper>
          <Testha>
            <Bounce left>
              <ChaptersCard>
                <a
                  href="https://wie-insat.ieee.tn/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ChaptersIcon src={WIE} />
                </a>
                <ChaptersH2>WIE Affinity Group</ChaptersH2>
                <ChaptersP>
                  The INSAT IEEE Women in Engineering promotes women engineers
                  and scientists and inspiring girls around the world to follow
                  their academic interests to a career in engineering.
                </ChaptersP>
              </ChaptersCard>
            </Bounce>
          </Testha>
          <Bounce left>
            <ChaptersCard>
              <a
                href="https://wie-insat.ieee.tn/"
                target="_blank"
                rel="noreferrer"
              >
                <ChaptersIcon src={WIE} />
              </a>
              <ChaptersH2>WIE Affinity Group</ChaptersH2>
              <ChaptersP>
                The INSAT IEEE Women in Engineering promotes women engineers and
                scientists and inspiring girls around the world to follow their
                academic interests to a career in engineering.
              </ChaptersP>
            </ChaptersCard>
          </Bounce>
        </ChaptersWrapper>
      </ChaptersContainer>
    </>
  );
};

export default AffinityGroups;

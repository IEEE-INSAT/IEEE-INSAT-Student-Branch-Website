import React from "react";
import Bounce from "react-reveal/Bounce";
import CS from "../../assets/images/chapters/cs.png";
import RAS from "../../assets/images/chapters/ras.jpg";
import IAS from "../../assets/images/chapters/ias.png";
import PES from "../../assets/images/chapters/pes.jpg";
import EMBS from "../../assets/images/chapters/embs.jpg";
import NPSS from "../../assets/images/chapters/npss.jpg";
import WIE from "../../assets/images/chapters/wie.png";
import {
  ChaptersContainer,
  ChaptersH1,
  ChaptersWrapper,
  ChaptersCard,
  ChaptersIcon,
  ChaptersH2,
  ChaptersP,
  HiddenCard
} from "./ChapterStyle";

const Chapters = () => {
  return (
    <>
      <ChaptersContainer id="chapters">
        {/* <ChaptersH1>IEEE Chapters</ChaptersH1> */}

        <ChaptersWrapper>
          <Bounce Left>
            <ChaptersCard>
              <a
                href="https://cs-insat.ieee.tn/"
                target="_blank"
                rel="noreferrer"
              >
                <ChaptersIcon src={CS} />
              </a>
              <ChaptersH2>CS Chapter</ChaptersH2>
              <ChaptersP>
                The INSAT IEEE Computer Society Chapter is known for its scope
                in advancing the theory, practice, and uses of computing
                technologies.
              </ChaptersP>
            </ChaptersCard>
          </Bounce>
          <Bounce Left>
            <ChaptersCard>
              <a
                href="https://ras-insat.ieee.tn/"
                target="_blank"
                rel="noreferrer"
              >
                <ChaptersIcon src={RAS} />
              </a>
              <ChaptersH2>RAS Chapter</ChaptersH2>
              <ChaptersP>
                The INSAT IEEE Robotics and Automation Chapter is known for its
                technical side specifically in the Robotics and IoT industries.
              </ChaptersP>
            </ChaptersCard>
          </Bounce>
          <Bounce Left>
            <ChaptersCard>
              <a
                href="https://ias-insat.ieee.tn/"
                target="_blank"
                rel="noreferrer"
              >
                <ChaptersIcon src={IAS} />
              </a>
              <ChaptersH2>IAS Chapter</ChaptersH2>
              <ChaptersP>
                The INSAT IEEE Industry Applications Society Chapter is known
                for its applications of electrical and electronic systems.
              </ChaptersP>
            </ChaptersCard>
          </Bounce>
          <Bounce Left>
            <ChaptersCard>
              <a
                href="https://pes-insat.ieee.tn/"
                target="_blank"
                rel="noreferrer"
              >
                <ChaptersIcon src={PES} />
              </a>
              <ChaptersH2>PES Chapter</ChaptersH2>
              <ChaptersP>
                The INSAT IEEE Power and Energy Society Chapter focuses on the
                scientific and engineering knowledge about different types of
                power and energy.
              </ChaptersP>
            </ChaptersCard>
          </Bounce>
          <Bounce Left>
            <ChaptersCard>
              <a
                href="https://embs-insat.ieee.tn/"
                target="_blank"
                rel="noreferrer"
              >
                <ChaptersIcon src={EMBS} />
              </a>
              <ChaptersH2>EMBS Chapter</ChaptersH2>
              <ChaptersP>
                The INSAT IEEE Engineering in Medicine and Biology Society
                Chapter focuses on the studies of Biomedical Engineering and
                Biology-related topics.
              </ChaptersP>
            </ChaptersCard>
          </Bounce>
          <Bounce Left>
            <ChaptersCard>
              <a
                href="https://npss-insat.ieee.tn/"
                target="_blank"
                rel="noreferrer"
              >
                <ChaptersIcon src={NPSS} />
              </a>
              <ChaptersH2>NPSS Chapter</ChaptersH2>
              <ChaptersP>
                The INSAT IEEE Nuclear and Plasma Sciences Society focuses n all
                phases of nuclear and plasma sciences including instrumentation,
                particle accelerators...
              </ChaptersP>
            </ChaptersCard>
          </Bounce>
        </ChaptersWrapper>
      </ChaptersContainer>
      
    </>
  );
};

export default Chapters;


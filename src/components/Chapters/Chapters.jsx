import React from "react";
import Bounce from "react-reveal/Bounce";
import CS from "../../assets/images/chapters/cs.png";
import RAS from "../../assets/images/chapters/ras.png";
import IAS from "../../assets/images/chapters/ias.png";
import PES from "../../assets/images/chapters/pes.png";
import EMBS from "../../assets/images/chapters/embs.png";
import NPSS from "../../assets/images/chapters/npss.png";
import WIE from "../../assets/images/chapters/wie.png";
import {
  ChaptersContainer,
  ChaptersWrapper,
  ChaptersCard,
  ChaptersH2,
  ChaptersP
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
                <img src={CS} height="185px" width="185px" alt="CS" />
              </a>
              <ChaptersH2>CS Chapter</ChaptersH2>
              <ChaptersP>
                The INSAT IEEE Computer Society Chapter is known for its scope
                in advancing the uses of computing
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
                <img src={RAS} height="170px" width="170px" alt="RAS" />
              </a>
              <ChaptersH2>RAS Chapter</ChaptersH2>
              <ChaptersP>
                The INSAT IEEE Robotics and Automation Society Chapter is known for its
                technical side in the Robotics and IoT industries.
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
                <img src={IAS} height="160px" width="203px" alt="IAS" />
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
                <img src={PES} height="175px" width="240px" alt="PES" />
              </a>
              <ChaptersH2>PES Chapter</ChaptersH2>
              <ChaptersP>
                The INSAT IEEE Power and Energy Society Chapter focuses on the
                knowledge about different types of power and energy.
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
                <img src={EMBS} height="180px" width="235px" alt="EMBS" />
              </a>
              <ChaptersH2>EMBS Chapter</ChaptersH2>
              <ChaptersP>
                The INSAT IEEE Engineering in Medicine and Biology Society
                Chapter focuses on the studies of Biology-related topics.
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
                <img src={NPSS} height="170px" width="170px" alt="NPSS" />
              </a>
              <ChaptersH2>NPSS Chapter</ChaptersH2>
              <ChaptersP>
                The INSAT IEEE Nuclear and Plasma Sciences Society focuses on all
                phases of nuclear and plasma sciences.
              </ChaptersP>
            </ChaptersCard>
          </Bounce>
          <Bounce left>
            <ChaptersCard>
              <a
                href="https://wie-insat.ieee.tn/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={WIE} height="170px" width="170px" alt="WIE" />
              </a>
              <ChaptersH2>WIE Affinity Group</ChaptersH2>
              <ChaptersP>
                The INSAT IEEE Women in Engineering Affinity Group promotes women
                engineers to follow their academic interests in engineering.
              </ChaptersP>
            </ChaptersCard>
          </Bounce>
        </ChaptersWrapper>
      </ChaptersContainer>
    </>
  );
};

export default Chapters;

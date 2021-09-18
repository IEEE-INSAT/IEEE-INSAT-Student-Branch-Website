import React, { useState } from "react";
import Video from "../../assets/videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from "./HeroStyle";
import { Button } from "../ButtonStyle";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          <Typewriter
            options={{
              strings: [
                "IEEE INSAT STUDENT BRANCH",
                "Advancing Technology for Humanity",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 30
            }}
          />
        </HeroH1>
        <HeroP>One Team, One Dream! 💙</HeroP>
        <HeroBtnWrapper>
          {/* <Button
            to="/"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Button {hover ? <ArrowForward /> : <ArrowRight />}
          </Button> */}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

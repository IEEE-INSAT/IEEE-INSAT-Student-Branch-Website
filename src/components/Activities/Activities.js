import React from "react";
import ReactCardCarousel from "react-card-carousel";
import { Container } from "./ActivityStyle";
import SC from "../../assets/images/actitivites/Summer School.jpg";
import IntegDay from "../../assets/images/actitivites/Integration Day.jpg";
import IEEEDay from "../../assets/images/actitivites/IEEE Day.jpg";
import Soon from "../../assets/images/actitivites/Coming Soon.jpg";
import ActivityTemplate from "./ActivityTemplate";
import { Flip } from "react-reveal";

const Activities = () => {
  return (
    <Container id="activities">
      <Flip left>
        <ReactCardCarousel autoplay={true} autoplay_speed={4000}>
          <ActivityTemplate
            GradientDirection="120deg"
            GradientColor1="#a142f5"
            GradientColor2="#0000ff"
            opacity="0.7"
            Photo={SC}
            Title="Summer School 4.0"
            Description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature."
          />
          <ActivityTemplate
            GradientDirection="190deg"
            GradientColor1="yellow"
            GradientColor2="#000"
            opacity="0.3"
            Photo={IntegDay}
            Title="Integration Day"
            Description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature."
          />
          <ActivityTemplate
            GradientDirection="190deg"
            GradientColor1="#000ff"
            GradientColor2="#000"
            opacity="0.3"
            Photo={IEEEDay}
            Title="IEEE Day"
            Description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature."
          />
          <ActivityTemplate
            GradientDirection="190deg"
            GradientColor1="#000ff"
            GradientColor2="#000"
            opacity="0.3"
            Photo={Soon}
            Title="Triple-I Conference"
            Description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature."
          />
          <ActivityTemplate
            GradientDirection="190deg"
            GradientColor1="#000ff"
            GradientColor2="#000"
            opacity="0.3"
            Photo={Soon}
            Title="Tunisian Young & Student Professionals"
            Description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature."
          />
          <ActivityTemplate
            GradientDirection="190deg"
            GradientColor1="#000ff"
            GradientColor2="#000"
            opacity="0.3"
            Photo={Soon}
            Title="Winter School"
            Description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature."
          />
          <ActivityTemplate
            GradientDirection="50deg"
            GradientColor1="#000ff"
            GradientColor2="#000"
            opacity="0.3"
            Photo={Soon}
            Title="Student Professional Awareness"
            Description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature."
          />
        </ReactCardCarousel>
      </Flip>
    </Container>
  );
};

export default Activities;

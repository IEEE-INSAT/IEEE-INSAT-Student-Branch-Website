import styled from "styled-components";

export const Container = styled.div`
  background: #010606;
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: middle;
`;

export const Card = styled.div`
  width: 700px;
  background-color: #1c1b29;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.18);
`;

export const CardContainer = styled.div`
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  height: 400px;
  &:after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 20px 20px 0 0;
    opacity: 0.25;
    background-image: ${(props) =>
      `linear-gradient(${props.direction}, ${props.color1}, ${props.color2})`};
  }
`;

export const ImageWrapper = styled.img`
  width: 100%;
  display: block;
  border-radius: 20px 20px 0 0;
`;

export const InfoContainer = styled.div`
  padding: 20px 15px;
`;

export const ActivityTitle = styled.h3`
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  margin: 10px 0 15px 0;
`;

export const ActivityDescription = styled.p`
  color: #a0a0a0;
  font-size: 15px;
  line-height: 30px;
  font-weight: 400;
`;

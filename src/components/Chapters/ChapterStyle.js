import styled from "styled-components";

export const ChaptersContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1950px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;
export const ChaptersWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr;
    padding: 0 74px;
  }
`;
export const ChaptersCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ChaptersIcon = styled.img`
  height: 130px;
  width: 130px;
  margin-bottom: 10px;
`;
export const ChaptersH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ChaptersH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const ChaptersP = styled.p`
  font-size: 1rem;
  text-align: center;
  @media screen and (max-width: 768px){
    font-size: .9rem;
  }
`;

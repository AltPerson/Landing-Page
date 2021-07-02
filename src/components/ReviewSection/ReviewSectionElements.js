import styled from "styled-components";
import bgImage from "../../images/tip-bg.png";
import topShapeImage from "../../images/top-shape.png";
import botShapeImage from "../../images/bot-shape.png";

export const ReviewSectionContainer = styled.div`
  width: 100%;
  height: auto;
`;
export const ReviewSectionWrapper = styled.div`
  text-align: center;
`;
export const ReviewSectionBg = styled.div`
  background-image: url(${topShapeImage}), url(${botShapeImage}),
    url(${bgImage});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top, bottom, center;
  background-size: 100%, 100%, cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ReviewSectionInfoWrapper = styled.div`
  color: white;
  margin: 25% 0;
`;
export const ReviewSectionInfoTitle = styled.h1`
  font-size: 58px;
  font-weight: 600;
  margin-bottom: 45px;
  @media screen and (max-width: 1200px) {
    font-size: 50px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 968px) {
    font-size: 45px;
    margin-bottom: 35px;
  }
  @media screen and (max-width: 668px) {
    font-size: 35px;
    margin-bottom: 30px;
  }
`;
export const ReviewSectionInfoText = styled.p`
  width: 900px;
  font-size: 30px;
  color: #dbdbdb;
  @media screen and (max-width: 1200px) {
    font-size: 26px;
    padding: 0 20px;
  }
  @media screen and (max-width: 968px) {
    width: 700px;
    font-size: 22px;
  }
  @media screen and (max-width: 720px) {
    width: auto;
    font-size: 22px;
  }
`;

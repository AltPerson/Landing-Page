import styled from "styled-components";
import shadowImage from "../../images/shadow.png";

export const PhraseSectionContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-image: url(${shadowImage});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: 120% 95%;
  padding-bottom: 150px;
`;
export const PhraseSectionWrapper = styled.div``;
export const PhraseSectionPharesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const PhraseSectionPhareWrapper = styled.div`
  text-align: left;
  flex-basis: 340px;
  margin-top: 50px;
  @media screen and (max-width: 468px) {
    flex-basis: auto;
    padding: 0 40px;
  }
`;
export const PhraseSectionPhareTitle = styled.h1`
  font-size: 33px;
  font-weight: 700;
  color: #e5c298;
  margin-bottom: 34px;
  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
`;
export const PhraseSectionPhareText = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #333d42;
`;
export const PhraseSectionMainPhraseWrapper = styled.div`
  text-align: center;
  margin-top: 260px;
  @media screen and (max-width: 1200px) {
    margin-top: 100px;
  }
`;
export const PhraseSectionMainPhareSymbol = styled.span`
  font-size: 100px;
  font-weight: 700;
  font-style: italic;
  color: #3f3f3f;
`;
export const PhraseSectionMainPhareText = styled.p`
  width: 800px;
  margin: 0 auto;
  padding: 0;
  font-size: 25px;
  font-weight: 600;
  margin: -20px auto 60px;
  @media screen and (max-width: 968px) {
    width: auto;
    padding: 0 30px;
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
export const PhraseSectionMainAuthor = styled.h4`
  font-size: 20px;
  font-weight: 700;
  color: #3f3f3f;
`;

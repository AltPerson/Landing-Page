import styled from "styled-components";
import bgImage from "../../images/hero-bg.png";
import topShape from "../../images/top-shape-hero.png";
import botShape from "../../images/bottom-shape-hero.png";
import { Link } from "react-scroll";

export const HeroContainer = styled.div`
  height: calc(100vh - 150px);
  z-index: 1;
  margin: 0 auto;
`;

export const HeroBg = styled.div`
  height: 100%;
  width: 100%;
  background-size: 100%, 100%, cover;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top, bottom, center;
  background-image: url(${topShape}), url(${botShape}), url(${bgImage});
`;

export const HeroContent = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  flex-direction: column;
  align-items: left;
  padding: 300px 20px;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const HeroH1 = styled.h1`
  font-weight: 900;
  font-size: 92px;
  width: 560px;
  color: #deb37e;
  text-shadow: 4px -3px 3px rgba(84, 82, 79, 0.2);
  line-height: 1.2em;
  @media screen and (max-width: 992px) {
    font-size: 82px;
  }
  @media screen and (max-width: 768px) {
    font-size: 72px;
    width: auto;
  }
  @media screen and (max-width: 525px) {
    font-size: 62px;
  }
  @media screen and (max-width: 425px) {
    font-size: 42px;
  }
`;
export const HeroH3 = styled.h3`
  color: #54524f;
  font-weight: 800;
  font-style: italic;
  letter-spacing: 0.2em;
  font-size: 25px;
  @media screen and (max-width: 992px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    text-shadow: 1px -1px 0px white;
    font-size: 18px;
  }
`;
export const HeroBtnWrapper = styled.div`
  margin: 70px 0 26px;
`;
export const HeroBtn = styled(Link)`
  outline: none;
  border: none;
  font-weight: 900;
  font-size: 25px;
  color: #776c64;
  background-color: white;
  padding: 8px 37px;
  border-radius: 50px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s linear;
  &:hover {
    background-color: #776c64;
    color: white;
  }
`;
export const HeroP = styled.p`
  width: 475px;
  text-transform: none;
  font-style: italic;
  font-size: 20px;
  color: #54524f;
  letter-spacing: 0em;
  @media screen and (max-width: 992px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    text-shadow: 1px -1px 0 white;
    font-size: 14px;
  }
  @media screen and (max-width: 525px) {
    width: auto;
  }
`;

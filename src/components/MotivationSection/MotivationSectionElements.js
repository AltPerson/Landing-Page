import styled from "styled-components";
import bgImage from "../../images/motivation-bg.png";
import topShapeImage from "../../images/top-shape-2.png";
import bottomShapeImage from "../../images/bottom-shape-2.png";

export const MotivationSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const MotivationSectionBg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${topShapeImage}), url(${bottomShapeImage}),
    url(${bgImage});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-size: 100%, 100%, cover;
  background-position: top, bottom, center;
  display: flex;
  align-items: center;
`;

export const MotivationSectionWrapper = styled.div`
  width: 100%;
  text-align: right;
  margin-right: 103px;
  text-transform: uppercase;
  font-weight: 800px;
  font-style: italic;
  font-size: 28px;
  text-shadow: 4px -3px 4px rgba(84, 82, 79, 0.4);
  @media screen and (max-width: 1400px) {
    text-align: center;
    margin-right: 0;
  }
`;

export const MotivationSectionTitle = styled.h1`
  color: #54524f;
  @media screen and (max-width: 1400px) {
    text-align: center;
    margin-right: none;
    text-shadow: 4px -3px 4px rgba(255, 255, 255, 0.4);
  }
`;
export const MotivationUnderilneWord = styled.span`
  color: #deb37e;
`;

import styled from "styled-components";
import bgImage from "../../images/shadow.png";

export const MoveSectionBg = styled.div`
  background-repeat: no-repeat;
  background-position: -10% 95%;
  background-size: 50%;
  background-image: url(${bgImage});
`;
export const MoveSectionContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const MoveSectionWrapper = styled.div`
  text-align: center;
  position: relative;
  width: 100%;
`;
export const MoveSectionTitle = styled.h1`
  margin: 140px 0 54px;
  text-transform: uppercase;
  color: #e2a355;
  font-weight: 900;
  font-size: 62px;
  @media screen and (max-width: 768px) {
    font-size: 52px;
    width: auto;
  }
  @media screen and (max-width: 525px) {
    font-size: 42px;
  }
  @media screen and (max-width: 425px) {
    font-size: 32px;
  }
`;

export const MoveSectionSubtitle = styled.h3`
  width: 695px;
  font-size: 27px;
  margin: 0 auto 80px;
  color: #7f7770;
  font-weight: 400;
  word-wrap: break-word;
  @media screen and (max-width: 992px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    width: auto;
    font-size: 18px;
  }
`;
export const MoveSectionCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 1200px) {
    justify-content: space-around;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const MoveSectionCardWrapper = styled.div`
  background-color: #7f7770;
  text-align: left;
  margin-bottom: 50px;
  width: 340px;
  transition: all 1s ease;
  overflow: hidden;
  @media screen and (max-width: 360px) {
    width: 300px;
  }
  @media screen and (max-width: 320px) {
    width: 280px;
  }
`;

export const MoveSectionCardImage = styled.img`
  width: 340px;
  height: 300px;
  object-fit: cover;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const MoveSectionCardInfo = styled.div`
  padding: 63px 22px 74px;
  color: white;
`;

export const MoveSectionCardTitle = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 22px;
  @media screen and (max-width: 768px) {
    font-size: 22px;
    width: auto;
  }
  @media screen and (max-width: 525px) {
    font-size: 20px;
  }
  @media screen and (max-width: 425px) {
    font-size: 18px;
  }
`;
export const MoveSectionCardText = styled.p`
  word-wrap: break-word;
  font-size: 22px;
	@media screen and (max-width: 768px) {
    font-size: 20px;
    width: auto;
  }
  @media screen and (max-width: 525px) {
    font-size: 18px;
  }
  @media screen and (max-width: 425px) {
    font-size: 16px;
`;
export const MoveSectionBtnWrapper = styled.div``;
export const MoveSectionBtn = styled.button`
  position: relative;
  z-index: 2;
  color: white;
  background-color: #7f7770;
  font-weight: 900;
  font-size: 23px;
  padding: 30px 70px;
  text-transform: uppercase;
  border: none;
  border-radius: 50px;
  line-height: 21px;
  letter-spacing: 4px;
  margin-bottom: 180px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    width: auto;
  }
  @media screen and (max-width: 525px) {
    font-size: 18px;
  }
  @media screen and (max-width: 425px) {
    font-size: 16px;
  }

  &:hover {
    color: black;
    background-color: #7f7770;
  }
`;

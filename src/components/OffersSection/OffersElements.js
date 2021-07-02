import styled from "styled-components";
import { Link } from "react-scroll";

export const OffersSectionContainer = styled.div`
  width: 100%;
  height: auto;
`;
export const OffersSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OfferSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;
  background-color: ${({ ord }) => (ord ? "#e2a355" : "#7f7770")};
  @media screen and (max-width: 968px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
  }
`;

export const OfferSectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  order: ${({ ord }) => (ord ? 1 : 0)};
`;

export const OfferSectionInfoWrapper = styled.div`
  color: white;
  padding: ${({ ord }) =>
    ord ? "200px 130px 145px 60px" : "200px 60px 145px 130px"};
  order: ${({ ord }) => (ord ? 0 : 1)};
  @media screen and (max-width: 1200px) {
    font-size: 46px;
    padding: ${({ ord }) =>
      ord ? "150px 100px 145px 40px" : "150px 40px 145px 100px"};
  }
  @media screen and (max-width: 968px) {
    order: ${({ ord }) => (!ord ? 0 : 1)};
    font-size: 36px;
    padding: 100px 30px 100px 80px;
  }
  @media screen and (max-width: 968px) {
    text-align: center;
    padding: 80px 30px 50px;
  }
  @media screen and (max-width: 768px) {
    padding: 30px 25px 20px;
    font-size: 26px;
  }
  @media screen and (max-width: 568px) {
    padding: 20px 15px 10px;
    font-size: 20px;
  }
`;
export const OfferSectionInfoTitle = styled.h1`
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 50px;
  @media screen and (max-width: 1200px) {
    font-size: 46px;
  }
  @media screen and (max-width: 968px) {
    margin-bottom: 25px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 36px;
  }
  @media screen and (max-width: 568px) {
    margin-bottom: 10px;
    font-size: 26px;
  }
`;
export const OfferSectionInfoText = styled.p`
  padding: 0;
  font-weight: 400px;
  font-size: 30px;
  margin-bottom: 54px;
  @media screen and (max-width: 1200px) {
    font-size: 25px;
  }
`;
export const OfferSectionBtnWrapper = styled.div``;
export const OfferSectionBtn = styled(Link)`
  text-transform: uppercase;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 29px;
  color: white;
  background-color: ${({ ord }) => (ord ? "#7f7770" : "#e2a355")};
  line-height: 21px;
  display: inline-block;
  padding: 30px 60px;
  transition: all 0.5s ease;
  cursor: pointer;
  outline: none;
  &:hover {
    color: ${({ ord }) => (ord ? "#7f7770" : "#e2a355")};
    background-color: ${({ ord }) => (ord ? "white" : "white")};
  }
  @media screen and (max-width: 768px) {
    font-size: 19px;
    padding: 20px 60px;
  }
`;

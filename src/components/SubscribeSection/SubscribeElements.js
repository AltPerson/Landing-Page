import styled from "styled-components";
import topShape from "../../images/top-shape-3.png";
import bottomShape from "../../images/bottom-shape-4.png";

export const SubscribeSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${topShape}), url(${bottomShape});
  background-size: 100%, 100%;
  background-position: top, bottom;
  background-repeat: no-repeat, no-repeat;
  background-color: #deb37e;
  padding: 240px 0 140px;
  @media screen and (max-width: 1200px) {
    padding: 200px 0 140px;
  }
  @media screen and (max-width: 968px) {
    padding: 180px 0 120px;
  }
`;

export const SubscribeSectionWrapper = styled.div`
  text-align: center;
`;
export const SubscribeSectionTitle = styled.h1`
  font-size: 75px;
  font-weight: 700;
  color: white;
  margin-bottom: 64px;
  @media screen and (max-width: 1200px) {
    font-size: 65px;
    margin-bottom: 54px;
  }
  @media screen and (max-width: 968px) {
    font-size: 55px;
    margin-bottom: 44px;
  }
`;
export const SubscribeSectionText = styled.p`
  width: 900px;
  font-size: 30px;
  margin: 0 auto 90px;
  color: #54524f;
  @media screen and (max-width: 968px) {
    width: 700px;
    font-size: 25px;
    margin: 0 auto 80px;
  }
  @media screen and (max-width: 768px) {
    width: auto;
    padding: 0 20px;
    margin: 0 auto 50px;
  }
`;
export const SubscribeSectionSendFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const SubscribeSectionSendFormInput = styled.input`
  border: none;
  border-radius: 50px;
  font-size: 25px;
  width: 700px;
  padding: 20px 0 20px 40px;
  outline: none;
  color: #54524f;
  @media screen and (max-width: 968px) {
    width: 500px;
  }
  @media screen and (max-width: 526px) {
    font-size: 25px;
    padding: 20px 0;
    width: auto;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const SubscribeSectionSendFormBtnWrapper = styled.div`
  position: absolute;
  right: 15%;
  transform: translateX(-15%);
  @media screen and (min-width: 1420px) {
    right: 20%;
    transform: translateX(-20%);
  }
  @media screen and (max-width: 1100px) {
    right: 10%;
    transform: translateX(-10%);
  }
  @media screen and (max-width: 968px) {
    right: 5%;
    transform: translateX(-5%);
  }
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    position: relative;
    right: 0;
    transform: translateX(0%);
  }
  @media screen and (min-width: 1920px) {
    transform: translateX(-50%);
    right: 25%;
  }
`;
export const SubscribeSectionSendFormBtn = styled.button`
  border-radius: 50px;
  border: none;
  font-size: 25px;
  color: white;
  text-transform: uppercase;
  padding: 20px 50px;
  background-color: #54524f;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    color: #deb37e;
  }
`;

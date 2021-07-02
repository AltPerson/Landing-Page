import styled from "styled-components";
import topShape from "../../images/top-shape-4.png";

const Link = ({ className, href, children }) => (
  <a className={className} href={href} rel="noreferrer" target="_blank">
    {children}
  </a>
);

export const FooterBg = styled.div`
  background-color: #7f7770;
  width: 100%;
  height: 100%;
  background-image: url(${topShape});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const FooterContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px 20px;
`;

export const FooterWrapper = styled.div`
  padding-top: 340px;
  color: white;
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 1200px) {
    justify-content: center;
    padding-top: 200px;
  }
`;

export const FooterLeftInfo = styled.div`
  font-weight: 400;
  @media screen and (max-width: 1200px) {
    margin-bottom: 40px;
  }
`;
export const FooterLeftInfoTitle = styled.h1`
  font-size: 31px;
  font-weight: 400;
  margin-bottom: 38px;
  @media screen and (max-width: 1200px) {
    text-align: center;
  }
`;
export const FooterLeftInfoDescription = styled.p`
  word-wrap: break-word;
  width: 465px;
  font-size: 23px;
  margin-bottom: 35px;
  @media screen and (max-width: 1200px) {
    width: auto;
    text-align: center;
  }
`;

export const FooterLeftInfoSocials = styled.div`
  display: flex;
  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;
export const FooterInstaLink = styled(Link)`
  margin-right: 16px;
`;
export const FooterInstaImage = styled.img`
  width: 42px;
  height: 42px;
  object-fit: cover;
  transition: all 0.6s ease;
  &:hover {
    transform: rotate(360deg);
  }
`;
export const FooterFacebookLink = styled(Link)`
  margin-right: 16px;
`;
export const FooterFacebookImage = styled.img`
  width: 42px;
  height: 42px;
  object-fit: cover;
  transition: all 0.6s ease;
  &:hover {
    transform: rotate(360deg);
  }
`;
export const FooterTwitterLink = styled(Link)`
  margin-right: 16px;
`;

export const FooterTwitterImage = styled.img`
  width: 42px;
  height: 42px;
  object-fit: cover;
  transition: all 0.6s ease;
  &:hover {
    transform: rotate(360deg);
  }
`;
export const FooterWhatsAppLink = styled(Link)``;
export const FooterWhatsAppImage = styled.img`
  width: 42px;
  height: 42px;
  object-fit: cover;
  transition: all 0.6s ease;
  &:hover {
    transform: rotate(360deg);
  }
`;
export const FooterRightInfo = styled.div`
  display: flex;
  @media screen and (max-width: 1200px) {
    flex: 1 1 auto;
    justify-content: space-around;
  }
  @media screen and (max-width: 698px) {
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
`;
export const FooterRightInfoList = styled.div`
  margin-right: 60px;
  @media screen and (max-width: 1200px) {
    margin-right: 0;
  }
  @media screen and (max-width: 698px) {
    margin-top: 30px;
  }
`;
export const FooterRightInfoListTitle = styled.h1`
  font-weight: 400;
  font-size: 31px;
  margin-bottom: 39px;
  @media screen and (max-width: 698px) {
    margin-bottom: 10px;
  }
`;
export const FooterRightInfoListDescription = styled.ul`
  margin: none;
  padding: none;
  list-style: none;
  line-height: 41px;
`;
export const FooterRightInfoListDescriptionItem = styled.li`
  font-size: 23px;
  font-weight: 400;
`;

export const FooterRightInfoListDescriptionItemLink = styled(Link)`
  cursor: pointer;
`;

export const FooterDesignLinkWrapper = styled.div`
  text-align: center;
`;

export const FooterDesignLink = styled(Link)`
  font-size: 20px;
  color: white;
  margin-top: 20px;
  text-align: center;
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.6s ease;
  &:hover {
    color: black;
    transform: scale(1.1);
  }
`;

import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  ${"" /* margin-top: -80px; */}
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  padding: 0 20px;
  max-width: 1300px;
  align-items: center;
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  margin: 24px 0px;
  @media screen and (max-width: 768px) {
    width: 71px;
    height: 74px;
  }
`;

export const NavLogoImage = styled.img`
  width: 91px;
  height: 94px;
  object-fit: cover;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: #54524f;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  padding-right: 58px;
  @media screen and (max-width: 920px) {
    padding-right: 38px;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #54524f;
  display: flex;
  position: relative;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  height: 100%;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid #54524f;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }
  &::after {
    content: "";
    width: 0;
    height: 2px;
    background-color: #54524f;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: 0.2s linear;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export const NavSearch = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
  @media screen and (max-width: 920px) {
    margin-right: 30px;
  }
`;

export const NavSearchInput = styled.input`
  max-width: 180px;
  padding: 15px;
  border-radius: 50px;
  border: none;
  background: #c3bfbc;
  outline: none;
  color: white;
  font-size: 16px;
  font-weight: 800;
  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }
  @media screen and (max-width: 920px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavSearchIcon = styled.span`
  font-size: 25px;
  padding-top: 5px;
  margin-left: -50px;
  color: #68635f;
}
`;

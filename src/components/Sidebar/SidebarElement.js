import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import {
  NavSearchInput,
  NavSearchIcon,
  NavSearch,
} from "../Navbar/NavbarElements";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background: #0d0d0d;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: 100%;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #e2a355;
  padding-top: 15%;
  text-align: center;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 80px);
  }
`;

export const SidebarLink = styled(LinkS)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #c37513;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarSearchWrap = styled(NavSearch)`
  margin-right: 0;
  justify-content: center;
`;
export const SidebarSearchInput = styled(NavSearchInput)`
  color: black;
  @media screen and (max-width: 768px) {
    display: inline-block;
  }
`;
export const SidebarSearchIcon = styled(NavSearchIcon)``;

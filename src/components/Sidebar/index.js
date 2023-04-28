import React from "react";
import { FaSearch } from "react-icons/fa";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarSearchWrap,
  SidebarSearchInput,
  SidebarSearchIcon,
} from "./SidebarElement";

function SidebarElement({ isOpen, toggleSidebar }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggleSidebar}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            spy={true}
            smooth={true}
            to="home"
            onClick={toggleSidebar}
          >
            Home
          </SidebarLink>
          <SidebarLink
            spy={true}
            smooth={true}
            to="menu"
            onClick={toggleSidebar}
          >
            Menu
          </SidebarLink>
          <SidebarLink
            spy={true}
            smooth={true}
            to="story"
            onClick={toggleSidebar}
          >
            Our Story
          </SidebarLink>
          <SidebarLink
            spy={true}
            smooth={true}
            to="contact"
            onClick={toggleSidebar}
          >
            Contact Us
          </SidebarLink>
        </SidebarMenu>
        <SidebarSearchWrap>
          <SidebarSearchInput type="search" maxLength={10} />
          <SidebarSearchIcon>
            <FaSearch />
          </SidebarSearchIcon>
        </SidebarSearchWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default SidebarElement;

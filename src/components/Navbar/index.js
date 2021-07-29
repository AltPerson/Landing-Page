import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavSearch,
  NavSearchInput,
  NavSearchIcon,
  NavLogoImage,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import logoImage from "../../images/logo.png";
import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";

function Navbar({ toggleSidebar }) {
  const [input, setInput] = useState();
  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavLogoImage
              src={logoImage}
              alt="logoImage"
              onClick={scrollToTop}
            ></NavLogoImage>
          </NavLogo>
          <MobileIcon onClick={toggleSidebar}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                exact="true"
                offset={-60}
                to="home"
                spy={true}
                smooth={true}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="menu" offset={-60} spy={true} smooth={true}>
                Menu
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="story" offset={-60} spy={true} smooth={true}>
                Our Story
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" offset={-60} spy={true} smooth={true}>
                Contact Us
              </NavLinks>
            </NavItem>
            <NavSearch>
              <NavSearchInput
                type="search"
                maxLength={10}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                value={input}
              />
              <NavSearchIcon>
                <FaSearch />
              </NavSearchIcon>
            </NavSearch>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;

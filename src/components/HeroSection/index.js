import React from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroH3,
  HeroBtn,
  HeroP,
  HeroBtnWrapper,
} from "./HeroElements";

export default function HeroSection() {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <HeroContent>
          <HeroH1>It`s time for Hiking</HeroH1>
          <HeroH3>The journey you are worth</HeroH3>
          <HeroBtnWrapper>
            <HeroBtn spy={true} smooth={true} to="menu" type="submit">
              Read More
            </HeroBtn>
          </HeroBtnWrapper>
          <HeroP>
            A journey that will give you cool and bright moments that will
            forever remain in your memory and will be remembered with warmth in
            your heart.
          </HeroP>
        </HeroContent>
      </HeroBg>
    </HeroContainer>
  );
}

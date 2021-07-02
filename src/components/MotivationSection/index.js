import React from "react";
import {
  MotivationSectionContainer,
  MotivationSectionBg,
  MotivationSectionWrapper,
  MotivationSectionTitle,
  MotivationUnderilneWord,
} from "./MotivationSectionElements";

export default function MotivationSection() {
  return (
    <>
      <MotivationSectionContainer>
        <MotivationSectionBg>
          <MotivationSectionWrapper>
            <MotivationSectionTitle>
              <MotivationUnderilneWord>Explore</MotivationUnderilneWord>
              <br />
              The World
            </MotivationSectionTitle>
          </MotivationSectionWrapper>
        </MotivationSectionBg>
      </MotivationSectionContainer>
    </>
  );
}

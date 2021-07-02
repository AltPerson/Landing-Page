import React from "react";
import {
  ReviewSectionContainer,
  ReviewSectionWrapper,
  ReviewSectionInfoWrapper,
  ReviewSectionBg,
  ReviewSectionInfoTitle,
  ReviewSectionInfoText,
} from "./ReviewSectionElements";

export default function ReviewSection() {
  return (
    <>
      <ReviewSectionContainer id="story">
        <ReviewSectionWrapper>
          <ReviewSectionBg>
            <ReviewSectionInfoWrapper>
              <ReviewSectionInfoTitle>
                Hiking the mountains
              </ReviewSectionInfoTitle>
              <ReviewSectionInfoText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis
              </ReviewSectionInfoText>
            </ReviewSectionInfoWrapper>
          </ReviewSectionBg>
        </ReviewSectionWrapper>
      </ReviewSectionContainer>
    </>
  );
}

import React, { useState } from "react";
import {
  MoveSectionContainer,
  MoveSectionWrapper,
  MoveSectionBg,
  MoveSectionTitle,
  MoveSectionSubtitle,
  MoveSectionCardsWrapper,
  MoveSectionCardWrapper,
  MoveSectionCardImage,
  MoveSectionCardInfo,
  MoveSectionCardTitle,
  MoveSectionCardText,
  MoveSectionBtnWrapper,
  MoveSectionBtn,
} from "./MoveElemenets";

function MoveSection({ cards }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <MoveSectionBg>
        <MoveSectionContainer id="menu">
          <MoveSectionWrapper>
            <MoveSectionTitle>Let`s Go</MoveSectionTitle>
            <MoveSectionSubtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum.
            </MoveSectionSubtitle>
            <MoveSectionCardsWrapper>
              {cards
                .map((card) => (
                  <MoveSectionCardWrapper key={card.id}>
                    <MoveSectionCardImage src={card.image} alt="move_image" />
                    <MoveSectionCardInfo>
                      <MoveSectionCardTitle>{card.title}</MoveSectionCardTitle>
                      <MoveSectionCardText>{card.text}</MoveSectionCardText>
                    </MoveSectionCardInfo>
                  </MoveSectionCardWrapper>
                ))
                .filter((item) => (showMore ? item.key <= 6 : item.key <= 3))}
            </MoveSectionCardsWrapper>
            <MoveSectionBtnWrapper>
              <MoveSectionBtn onClick={() => setShowMore(!showMore)}>
                {!showMore ? "Show More" : "Show Less"}
              </MoveSectionBtn>
            </MoveSectionBtnWrapper>
          </MoveSectionWrapper>
        </MoveSectionContainer>
      </MoveSectionBg>
    </>
  );
}

export default MoveSection;

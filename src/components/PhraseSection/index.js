import React from "react";
import {
  PhraseSectionContainer,
  PhraseSectionWrapper,
  PhraseSectionPharesWrapper,
  PhraseSectionPhareWrapper,
  PhraseSectionPhareTitle,
  PhraseSectionPhareText,
  PhraseSectionMainPhraseWrapper,
  PhraseSectionMainPhareSymbol,
  PhraseSectionMainPhareText,
  PhraseSectionMainAuthor,
} from "./PhraseElements";

export default function PhraseSection({ phrases }) {
  return (
    <>
      <PhraseSectionContainer>
        <PhraseSectionWrapper>
          <PhraseSectionPharesWrapper>
            {phrases.map((phrase) => (
              <PhraseSectionPhareWrapper key={phrase.id}>
                <PhraseSectionPhareTitle>
                  {phrase.title}
                </PhraseSectionPhareTitle>
                <PhraseSectionPhareText>{phrase.text}</PhraseSectionPhareText>
              </PhraseSectionPhareWrapper>
            ))}
          </PhraseSectionPharesWrapper>
          <PhraseSectionMainPhraseWrapper>
            <PhraseSectionMainPhareSymbol>''</PhraseSectionMainPhareSymbol>
            <PhraseSectionMainPhareText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              eveniet excepturi pariatur non assumenda velit aliquam
              necessitatibus illo autem, nihil quis culpa repellendus
              consequatur esse, accusantium sed ut! Repellat, nihil.
            </PhraseSectionMainPhareText>
            <PhraseSectionMainAuthor>Lorem Ipsum</PhraseSectionMainAuthor>
          </PhraseSectionMainPhraseWrapper>
        </PhraseSectionWrapper>
      </PhraseSectionContainer>
    </>
  );
}

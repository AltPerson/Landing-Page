import React from "react";
import {
  SubscribeSectionContainer,
  SubscribeSectionWrapper,
  SubscribeSectionTitle,
  SubscribeSectionText,
  SubscribeSectionSendFormWrapper,
  SubscribeSectionSendFormInput,
  SubscribeSectionSendFormBtnWrapper,
  SubscribeSectionSendFormBtn,
} from "./SubscribeElements";

export default function SubscribeSection() {
  return (
    <>
      <SubscribeSectionContainer id="contact">
        <SubscribeSectionWrapper>
          <SubscribeSectionTitle>Title Here</SubscribeSectionTitle>
          <SubscribeSectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Done
          </SubscribeSectionText>
          <SubscribeSectionSendFormWrapper>
            <SubscribeSectionSendFormInput placeholder="Your Email"></SubscribeSectionSendFormInput>
            <SubscribeSectionSendFormBtnWrapper>
              <SubscribeSectionSendFormBtn>
                Subscribe
              </SubscribeSectionSendFormBtn>
            </SubscribeSectionSendFormBtnWrapper>
          </SubscribeSectionSendFormWrapper>
        </SubscribeSectionWrapper>
      </SubscribeSectionContainer>
    </>
  );
}

import React from "react";
import {
  OffersSectionContainer,
  OffersSectionWrapper,
  OfferSectionWrapper,
  OfferSectionImage,
  OfferSectionInfoWrapper,
  OfferSectionInfoTitle,
  OfferSectionInfoText,
  OfferSectionBtnWrapper,
  OfferSectionBtn,
} from "./OffersElements";

function OffersSection({ offers }) {
  return (
    <>
      <OffersSectionContainer>
        <OffersSectionWrapper>
          {offers.map((offer) => (
            <OfferSectionWrapper key={offer.id} ord={offer.orderTextFirst}>
              <OfferSectionImage src={offer.img} ord={offer.orderTextFirst} />
              <OfferSectionInfoWrapper ord={offer.orderTextFirst}>
                <OfferSectionInfoTitle>{offer.title}</OfferSectionInfoTitle>
                <OfferSectionInfoText>{offer.text}</OfferSectionInfoText>
                <OfferSectionBtnWrapper>
                  <OfferSectionBtn
                    spy={true}
                    smooth={true}
                    to="contact"
                    ord={offer.orderTextFirst}
                  >
                    Read More
                  </OfferSectionBtn>
                </OfferSectionBtnWrapper>
              </OfferSectionInfoWrapper>
            </OfferSectionWrapper>
          ))}
        </OffersSectionWrapper>
      </OffersSectionContainer>
    </>
  );
}

export default OffersSection;

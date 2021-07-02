import React from "react";
import instImage from "../../images/instagram.svg";
import fbImage from "../../images/facebook.svg";
import twitterImage from "../../images/twitter.svg";
import wtsapImage from "../../images/whatsap.svg";
import {
  FooterBg,
  FooterContainer,
  FooterWrapper,
  FooterLeftInfo,
  FooterLeftInfoTitle,
  FooterLeftInfoDescription,
  FooterLeftInfoSocials,
  FooterInstaLink,
  FooterInstaImage,
  FooterFacebookLink,
  FooterFacebookImage,
  FooterTwitterLink,
  FooterTwitterImage,
  FooterWhatsAppLink,
  FooterWhatsAppImage,
  FooterRightInfo,
  FooterRightInfoList,
  FooterRightInfoListTitle,
  FooterRightInfoListDescription,
  FooterRightInfoListDescriptionItem,
  FooterRightInfoListDescriptionItemLink,
  FooterDesignLinkWrapper,
  FooterDesignLink,
} from "./FooterElements";

export default function Footer({ lists }) {
  return (
    <>
      <FooterBg>
        <FooterContainer>
          <FooterWrapper>
            <FooterLeftInfo>
              <FooterLeftInfoTitle>Title Here</FooterLeftInfoTitle>
              <FooterLeftInfoDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
                fugiat possimus laudantium inventore corrupti earum dolores
                deserunt! Id architecto dolorem eum autem voluptatum aspernatur
                aperiam veritatis asperiores! Quam, itaque ut.
              </FooterLeftInfoDescription>
              <FooterLeftInfoSocials>
                <FooterInstaLink
                  href="https://www.instagram.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FooterInstaImage src={instImage} alt="instImage" />
                </FooterInstaLink>
                <FooterFacebookLink
                  href="https://www.facebook.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FooterFacebookImage src={fbImage} alt="fbImage" />
                </FooterFacebookLink>
                <FooterTwitterLink
                  href="https://www.twitter.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FooterTwitterImage src={twitterImage} alt="twitterImage" />
                </FooterTwitterLink>
                <FooterWhatsAppLink
                  href="https://www.whatsapp.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FooterWhatsAppImage src={wtsapImage} alt="wtsapImage" />
                </FooterWhatsAppLink>
              </FooterLeftInfoSocials>
            </FooterLeftInfo>
            <FooterRightInfo>
              {lists.map((list) => (
                <FooterRightInfoList key={list.id}>
                  <FooterRightInfoListTitle>
                    {list.title}
                  </FooterRightInfoListTitle>
                  <FooterRightInfoListDescription>
                    {list.li.map((item, index) => {
                      return (
                        <FooterRightInfoListDescriptionItem key={index}>
                          <FooterRightInfoListDescriptionItemLink>
                            {item}
                          </FooterRightInfoListDescriptionItemLink>
                        </FooterRightInfoListDescriptionItem>
                      );
                    })}
                  </FooterRightInfoListDescription>
                </FooterRightInfoList>
              ))}
            </FooterRightInfo>
          </FooterWrapper>
          <FooterDesignLinkWrapper>
            <FooterDesignLink
              href="http://www.freepik.com"
              rel="noreferrer"
              target="_blank"
            >
              Designed by Freepik
            </FooterDesignLink>
          </FooterDesignLinkWrapper>
        </FooterContainer>
      </FooterBg>
    </>
  );
}

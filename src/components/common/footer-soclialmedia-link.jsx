import React from "react";
import styled from "@emotion/styled";
import facebook from "../../assets/images/facebook.svg";
import youtube from "../../assets/images/youtube.svg";
import linkedIn from "../../assets/images/linkedin.svg";

const FooterSocialMediaLink = () => {
  return (
    <SocialMediaWrapper>
      <FollowUs>Follow us on</FollowUs>
      <div>
        <a href="https://www.linkedin.com/company/best-global-logistics/" target="_blank">
          <SocialMediaIcon src={linkedIn}></SocialMediaIcon>
        </a>
        <a href="https://www.facebook.com/BestGlobalLogisticsBV/" target="_blank">
          <SocialMediaIcon src={facebook}></SocialMediaIcon>
        </a>
        <a href="https://www.youtube.com/@bestgloballogistics7972" target="_blank">
          <SocialMediaIcon src={youtube}></SocialMediaIcon>
        </a>
      </div>
    </SocialMediaWrapper>
  );
};

export default FooterSocialMediaLink;

export const SocialMediaWrapper = styled.div`
  float: right;
  position: fixed;
  bottom: 10px;
  right: 10px;
  text-align: center;
`;

const SocialMediaIcon = styled.img`
  height: 22px;
`;

const FollowUs = styled.span`
  font-size: 10px;
`;

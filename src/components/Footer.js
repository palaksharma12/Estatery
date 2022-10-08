import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "./misc/Layouts.js"
import { ReactComponent as FacebookIcon } from "../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../images/youtube-icon.svg";


const Container = tw(ContainerBase)`  bg-gray-300 -mx-8 -mb-8 `
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col `

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider text-primary-500 tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:border-primary-900 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-900 hover:border-gray-900 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-700`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoText>Estatery</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="/#">Rent</Link>
            <Link href="/#">Buy</Link>
            <Link href="/#">Sell</Link>
            <Link href="/#">Manage Property</Link>
            <Link href="/#">Resources</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2020, Estatery, All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};

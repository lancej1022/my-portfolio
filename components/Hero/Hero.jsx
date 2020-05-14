import React from 'react';
import styled from 'styled-components';

import HeroSVG from './Hero.svg';
import { WorkTime } from '../SkillsSection/workTime.svg';

const HeroContainer = styled.div`
  width: 100%;

  .mobile-only {
    width: 100%;
    height: 100%;

    @media only screen and (min-width: ${(props) => props.theme.breakpointTablet}) {
      display: none;
    }
  }
`;

const HeroSection = styled.section`
  width: 80%;
  margin: 0 auto;

  h1 {
    color: ${(props) => props.theme.colorPrimary};
    font-size: ${(props) => props.theme.fontXL};
    line-height: ${(props) => props.theme.fontXL};
    margin-top: 2rem;
    margin-bottom: 5rem;
  }
`;

const HeroLeft = styled.div`
  margin-bottom: 3rem;
`;

const HeroRight = styled.div`
  max-width: 100vw;
  overflow: hidden;
  margin-top: 7rem;

  .screen-size--md {
    display: none;
    @media only screen and (min-width: ${(props) => props.theme.breakpointTablet}) {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

const HeroFooter = styled.div`
  min-height: 8rem;
  width: 100vw;
  background-color: ${(props) => props.theme.colorDark};
  margin-top -1.8rem;
`;

const ContactButton = styled.a`
  background-color: ${(props) => props.theme.colorPrimary};
  color: #fff;
  font-size: ${(props) => props.theme.fontMedium};
  border-radius: 1rem;
  padding: 1rem 2.5rem;
  box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroSection>
        <HeroLeft className="hero-left">
          <h1>
            Hi, I&apos;m Lance Jeffers. I help make the world better through awesome
            software engineering.
          </h1>
          <ContactButton>Contact me</ContactButton>
        </HeroLeft>
        <HeroRight className="hero-right">
          <HeroSVG className="screen-size--md" />
        </HeroRight>
      </HeroSection>
      <HeroSVG className="mobile-only" />
      <HeroFooter />
    </HeroContainer>
  );
};

export default Hero;

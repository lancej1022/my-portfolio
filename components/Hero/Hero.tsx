import styled from 'styled-components';

const HeroContainer = styled.div`
  width: 100%;
  max-height: 100vh;

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
    margin-top: 3rem;
    margin-bottom: 5rem;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpointDesktop}) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    /* padding-bottom: 4rem; */
  }
`;

const HeroLeft = styled.div`
  margin-bottom: 3rem;

  @media screen and (min-width: ${(props) => props.theme.breakpointDesktop}) {
    place-self: center;
  }
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
  min-height: 6rem;
  width: 100%;
  background-color: ${(props) => props.theme.colorDark};
  margin-top: -1.8rem;
`;

const ContactButton = styled.a`
  background-color: ${(props) => props.theme.colorPrimary};
  color: #fff;
  font-size: ${(props) => props.theme.fontMedium};
  border-radius: 1rem;
  padding: 1rem 2.5rem;
  box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
`;

/**
 * Hero section for home page specifically.
 * Note that the image within HeroRight is hidden on mobile devices,
 * whereas the image after the HeroSection is mobile-only (to achieve 100% width).
 */
const Hero: React.FC = () => {
  return (
    <HeroContainer id="top-of-page">
      <HeroSection>
        <HeroLeft className="hero-left">
          <h1>
            Hey, I&apos;m Lance Jeffers. I help make the world better through awesome
            software engineering.
          </h1>
          <ContactButton href="#contact">Contact me</ContactButton>
        </HeroLeft>
        <HeroRight className="hero-right">
          <img
            src="/images/Hero.svg"
            loading="eager" // this image will always be in the viewport, so try to load it ASAP
            className="screen-size--md"
            alt="animated person and code in background"
          />
        </HeroRight>
      </HeroSection>
      <img
        src="/images/Hero.svg"
        loading="eager" // this image will always be in the viewport, so try to load it ASAP
        className="mobile-only"
        alt="animated person and code in background"
      />
      <HeroFooter />
    </HeroContainer>
  );
};

export default Hero;

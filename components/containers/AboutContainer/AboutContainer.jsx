import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';

const AboutSection = styled.section`
  padding: 0 2rem;
  h2 {
    text-align: center;
    font-size: ${(props) => props.theme.fontXXL};
  }

  p {
    // font-size: ${(props) => props.theme.fontMedium};
  }

  @media (min-width: ${(props) => props.theme.breakpointTablet}) {
    width: 80%;
    margin: 0 auto;
  }
`;

const PhotoContainer = styled.div`
  border-radius: 30%;
  border: 0.1rem solid ${(props) => props.theme.colorPrimary};
  overflow: hidden;
  max-width: 30rem;
  margin: 0 auto;
  box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
`;

const AboutContainer = () => {
  return (
    <>
      <AboutSection>
        <h2>About Me</h2>
        <p>I&apos;m a full-stack software engineer originally from Tempe, AZ.</p>
        <p>
          I enjoy creating things that live on the internet, whether that involves
          constructing a performant server to handle busines logic or whether I&apos;m
          building an engaging UI that users will love.
        </p>
        <p>
          Most recently I&apos;ve worked under DrawQL, but before then I was at GoDaddy
          working to try and improve the user experience and perception of our hosting
          lineup.
        </p>
        <Tilt>
          <PhotoContainer>
            <img src="/images/lance-photo.jpg" alt="Lance" />
          </PhotoContainer>
        </Tilt>
      </AboutSection>
    </>
  );
};

export default AboutContainer;

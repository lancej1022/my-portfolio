import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';

const AboutSection = styled.section`
  width: 80%;
  margin: 6rem auto;
  h2 {
    text-align: center;
    font-size: ${(props) => props.theme.fontXXL};
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
  margin: 4rem auto;
  box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
`;

const AboutContainer: React.FC = () => {
  return (
    <>
      <AboutSection>
        <h2>About Me</h2>
        <p>
          I enjoy creating things that live on the internet, whether that involves
          constructing a performant server to handle busines logic or whether I&apos;m
          building an engaging UI that users will love.
        </p>
        <p>
          I&apos;m originally from Tempe, AZ but have also enjoyed living in Los Angeles.
          I&apos;m very open to living in new areas!
        </p>
        <p>
          My most recent work was under DrawQL, but before then I was at GoDaddy trying to
          improve the user experience and perception of our hosting lineup.
        </p>
        <Tilt>
          <PhotoContainer>
            <img src="/images/lance-photo.jpg" loading="lazy" alt="Lance" />
          </PhotoContainer>
        </Tilt>
      </AboutSection>
    </>
  );
};

export default AboutContainer;

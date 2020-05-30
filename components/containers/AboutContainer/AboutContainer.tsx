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

const GridWrapper = styled.div`
  @media (min-width: ${(props) => props.theme.breakpointDesktop}) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    place-items: center;
  }
`;

const PhotoContainer = styled.div`
  border-radius: 30%;
  border: 0.1rem solid ${(props) => props.theme.colorPrimary};
  overflow: hidden;
  max-width: 30rem;
  margin: 4rem auto;
  box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;

  @media (min-width: ${(props) => props.theme.breakpointDesktop}) {
    margin: 2rem auto;
  }
`;

const AboutContainer: React.FC = () => {
  return (
    <>
      <AboutSection id="about">
        <h2>About Me</h2>
        <GridWrapper>
          <div>
            <p>
              I enjoy creating things that live on the internet, whether that involves
              constructing a performant server to handle busines logic or whether I&apos;m
              building an engaging UI that users will love. In general, I like to be
              challenged to go outside of my comfort zone while engineering since it
              forces you to learn more and become better.
            </p>
            <p>
              My most recent work was under DrawQL, but before that I was at GoDaddy
              trying to improve the user experience and perception of our hosting lineup.
            </p>
            <p>
              Now I&apos;m seeking a new challenge. Ideally in another fullstack role but
              I&apos;m open to frontend roles as well.
            </p>
            <p>
              Outside of engineering, I&apos;m originally from Tempe, AZ but have also
              enjoyed recently living in Los Angeles. I&apos;m very interested in living
              somewhere new again, so maybe next year I&apos;ll be updating this website
              from Austin or Denver!
            </p>
            <p>
              P.S. -- If you&apos;re a recruiter and happen to have a dog, I&apos;m a
              sucker for funny dog pics.
            </p>
          </div>
          {/* <Tilt> */}
          <PhotoContainer>
            <img src="/images/lance-photo.jpg" loading="lazy" alt="Lance" />
          </PhotoContainer>
          {/* </Tilt> */}
        </GridWrapper>
      </AboutSection>
    </>
  );
};

export default AboutContainer;

import React from 'react';
import styled from 'styled-components';

const SkillsWrapper = styled.section`
  @media screen and (min-width: ${(props) => props.theme.breakpointDesktop}) {
    max-width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }
`;

const Section = styled.div`
  width: 80%;
  margin: 7rem auto 4rem;
  text-align: center;

  h2 {
    font-size: ${(props) => props.theme.fontXXL};
  }

  .footer-svg {
    max-width: 100%;
    height: 40rem;
  }

  .description-text {
    font-size: ${(props) => props.theme.fontMedium};
    text-align: left;
    margin-bottom: 3rem;
  }
`;

const ShowcaseWrapper = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpointTablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    margin-top: 4rem;
  }
`;

const SkillShowcase = styled.div`
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  background-color: #fff;
  max-width: 80%;
  margin: 0 auto 4rem auto;
  box-shadow: 4px 6px 20px 2px rgba(0, 0, 0, 0.11);

  @media screen and (min-width: ${(props) => props.theme.breakpointDesktop}) {
    min-width: 100%;
  }

  p {
    margin: 0;
  }

  h3 {
    margin: 0 0 0.5rem 0;
  }

  img {
    max-width: 100%;
    max-height: 10rem;
    margin: 0 auto;
  }
`;

const SVGFooter = styled.div`
  grid-row: 1;
  img {
    margin: 0 auto;
    max-width: 100%;
    max-height: 30rem;

    @media screen and (min-width: ${(props) => props.theme.breakpointTablet}) {
      max-height: 40rem;
    }
  }
`;

/**
 * Basic section that describes my current skill set
 */
const SkillsSection: React.FC = () => {
  return (
    <SkillsWrapper>
      <Section>
        <h2>My Skill Set</h2>
        <p className="description-text">
          I consider myself a full-stack engineer with a penchant for React and Node, but
          I&apos;m comfortable learning almost anything used in Web Development.
        </p>
        <ShowcaseWrapper>
          <SkillShowcase>
            <img
              src="/images/React-icon.svg"
              loading="lazy" // this image will always be below the viewport so lazy load it
              alt="React logo"
            />
            <h3>Frontend Technologies</h3>
            <p>TypeScript, React, Semantic HTML, Sass, and GraphQL</p>
          </SkillShowcase>
          <SkillShowcase>
            <img
              src="/images/Node.js_logo.svg"
              loading="lazy" // this image will always be below the viewport so lazy load it
              alt="React logo"
            />
            <h3>
              Other <br />
              Technologies
            </h3>
            <p>Node.js, SQL, NoSql, AWS, and Docker</p>
          </SkillShowcase>
        </ShowcaseWrapper>
      </Section>
      <SVGFooter>
        <img
          src="/images/workTime.svg"
          className="footer-svg"
          loading="lazy" // this image will always be below the viewport so lazy load it
          alt="React logo"
        />
      </SVGFooter>
    </SkillsWrapper>
  );
};

export default SkillsSection;

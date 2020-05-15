import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  width: 80%;
  margin: 8rem auto;
  text-align: center;

  h2 {
    font-size: ${(props) => props.theme.fontXXL};
  }

  p {
    margin-bottom: 4rem;
  }

  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
  }

  a {
    width: 50%;
    display: inline-block;
  }

  img {
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.7));
    width: 100%;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-1rem);
    }
  }
`;

const ContactContainer = () => {
  return (
    <ContactSection>
      <h2>Contact Me</h2>
      <p>The best way to reach me is through LinkedIn, so click the link below!</p>
      <div className="social-icons">
        <a
          href="https://github.com/lancej1022/"
          target="_blank"
          title="GitHub"
          rel="noopener noreferrer"
        >
          <img src="/images/github-icon.svg" loading="lazy" alt="GitHub icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/lance-jeffers/"
          target="_blank"
          title="LinkedIn"
          rel="noopener noreferrer"
        >
          <img src="/images/linkedin-icon.svg" loading="lazy" alt="LinkedIn icon" />
        </a>
        <a
          href="https://twitter.com/6catsinacoat/"
          target="_blank"
          title="Twitter"
          rel="noopener noreferrer"
        >
          <img src="/images/twitter-icon.svg" loading="lazy" alt="Twitter icon" />
        </a>
      </div>
    </ContactSection>
  );
};

export default ContactContainer;

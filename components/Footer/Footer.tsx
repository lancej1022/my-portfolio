import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 0.5rem;
  box-shadow: 0 -15px 25px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  text-align: center;

  h4 {
    margin: 0.5rem;
  }

  p {
    margin-top: 1rem;
    font-size: ${(props) => props.theme.fontSmall};
  }
  span {
    font-size: 2.2rem;
  }
`;

/**
 * Reusable footer component that goes across pages
 */
const Footer: React.FC = () => {
  return (
    <Section>
      <h4>Developed by Lance Jeffers</h4>
      <p>
        Not a recruiter but still want to chat? I accept Chipotle burritos as bribery
        &nbsp;
        <span>&#128521;</span>
      </p>
    </Section>
  );
};

export default Footer;

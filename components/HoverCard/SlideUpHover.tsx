import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const CardContainer = styled.div`
  width: 100%;

  @media screen and (min-width: ${(props) => props.theme.breakpointDesktop}) {
    .card:after {
      transform: translateY(0);
    }

    .content {
      transform: translateY(calc(100% - 8rem));

      > *:not(.title) {
        opacity: 0;
        transform: translateY(1rem);
        transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1),
          opacity 700ms cubic-bezier(0.19, 1, 0.22, 1);
      }
    }

    .card:hover,
    .card:focus-within {
      align-items: center;

      &:before {
        transform: translateY(-4%);
      }
      &:after {
        transform: translateY(-50%);
      }

      .content {
        transform: translateY(0);

        > *:not(.title) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: calc(700ms / 8);
        }
      }
    }

    .card:focus-within {
      &:before,
      &:after,
      .content,
      .content > *:not(.title) {
        transition-duration: 0s;
      }
    }
  }

  p {
    color: #fff;
    text-shadow: 0.2rem 0.2rem 0.4rem #000;
  }

  h3 {
    font-size: ${(props) => props.theme.fontLarge};
    text-shadow: 0.1rem 0.1rem 0.7rem #000;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 100rem;
    margin-bottom: 0;
  }
`;

interface CardProps {
  readonly background: string;
}

const Card = styled.div<CardProps>`
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 1.6rem;
  width: 100%;
  text-align: center;
  color: whitesmoke;
  background-color: whitesmoke;
  background-image: ${({ background }) => `url(${background})`};
  background-size: cover;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);

  @media (min-width: ${(props) => props.theme.breakpointTablet}) {
    height: 350px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background-size: cover;
    background-position: 0 0;
    transition: transform calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
    pointer-events: none;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      hsla(0, 0%, 0%, 0) 0%,
      hsla(0, 0%, 0%, 0.009) 11.7%,
      hsla(0, 0%, 0%, 0.034) 22.1%,
      hsla(0, 0%, 0%, 0.072) 31.2%,
      hsla(0, 0%, 0%, 0.123) 39.4%,
      hsla(0, 0%, 0%, 0.182) 46.6%,
      hsla(0, 0%, 0%, 0.249) 53.1%,
      hsla(0, 0%, 0%, 0.32) 58.9%,
      hsla(0, 0%, 0%, 0.394) 64.3%,
      hsla(0, 0%, 0%, 0.468) 69.3%,
      hsla(0, 0%, 0%, 0.54) 74.1%,
      hsla(0, 0%, 0%, 0.607) 78.8%,
      hsla(0, 0%, 0%, 0.668) 83.6%,
      hsla(0, 0%, 0%, 0.721) 88.7%,
      hsla(0, 0%, 0%, 0.762) 94.1%,
      hsla(0, 0%, 0%, 0.79) 100%
    );
    transform: translateY(-50%);
    transition: transform calc(700ms * 2) cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1;

  > * + * {
    margin-top: 1rem;
  }

  .card__link {
    min-width: 15%;

    svg {
      min-width: 10%;
      transition: all 0.3s;
      color: #fff;

      &:hover {
        color: ${(props) => props.theme.colorPrimary};
        transform: translateY(-0.6rem);
      }
    }
  }
`;

interface SlideUpProps {
  title: string;
  copy: string;
  github: string;
  background: string;
}

const SlideUpHover: React.FC<SlideUpProps> = ({ title, copy, github, background }) => {
  return (
    <CardContainer>
      <Card className="card" background={background}>
        <Content className="content">
          <h3 className="title">{title}</h3>
          <p className="copy">{copy}</p>
          <div className="card__link">
            <a href={github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </Content>
      </Card>
    </CardContainer>
  );
};

export default SlideUpHover;

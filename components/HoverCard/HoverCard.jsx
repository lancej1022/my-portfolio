import React, { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';

const CardWrap = styled.div`
  margin: 1rem;
  transform: perspective(800px);
  transform-style: preserve-3d;
  max-width: 5rem

  &:hover {
    .card-info {
      transform: translateY(0);
    }

    .card-info p {
      opacity: 1;
    }

    .card-info,
    .card-info p {
      transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .card-info:after {
      transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
      opacity: 1;
      transform: translateY(0);
    }

    .card-bg {
      transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
      opacity: 0.8;
    }
    
    .card {
      transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
      box-shadow: rgba(white, 0.2) 0 0 40px 5px, rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px, inset white 0 0 0 6px;
    }
  }
`;

const Card = styled.div`
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset rgba(white, 0.5) 0 0 0 6px;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;

const CardBackground = styled.div`
  opacity: 0.5;
  position: absolute;
  top: -20px;
  left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
`;

const CardInfo = styled.div`
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  p {
    opacity: 0;
    text-shadow: rgba(black, 1) 0 2px 3px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  * {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, transparent 0%, rgba(#000, 0.6) 100%);
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
    text-shadow: rgba(black, 0.5) 0 10px 10px;
  }
`;

const HoverCard = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [leaveDelay, setLeaveDelay] = useState(null);
  const targetChild = useRef();

  // const cardEl = null;

  useEffect(() => {
    // const h = cardEl.clientHeight;
    // const w = cardEl.clientWidth;

    const w = targetChild.current.offsetWidth;
    const h = targetChild.current.offsetHeight;
    setHeight(h);
    setWidth(w);
  }, []);

  const handleMouseMove = (e) => {
    const x = e.pageX - targetChild.current.offsetLeft - width / 2;
    const y = e.pageY - targetChild.current.offsetTop - height / 2;

    setMouseX(x);
    setMouseY(y);
  };

  const handleMouseEnter = () => {
    console.log(targetChild.current);
    clearTimeout(leaveDelay);
    setLeaveDelay(null);
  };

  const handleMouseLeave = () => {
    const newDelay = setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);

    setLeaveDelay(newDelay);
  };

  const mousePX = () => {
    console.log('mousePX');
    return mouseX / width;
  };

  const mousePY = () => {
    return mouseY / height;
  };

  const cardStyle = () => {
    const rX = mousePX() * 30;
    console.log(rX);
    const rY = mousePY() * -30;
    return {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
    };
  };

  const cardBgTransform = () => {
    const tX = mousePX() * -40;
    const tY = mousePY() * -40;
    console.log(tY);
    return {
      transform: `translateX(${tX}px) translateY(${tY}px)`
    };
  };

  return (
    <>
      {/* cardwrap needs to have `ref="card"` on it */}
      <CardWrap
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Card style={cardStyle()} className="card" ref={targetChild}>
          <CardBackground className="card-bg" style={cardBgTransform} />
          <CardInfo className="card-info">
            <h1>This is some text that is meant to be interpolated :D</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, labore.
            </p>
          </CardInfo>
        </Card>
      </CardWrap>
    </>
  );
};

export default HoverCard;

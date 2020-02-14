import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    overflow: hidden;
  }
`

export const Loading = () => (
    <>
        <GlobalStyle />
        <Wrapper>
            <Circle id="loading-animation">
                <Element1 />
                <Element2 />
                <Element3 />
            </Circle>
        </Wrapper>
    </>
);

const Typography = styled.p`
    font-size: 30px;
`;

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const transformation = keyframes`
    0% {
        transform: scale(0);
        opacity: 0;
    }
    50% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0);
        opacity: 0;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100vw;
    height:100vh;
    overflow: hidden;
    background-color: #65ace4;
`;

const Circle = styled.div`
    position: relative;
    width: 50vmax;
    height: 50vmax;
    border-radius: 50vmax;
    overflow:hidden;
    background-color: #56a764;
    will-change: transform;
    animation: ${transformation} 1 3s linear;
`;

const Element = styled.span`
    position: absolute;
    width: 100vmax;
    height 100vmax;
    border-radius: 100vmax;
    transform-origin: 60vmax 30vmax;
    will-change: transform;
`;

const Element1 = styled(Element)`
    right: -50vmax;
    background-color: #d06d8c;
    animation: ${rotation} infinite 3s linear;
`;

const Element2 = styled(Element)`
    left: -50vmax;
    top: -50vmax;
    background-color: #0074bf;
    animation: ${rotation} infinite 3s linear;
`;

const Element3 = styled(Element)`
    bottom: -100vmax;
    background-color: #fff001;
    animation: ${rotation} infinite 3s linear;
`;
import React from 'react';
import logo from '../assets/images/logo.svg';
import styled, {keyframes, createGlobalStyle} from 'styled-components';
import NavMenu from '../components/NavMenu';

import '../css/top.scss';

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow: hidden;
  }
`

const Top = () => (
    <Main>
        <GlobalStyle />
        <NavMenu />
        <Logo src={logo}/>      
    </Main>
);

const anim = keyframes`
{
    0% {
        filter: hue-rotate(0deg);
    }
    15% {
        filter: hue-rotate(40deg);
    }
    25% {
        filter: hue-rotate(80deg);
    }
    35% {
        filter: hue-rotate(120deg);
    }
    45% {
        filter: hue-rotate(160deg);
    }
    55% {
        filter: hue-rotate(200deg);
    }
    65% {
        filter: hue-rotate(240deg);
    }
    75% {
        filter: hue-rotate(280deg);
    }
    85% {
        filter: hue-rotate(320deg);
    }
    100% {
        filter: hue-rotate(360deg);
    }
  }
`;

const popup = keyframes`
    from {
        transform: translate(100px, 100px) rotate(-5deg) scale(0);
        opacity: 0;
    }
    80% {
        transform: scale(1.4);
    }
    to {
        transform: translate(0, 0) rotate(-5deg);
        opacity: 1;
    }
`;

const Logo = styled.img`
    height: 70vh;
    transform: rotate(-5deg);
    animation: ${popup} 0.4s ease 0s, ${anim} infinite linear 1s 1.4s;
`;

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export default Top;
import React from 'react';
import logo from '../assets/images/logo.png';
import logoSVG from '../assets/images/logo.svg';
import styled, {keyframes} from 'styled-components';

const Logo = () => (
    <LogoNormal>Hello, World!(フロントエンドエンジニア酒向祐太のポートフォリオ)</LogoNormal>
);

export const LogoEffect = () => (
    <LogoHue>Hello, World!(フロントエンドエンジニア酒向祐太のポートフォリオ)</LogoHue>
);

export const LogoMini = () => (
    <MiniLogo>Hello, World!(フロントエンドエンジニア酒向祐太のポートフォリオ)</MiniLogo>
)

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

const LogoNormal = styled.h1`
    height: 70vh;
    width: 100vw;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
    transform: rotate(-5deg);
    animation: ${popup} 0.4s ease 0s;
    text-indent:100%;
	white-space:nowrap;
	overflow:hidden;
`;

const LogoHue = styled(LogoNormal)`
    animation: ${popup} 0.4s ease 0s, ${anim} infinite linear 1s 1.4s;
`;

const MiniLogo = styled(LogoNormal)`
    width: 100vw;
    height: 30vh;
`;


export default Logo;
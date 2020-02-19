import React from 'react';
import styled, {keyframes, createGlobalStyle} from 'styled-components';
import NavMenu from '../components/NavMenu';

import '../css/top.scss';
import { LogoEffect } from '../components/Logo';

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow: hidden;
  }
`

const Top = () => (
    <Main>
        <GlobalStyle />
        <NavMenu />
        <LogoEffect />
    </Main>
);

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export default Top;
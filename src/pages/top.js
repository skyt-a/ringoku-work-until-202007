import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import NavMenu from '../components/NavMenu';

import '../css/top.scss';
import { LogoEffect } from '../components/Logo';
import Layout from "../components/layout";

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow: hidden;
  }
`

const Top = () => (
    <Layout>
        <Main>
            <GlobalStyle />
            <NavMenu />
            <LogoEffect />
        </Main>
    </Layout>
);

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export default Top;
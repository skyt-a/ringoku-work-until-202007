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
            <Icons>
                <IconsItem><Icon href="https://twitter.com/RinGoku98" className="icon fa-twitter"></Icon></IconsItem>
                <IconsItem><Icon href="https://github.com/RinGoku" className="icon fa-github"></Icon></IconsItem>
                <IconsItem><Icon href="mailto:yuyu80105@gmail.com" className="icon fa-envelope-o"></Icon></IconsItem>
            </Icons>
        </Main>
    </Layout>
);

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
`;

const Icons = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
`;

const IconsItem = styled.li`
  &:not(:first-child) {
    margin-left: 16px;
  }
`;

const Icon = styled.a`
  display: inline-block;
  &::before {
    color: ${props => props.theme.secondary};
    font-size: 3em;
  }
`;

export default Top;
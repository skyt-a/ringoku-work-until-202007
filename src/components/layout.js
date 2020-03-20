import React from 'react';
import '../css/common.scss';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-x: hidden;
  }
`

class Template extends React.Component {
    render() {
        const { children } = this.props
        return (
            <ThemeProvider theme={theme}>
                {/* <Header /> */}
                <GlobalStyle />
                {children}
            </ThemeProvider>
        )
    }
}

export default Template

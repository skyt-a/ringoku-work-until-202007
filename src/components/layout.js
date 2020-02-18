import React from 'react'
import '../assets/scss/main.scss'
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-x: hidden;
  }
  html {
    font-size: 10px;
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

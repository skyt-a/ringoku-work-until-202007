import React from 'react';
import '../css/common.scss';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './Theme';
import CommonHelmet from './common/helmet';

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-x: hidden;
  }
  body, a {
    color: ${props => props.theme.black};
  }
`

class Template extends React.Component {
    render() {
        const { children } = this.props
        return (
            <ThemeProvider theme={theme}>
              <CommonHelmet />
                {/* <Header /> */}
                <GlobalStyle />
                {children}
            </ThemeProvider>
        )
    }
}

export default Template

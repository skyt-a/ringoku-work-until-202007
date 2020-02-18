import React from "react"
import Layout from "../components/layout"
import NavMenu from "../components/NavMenu";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-y: auto;
  }
`

export default ({ data }) => {
  return ( 
    <Layout>
      <GlobalStyle />
      <NavMenu />
      <Main>
        <Section>
          <Title>Hello,World!とは</Title>
          <Content>
            　「Hello, World!」には2つの意味が込められています。<br />
            　ひとつは「新しいことに挑戦することを恐れない」ことです。
            エンジニアは生涯学び続けることが求められる職業です。
            新しいことに挑戦する。その最初の一歩こそが「Hello,World!」です。<br />
            　もうひとつは「初心を忘れないこと」です。
            私を含めどんなエンジニアだって最初は初心者でした。
            一番最初に組んだプログラム、ターミナルに表示された「Hello,World!」という文字。
            あの時の胸の高鳴り、感動をいつまでも忘れることのないように進んでいきたいですね。
          </Content>
        </Section>
      </Main>
    </Layout>
  );
}

const Main = styled.main`
  overflow: auto;
`;

const Section = styled.section`
  max-width: 1024px;
  padding: 20vh 24px 24px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const Content = styled.p`

`;

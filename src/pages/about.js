import React from "react"
import Layout from "../components/layout"
import NavMenu from "../components/NavMenu";
import styled, { keyframes } from "styled-components";
import { LogoMini } from "../components/Logo";
import { Section, Main, Title, GlobalStyle } from "../components/common/component";

export default ({ data }) => {
  return ( 
    <Layout>
      <GlobalStyle />
      <NavMenu />
      <LogoMini />
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

const fadeIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const Content = styled.p``;

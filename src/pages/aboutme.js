import React from "react"
import Layout from "../components/layout"
import NavMenu from "../components/NavMenu";
import styled from "styled-components";
import { LogoMini } from "../components/Logo";
import History from "../components/History";
import { GlobalStyle, Title, Section, Main } from "./common/component";

export default ({ data }) => {
  return ( 
    <Layout>
      <GlobalStyle />
      <NavMenu />
      <LogoMini />
      <Main>
        <Section>
          <Title>私について</Title>
          <Content>
            酒向　祐太(Sakou Yuta)<br />
            1993年生まれ。東京都在住。横浜国立大学経営学部経営システム科学科卒。<br />
            プログラミングとは無縁の学生生活を送っていたが、幼少時よりインターネット文化へ触れていたこともあり、IT企業へ就職し、プログラミングと出会う。<br />
            その奥深さやもの作りの楽しさに夢中になり、2019年8月にフリーランスとして独立。<br />
            現在はフロントエンドエンジニアとして活動しているが、最初に触れたのはJavaであり、バックエンドの経験もある。<br />
            将来的にはデザイナー領域にも踏み込みたいと思い勉強中。
          </Content>
          <Title>略歴</Title>
          <History />
        </Section>
      </Main>
    </Layout>
  );
}

const Content = styled.p`

`;

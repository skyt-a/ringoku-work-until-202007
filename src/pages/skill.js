import React from "react"
import Layout from "../components/layout"
import NavMenu from "../components/NavMenu";
import styled, { keyframes } from "styled-components";
import { LogoMini } from "../components/Logo";
import SkillStack from "../components/SkillStack";
import { Section, Title, Subtitle, Main, GlobalStyle } from "../components/common/component";

import ReactImg from '../assets/images/skills/react.svg';
import AngularImg from '../assets/images/skills/angular.svg';
import tsImg from '../assets/images/skills/ts.png';
import WordpressImg from '../assets/images/skills/wordpress.png';
import jqueryImg from '../assets/images/skills/jquery.png';
import JavaImg from '../assets/images/skills/java.png';

const frontendSkills = [
  { name: 'React', img: ReactImg, term: '1 year', description: '今一番力を入れている技術です。React+Reduxを用いたアプリ開発経験に加え、Next.jsやGatsby, styled-componentsなど周辺技術に関してもキャッチアップしています。' },
  { name: 'Angular', img: AngularImg, term: '3 year', description: '2～7の開発経験と既存システムの2→4バージョン移行経験があります。現在は最新バージョンまで追ってはいませんが、必要とあればすぐに対応できると思います。' },
  { name: 'TypeScript', img: tsImg, term: '3 year', description: 'AngularがTypeScript推しだったこともあり、比較的初期からTypeScriptには触れてきました。趣味の開発でReactを使うときにも大体取り入れています。' },
  { name: 'Wordpress', img: WordpressImg, term: 'half year', description: '自作テーマの改修案件に携わったことがあり、最低限の知識はあります。' },
  { name: 'jQuery', img: jqueryImg, term: '1.5 year', description: 'Pure JavaScriptよりも先にjQueryに触れたタイプの人間です(後々苦労しました笑)。今は積極的に触っていませんが、必要とあれば使うこともできると思います' },
];

const backendSkills = [
  { name: 'Java', img: JavaImg, term: '4 year', description: '初めて触れたプログラミング言語です。Spring FrameworkやMybatis、Jerseyなどのフレームワークを使った開発経験が3年ほどあります。JavaScriptの次に触ってきた言語だと思います' },
]

export default ({ data }) => {
  return ( 
    <Layout>
      <GlobalStyle />
      <NavMenu />
      <LogoMini />
      <Main>
        <Section>
          <Title>スキル</Title>
          <Subtitle>フロントエンド</Subtitle>
          <SkillStack skills={frontendSkills} />
          <Subtitle>バックエンド</Subtitle>
          <SkillStack skills={backendSkills} />
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

const Content = styled.p`

`;

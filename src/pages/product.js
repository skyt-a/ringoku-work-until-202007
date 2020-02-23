import React from "react"
import Layout from "../components/layout"
import NavMenu from "../components/NavMenu";
import styled, { keyframes } from "styled-components";
import { LogoMini } from "../components/Logo";
import ProductStack from "../components/ProductStack";
import { Section, Title, Subtitle, Main, GlobalStyle } from "../components/common/component";

import thumb01 from '../assets/images/thumbs/coopet.png';
import thumb02 from '../assets/images/thumbs/helloworld.png';
import thumb03 from '../assets/images/thumbs/charisma.png';

const products = [
    { img: thumb01, name: 'Coopet', description: 'ペットでつながるSNSです', url: "https://coopet-51a0b.web.app/"},
    { img: thumb02, name: 'Hello, World!公式ページ', description: '同人ゲームサークル「Hello, World!」の公式ホームページです', url: "https://hello-world.site/"},
    { img: thumb03, name: 'カリスマを取り戻せ', description: '2019年5月5日(日)開催の 第十六回 博麗神社例大祭に出品した同人2D縦スクロールシューティングゲーム', url: "https://ringoku98.thebase.in/items/24584354"},
];

export default ({ data }) => {
  return ( 
    <Layout>
      <GlobalStyle />
      <NavMenu />
      <LogoMini />
      <Main>
        <Section>
          <Title>作ったもの</Title>
          <ProductStack products={products} />
        </Section>
      </Main>
    </Layout>
  );
}

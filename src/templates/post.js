import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Main } from '../components/common/component'
import NavMenu from '../components/NavMenu'
import { LogoMini } from '../components/Logo'
import Helmet from 'react-helmet'
import '../css/post.scss';

const Post = ({ data }) => {
  const post = data.markdownRemark
  const { title, date, featuredImage } = post.frontmatter;
  const html = post.html

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <NavMenu />
      <LogoMini />
      <Main>
        <PostSection>
          <PostTitle>{title}</PostTitle>
          <PostDate>{date}</PostDate>
          <PostImage src={featuredImage} />
          <PostContent dangerouslySetInnerHTML={{ __html: html }} />
        </PostSection>
      </Main>
    </Layout>
  )
}

const PostSection = styled.section`
    display: flex;
    flex-flow: column wrap;
    max-width: 1024px;
    margin: auto;
`;

const PostTitle = styled.h1`
    display: flex;
    justify-content: space-between;
    align-items: center;
    order: 2;
    padding: 8px;
    margin: 0;
    font-size: 3rem;
`;

const PostDate = styled.p`
  order: 3;
  font-size: 1.4rem;
  padding: 4px;
  margin: 0;
  text-align: right;
`

const PostImage = styled.img`
    display: block;
    order: 1;
    width: 100%;
    max-height: 450px;
    object-fit: cover;

    @media (max-width: 767px) {
      width: 90%;
      height: auto;
      margin: auto;
    }
`;

const PostContent = styled.div`
    order: 4;
    max-width: 100%;
    padding: 0;
    font-size: 1.6rem;
`;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: {eq: $slug} }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
        featuredImage
      }
    }
  }
`
export default Post;
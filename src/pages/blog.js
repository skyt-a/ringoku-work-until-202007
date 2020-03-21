import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Main } from "../components/common/component"
import { LogoMini } from "../components/Logo"
import NavMenu from "../components/NavMenu"
import styled from "styled-components"

export default ({ data }) => (
  <Layout>
    <NavMenu />
    <LogoMini />
    <Main>
        <BlogList>
            {data.allMarkdownRemark.edges.map(({node}) => (
            <BlogSection key={node.id} to={node.frontmatter.slug}>
                <BlogTitle>
                {node.frontmatter.title}
                <BlogDate>
                    {node.frontmatter.date}
                </BlogDate>
                </BlogTitle>
                <Thumbnail src={node.frontmatter.featuredImage} />
                <BlogExcerpt>{node.excerpt}</BlogExcerpt>
            </BlogSection>
            ))}
    </BlogList>
    </Main>
  </Layout>
);

const BlogList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 8px;

    @media (max-width: 767px) {
        display: block;
    }
`;

const BlogSection = styled(Link)`
    display: flex;
    flex-flow: column wrap;
    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.3);
    text-decoration: none;
    cursor: pointer;

    @media (max-width: 767px) {
        width: calc(100vw - 16px);
    }
`;

const Thumbnail = styled.img`
    order: 1;
    width: 100%;
`;

const BlogTitle = styled.h3`
    display: flex;
    justify-content: space-between;
    align-items: center;
    order: 2;
    padding: 4px;
    margin: 0;
    font-size: 2rem;
`;

const BlogDate = styled.p`
    font-size: 1.4rem;
`;

const BlogExcerpt = styled.p`
    order: 3;
    padding: 4px;
    font-size: 1.4rem;
`;

export const query = graphql`
query {
  allMarkdownRemark(
    limit: 1000
  ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          featuredImage
          date(formatString: "DD MMMM, YYYY")
          tags
          slug
        }
        excerpt
      }
    }
  }
}
`
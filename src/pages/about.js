import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  return ( 
    <Layout>
      <div id="main">
        <h1>投稿数 {data.allMarkdownRemark.totalCount}</h1>
        <div className="posts">
          {data.allMarkdownRemark.edges.map(({node}) => (
            <Link to="detail" key={node.id} className="6u 12u$(xsmall) post-link" state={{ node: node }}>
              <img src={node.frontmatter.featuredImage} className="post-image"/>
              <h3>{node.frontmatter.title}</h3>
              <span>
                {node.frontmatter.date}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

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
          date(formatString: "DD MMMM, YYYY")
          tags
          featuredImage
        }
        excerpt
      }
    }
  }
}
`
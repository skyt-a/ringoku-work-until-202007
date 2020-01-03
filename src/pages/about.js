import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  return ( 
    <Layout>
      <div id="main">
        <h1>投稿数 {data.allMarkdownRemark.totalCount}</h1>
        <div className="row">
          {data.allMarkdownRemark.edges.map(({node}) => (
            <Link to="detail" key={node.id} className="4u 12u$(xsmall) post-link" state={{ node: node }}>
              <div className="post-image-wrapper">
                <img src={node.frontmatter.featuredImage} className="post-image"/>
              </div>
              <h3 className="post-title">{node.frontmatter.title}</h3>
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
          date(formatString: "YYYY/MM/DD")
          tags
          featuredImage
        }
        excerpt
      }
    }
  }
}
`
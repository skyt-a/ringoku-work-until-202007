import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <div id="main">
      <h1>About {data.allMarkdownRemark.totalCount}</h1>
      {data.allMarkdownRemark.edges.map(({node}) => (
      <div key={node.id}>
        <h3>
          {node.frontmatter.title}
          <img src={node.frontmatter.featuredImage} />
          <span>
            {node.frontmatter.date}
          </span>
        </h3>
        <p>{node.excerpt}</p>
      </div>
    ))}
    </div>
  </Layout>
)

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
        }
        excerpt
      }
    }
  }
}
`
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ location }) => {
  const { state = {} } = location;
  const { node } = state;
  return ( 
    <Layout>
      <div id="main">
        <div>
          <h3>
            {node.frontmatter.title}
            <img src={node.frontmatter.featuredImage} />
            <span>
              {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      </div>
    </Layout>
  );
}
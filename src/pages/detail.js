import React from "react"
import Layout from "../components/layout"
import '../css/detail.scss';

export default ({ location }) => {
  const { state = {} } = location;
  const { node } = state;
  if (!node) {
    return null;
  }
  return ( 
    <Layout>
      <div id="main">
        <div class="detail">
          <h2 class="detail__title">
            {node.frontmatter.title}
            <span>
            {node.frontmatter.date}
          </span>
          </h2>
          <img src={node.frontmatter.featuredImage} />
          <section class="detail__excerpt">
            <p>{node.excerpt}</p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
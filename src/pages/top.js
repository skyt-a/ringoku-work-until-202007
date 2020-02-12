import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/coopet.png'
import thumb02 from '../assets/images/thumbs/helloworld.png'
import thumb03 from '../assets/images/thumbs/charisma.png'

import full03 from '../assets/images/fulls/03.jpg'
import { withPrefix } from "gatsby";
import { Link, graphql } from "gatsby"

import '../css/index.scss';

const DEFAULT_IMAGES = [
    { id: '1', source: thumb01, thumbnail: thumb01, caption: 'Coopet', description: 'ペットでつながるSNSです', url: "https://coopet-51a0b.web.app/"},
    { id: '2', source: thumb02, thumbnail: thumb02, caption: 'Hello, World!公式ページ', description: '同人ゲームサークル「Hello, World!」の公式ホームページです', url: "https://hello-world.site/"},
    { id: '3', source: thumb03, thumbnail: thumb03, caption: 'カリスマを取り戻せ', description: '2019年5月5日(日)開催の 第十六回 博麗神社例大祭に出品した同人2D縦スクロールシューティングゲーム', url: "https://ringoku98.thebase.in/items/24584354"},
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Yuta Sakou(RinGoku) Work"
        const siteDescription = "ITエンジニアとして活動している酒向祐太(りんごく)の活動についてのサイトです"
        const data = this.props.data;
        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                        <script>{`if (window.netlifyIdentity) {
                            window.netlifyIdentity.on("init", user => {
                            if (!user) {
                                window.netlifyIdentity.on("login", () => {
                                document.location.href = "/admin/";
                                });
                            }
                            });
                        }`}</script>
                </Helmet>

                <div id="main">

                    <section id="one">
                        <h2>Recent Blog　<Link to="/about/">more</Link></h2>
                        <div className="row">
                            {data && data.allMarkdownRemark.edges.map(({node}) => (
                                <Link to="detail" key={node.id} className="post-link 4u 12u$(xsmall)" state={{ node: node }}>
                                    <div class="post-image-wrapper">
                                        <img src={node.frontmatter.featuredImage} className="post-image" />
                                    </div>
                                    <h3 class="post-title">{node.frontmatter.title}</h3>
                                    <span>
                                        {node.frontmatter.date}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description, url }) => ({
                            source,
                            thumbnail,
                            caption,
                            description,
                            url
                        }))} />
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex

export const query = graphql`
query {
  allMarkdownRemark(
    limit: 6
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
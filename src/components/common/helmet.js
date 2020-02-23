import React from 'react';
import Helmet from 'react-helmet'

const siteTitle = "Yuta Sakou(RinGoku) Work"
const siteDescription = "フロントエンドエンジニアとして活動している酒向祐太(りんごく)の活動についてのサイトです"
const CommonHelmet = () => <Helmet>
    <title>{siteTitle}</title>
    <meta name="description" content={siteDescription} />
    <script>
        {`
        if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
                if (!user) {
                    window.netlifyIdentity.on("login", () => {
                        document.location.href = "/admin/";
                    });
                }
            });
        }
        window.dataLayer = window.dataLayer || [];
        `
        }
    </script>
</Helmet>;

export default CommonHelmet;
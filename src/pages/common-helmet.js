import React from 'react';
import Helmet from 'react-helmet'

const siteTitle = "Yuta Sakou(RinGoku) Work"
const siteDescription = "ITエンジニアとして活動している酒向祐太(りんごく)の活動についてのサイトです"
const CommonHelmet = () => <Helmet>
    <title>{siteTitle}</title>
    <meta name="description" content={siteDescription} />
    <link href="//db.onlinewebfonts.com/c/16efa2896f117dae2debeb23ab4715dd?family=DidoteTextW01-Italic" rel="stylesheet" type="text/css"/>
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
        window.datalayer = window.datalayer || [];
        `
        }
    </script>
</Helmet>;

export default CommonHelmet;
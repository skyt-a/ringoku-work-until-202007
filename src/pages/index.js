import React from 'react';
import '../css/top.scss';
import CommonHelmet from './common-helmet';
import cloud from '../assets/images/cloud.png';
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/coopet.png'
import thumb02 from '../assets/images/thumbs/helloworld.png'
import thumb03 from '../assets/images/thumbs/charisma.png'

const DEFAULT_IMAGES = [
    { id: '1', source: thumb01, thumbnail: thumb01, caption: 'Coopet', description: 'ペットでつながるSNSです', url: "https://coopet-51a0b.web.app/"},
    { id: '2', source: thumb02, thumbnail: thumb02, caption: 'Hello, World!公式ページ', description: '同人ゲームサークル「Hello, World!」の公式ホームページです', url: "https://hello-world.site/"},
    { id: '3', source: thumb03, thumbnail: thumb03, caption: 'カリスマを取り戻せ', description: '2019年5月5日(日)開催の 第十六回 博麗神社例大祭に出品した同人2D縦スクロールシューティングゲーム', url: "https://ringoku98.thebase.in/items/24584354"},
];

const TopIndex = () => (
    <main>
        <CommonHelmet />
        <header className="TopHeader">
            <div className="TopHeader__CloudWrap">
                <img className="TopHeader__Cloud" src={cloud} alt=""/>
                <img className="TopHeader__Cloud" src={cloud} alt=""/>
            </div>
        </header>
        <article className="TopContent">
            <section className="TopContent__TitleWrap">
                <h1 className="TopContent__Title">Hello, World!</h1>
                <div className="TopContent__TitleLine" />
            </section>
            <section className="TopContent__Section">
                <h2 className="TopContent__SectionTitle">私について</h2>
                <p className="TopContent__SectionContent">
                    酒向　祐太(Sakou Yuta)<br/>1993年生まれ。横浜国立大学経営学部経営システム科学科卒。
                    プログラミングとは無縁の学生生活を送っていたが、幼少時よりインターネット文化へ触れていたこともあり、
                    IT企業へ就職し、プログラミングと出会う。<br/>その奥深さやもの作りの楽しさに夢中になり、2019年8月にフリーランスとして独立。<br />
                    将来的にはデザイナー領域にも踏み込みたいと思い勉強中。<br />
                    猫の「ゆき」と二人暮らし。
                </p>
                <ul className="icons TopContent__SectionIcon">
                    <li><a href="https://twitter.com/RinGoku98" target="_blank" rel="noopener noreferrer" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="https://github.com/RinGoku" target="_blank" rel="noopener noreferrer" className="icon fa-github"><span className="label">Github</span></a></li>
                    <li><a href="mailto:yuyu80105@gmail.com" target="_blank" rel="noopener noreferrer" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                </ul>
            </section>

            <section className="TopContent__Section">
                <h2 className="TopContent__SectionTitle">作ったもの</h2>
                <Gallery images={DEFAULT_IMAGES.map(({ source, thumbnail, caption, description, url }) => ({
                            source,
                            thumbnail,
                            caption,
                            description,
                            url
                        }))} />
            </section>
        </article>
    </main>);

export default TopIndex;
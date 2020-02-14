import React, { useState, useEffect } from 'react';
import '../css/top.scss';
import CommonHelmet from './common-helmet';
import cloud from '../assets/images/cloud.png';
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/coopet.png'
import thumb02 from '../assets/images/thumbs/helloworld.png'
import thumb03 from '../assets/images/thumbs/charisma.png'
import { Loading } from '../components/Loading';

const products = [
    { source: thumb01, thumbnail: thumb01, caption: 'Coopet', description: 'ペットでつながるSNSです', url: "https://coopet-51a0b.web.app/"},
    { source: thumb02, thumbnail: thumb02, caption: 'Hello, World!公式ページ', description: '同人ゲームサークル「Hello, World!」の公式ホームページです', url: "https://hello-world.site/"},
    { source: thumb03, thumbnail: thumb03, caption: 'カリスマを取り戻せ', description: '2019年5月5日(日)開催の 第十六回 博麗神社例大祭に出品した同人2D縦スクロールシューティングゲーム', url: "https://ringoku98.thebase.in/items/24584354"},
];

const skills = [
    { name: 'React', term: '1 year', description: '今一番力を入れている技術です。React+Reduxを用いたアプリ開発経験に加え、Next.jsやGatsbyなど周辺技術に関してもキャッチアップしています。' },
    { name: 'Angular', term: '3 year', description: '2～7の開発経験と既存システムの2→4バージョン移行経験があります。現在は最新バージョンまで追ってはいませんが、必要とあればすぐに対応できると思います。' },
    { name: 'TypeScript', term: '3 year', description: 'AngularがTypeScript推しだったこともあり、比較的初期からTypeScriptには触れてきました。趣味の開発でReactを使うときにも大体取り入れています。' },
    { name: 'Wordpress', term: 'half year', description: '自作テーマの改修案件に携わったことがあり、最低限の知識はあります。' },
    { name: 'jQuery', term: '1.5 year', description: 'Pure JavaScriptよりも先にjQueryに触れたタイプの人間です(後々苦労しました笑)。今は積極的に触っていませんが、必要とあれば使うこともできると思います' },
    { name: 'Java', term: '4 year', description: '初めて触れたプログラミング言語です。Spring FrameworkやMybatis、Jerseyなどのフレームワークを使った開発経験が3年ほどあります。JavaScriptの次に触ってきた言語だと思います' },
];

const TopIndex = () => {
    const [isLoading, setIsLoading] = useState(true);
    const onAnimationend = (event) => {
        setIsLoading(false);
        event.target.removeEventListener('animationend', onAnimationend);
    };
    useEffect(() => {
        document.getElementById('loading-animation').addEventListener('animationend', onAnimationend);
    }, []);
    if (isLoading) {
        return <Loading />;
    }
    return (
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
                    酒向　祐太(Sakou Yuta)<br />1993年生まれ。東京都在住。横浜国立大学経営学部経営システム科学科卒。<br />
                    プログラミングとは無縁の学生生活を送っていたが、幼少時よりインターネット文化へ触れていたこともあり、IT企業へ就職し、プログラミングと出会う。<br />
                    その奥深さやもの作りの楽しさに夢中になり、2019年8月にフリーランスとして独立。<br />
                    現在はフロントエンドエンジニアとして活動しているが、最初に触れたのはJavaであり、バックエンドの経験もある。<br />
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
                <Gallery images={products.map(({ source, thumbnail, caption, description, url }) => ({
                            source,
                            thumbnail,
                            caption,
                            description,
                            url
                        }))} />
            </section>

            <section className="TopContent__Section">
                <h2 className="TopContent__SectionTitle">技術</h2>
                <ul className="TopContent__Skills">
                    {skills.map((skill) => (
                        <li className="TopContent__Skill">
                            <section>
                                <h3 className="TopContent__SkillName">{skill.name}</h3>
                                <p>{skill.description}</p>
                                <span>{skill.term}</span>
                            </section>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="TopContent__Section">
                <h2 className="TopContent__SectionTitle">お問い合わせ</h2>
                <p>TwitterのDMかメールからよろしくお願いします!<br />現在はフルリモートかフレックス可能など柔軟に働ける案件を探しております</p>
                <ul className="icons TopContent__SectionIcon">
                    <li><a href="https://twitter.com/RinGoku98" target="_blank" rel="noopener noreferrer" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="mailto:yuyu80105@gmail.com" target="_blank" rel="noopener noreferrer" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                </ul>
            </section>
        </article>
    </main>)
};

export default TopIndex;
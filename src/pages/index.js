import React, { useState, useEffect } from 'react';
import '../css/top.scss';
import CommonHelmet from './common-helmet';
import cloud from '../assets/images/cloud.png';
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/coopet.png'
import thumb02 from '../assets/images/thumbs/helloworld.png'
import thumb03 from '../assets/images/thumbs/charisma.png'
import { Loading } from '../components/Loading';
import Layout from '../components/layout';
import Top from './top';

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
    return (
        <Layout>
            {isLoading ? <Loading /> : <Top />}
        </Layout>
    );
};

export default TopIndex;
import React, { useState, useEffect } from 'react';
import '../css/top.scss';
import CommonHelmet from '../components/common/helmet';

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
            <CommonHelmet/>
            {isLoading ? <Loading /> : <Top />}
        </Layout>
    );
};

export default TopIndex;
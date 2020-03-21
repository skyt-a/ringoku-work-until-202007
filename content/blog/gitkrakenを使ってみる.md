---
templateKey: blog-post
slug: GitKrakenを使ってみる
title: GitKrakenを使ってみる
date: 2020-03-21T13:20:46.378Z
featuredImage: /images/uploads/kraken.png
featuredImageDescription: ''
tags:
  - 使ってみるシリーズ
  - 技術紹介
  - GitKraken
  - Git
---
## はじめに

皆さんはGit使ってますか？私は使っています。\
いつも自分の作ったソースコードをちまちまコミットしていますし、何ならこのブログもGitHubで管理しています(privateリポジトリにしてるけど)。\
Gitは通常CUIベースで、git addやらgit commitやらコマンドを実行して使いますが、今回紹介するGitKrakenはそんなGitをGUIベースで使えるようにするものです。\
このツールについてなんで紹介しようと思ったかといえば、TwitterのTLでこのツールに関する話題が流れており、どんなツールだろうと興味をもったからです。\
つまり私もそこまでよくわかっていません（笑）\
わからないなりに調べてみた成果をブログ記事という形で共有したいと思います。

## GitKrakenとは

GitKrakenとは先程ご説明したとおり、GitのGUIクライアントになります。\
GitのGUIクライアントは複数あるようですが、GitKrakenはその中でも比較的新しめなようです。\
Kraken(イカ)ということでGitHubのマスコットキャラクターのOctocatを意識しているのかもしれませんね。

![](/images/uploads/kraken.png)

前置きはこの辺にして、早速導入してみましょう！

## 導入方法

GitKrakenの公式サイトにアクセスします。\
<https://www.gitkraken.com/>

![](/images/uploads/kraken1.png)

「Free Download」を選んでインストーラーを入手してインストールします。\
起動すると以下のような画面が表示されます。 ![](/images/uploads/kraken2.png)

「Sign in with GitHub」をクリックするとGitHubの認証を求められます。 ![](/images/uploads/kraken3.png) パスワードを入力して、認証を完了すると... ![](/images/uploads/kraken4.png) やりました！

GitKraken側に戻ると、プロフィールの入力を求めるので適当に入力しておきます。![](/images/uploads/kraken5.png)

その後規約への同意を行えば導入完了です。![](/images/uploads/kraken6.png)

## 使ってみる

とりあえず、[昨日の記事](https://elated-blackwell-51e103.netlify.com/post/ionic-cli%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B/)で作ったプロジェクトをGitHubに登録することを目指して使ってみましょう。

![](/images/uploads/kraken6.png)

トップ画面から、「Start a local project」をクリックします。

![](/images/uploads/kraken9.png)

GitHub.comを選ぶと、リポジトリの新規作成画面が表示されます。\
ここでリポジトリ名やクローン先などを選びます。\
こんな感じにしました。![](/images/uploads/kraken10.png)

そして「Create Repository and Clone」をクリックすると、リポジトリの新規作成を行った上でクローンします。\
こんな画面が表示されます。

![](/images/uploads/kraken11.png)

おお...なんというか、色々できそう（笑）\
とりあえず開発用のブランチを切ってみましょう。\
右上のbranchを入力すると、以下のようにブランチ名を入力することができるようになります。

![](/images/uploads/kraken12.png)

入力してEnterを押すと、ブランチを新規作成して切り替えることができます(CUIで言えば、「git branch」コマンド及び「git checkout」コマンドに相当します)。\
developmentブランチになってますね。

![](/images/uploads/kraken13.png)

今回クローンしたフォルダ内に[昨日の記事](https://elated-blackwell-51e103.netlify.com/post/ionic-cli%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B/)で作ったプロジェクトの内容物を放り込むと、

![](/images/uploads/kraken14.png)

追加した内容物がUnstaged Filesとして表示されます。\
この内容物たちをコミットするためには、これらを変更対象(Staged Files)に追加しないといけません。\
「Stage all changes」をクリックすることですべてStaged Filesに追加します。 CUIで言えば、「git add」コマンドに相当するところですね。

![](/images/uploads/kraken15.png)

追加されましたね。\
コミットコメントを入力して、下の緑色のボタンを押す(CUIで言えば、「git commit」コマンドに相当します)とローカルリポジトリにコミットされ、以下のような画面が表示されます。

![](/images/uploads/kraken16.png)

今回コミットしたファイルが39 addedという形で右側に表示され、真ん中のツリー？部分にも今回のコミットが追加されていますね。\
こんな感じでコミットを視覚的に見ることができるのはいいですね。

ではこのコミットをリモートリポジトリにも反映しましょう。\
右上のPushをクリックしてみます。

![](/images/uploads/kraken17.png)

Pullする対象ブランチの確認を行い、問題なければ「Submit」をクリックします(CUIで言えば、「git push」コマンドに相当します)。\
数秒後には...![](/images/uploads/kraken18.png)

やりました！

もちろんちゃんとリモートに反映されていました。

![](/images/uploads/kraken19.png)
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
// const Showcase = require(`${process.cwd()}/core/Showcase.js`);
const translate = require('../../server/translate.js').translate;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language} = this.props;

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="title">
            <h1>chainweaver</h1>
            <h3>ブロックチェーン開発者の為のクラウドAPIサービス</h3>
            <p>Chainweaverはブロックチェーン技術をアプリケーションやビジネスへ容易に組み込むことのできるクラウドAPIサービスです。わずかなコードでアプリケーションに組み込むことを可能にし、あなたのビジネスにブロックチェーン技術を即座に導入できます。</p>
            <div className="pluginRowBlock">
              <Button href="">
                開発者登録をする
              </Button>
            </div>
          </div>
        </div>
        <script src="/js/jquery-2.2.4.min.js"></script>
        <script src="/js/particle.js"></script>
        <script src="/js/custom.js"></script>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = 'en'} = this.props;

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Container padding={['bottom', 'top']} background="light">
            <h2 className="subTitle">ブロックチェーン技術をもっとビジネスへ</h2>
            <p>ブロックチェーンの活用事例はまだまだ少ないですが、日々様々な企業がビジネスに取り込んでいます。</p>
            <GridBlock
              align="center"
              contents={[
                {
                  content: `ブロックチェーンによって、使用されている製品や材料の追跡や検索が簡単にできるようになり、品質や安全性の保証として役立てることができます。「改ざんが難しい」「データ変更者が明確になる」というブロックチェーンの特性を利用して、食品や製造業のトレーサビリティの信頼性を高めることが可能です。畜産農家から解体業者、加工業者といった各々の工程において、「誰が育てたか」「誰がいつ解体したか」「誰がいつ加工したか」といったデータを改ざんできないかたちで記録するとともに、消費者は小売店に並ぶまでの流通経路を容易に追跡できます。                  `,
                  image: `${siteConfig.baseUrl}img/trace-icon.png`,
                  imageAlign: 'top',
                  imageAlt: 'Audit trail for a business process',
                  title: 'サプライチェーンでのトレーサビリティ',
                },
                {
                  content: `複数の買い手が見込まれる「価値あるもの」を発行する際に、その「価値あるもの」が本物であり、かつ売り手が二度売りできないものと全ての買い手が信用でき、なおかつそれらが可視化されていれば、買い手の間ではオープンで透明性の高い競争となると同時、売り手はより高い価格で売却することができます。`,
                  image: `${siteConfig.baseUrl}img/warranty-icon.png`,
                  imageAlign: 'top',
                  imageAlt: 'Document timestamping',
                  title: '自律分散型マーケットプレイス',
                }
              ]}
              layout="twoColumn"
            />
          </Container>
          {/* <Container padding={['bottom', 'top']}>
            <GridBlock
              contents={[
                {
                  content: `Distributed ledger technology has been a hot topic in the industry for many years.
                  So why is that action so limited? No one knows where to start.
                  chainweaver changes it!`,
                  imageAlign: 'right',
                  image: `${siteConfig.baseUrl}img/dummy.svg`,
                  imageAlt: 'Docusaurus on a Scooter',
                  title: '',
                },
              ]}
              layout="twoColumn"
            />
          </Container>
          <Container padding={['bottom', 'top']} background="light">
            <GridBlock
              contents={[
                {
                  content: `Distributed ledger technology has been a hot topic in the industry for many years.
                  So why is that action so limited? No one knows where to start.
                  chainweaver changes it!`,
                  imageAlign: 'left',
                  image: `${siteConfig.baseUrl}img/dummy.svg`,
                  imageAlt: 'Docusaurus Demo',
                  title: '',
                },
              ]}
              layout="twoColumn"
            />
          </Container> */}
          <div className="testimonials">
            <Container padding={['bottom', 'top']}>
              <h2 className="subTitle">対応プラットフォーム</h2>
              <GridBlock
                align="center"
                contents={[
                  {
                    image: `${siteConfig.baseUrl}img/bitcoin-logo.svg`,
                    imageAlign: 'top',
                    imageAlt: 'Bitcoin',
                    title:
                      'Bitcoin<br />(開発中)',
                  },
                  {
                    image: `${siteConfig.baseUrl}img/bitcoin-cash-logo.svg`,
                    imageAlign: 'top',
                    imageAlt: 'Bitcoin Cash',
                    title:
                      'Bitcoin Cash<br />(開発中)',
                  },
                  {
                    image: `${siteConfig.baseUrl}img/neo-logo.svg`,
                    imageAlign: 'top',
                    imageAlt: 'NEO',
                    title:
                      'NEO<br />(開発中)',
                  },
                  {
                    image: `${siteConfig.baseUrl}img/ethereum.svg`,
                    imageAlign: 'top',
                    imageAlt: 'Ethereum',
                    title:
                      'Ethereum',
                  },
                ]}
                layout="fourColumn"
              />
            </Container>
          </div>
          <div className="testimonials">
            <Container padding={['bottom', 'top']} background="light">
              <h2 className="subTitle">Chainweaverの特徴</h2>
              <GridBlock
                align="center"
                contents={[
                  {
                    content:
                      "世界中で利用されているBlockcypher互換のREST APIを提供しています。これによりBlockcypherを利用して開発された部分はChainweaverに簡単に移行する事が可能です。",
                    image: `${siteConfig.baseUrl}img/api-icon.png`,
                    imageAlign: 'top',
                    imageAlt: 'REST API',
                    title:
                      'Blockcypher互換のREST API',
                  },
                  {
                    content:
                      '最適なセキュリティ、パフォーマンス、アベイラビリティのために、フルノードブロックチェーンをホストしています。',
                    image: `${siteConfig.baseUrl}img/server-icon.png`,
                    imageAlign: 'top',
                    imageAlt: 'フルノードをホスト',
                    title:
                      'フルノードをホスト',
                  },
                  {
                    content:
                      '実際のブロックチェーンと接続するコアの部分は基本的にオープンソース（Apache License 2.0）で提供しています。',
                    image: `${siteConfig.baseUrl}img/opensource-icon.png`,
                    imageAlign: 'top',
                    imageAlt: 'オープンソース',
                    title:
                      'オープンソース',
                  },
                ]}
                layout="threeColumn"
              />
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;

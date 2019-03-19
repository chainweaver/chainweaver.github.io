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
            <h3>for all blockchain developers</h3>
            <p>for all blockchain developersfor all blockchain developersfor all blockchain developersfor all blockchain developersfor all blockchain developersfor all blockchain developersfor all blockchain developersfor all blockchain developersfor all blockchain developers</p>
            <div className="pluginRowBlock">
              <Button
                href={`
                  ${siteConfig.baseUrl}docs/${language}/installation
                  `}>
                <translate>Get Started</translate>
              </Button>
            </div>
          </div>
        </div>
        <script src="/js/jquery-2.2.4.min.js"></script>
        <script src="/js/particle.js"></script>
        <script src="/js/scroll.js"></script>
      </div>
    );
  }
}

class Index extends React.Component {
  // componentDidMount() {
  //   const script = document.createElement("script");
  //   script.src = `${siteConfig.baseUrl}/js/jquery-2.2.4.min.js`;
  //   script.async = true;
  //   document.body.appendChild(script);

  //   const script2 = document.createElement("script");
  //   script2.src = `${siteConfig.baseUrl}/js/particle.js`;
  //   script2.async = true;
  //   document.body.appendChild(script2);

    // const particleCanvas = document.getElementsByTagName("canvas");
    // document.body.insertBefore(particleCanvas[0], document.body.firstChild);
  // }

  render() {
    const {config: siteConfig, language = 'en'} = this.props;
    // const pinnedUsersToShowcase = siteConfig.users.filter(user => user.pinned);

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        {/* <div className="title">
          <h1>chainweaver</h1>
          <h3>for all blockchain developers</h3>
        </div> */}
        {/* <script src="/js/jquery-2.2.4.min.js"></script>
        <script src="/js/particle.js"></script> */}
        <div className="mainContainer">
          <Container padding={['bottom', 'top']} background="light">
            <h2 className="subTitle">Common business use cases</h2>
            <GridBlock
              align="center"
              contents={[
                {
                  content: `Keep an immutable history of business processes.`,
                  image: `${siteConfig.baseUrl}img/dummy.svg`,
                  imageAlign: 'top',
                  imageAlt: 'Audit trail for a business process',
                  title: <translate>Audit trail for a business process</translate>,
                },
                {
                  content: `Add a blockchain timestamp proof to digital documents and data.`,
                  image: `${siteConfig.baseUrl}img/dummy.svg`,
                  imageAlign: 'top',
                  imageAlt: 'Document timestamping',
                  title: <translate>Document timestamping</translate>,
                }
              ]}
              layout="twoColumn"
            />
            <br />
            <br />
            <GridBlock
              align="center"
              contents={[
                {
                  content: `Prove the existence and accuracy of accounting records.`,
                  image: `${siteConfig.baseUrl}img/dummy.svg`,
                  imageAlign: 'top',
                  imageAlt: 'Data integrity for accounting records',
                  title: <translate>Data integrity for accounting records</translate>,
                },
                {
                  content: `Prove to regulators that your data and documents haven't been altered`,
                  image: `${siteConfig.baseUrl}img/dummy.svg`,
                  imageAlign: 'top',
                  imageAlt: 'Regulatory compliance',
                  title: <translate>Regulatory compliance</translate>,
                },
              ]}
              layout="twoColumn"
            />
          </Container>
          <Container padding={['bottom', 'top']}>
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
          </Container>
          <div className="testimonials">
            <Container padding={['bottom', 'top']}>
              <h2 className="subTitle">For developers</h2>
              <GridBlock
                align="center"
                contents={[
                  {
                    content:
                      "Simple and easy web APIs (REST) enable developers to build blockchain applications quickly and confidently.",
                    image: `${siteConfig.baseUrl}img/dummy.svg`,
                    imageAlign: 'top',
                    imageAlt: 'REST API',
                    title:
                      'REST API',
                  },
                  {
                    content:
                      'We host full-node blockchains for optimal security in validating and relaying transactions.',
                    image: `${siteConfig.baseUrl}img/dummy.svg`,
                    imageAlign: 'top',
                    imageAlt: 'Hosted Full Blockchain Nodes',
                    title:
                      'Hosted Full Blockchain Nodes',
                  },
                  {
                    content:
                      '*Docusaurus has been a great choice for the ReasonML family of projects. It makes our documentation consistent, i18n-friendly, easy to maintain, and friendly for new contributors.*',
                    image: `${siteConfig.baseUrl}img/dummy.svg`,
                    imageAlign: 'top',
                    imageAlt: 'Ricky Vetter',
                    title:
                      'Ricky Vetter <br/><font size="2">ReasonReact Developer</font>',
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

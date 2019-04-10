/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>ドキュメント</h5>
            <a href="/openapi/v0/eth.html" target="_blank">
              API リファレンス (for Ethereum)
            </a>
          </div>
          <div>
            <h5>コミュニティ</h5>
            <a
              href="https://stackoverflow.com/questions/tagged/chainweaver"
              target="_blank"
              rel="noreferrer noopener">
              Stack Overflow
            </a>
            <a href="https://github.com/chainweaver" target="_blank">GitHub</a>
          </div>
          <div>
            <a href="/contact">お問い合わせ</a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}. We use <a href="https://icons8.jp/" target="_blank">icons8.</a></section>
      </footer>
    );
  }
}

module.exports = Footer;

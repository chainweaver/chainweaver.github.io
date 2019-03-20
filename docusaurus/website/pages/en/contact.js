/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const translate = require('../../server/translate.js').translate;

const Container = CompLibrary.Container;

function Help(props) {
  const {config: siteConfig, language = ''} = props;

  const Button = props => (
    <div className="pluginWrapper buttonWrapper">
      <a className="button" href={props.href} target={props.target}>
        {props.children}
      </a>
    </div>
  );

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer">
        <div className="showcaseSection">
          <header className="postHeader">
            <h1><translate>Contact</translate></h1>
            <p>Please read and accept the "<a href="https://fairway-corp.co.jp/en/privacy-policy/" target="_blank">Privacy Policy</a>" regarding the handling of personal information.<br />If you agree, please click the "Contact us" button below.</p>
          </header>

          <Button href="https://forms.gle/7xg6d5jKq5YMvf616" target="_blank">
            <translate>Contact us</translate>
          </Button>
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;

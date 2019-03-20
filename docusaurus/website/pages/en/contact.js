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

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer">
        <div className="showcaseSection">
          <header className="postHeader">
            <h1><translate>Contact</translate></h1>
            <p>Please write down the following items and push "send" button.<br />Please read and accept the "<a href="https://fairway-corp.co.jp/en/privacy-policy/" target="_blank">Privacy Policy</a>" regarding the handling of personal information.</p>
          </header>
          <div className="iframe-wrap">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe6RJK3N2hsZGAj72WXR1MNIkaX-rFBxaALEGwG85Zmy2s_tA/viewform?embedded=true"
              width="640"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >読み込んでいます...</iframe>
          </div>
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;

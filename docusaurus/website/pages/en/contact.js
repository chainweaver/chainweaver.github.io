/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

function Contact(props) {
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
      <Container className="mainContainer contact">
        <div className="showcaseSection">
          <header className="postHeader">
            <h1>お問い合わせ</h1>
            <p>個人情報の取扱いについては<a href="https://fairway-corp.co.jp/privacy-policy/" target="_blank">個人情報保護方針</a>をよく読み、同意してください。<br />同意された上で下記の「お問い合わせフォーム」ボタンをクリックしてください。</p>
          </header>

          <Button href="https://forms.gle/7xg6d5jKq5YMvf616" target="_blank">
            お問い合わせフォーム
          </Button>
        </div>
      </Container>
    </div>
  );
}

module.exports = Contact;

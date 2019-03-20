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

function Api(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `
* [Document](/openapi/v0/eth.html)
* [OpenAPI 3.0 yaml](https://raw.githubusercontent.com/chainweaver/protobuf/master/openapi/eth/openapi3.yaml)
* [OpenAPI 3.0 json](https://raw.githubusercontent.com/chainweaver/protobuf/master/openapi/eth/openapi3.json)
* [OpenAPI 2.0 yaml](https://raw.githubusercontent.com/chainweaver/protobuf/master/openapi/eth/openapi2.yaml)
* [OpenAPI 2.0 json](https://raw.githubusercontent.com/chainweaver/protobuf/master/openapi/eth/openapi2.json)
* [Postman Collection](https://raw.githubusercontent.com/chainweaver/protobuf/master/postman/eth/collection.json)
      `,
      title: 'Ethereum REST API',
    }
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>API Reference</h1>
          </header>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Api;

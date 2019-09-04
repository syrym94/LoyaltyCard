base64encode
============

[![npm](https://img.shields.io/npm/v/@wmakeev/base64encode.svg?maxAge=1800&style=flat-square)](https://www.npmjs.com/package/@wmakeev/base64encode)
[![Travis](https://img.shields.io/travis/wmakeev/base64encode.svg?maxAge=1800&style=flat-square)](https://travis-ci.org/wmakeev/base64encode)
[![bitHound DevDependencies](https://img.shields.io/bithound/devDependencies/github/wmakeev/base64encode.svg?maxAge=1800&style=flat-square)](https://www.bithound.io/github/wmakeev/base64encode/master/dependencies/npm)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

> Base64 encoding for node and browser.

base64encode use `btoa` in browser and `Buffer` in node context.

## Install

```
$ npm install @wmakeev/base64encode
```

## Usage

```js
let base64encode = require('@wmakeev/base64encode')

console.log(base64encode('Just a simple string'))
```

## License

[ISC © Vitaliy V. Makeev](../LICENSE)

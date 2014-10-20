serve-markdown
==============

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Gratipay][gratipay-image]][gratipay-url]

serve markdown files

## Install

```sh
$ npm install serve-markdown
```

## API

```js
var serveStatic = require(‘serve-markdown’)
```

### serveStatic(root, options)

Create a new middleware function to serve markdown files from within a given root
directory. The file to serve will be determined by combining `req.url`
with the provided root directory. When a file is not found, instead of
sending a 404 response, this module will instead call `next()` to move on
to the next middleware, allowing for stacking and fall-backs.

## Examples

To be continued..

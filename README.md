serve-markdown
==============

[![NPM Version](http://img.shields.io/npm/v/serve-markdown.svg?style=flat)](https://www.npmjs.org/package/serve-markdown)
[![NPM Downloads](https://img.shields.io/npm/dm/serve-markdown.svg?style=flat)](https://www.npmjs.org/package/serve-markdown)

serve markdown files

## Install

```sh
$ npm install serve-markdown
```

## API

```js
var serveMarkdown = require('serve-markdown')
```

### serveMarkdown(root, options)

Create a new middleware function to serve markdown files from within a given root
directory. The file to serve will be determined by combining `req.url`
with the provided root directory. When a file is not found, instead of
sending a 404 response, this module will instead call `next()` to move on
to the next middleware, allowing for stacking and fall-backs.

#### options

##### template

Optional path to an HTML template. Defaults to a built-in template.

The following tokens are replaced in templates:

* {{title}} the title of the page
* {content} html contents compiled from the markdown file

## Examples

To be continued..

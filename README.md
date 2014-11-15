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

Accept below properties in the options object.

##### template

Optional path to an HTML template. Defaults to a built-in template.

The following tokens are replaced in templates:

* {{title}} the title of the page
* {{content}} html contents compiled from the markdown file

##### title

`{Function | String}` Optional, the return-value/value will be used for replacing the `title` token in the template.  Default to the name of the served file.

* `{Function}` the return value of the function will be used for replacing the `{{title}}` token in the template. The function will be called with one argument: name - the name(`basename`, like `demo.md`) of the served file.
* `{String}` Used as the replacement of the `{{title}}` token of the template


## Examples

```javascript
var connect = require('connect');
var serveMarkdown = require('serve-markdown');

var app = connect();
// serve markdown file
app.use(serveMarkdown('/Users/lizhiye/weekly', {
    title: function (title) {
        // file: /Users/lizhiye/weekly/weekly-report.md
        // title: weekly-report.md
        return title + ' -zhiye'
    }
}));

app.listen(8765);
```

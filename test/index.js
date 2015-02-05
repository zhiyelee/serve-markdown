var connect = require('connect')
  , request = require('supertest')
  , serveMarkdown = require('../')
  , path = require('path')
  , fs = require('fs');

var app;
var root = path.resolve(__dirname, './fixtures/');


describe('Server-markdown', function () {
  describe('title', function () {
    it('title is a string', function (done) {
      var option = {
        template: '{{content}}',
        title: 'test-server'
      };
      app = getApp(app, option);

      request(app)
        .get('/p.md')
        .expect(200, '<p>serve-markdown</p>\n', done)
    });
    it('title is a function', function (done) {
      var option = {
        template: '{{title}}{{content}}',
        title: function (name) {
          return name + '-fun';
        }
      };
      app = getApp(app, option);

      request(app)
        .get('/p.md')
        .expect(200, 'p.md-fun<p>serve-markdown</p>\n', done)
    });
    it('use default title', function (done) {
      var option = {
        template: '{{title}}{{content}}'
      };
      app = getApp(app, option);

      request(app)
        .get('/p.md')
        .expect(200, 'p.md<p>serve-markdown</p>\n', done);
    });
  });

  describe('use path in option', function () {
    it('Both template and style are path', function (done) {
      var option = {
        template: path.resolve(__dirname, './fixtures/template.html'),
        style: path.resolve(__dirname, './fixtures/screen.css')
      };
      app = getApp(app, option);

      var expPath = path.resolve(__dirname, './expected/p.html');
      // trim the \n
      // TODO why the \n
      var expected = fs.readFileSync(expPath, 'utf8')
        .replace(/\n/g, '')
        .replace(/ +/g, ' ');

      request(app)
        .get('/p.md')
        .expect(function (res) {
          res.text
            .replace(/\n/g, '')
            .replace(/ +/g, ' ')
            .should.equal(expected);
        })
        .end(done);
    });
  });
});


function getApp(app, option) {
  app = connect();
  app.use(serveMarkdown(root, option));

  return app;
}

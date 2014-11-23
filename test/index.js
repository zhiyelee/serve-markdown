var connect = require('connect');
var request = require('supertest');
var serveMarkdown = require('../');
var path = require('path');

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
                .expect(200, 'p.md<p>serve-markdown</p>\n', done)
        });
    });
});


function getApp(app, option) {
    app = connect();
    app.use(serveMarkdown(root, option));

    return app;
}

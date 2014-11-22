var connect = require('connect');
var request = require('supertest');
var serveMarkdown = require('../');
var path = require('path');

var app;
var root = path.resolve(__dirname, './fixtures/');


describe('Server-markdown', function () {
    describe('title', function () {
        it('title is a string', function (done) {
            app = connect();
            var option = {
                template: '{{content}}',
                title: 'test-server'
            };

            app.use(serveMarkdown(root, option));

            request(app)
                .get('/p.md')
                .expect(200, '<p>serve-markdown</p>\n', done)
        });
    });
});

const test = require('tape');
const supertest = require('supertest');
const app = require('../src/app');

test('testing endpoint /', (t) => {
  supertest(app)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        /* INSERT TAPE TESTS HERE
        Don't forget to end your test */
        t.error(err, 'No error');
        t.equal(res.type, 'text/html', 'done');
        t.same(res.statusCode, 200, 'Status code is 200');
        t.end();
      });
});

test('testing endpoint /blogs/:id', (t) => {
  supertest(app)
      .get('/blogs/1')
      .expect(200)
      .end(function (err, res) {
        /* INSERT TAPE TESTS HERE
        Don't forget to end your test */
        t.error(err, 'No error');
        t.same(res.statusCode, 200, 'Status code is 200');
        t.end();
      });
});
test.onFinish(() => process.exit(0));

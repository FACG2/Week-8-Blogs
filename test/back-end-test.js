const test = require('tape');

const supertest = require('supertest');
const app = require('../src/app');

test('testing endpoint /facsters', (t) => {
  supertest(app)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        /* INSERT TAPE TESTS HERE
        Don't forget to end your test */
        console.log(res);
        t.equal(err, null, 'should return no error');
        t.equal(Array.isArray(res), true, 'should return Array');
        t.end();
      });
});

test.onFinish(() => process.exit(0));

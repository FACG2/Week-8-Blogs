const test = require('tape');

const pg = require('pg');
const assert = require('assert');

function create_tables (callback) {
  var pool = new pg.Pool({connectionString: process.env.DATABASE_URL});
  pool.connect(function (err, client) {
    assert(!err); // if db connection fails then EXPLODE!!
    var file = require('path').resolve(__dirname + '/../' + '/src/model/Database/db_build.sql');
    var query = require('fs').readFileSync(file, 'utf8').toString();
    // console.log('\n', query);
    client.query(query, function (err, result) {
      if (err) {
        return console.error('error running query', err);
      }
      client.end();
      return callback(err, result);
    });
  });
}

test('Create "users" table in test database', function (t) {
  create_tables(function (err, data) {
    t.error(err, 'No error');
    console.log(data);
    t.equal(data[data.length - 2].command, 'INSERT', 'DB Table Created & Test Data Inserted');
    t.equal(data[5].rowCount, 4, 'Test Data Inserted');
    t.end();
  });
});

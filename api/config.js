let host = 'rethinkdb';
let port = 28015;
let db = 'attendance';

if (process.env.RETHINKDB_URL) {
  const urlTester = /\/\/(.*):(\d{5})/;
  const matches = process.env.RETHINKDB_URL.match(urlTester);
  host = matches[1];
  port = matches[2];
}

exports.host = process.env.RETHINKDB_HOST || host;
exports.port = process.env.RETHINKDB_PORT || port;
exports.db = process.env.RETHINKDB_DB || db;

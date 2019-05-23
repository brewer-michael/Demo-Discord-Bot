var pg = require('pg');

var config = {
  user: process.env.DBUSER,
  database: 'dfdh0vcuqbbj7u',
  password: process.env.DBPWD,
  host: 'ec2-54-235-77-0.compute-1.amazonaws.com',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 50000,
  ssl: true,
};

var pool = new pg.Pool(config);
module.exports = pool;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'univercity',
  /* password: '3131718z', */
  password: '2020',
  port: '5432',
});

module.exports = pool;

const pool = require('../db');

async function getAllDataDB() {
  const client = await pool.connect();
  const sql = `SELECT * FROM users`;
  const data = (await client.query(sql)).rows;
  return data;
}
async function getFullDataDB() {
  const client = await pool.connect();
  const sql = `SELECT name, surname , birth, city, age from users
    INNER JOIN users_info on users.info_id = users_info.id`;
  const data = (await client.query(sql)).rows;
  return data;
}

/* async function deleteDataByIdDB(id){
    const client = await pool.connect();
    const sql_delete = `delete from users_info WHERE id = $1 returning *`;
    const data_deleted = (await client.query(sql_delete, [id])).rows;
    console.log(data_deleted);
    const sql = `SELECT name, surname , birth, city, age from users
    INNER JOIN users_info on users.info_id = users_info.id`;
    const data = (await client.query(sql)).rows;

    return data
} */
async function deleteDataByIdDB(id) {
  const client = await pool.connect();
  const sql1 = `DELETE FROM users WHERE info_id = $1 RETURNING *`;
  const data1 = (await client.query(sql1, [id])).rows;

  const sql2 = `DELETE FROM users_info WHERE id = $1 RETURNING *`;
  const data2 = (await client.query(sql2, [id])).rows;
  //spread
  return { ...data1[0], ...data2[0] };
}
async function createDataDB(name, surname, birth, city, age) {
  const client = await pool.connect();
  const sql1 = `insert into users_info( birth, city, age) values ($1, $2, $3) returning *`;
  const result1 = (await client.query(sql1, [birth, city, age])).rows;

  const sql2 = `insert into users(name, surname, info_id) values($1, $2, $3 ) returning *`;
  const result2 = (await client.query(sql2, [name, surname, result1[0].id])).rows;

  return { ...result1[0], ...result2[0] };
}

async function updateDataByIdDB(id, name, surname, birth, city, age) {
  const client = await pool.connect();
  const sql1 = `UPDATE users SET name=$1, surname=$2 WHERE info_id = $3 returning *`;
  const result1 = (await client.query(sql1, [name, surname, id])).rows;

  const sql2 = ` UPDATE users_info SET birth=$1, city=$2, age=$3 WHERE id = $4 returning *`;
  const result2 = (await client.query(sql2, [birth, city, age, id])).rows;
  //spread
  return { ...result1[0], ...result2[0] };
}

async function getDataByIdDB(id) {
  const client = await pool.connect();
  const sql = `SELECT * from users JOIN users_info ON users_info.id = users.info_id WHERE users_info.id = $1`;
  const result = (await client.query(sql, [id])).rows;
  return result;
}

module.exports = { getAllDataDB, getFullDataDB, deleteDataByIdDB, createDataDB, updateDataByIdDB, getDataByIdDB };

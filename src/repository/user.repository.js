const pool = require("../db");

async function getAllDataDB(){
    const client = await pool.connect();
    const sql = `SELECT * FROM users`;
    const data = (await client.query(sql)).rows
    return data
}
async function getFullDataDB(){
    const client = await pool.connect();
    const sql = `SELECT name, surname , birth, city, age from users
    INNER JOIN users_info on users.info_id = users_info.id`;
    const data = (await client.query(sql)).rows
    return data
}

module.exports = {getAllDataDB, getFullDataDB}
const pool = require("../db");

async function getAllDataDB(){
    const client = await pool.connect();
    const sql = `SELECT * FROM users`;
    const data = (await client.query(sql)).rows
    return data
}

module.exports = {getAllDataDB}
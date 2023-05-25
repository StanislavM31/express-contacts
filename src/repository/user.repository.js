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

async function deleteByIdDB(id){
    const client = await pool.connect();
    const sql_delete = `delete from users_info WHERE id = $1`;
    const data_deleted = (await client.query(sql_delete, [id])).rows;
    console.log(data_deleted);
    const sql = `SELECT name, surname , birth, city, age from users
    INNER JOIN users_info on users.info_id = users_info.id`;
    const data = (await client.query(sql)).rows;

    return data
}


module.exports = {getAllDataDB, getFullDataDB, deleteByIdDB}
const {getAllDataDB} = require("../repository/user.repository")

async function getAllData(){
    const data = await getAllDataDB();
    return data;
}

module.exports = {getAllData}
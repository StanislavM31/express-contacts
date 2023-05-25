const { getAllDataDB, getFullDataDB, deleteByIdDB } = require("../repository/user.repository");

async function getAllData() {
  const data = await getAllDataDB();
  return data;
}
async function getFullData(){
    const data = await getFullDataDB();

    let data_new = data.map(el=>{
        let obj = el;
        let temp = (el.birth).toString().slice(4,15).replaceAll(" ", "-");
        obj.birth = temp;
        return obj;
    })
    return data_new;
}

async function deleteById(id){
    const data = await deleteByIdDB(id);
    return data;
}

module.exports = { getAllData, getFullData, deleteById };

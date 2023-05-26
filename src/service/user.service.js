const { getAllDataDB, getFullDataDB, deleteDataByIdDB, createDataDB, updateDataByIdDB, getDataByIdDB } = require('../repository/user.repository');

async function getAllData() {
  const data = await getAllDataDB();
  return data;
}
async function getFullData() {
  const data = await getFullDataDB();

  let data_new = data.map(el => {
    let obj = el;
    let temp = el.birth.toString().slice(4, 15).replaceAll(' ', '-');
    obj.birth = temp;
    return obj;
  });
  return data_new;
}

async function deleteDataById(id) {
  const data = await deleteDataByIdDB(id);
  return data;
}

async function createData(name, surname, birth, city, age) {
  const data = await createDataDB(name, surname, birth, city, age);
  return data;
}
async function updateDataById(id, name, surname, birth, city, age) {
  const data = await updateDataByIdDB(id, name, surname, birth, city, age);
  return data;
}
async function getDataById(id) {
  const data = await getDataByIdDB(id);
  return data;
}

module.exports = { getAllData, getFullData, deleteDataById, createData, updateDataById, getDataById };

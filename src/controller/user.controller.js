const express = require('express');
const { getAllData, getFullData, deleteDataById, createData, updateDataById, getDataById } = require('../service/user.service');
const {isValidUserId, isValidUserBody} = require("../helper/validation");
const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const data = await getAllData();
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});
route.get('/data', async (req, res) => {
  try {
    const data = await getFullData();
    console.log(data);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

route.delete('/:id', isValidUserId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteDataById(id);
    res.send(data);
  } catch (error) {
    res.send('ошибка при удалении');
  }
});

route.post('/', isValidUserBody,async (req, res) => {
  try {
    const { name, surname, birth, city, age } = req.body;
    const data = await createData(name, surname, birth, city, age);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
route.put('/:id', isValidUserBody, isValidUserId,  async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, birth, city, age } = req.body;
    const data = await updateDataById(id, name, surname, birth, city, age);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
route.get('/:id', isValidUserId,async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getDataById(id);
    console.log(data);
    res.send(data);
  } catch (error) {
    res.send('ошибка получения по id');
  }
});

module.exports = route;

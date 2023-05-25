const express = require("express");
const {getAllData, getFullData, deleteById} = require("../service/user.service")
const route = express.Router();

route.get("/", async (req,res)=>{
    try {
        const data = await getAllData();
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})
route.get("/data", async(req,res)=>{
    try{
        const data = await getFullData();
        console.log(data);
        res.send(data);
    } catch(error){
        res.send(error.message);
    }
})

route.delete("/:id", async (req,res)=>{
    try {
        const{id} = req.params;
        const data = await deleteById(id);
        res.send(data);
    } catch (error) {
        res.send("ошибка при удалении");
    }
})

module.exports = route;
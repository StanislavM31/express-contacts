const express = require("express");
const {getAllData, getFullData} = require("../service/user.service")
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
        res.send(data);
    } catch(error){
        res.send(error.message);
    }
})

module.exports = route;
const { log } = require("console");
const express = require("express");
const app = express();
const db = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/spare_room";

main().then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    await db.connect(MONGO_URL);
}


app.listen(8080, ()=>{
    console.log("server listening on port 8080");
})
app.get("/",(req,res)=>{
res.send("hi");
})

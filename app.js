
const express = require("express");
const app = express();

const db = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/spare_room";


const list = require("./list");


async function main(){
    await db.connect(MONGO_URL);
}

main().then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})

app.get("/",(req,res)=>{
    res.send("hi");
    })

    app.get("/test", async (req, res) => {
        try {
          const Tlist = new List({
            list: "Apartment",
            image: "https://example.com/flat.jpg",
            title: "Cozy Flat in Oxford",
            address: "123 Oxford Street",
            price: 1200
          });
      
          await Tlist.save(); // ✅ properly await the save
          res.send("Test listing saved!");
        } catch (err) {
          console.error(err);
          res.status(500).send("Error saving listing");
        }
      });
      
      // Start server
      app.listen(8080, () => {
        console.log("🚀 Server listening on port 8080");
      });
      
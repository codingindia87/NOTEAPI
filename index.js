const express = require("express");
const userRouters = require("./src/routes/userRouters");
const noteRouters = require("./src/routes/noteRouters");
const mongoose = require("mongoose");
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/users",userRouters);
app.use("/note",noteRouters);

const PORT = process.env.PORT || 5000


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Server startd on port on: " + PORT);
    })
}).catch((error)=>{
    console.log(error);
})

console.log("hello")

app.get("/",(req,res)=>{
    res.send("Ok")
})



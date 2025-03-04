const express = require("express");
const userRouters = require("./routes/userRouters");
const noteRouters = require("./routes/noteRouters");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")

const dotenv = require("dotenv")

dotenv.config();

app.use(express.json());

app.use(cors());

app.use("/users",userRouters);
app.use("/note",noteRouters);

mongoose.connect(process.env.MONGO_URL)

console.log("hello")

const PORT = process.env.PORT || 5000
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Server startd on port on: " + PORT);
    })
})
.catch((error)=>{
    console.log(error);
})


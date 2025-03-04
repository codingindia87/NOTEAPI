const express = require("express");
const { signup, signin } = require("../controllers/userController");
const userRouters = express.Router();

userRouters.post("/signup",signup);

userRouters.post("/signin",signin);

module.exports = userRouters;
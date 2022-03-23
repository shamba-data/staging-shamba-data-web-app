const express = require("express");
const app = express()
const mongoose = require("mongoose");
require("dotenv").config();
//db connection
//json use
app.use(express.json)

const PORT = 8000

app.listen(8000, ()=> console.log(`listening on port:${PORT}`) )


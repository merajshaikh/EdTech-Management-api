const express = require("express");
const connectDB = require("./utils/conn.util");
const userdb = require("./utils/model/user.md");
const http = require('http');

const PORT = process.env.PORT || 3000;
const app = express();

// connection db function calling from conn
// connect mongo server
connectDB()


app.use(express.json());


app.use('/', require('./router'));

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
    // console.log(scopes.SCHOOL_GET)
})
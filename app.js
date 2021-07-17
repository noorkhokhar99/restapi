const express = require('express');
const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 5000;
const app = express();

//api
const server = http.createServer((req,res) => {
if(req.url == "/users"){
    fs.readFile(`${__dirname}/userapi/db.json`, "utf-8", (err, data) => {
      console.log(data)
    })
};


})
server.listen(port, () => {
    console.log(`hello ${port}`)
    // fs.readFile(`${__dirname}/userapi/user.json`, "utf-8", (err, data) => {
    //     console.log(data)
    //   })
    

});
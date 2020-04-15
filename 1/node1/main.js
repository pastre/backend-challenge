const PORT = process.env.PORT || 5000;
const INDEX = '/index.html';
const express = require('express')
const server = express()

const http = require('http'); 

server.get("/asd", (a, b, c) => {
    b.json(["Orange","Apple","Watermellon"]);
} );


server.listen(PORT, () => console.log(`Listening on ${PORT}`));
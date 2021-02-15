const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.end();
    }).listen(3000, () => {
        console.log('Is listening on port: 3000')
    })
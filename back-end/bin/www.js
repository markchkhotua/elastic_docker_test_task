'use strict';
require('babel-register')();
require('babel-polyfill');

const start = Date.now();
const server = require('../index');
const PORT = process.env.PORT || 8800;

server.listen(PORT, () => {
    const end = Date.now();
    console.log(`Server listening on: ${PORT}. Started in ${end - start}ms.`);
    console.log(`http://localhost:${PORT}`);
});




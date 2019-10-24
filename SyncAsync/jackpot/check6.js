const get6 = require('./get6');
const pick6 = require('./pick6');

get6(800)
    .then(data => { console.log(data); console.log(pick6) });
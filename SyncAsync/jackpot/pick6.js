const _ = require('underscore');
const numbers = _.range(1, 46); //1이상 46미만, 랜덤수

// const pick6 = _.sample(numbers, 6).sort();
// console.log(pick6);
// module.exports = pick6;
module.exports = _.sample(numbers, 6).sort((a, b) => a - b);
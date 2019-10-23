const addNumbers = (a, b, c, d, e) => {
    const numbers = [a, b, c, d, e];
    return numbers.reduce((acc, num) => (acc += num), 0);
}

const addAll = (...numbers) => {
    console.log(numbers);
    return numbers.reduce((acc, num) => (acc += num), 0);
}

console.log(addAll(1, 2, 3, 4));

const defaultColors = ["red", "blue", "yellow"];
const addedColors = ["orange", "green"];

const allColor = defaultColors.concat(addedColors);
const es6AllColor = [...defaultColors, ...addedColors];
console.log(es6AllColor);

// 실제로는?
function test() {
    console.log(arguments) //예약어, test("a","b","C");  -->> [Arguments] { '0': 'a', '1': 'b', '2': 'C' }
    console.log(...arguments) //예약어, test("a","b","C");  -->> a b C
}
// test("a","b","C");

function logging(a,b) {
    [a,b, ...rest] =arguments;
    console.log(rest);
}
logging(1,2,3,4,5);
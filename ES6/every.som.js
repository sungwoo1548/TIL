const computers = [
    { name: "mac-air", ram: 8 },
    { name: "gram", ram: 4 },
    { name: "mac-pro", ram: 16 },
];


// es5
let everyComputerAvailable = false;
let someComputerAvailable = false;

for (var i = 0; i < computers.length; i++) {
    const computer = computers[i];

    if (computer.ram < 8) {
        everyComputerAvailable = false;
    }
    if (computer.ram > 8) {
        someComputerAvailable = true;
        break;
    }
}

console.log(everyComputerAvailable);
console.log(someComputerAvailable);


// es6
everyComputerAvailable = computers.every(el => el.ram > 8);
someComputerAvailable = computers.some(el => el.ram > 8);

console.log(everyComputerAvailable);
console.log(someComputerAvailable);


// 실제로는
const data = [
    { name: "ksw", answer: "you pork" },
    { name: "aaa", answer: "" },
    { name: "bbb", answer: "great!!" },
];
// 모두 답변했는가? 검증
const everyUserAnswered = data.every(el => el.answer.length > 0);


// 실습 1
const users = [
    { id: 1, submit: true },
    { id: 2, submit: true },
    { id: 3, submit: false },
    { id: 4, submit: true },
];

// 모든사람이 제출 했나요?
const everyUserSubmited = users.every(el => el.submit == true);   // el=>el.submit 만 적어도 됨.
console.log(everyUserSubmited ? "yse" : "no");
// 한명이라도 제출 했나요?
const someUserSubmited = users.some(el => el.submit == true);
console.log(someUserSubmited ? "yse" : "no");


// 실습 2
// some 함수 직접 만들기  some(users,el=>el.submit == true);
function some(arr, callback) {
    //여기 채우기
    // 로직 1명이라도 제출했나요? = 모두 제출함

}
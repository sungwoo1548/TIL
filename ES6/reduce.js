// 합 구하기
const numbers = [10, 20, 30];

// es5 
let sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    // = sum = sum + numbers[i];
}

// es 6
let sum2 = numbers.reduce((acc, numbers) => {   // acc 누적 ; accumulate
    return acc + numbers;
}, 0); // 여기서 0은 초기값.

let multiply = numbers.reduce((acc, number) => { return acc * number }, 1);

const strings = ["apple", "is", "good"];

const summed = strings.reduce((acc, str) => (acc + " " + str), "");
console.log(summed);

// map 함수 구현하기
const dNumbers = numbers.map(e => e * 2);
// reduce이용
let ddNumbers = numbers.reduce((acc, number) => {
    acc.push(number * 2);
    return acc;
}, []);
console.log(ddNumbers);


// 실제로 ?
/*
올바르게 닫힌 괄호 :(((()))),()(),((()()))
올바르게 닫히지 않은 괄호 : ((()))()), (, (((), 등
*/

function isGoodParense(string) {
    return !string.split("").reduce((acc, char) => {
        if (acc < 0) {
            return acc;
        } else if (char === "(") {
            ++acc;
        } else {
            --acc;
        }
        return acc;
    }, 0);
}


// 실습 
const 참석자 = [
    { id: 1, type: "standing" },
    { id: 2, type: "sitting" },
    { id: 3, type: "sitting" },
    { id: 4, type: "standing" },
    { id: 5, type: "sitting" },
];

// reduce 사용 서있는 사람 ///  앉아있는 사람 구별
function isStanding(arr) {
    return arr.reduce((acc, arr) => {
        if (arr.type === "standing") {
            ++acc;
        }
        return acc
    }, 0);
}
function isSitting(arr) {
    return arr.reduce((acc, arr) => {
        if (arr.type === "sitting") {
            ++acc;
        }
        return acc
    }, 0);
}
console.log("서 있는 사람은 ", isStanding(참석자), "명 입니다.");
console.log("앉아 있는 사람은 ", isSitting(참석자), "명 입니다.");


// 실습 2
// unique를 만들어봅시다.

const samples = [10, 20, 30, 40, 10, 50, 20];
// const result = unique(samaples);
// 중복 값 제거

function unique(arr) {
    return arr.reduce((acc, el) => {
        if (!acc.find(accEl => accEl === el)) {
            acc.push(el);
        }
        return acc;
    }, []);
}

console.log(unique(samples));
const products = [
    { name: "banana", type: "fruit" },
    { name: "carrot", type: "vegetable" },
    { name: "apple", type: "fruit" },
    { name: "egg", type: "food" },
    { name: "yogurt", type: "food" },
];

const fruits = [];
// type이 fruit 인 것들만 추출

// es5
for (var i = 0; i < products.length; i++) {
    if (products[i].type === "fruit") {
        fruits.push(products[i]);
    }
};
console.log('fruits :', fruits);

// es6
const foods = products.filter((el) => {
    return el.type === "food" // 참 일때, el 반환
});

console.log('foods: ', foods);


// 실제라면,,,
const comments = [
    { id: 0, author: "ksw", contents: "김성우 입니다." },
    { id: 1, author: "ksw", contents: "블라블라" },
    { id: 2, author: "ljh", contents: "이재훈 입니다." },
    { id: 3, author: "jwr", contents: "조우리 입니다." },
    { id: 4, author: "hby", contents: "황병윤 입니다." },
]
// ksw 가 쓴 것들은?
const ksw = comments.filter(comments => comments.author === 'ksw');
console.log("ksw's contents : ", ksw);


// 실습 1
const numbers = [1, 2, 3, 4, 5, 6, 10, 54, 25, 330, 220, 5];

// filter를 사용 10~100사이의 숫자만 추출
const lowNumber = numbers.filter((number) => {
    return (number > 10 && number < 100)
})
console.log("lowNumber : ", lowNumber);

// 삼항연산자 사용 : 조건 ? 참일경우 : 거짓일 경우
const lowNumber2 = numbers.filter(numbers => numbers > 10 && numbers < 100 ? true : false)
console.log("lowNumber2 : ", lowNumber2);

// 실습 2
// filter를 사용하여 reject 함수 만들기
// reject 함수는 filter와 완전히 반대 작용.
// reject(numbers,el=>el>10) : 10이하만 만 나옴
function reject(arr, callback) {
    return (
        arr.filter(el => {
            return callback(el) ? false : true
        })
    )
}

console.log(reject(numbers, el => el > 10));

// dotFunction 만들기   arr.selectedReject(callback);
Array.prototype.selectedReject = function (callback) {
    if (!callback) throw new Error("must need callback function")
    const result = [];
    for (var i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result
}
console.log('test Function : ', numbers.selectedReject(e => e > 10));
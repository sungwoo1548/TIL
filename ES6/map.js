const numbers = [1, 2, 3];
const dNumbers = [];

// numbers의 인자에 2를 곱해 dNumbers에 입력.
// es5
for (var i = 0; i < numbers.length; i++) {
    dNumbers.push(numbers[i] * numbers[i]);
}

// numbers의 인자에 3을 곱해 dNumbers에 입력.
// es6
const tNumbers = numbers.map(numbers => numbers * 3);
console.log(tNumbers);

// map 의 활용
// const data =[3,5,7,9];

// data.map(e=>{
//     return(<h1>{e}</h1>);
// });
// 결과:
// <h1>3</h>
// <h1>5</h>
// <h1>7</h>
// <h1>8</h>

// 실습 1
const images = [
    { h: 10, w: 20 },
    { h: 5, w: 5 },
    { h: 20, w: 30 },
];
//높이만 담는 height 배열 만들기 [10,5,20]
const height = images.map((el) => {
    return el.h
});
console.log(height);


// 실습 2 plunk (arr,key) ; 원하는 키값에 해당하는 값만 추출
function pluck(arr, key) {
    // 함수 작성
    if (!Array.isArray) throw new Error("배열이 아님.")
    return arr.map(el => el[key]);
}
const result = pluck(images, 'w');
console.log(result);
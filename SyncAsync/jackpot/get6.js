// const http = require('http'); // node 기본 모듈, https 호출이 안됨 ㅠㅠ 그래서 request 모듈 사용
const request = require('request');


function getLottoData(drwNo) {
    const url = `https://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`;

    return new Promise((resolve, reject) => {
        request.get(url, (err, res, body) => {
            const lottoData = JSON.parse(body);

            const realNumbers = [];
            let bnusNo = 0;

            for (const [key, value] of Object.entries(lottoData)) {  // json 형태의 자료에서 key와 value 값을 나눔.
                if (key.includes('drwt')) { realNumbers.push(value); }
                else if (key === "bnusNo") { bnusNo = value; }
                realNumbers.sort((a, b) => a - b);
            }
            resolve({ bnusNo, realNumbers })
        })
    });
}

module.exports = getLottoData;


// 위에서 사용된 문법 들
// const obj = {
//     name: "kim",
//     gender: "male",
// }
// console.log(Object.entries(obj)); // [ [ 'name', 'kim' ], [ 'gender', 'male' ] ]


// const arr = ["apple","banana","orange"];
// for (const fruit of arr){
//     console.log(fruit);
// }

// const arr2 = [['name', 'kim'], ['gender', 'male']];
// for (const Result of arr2) {
//     console.log(Result);
// }
// for (const [key, value] of arr2) {
//     console.log(key);
//     console.log(value);
// }
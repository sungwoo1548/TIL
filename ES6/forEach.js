// es5
const colors = ["red", "blue", "yellow"];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// es6
colors.forEach(element => console.log(element));


//실습
function forEach(arr, callback) {
    // es6 답과 같은 결과 나오게 코딩.
    if (!Array.isArray(arr)) throw new Error("배열이 아닙니다.")
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
// es6 답
forEach(colors, (e) => console.log(e));

//실습2
const images = [
    { h: 10, w: 20 },
    { h: 5, w: 5 },
    { h: 20, w: 30 },
];

const area = [];
// images.forEach 를 사용 ->  area =[200,25,600]; 면적 배열 이 나오게

images.forEach(element => {
    area.push(element.h * element.w);
});

console.log(area);
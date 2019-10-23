// const name = "sungwoo";

// name = "kim";    // 상기의 const로 선언된 name은 상수로 취급하여 내용을 변경 할 수 없음
                    // TypeError: Assignment to constant variable.


const obj = {           // obj 는 -> memory 주소를 가르키고 있음. const는 메모리 주소를 변경을 금지함...
    name: "sungwoo",
    gender: "male"
};

obj.name = "test";

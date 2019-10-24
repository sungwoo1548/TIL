function foo(){
    console.log("[1]hello!!!");
}
function bar(){
    foo();
    console.log("[2]hi!!!");
}
function hoo(){
    bar();
    console.log("[3]kekekhello!!!");
}

console.log("Start!!");
hoo();
console.log("end..");

// 결과
// Start!!
// [1]hello!!!
// [2]hi!!!
// [3]kekekhello!!!
// end..

// 동기 처리란,,,
// Call Stack 구조, (메모리) 에 
// 처리할 것들을 쌓고, 나중에 쌓인 것을 순서대로 꺼내서 실행
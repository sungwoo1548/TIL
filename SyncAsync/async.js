console.log("hello");
setTimeout(() => {
    console.log("API 호출~~~");
}, 2000);
console.log("END");


// 비동기
// call stack : main() > console(hello) > setTimeout > console(end)              
//                                             ↓                                      
//                                        WebAPI 할당 ------(조건 수행 후)----> Queue 에 등록 ----(이벤트 루프가 확인 후) --> 콜스택에 넣음.
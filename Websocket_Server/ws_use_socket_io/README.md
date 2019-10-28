# 소켓 서버 연습 2

* socket.io 설치
> npm i socket.io

* 여기서 클라는 ws://localhost 대신 http://localhost 사용
* socket.io는 처음에 폴링 방식으로 연결하고, 가능한 브라우저면 웹소켓으로 업그레이드함.
* 처음부터 웹소켓만 쓰고 싶다면, 
> index.ejs에서 
> var socket = io.connect("http://localhost:3000",{
    path:"/socket.io",
    transports:["websocket"] // 여기 설정해주면됨.
})
const SocketIO = require("socket.io");

module.exports = (server) => {
    const io = SocketIO(server, { path: "/socket.io" });

    let room = ['room1', 'room2'];
    let a = 0;
    
    io.on('connection', (socket) => {
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });


        socket.on('leaveRoom', (num, name) => {
            socket.leave(room[num], () => {
                console.log(name + ' leave a ' + room[num]);
                io.to(room[num]).emit('leaveRoom', num, name);
            });
        });


        socket.on('joinRoom', (num, name) => {
            socket.join(room[num], () => {
                console.log(name + ' join a ' + room[num]);
                io.to(room[num]).emit('joinRoom', num, name);
            });
        });


        socket.on('chat message', (num, name, msg) => {
            a = num;
            io.to(room[a]).emit('chat message', name, msg);
        });
    });



    /** 네임스페이스
     * const nsp1 = io.of("/namespace1");
        nsp1.on("connection", (socket) => {
            const req = socket.request;
            const ip = req.headers["x-forward-for"] || req.connection.remoteAddress;
            console.log("nsp1에 새로운 클라이언트 접속", ip, socket.id);
            nsp1.emit('news', { hello: "Someone connected at namespace1" });
        });
    
        const nsp2 = io.of("/namespace2");
        nsp2.on("connection", (socket) => {
            const req = socket.request;
            const ip = req.headers["x-forward-for"] || req.connection.remoteAddress;
            console.log("nsp2에 새로운 클라이언트 접속", ip, socket.id);
            nsp2.emit('news', { hello: "Someone connected at namespace2" });
        });
     */


    // io.on("connection", (socket) => {
    //     const req = socket.request;
    //     // console.log("요청 받은 정보 : ", req);
    //     const ip = req.headers["x-forward-for"] || req.connection.remoteAddress;
    //     console.log("새로운 클라이언트 접속", ip, socket.id);

    //     socket.on("disconnect", () => {
    //         console.log("클라이언트 접속 해제", ip, socket.id);
    //         // clearInterval(socket.interval);
    //     });
    //     socket.on("error", (error) => {
    //         console.error(error);
    //     });
    //     // socket.on("reply", (data) => {
    //     //     console.log(data);
    //     // });
    //     socket.on("cli chat message", (data) => {
    //         console.log(data);
    //         socket.emit("serv msg",socket.id+"가 보낸 말 : "+data);
    //     });
    //     // socket.interval = setInterval(() => {
    //     //     socket.emit("news", "Hello Socket.io");
    //     // }, 3000);
    // });
}
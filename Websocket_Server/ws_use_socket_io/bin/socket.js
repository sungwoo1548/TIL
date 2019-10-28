const SocketIO = require("socket.io");

module.exports = (server) => {
    const io = SocketIO(server, { path: "/socket.io" });

    io.on("connect", (socket) => {
        const req = socket.request;
        console.log("요청 : ", req);
        const ip = req.headers["x-forward-for"] || req.connection.remoteAddress;
        console.log("새로운 클라이언트 접속", ip, socket.id);

        socket.on("disconnect", () => {
            console.log("클라이언트 접속 해제", ip, socket.id);
            clearInterval(socket.interval);
        });
        socket.on("error", (error) => {
            console.error(error);
        });
        socket.on("reply", (data) => {
            console.log(data);
        });
        socket.interval = setInterval(() => {
            socket.emit("news", "Hello Socket.io");
        }, 3000);
    });


}
const express = require("express");
const app = express();

// DBdata
const users = [
    { id: "ksw", name: "성우", password: "1234" },
    { id: "ljh", name: "재훈", password: "4321" },
];

const session = [];
let sessionCount = 0;

app.use(express.json());

app.post("/login", (req, res) => {
    const { id, password } = req.body;
    const user = users.find(u => {
        if (u.id === id && u.password === password) return true;
        return false;
    });

    if (user) {
        const userSession = {
            id,
            start: new Date(),
            sessionCount
            // end: this.start + 1 * 60 * 1000
        };
        res.send(sessionCount.toString());
        sessionCount++;
        session.push(userSession);
    } else {
        res.send("아이디나, 비밀번호를 확인하세요.");
    }
});

app.get("/my/:sc", (req, res) => { // 사용자 인증이 필요한 작업
    if (req.params.sc) {
        const userSession = session.find(el => el.sessionCount === parseInt(req.params.sc));

        if (userSession) {
            res.send(userSession.id+"님의 개인정보")
        } else {
            res.send("다시 로그인 해주세요.");
        }
    } else {
        res.send("다시 로그인 해주세요.");
    }
});



app.listen(3000, () => console.log("서버 가동중... prot:3000"));
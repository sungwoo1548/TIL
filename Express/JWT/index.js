const express = require("express");
const jwt = require("jsonwebtoken");

const users = require("./users");
const verifyToken = require("./verifyToken")
// json token 사용한 로그인 인증


// server
const app = express();

// middle ware
app.use(express.json());

app.post("/login", (req, res, next) => {
    const { email, password } = req.body
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        res.json({ error: "check your email or password" });
        return;
    }

    const secretKey = process.env.TOKEN_KEY || "secret";
    const token = jwt.sign(
        { id: user.id, name: user.name, email: user.email },
        secretKey,
        { expiresIn: "1m" } // 1분,
    );
})
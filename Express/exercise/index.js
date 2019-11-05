const express = require("express");

const app = express();

app.use(express.json());

const data = [
    { id: 1, name: "sungwoo", email: "ksw@email.com", birthDay: "1988-05-05" },
]

app.get("/", (req, res) => {
    console.log("hi");
    res.send("hello!")
});
app.get("/api/users", (req, res) => {
    res.json(data);
})

app.post("/api/newuser", (req, res) => {

    const newUser = {
        id: data.length + 1,
        name: req.body.name,
        email: req.body.email,
        birthDay: req.body.birthDay
    }
    data.push(newUser);
    res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Server Listen on port ${port}.....`));


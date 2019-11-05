const express = require("express");
const Joi = require("@hapi/joi");

const app = express();

app.use(express.json());

const data = [
    { id: 1, name: "sungwoo", email: "ksw@email.com", birthDay: "1988-05-05" },
]

//Joi ; 입력값 검증 schema
function validate(inputObject) {
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        email: Joi.string().email(),
        birthDay: Joi.date()
    })
    return schema.validate(inputObject)
}

app.get("/", (req, res) => {
    console.log("hi");
    res.send("hello!")
});
app.get("/api/users", (req, res) => {
    res.json(data);
})

app.post("/api/newuser", (req, res) => {
    const { value, error } = validate(req.body);
    if (error) {
        res.send(error.details[0].message);
        return;
    }

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


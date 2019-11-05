const express = require("express");
const Joi = require("@hapi/joi");
const helmet = require("helmet");
const app = express();

app.use(helmet()); // 상단에 선언해야함
app.use(express.json());

const courses = [
    { id: 1, name: "happy hacking!" },
    { id: 2, name: "real artist ship@" },
    { id: 3, name: "see the invisible~", email: "hphk@email.com" },
];

function getCourseById(id) {
    const courseId = parseInt(id);
    return courses.find(el => el.id === courseId);
}

function validate(input) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(10).alphanum().required(),
        email: Joi.string().email(),
    });

    return schema.validate(input);
}

app.get("/", (req, res) => {
    res.send("해피해킹 입니다.");
});
app.get("/api/courses", (req, res) => {
    res.send(courses);
});
app.get("/api/courses/:id", (req, res) => {    // .../api/courses/2 
    const course = getCourseById(req.params.id);
    if (!course) {
        res.status(404).send("해당 course가 없습니다.");
    } else {
        res.send(course);
    }
});
app.post("/api/course", (req, res) => {
    const { value, error } = validate(req.body);
    if (error) {
        res.send(error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    courses.push(course);
    res.send(course);

});
app.patch("/api/course", (req, res) => {  // put은 한가지 요소, patch 일부 수정
    const course = getCourseById(req.params.id);
    if (!course) {
        res.send("해당하는 데이터가 없습니다");
    } else {
        const name = req.body.name;
        course.name = name;
        res.send(course);
    }
});
app.delete("/api/course", (req, res) => {
    const course = getCourseById(req.params.id);
    if (!course) {
        res.send("해당하는 데이터가 없습니다");
    } else {
        const index = courses.indexOf(course);
        courses.splice(index, 1);
        res.send(course);
    }
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Server Listen on port ${port}.....`));
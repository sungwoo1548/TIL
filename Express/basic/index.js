const express = require("express");
const app = express();

const courses = [
    { id: 1, name: "happy hacking!" },
    { id: 2, name: "real artist ship@" },
    { id: 3, name: "see the invisible~" },
];

app.get("/", (req, res) => {
    res.send("해피해킹 입니다.");
});

app.get("/api/courses", (req, res) => {
    res.send(courses);
});
app.get("/api/courses/:id", (req, res) => {
    console.log(req.params.id);
    const id =parseInt(req.params.id);
    const course = courses.find(el => el.id === id);
    if(!course){
        res.status(404).send("해당 course가 없습니다.");
    }
    res.send(course);
});
app.post("/api/course",(req,res)=>{

});

app.listen(3000, () => console.log("Server Listen on port 3000....."));
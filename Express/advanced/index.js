const express = require("express");
const mongoose = require("mongoose");
const app = express();

// middle ware =====================================

app.use((req, res, next) => { // custom
    mongoose.connect("mongodb://localhost/express-advanced", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }).then(() => {
        console.log("db connented!!!!")
        next();
    }).catch(error => next(error));//에러를 다음 기능한테 던짐
});
app.use(express.json());

app.use("/api/user", require("./routes/user"));
app.use("/api/article", require("./routes/article"));

app.use(() => {
    mongoose.disconnect().then(() => { console.log("db 연결해제...") });
});
// ==================================================

app.listen(3000, () => console.log("서버 구동중..."));
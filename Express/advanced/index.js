const express = require("express");
const app = express();

// middle ware =====================================
app.use(express.json());

app.use("/api/user", require("./routes/user"));
app.use("/api/article", require("./routes/article"));
// ==================================================

app.listen(3000, () => console.log("서버 구동중..."));
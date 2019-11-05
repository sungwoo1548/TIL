const express = require("express");
const router = express.Router();

const users = [
    { id: 1, name: "Song" },
    { id: 2, name: "LEE" },
    { id: 3, name: "KIM" },
];


router.get("/", (req, res) => {
    res.send(users);
});

module.exports = router;
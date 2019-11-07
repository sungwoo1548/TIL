const express = require("express");

const { Users, validateUser } = require("../models/users");
const router = express.Router();

const wrapper = require("../common/wrapper");  // try catch// 오류처리 함수

router.get("/", wrapper(async (req, res, next) => {
    const users = await Users.find();
    res.send(users);
    next();
}));

router.get("/:id", wrapper(async (req, res, next) => {
    const user = await Users.findById(req.params.id);
    res.send(user)
    next();
}));

router.post("/", wrapper(async (req, res, next) => {
    if (validateUser(req.body).error) {
        res.status(400).send("잘못된 요청입니다.");
        next();
        return;
    }

    const user = new Users({
        name: req.body.name
    });

    const result = await user.save();
    res.status(200).send(result);
    next();
}));

module.exports = router;
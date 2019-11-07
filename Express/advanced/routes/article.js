const express = require("express");
const router = express.Router();
const { Article, validateArticle } = require("../models/articles");
const { Users } = require("../models/users");

const wrapper = require("../common/wrapper");  // try catch// 오류처리 함수

router.get("/", wrapper(async (req, res, next) => {
    const result = await Article.find().populate("author");
    res.send(result);
    next();
}));

router.get("/:id", wrapper(async (req, res, next) => {
    const article = await Article.findById(req.params.id).populate("author");
    res.send(article);
    next();
}));

router.post("/", wrapper(async (req, res, next) => {
    if (validateArticle(req.body).error) {
        res.status(400).send("양식에 맞는 입력이 아닙니다.");
        next();
        return;
    }

    const { title, author, contents } = req.body;
    const article = new Article({ title, author, contents });

    const result = await article.save();
    const user = await Users.findById(author);
    user.articles.push(article._id);
    await user.save();

    res.status(200).send(result);
    next();
}));


module.exports = router;
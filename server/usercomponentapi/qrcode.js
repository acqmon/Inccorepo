const express = require("express");
const db = require("../configure/database");

const usercode = express.Router();

usercode.get("/", (req, res) => {
    const insertdata = "select * from user";
    db.query(insertdata, (error, result) => {
        res.send(result);
    });
});

module.exports = usercode;
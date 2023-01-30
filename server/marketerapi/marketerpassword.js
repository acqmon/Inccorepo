const express = require("express");
const db = require("../configure/database");
const bcrypt = require("bcrypt");


const marketerpassword = express.Router();
const saltRounds = 10;

marketerpassword.put("/", (req, res) => {
    const password = req.body.password;
    const marketerid = req.body.marketerid;

    bcrypt.hash(password, saltRounds, (error, hash) => {
        const insertpassword = "update marketer set password = ? where marketerid = ?";
        db.query(insertpassword, [hash, marketerid], (error, result) => {
            res.send(result);
        });
    });
});

module.exports = marketerpassword;
const express = require("express");
const db = require("../configure/database");
const bcrypt = require("bcrypt");


const userpassword = express.Router();
const saltRounds = 10;

userpassword.put("/", (req, res) => {
    const password = req.body.password;
    const userid = req.body.userid;

    bcrypt.hash(password, saltRounds, (error, hash) => {
        const insertpassword = "update user set password = ? where userid = ?";
        db.query(insertpassword, [hash, userid], (error, result) => {
            res.send(result);
        });
    });
});

module.exports = userpassword;
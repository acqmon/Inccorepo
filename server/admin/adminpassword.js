const express = require("express");
const db = require("../configure/database");
const bcrypt = require("bcrypt");


const adminpassword = express.Router();
const saltRounds = 10;

adminpassword.put("/", (req, res) => {
    const password = req.body.password;
    const adminid = req.body.adminid;

    bcrypt.hash(password, saltRounds, (error, hash) => {
        const insertpassword = "update admin set password = ? where adminid = ?";
        db.query(insertpassword, [hash, adminid], (error, result) => {
            res.send(result);
        });
    });
});

module.exports = adminpassword;
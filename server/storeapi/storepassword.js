const express = require("express");
const db = require("../configure/database");
const bcrypt = require("bcrypt");


const storepassword = express.Router();
const saltRounds = 10;

storepassword.put("/", (req, res) => {
    const password = req.body.password;
    const storeid = req.body.storeid;

    bcrypt.hash(password, saltRounds, (error, hash) => {
        const insertpassword = "update store set password = ? where storeid = ?";
        db.query(insertpassword, [hash, storeid], (error, result) => {
            res.send(result);
        });
    });
});

module.exports = storepassword;
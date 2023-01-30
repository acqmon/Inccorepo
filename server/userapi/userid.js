const express = require("express");
const db = require("../configure/database");

const userid = express.Router();

userid.put("/", (req, res) => {
    const updateuser = "update user set userid = concat(id,customid,firstname)";
    db.query(updateuser, (error, result) => {
        res.send(result);
    });
});

module.exports = userid;
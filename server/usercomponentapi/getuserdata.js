const express = require("express");
const db = require("../configure/database");

const getuserdata = express.Router();

getuserdata.post("/", (req, res) => {
    const userid = req.body.userid;
    const insertdata = "select * from user where userid = ?";
    db.query(insertdata, userid, (error, result) => {
        res.send(result);
    });
});

module.exports = getuserdata;
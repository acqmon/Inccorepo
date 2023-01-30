const express = require("express");
const db = require("../configure/database");

const getuserrechargehistory = express.Router();

getuserrechargehistory.post("/", (req, res) => {
    const userid = req.body.userid;
    const insertdata = "select * from history where useridentity = ? and rechtype = 'purchase' order by id desc";
    db.query(insertdata, userid, (error, result) => {
        res.send(result);
    });
});

module.exports = getuserrechargehistory;
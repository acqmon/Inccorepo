const express = require("express");
const db = require("../configure/database");

const getrechargehistorymarketer = express.Router();

getrechargehistorymarketer.post("/", (req, res) => {
    const marketerid = req.body.marketerid;

    const insertdata = "select * from history where useridentity = ? order by id desc";
    db.query(insertdata, marketerid, (error, result) => {
        res.send(result);
    });
});

module.exports = getrechargehistorymarketer;
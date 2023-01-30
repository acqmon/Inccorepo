const express = require("express");
const db = require("../configure/database");

const getuserdiscountamount = express.Router();

getuserdiscountamount.post("/", (req, res) => {
    const userid = req.body.userid;
    const insertdata = "select * from purchasehistory where userid = ? order by id desc";
    db.query(insertdata, userid, (error, result) => {
        res.send(result);
    });
});

module.exports = getuserdiscountamount;
const express = require("express");
const db = require("../configure/database");

const getuserhistory = express.Router();

getuserhistory.post("/", (req, res) => {
    const userid = req.body.userid;
    const insertdata = "select * from calculatediscount where rechtype = 'purchase' and useridentity = ? and purchbalance > 0 ";
    db.query(insertdata, userid, (error, result) => {
        res.send(result);
    });
});

module.exports = getuserhistory;
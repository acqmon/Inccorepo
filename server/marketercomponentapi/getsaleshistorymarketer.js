const express = require("express");
const db = require("../configure/database");

const getsaleshistorymarketer = express.Router();

getsaleshistorymarketer.post("/", (req, res) => {
    const marketerid = req.body.marketerid;

    const insertdata = "select * from purchasehistory where storeid = ? order by id desc";
    db.query(insertdata, marketerid, (error, result) => {
        res.send(result);
    });
});

module.exports = getsaleshistorymarketer;
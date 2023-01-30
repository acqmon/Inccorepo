const express = require("express");
const db = require("../configure/database");

const getmarketerhistory = express.Router();

getmarketerhistory.post("/", (req, res) => {
    const marketerid = req.body.marketerid;
    const insertdata = "select * from calculatediscount where rechtype = 'salesbalance' and useridentity = ? and sellingbalance > 0";
    db.query(insertdata, marketerid, (error, result) => {
        res.send(result);
    });
});

module.exports = getmarketerhistory;
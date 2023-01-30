const express = require("express");
const db = require("../configure/database");

const getstorehistory = express.Router();

getstorehistory.post("/", (req, res) => {
    const storeid = req.body.storeid;
    const insertdata = "select * from calculatediscount where rechtype = 'purchase' and useridentity = ? and purchbalance > 0 ";
    db.query(insertdata, storeid, (error, result) => {
        res.send(result);
    });
});

module.exports = getstorehistory;
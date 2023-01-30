const express = require("express");
const db = require("../configure/database");

const getstoresaleshistory = express.Router();

getstoresaleshistory.post("/", (req, res) => {
    const storeid = req.body.storeid;
    const getdata = "select * from purchasehistory where storeid = ? order by id desc";
    db.query(getdata, storeid, (error, result) => {
        res.send(result);
    });
});

module.exports = getstoresaleshistory;
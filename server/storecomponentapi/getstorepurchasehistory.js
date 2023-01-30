const express = require("express");
const db = require("../configure/database");

const getstorepurchasehistory = express.Router();

getstorepurchasehistory.post("/", (req, res) => {
    const storeid = req.body.storeid;
    const getdata = "select * from purchasehistory where userid = ? order by id desc";
    db.query(getdata, storeid, (error, result) => {
        res.send(result);
    });
});

module.exports = getstorepurchasehistory;
const express = require("express");
const db = require("../configure/database");

const getstorediscounttotal = express.Router();

getstorediscounttotal.post("/", (req, res) => {
    const storeid = req.body.storeid;
    const getdata = "select * from purchasediscountstore where storeid = ?";
    db.query(getdata, storeid, (error, result) => {
        res.send(result);
    });
});

module.exports = getstorediscounttotal;
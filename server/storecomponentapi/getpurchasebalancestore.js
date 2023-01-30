const express = require("express");
const db = require("../configure/database");

const getpurchasebalancestore = express.Router();

getpurchasebalancestore.post("/", (req, res) => {
    const storeid = req.body.storeid;
    const getdata = "select sum(purchbalance) as totalpurchasebalancestore from calculatediscount where rechtype = 'purchase' and purchbalance > 0 and useridentity = ?";
    db.query(getdata, storeid, (error, result) => {
        res.send(result);
    });
});

module.exports = getpurchasebalancestore;
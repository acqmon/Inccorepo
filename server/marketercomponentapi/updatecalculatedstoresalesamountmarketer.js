const express = require("express");
const db = require("../configure/database");

const updatecalculateduserpurchasemarketer = express.Router();

updatecalculateduserpurchasemarketer.put("/", (req, res) => {
    const purchasebalance = req.body.purchasebalance;
    const storeid = req.body.storeid;
    const insertdata = "update calculatediscount set purchbalance = purchbalance - ? where useridentity = ? and purchbalance = ? limit 1";
    db.query(insertdata, [purchasebalance, storeid, purchasebalance], (error, result) => {
        res.send(result);
    });
});

module.exports = updatecalculateduserpurchasemarketer;
const express = require("express");
const db = require("../configure/database");

const updatecalculateduserpurchase = express.Router();

updatecalculateduserpurchase.put("/", (req, res) => {
    const purchasebalance = req.body.purchasebalance;
    const userid = req.body.userid;
    const insertdata = "update calculatediscount set purchbalance = purchbalance - ? where useridentity = ? and purchbalance = ?  limit 1";
    db.query(insertdata, [purchasebalance, userid, purchasebalance], (error, result) => {
        res.send(result);
    });
});

module.exports = updatecalculateduserpurchase;
const express = require("express");
const db = require("../configure/database");

const storerechargesystem = express.Router();

storerechargesystem.post("/", (req, res) => {
    const rechargeamount = req.body.rechargeamount;
    const purchasebalance = req.body.purchasebalance;

    const insertuserrechargeplan = "insert into storetopup (rechargeamount, purchasebalance) values(?,?)";
    db.query(insertuserrechargeplan, [rechargeamount, purchasebalance], (error, result) => {
        res.send(result);
    });
});

module.exports = storerechargesystem;
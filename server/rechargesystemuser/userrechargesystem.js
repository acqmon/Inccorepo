const express = require("express");
const db = require("../configure/database");

const userrechargesystem = express.Router();

userrechargesystem.post("/", (req, res) => {
    const rechargeamount = req.body.rechargeamount;
    const purchasebalance = req.body.purchasebalance;

    const insertuserrechargeplan = "insert into usertopup (rechargeamount, purchasebalance) values(?,?)";
    db.query(insertuserrechargeplan, [rechargeamount, purchasebalance], (error, result) => {
        res.send(result);
    });
});

module.exports = userrechargesystem;
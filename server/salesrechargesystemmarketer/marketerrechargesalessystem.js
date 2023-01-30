const express = require("express");
const db = require("../configure/database");

const marketerrechargesalessystem = express.Router();

marketerrechargesalessystem.post("/", (req, res) => {
    const rechargeamount = req.body.rechargeamount;
    const salesbalance = req.body.salesbalance;
    const discount = req.body.discount;

    const insertmarketerrechargeplan = "insert into marketersalestopup (rechargeamount, salesbalance,discount) values(?,?,?)";
    db.query(insertmarketerrechargeplan, [rechargeamount, salesbalance, discount], (error, result) => {
        res.send(result);
    });
});

module.exports = marketerrechargesalessystem;
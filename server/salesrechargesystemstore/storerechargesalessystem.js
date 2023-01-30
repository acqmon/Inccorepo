const express = require("express");
const db = require("../configure/database");

const storerechargesalessystem = express.Router();

storerechargesalessystem.post("/", (req, res) => {
    const rechargeamount = req.body.rechargeamount;
    const salesbalance = req.body.salesbalance;
    const discount = req.body.discount;

    const insertstorerechargeplan = "insert into storesalestopup (rechargeamount, salesbalance,discount) values(?,?,?)";
    db.query(insertstorerechargeplan, [rechargeamount, salesbalance, discount], (error, result) => {
        res.send(result);
    });
});

module.exports = storerechargesalessystem;
const express = require("express");
const db = require("../configure/database");

const updatecalculatesellingbalancemarketer = express.Router();

updatecalculatesellingbalancemarketer.put("/", (req, res) => {
    const storesales = req.body.storesales;
    const salebalance = req.body.salebalance;
    const marketerid = req.body.marketerid;
    const insertdata = "update calculatediscount set sellingbalance = sellingbalance - ? where useridentity = ? and sellingbalance = ? limit 1";
    db.query(insertdata, [storesales, marketerid, salebalance], (error, result) => {
        res.send(result);
    });
});

module.exports = updatecalculatesellingbalancemarketer;
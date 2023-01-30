const express = require("express");
const db = require("../configure/database");

const updatecalculatedstoresalesamountonemarketer = express.Router();

updatecalculatedstoresalesamountonemarketer.put("/", (req, res) => {
    const salebalance = req.body.salebalance;
    const marketerid = req.body.marketerid;
    const insertdata = "update calculatediscount set sellingbalance = sellingbalance - ? where useridentity = ? and sellingbalance = ? limit 1";
    db.query(insertdata, [salebalance, marketerid, salebalance], (error, result) => {
        res.send(result);
    });
});

module.exports = updatecalculatedstoresalesamountonemarketer;
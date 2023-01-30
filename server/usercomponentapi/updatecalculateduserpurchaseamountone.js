const express = require("express");
const db = require("../configure/database");

const updatecalculateduserpurchaseone = express.Router();

updatecalculateduserpurchaseone.put("/", (req, res) => {
    const salebalance = req.body.salebalance;
    const storeid = req.body.storeid;
    const insertdata = "update calculatediscount set sellingbalance = sellingbalance - ? where useridentity = ? and sellingbalance = ? limit 1";
    db.query(insertdata, [salebalance, storeid, salebalance], (error, result) => {
        res.send(result);
    });
});

module.exports = updatecalculateduserpurchaseone;
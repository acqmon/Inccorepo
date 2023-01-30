const express = require("express");
const db = require("../configure/database");

const updatecalculatesellingbalance = express.Router();

updatecalculatesellingbalance.put("/", (req, res) => {
    const userpurchase = req.body.userpurchase;
    const salebalance = req.body.salebalance;
    const storeid = req.body.storeid;
    const insertdata = "update calculatediscount set sellingbalance = sellingbalance - ? where useridentity = ? and sellingbalance = ? limit 1";
    db.query(insertdata, [userpurchase, storeid, salebalance], (error, result) => {
        res.send(result);
    });
});

module.exports = updatecalculatesellingbalance;
const express = require("express");
const db = require("../configure/database");

const updatecalculatesellingbalanceone = express.Router();

updatecalculatesellingbalanceone.put("/", (req, res) => {
    const updatedpurchaseuserone = req.body.updatedpurchaseuserone;
    const salebalanceone = req.body.salebalanceone;
    const storeid = req.body.storeid;
    const insertdata = "update calculatediscount set sellingbalance = sellingbalance - ? where useridentity = ? and sellingbalance = ? limit 1";
    db.query(insertdata, [updatedpurchaseuserone, storeid, salebalanceone], (error, result) => {
        res.send(result);
    });
});

module.exports = updatecalculatesellingbalanceone;
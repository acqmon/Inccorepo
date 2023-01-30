const express = require("express");
const db = require("../configure/database");

const updatecalculatesellingbalanceonemarketer = express.Router();

updatecalculatesellingbalanceonemarketer.put("/", (req, res) => {
    const updatedsalesstoreone = req.body.updatedsalesstoreone;
    const salebalanceone = req.body.salebalanceone;
    const marketerid = req.body.marketerid;
    const insertdata = "update calculatediscount set sellingbalance = sellingbalance - ? where useridentity = ? and sellingbalance = ? limit 1";
    db.query(insertdata, [updatedsalesstoreone, marketerid, salebalanceone], (error, result) => {
        res.send(result);
    });
});

module.exports = updatecalculatesellingbalanceonemarketer;
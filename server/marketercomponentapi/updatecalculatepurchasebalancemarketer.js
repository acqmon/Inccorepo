const express = require("express");
const db = require("../configure/database");

const updatecalculatepurchasebalancestore = express.Router();

updatecalculatepurchasebalancestore.put("/", (req, res) => {
    const storesales = req.body.storesales;
    const purchasebalance = req.body.purchasebalance;
    const storeid = req.body.storeid;
    const insertdata = "update calculatediscount set purchbalance = purchbalance - ? where useridentity = ? and purchbalance = ? limit 1";
    db.query(insertdata, [storesales, storeid, purchasebalance], (error, result) => {
        res.send(result);
    });
});

module.exports = updatecalculatepurchasebalancestore;
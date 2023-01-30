const express = require("express");
const db = require("../configure/database");

const updatecalculatepurchasebalanceonemarketer = express.Router();

updatecalculatepurchasebalanceonemarketer.put("/", (req, res) => {
    const updatedstoresalesone = req.body.updatedstoresalesone;
    const purchasebalanceone = req.body.purchasebalanceone;
    const storeid = req.body.storeid;
    const insertdata = "update calculatediscount set purchbalance = purchbalance - ? where useridentity = ? and purchbalance = ? limit 1";
    db.query(insertdata, [updatedstoresalesone, storeid, purchasebalanceone], (error, result) => {
        res.send(result);
    });
});

module.exports = updatecalculatepurchasebalanceonemarketer;
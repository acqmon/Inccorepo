const express = require("express");
const db = require("../configure/database");

const updatecalculatepurchasebalanceone = express.Router();

updatecalculatepurchasebalanceone.put("/", (req, res) => {
    const updateduserpurchaseone = req.body.updateduserpurchaseone;
    const purchasebalanceone = req.body.purchasebalanceone;
    const userid = req.body.userid;
    const insertdata = "update calculatediscount set purchbalance = purchbalance - ? where useridentity = ? and purchbalance = ? limit 1";
    db.query(insertdata, [updateduserpurchaseone, userid, purchasebalanceone], (error, result) => {
        res.send(result);
    });
});

module.exports = updatecalculatepurchasebalanceone;
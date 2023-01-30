const express = require("express");
const db = require("../configure/database");

const updatecalculatepurchasebalance = express.Router();

updatecalculatepurchasebalance.put("/", (req, res) => {
    const userpurchase = req.body.userpurchase;
    const purchasebalance = req.body.purchasebalance;
    const userid = req.body.userid;
    const insertdata = "update calculatediscount set purchbalance = purchbalance - ? where useridentity = ? and purchbalance = ?  limit 1" ;
    db.query(insertdata, [userpurchase, userid, purchasebalance], (error, result) => {
        res.send(result);
    });
}); 

module.exports = updatecalculatepurchasebalance;
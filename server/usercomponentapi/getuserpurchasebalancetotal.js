const express = require("express");
const db = require("../configure/database");

const getuserpurchasebalancetotal = express.Router();

getuserpurchasebalancetotal.post("/", (req, res) => {
    const userid = req.body.userid;
    const insertdata = "select sum(purchbalance) as totalpurchbalance from calculatediscount where useridentity = ?";
    db.query(insertdata, userid, (error, result) => {
        res.send(result);
    });
});

module.exports = getuserpurchasebalancetotal;